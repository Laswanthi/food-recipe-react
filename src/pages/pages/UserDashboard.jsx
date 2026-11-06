import { useMemo, useState } from "react";
import recipes from "../../data/recipes";
import "./UserDashboard.css";

// Get the logged-in user's details
function getLoggedInUser() {
  try {
    const storedUser = localStorage.getItem("loggedInUser") || "{}";
    const user = JSON.parse(storedUser);

    return typeof user === "string" ? { name: user } : user;
  } catch {
    return {
      name: localStorage.getItem("loggedInUser") || "",
    };
  }
}

// Get a unique identity for the logged-in user
function getUserIdentity(user) {
  return (
    user.id ||
    user.userId ||
    user.email ||
    user.username ||
    user.name ||
    user.fullName ||
    ""
  );
}

// Check whether a shared recipe belongs to the logged-in user
function isOwnRecipe(recipe, currentUser) {
  const currentIdentity = String(getUserIdentity(currentUser))
    .toLowerCase()
    .trim();

  if (!currentIdentity) return false;

  // New recipes use submittedById
  if (recipe.submittedById) {
    return (
      String(recipe.submittedById).toLowerCase().trim() ===
      currentIdentity
    );
  }

  // Support older recipes where submittedBy contains user details
  if (recipe.submittedBy && typeof recipe.submittedBy === "object") {
    const ownerIdentity = getUserIdentity(recipe.submittedBy);

    return (
      String(ownerIdentity).toLowerCase().trim() === currentIdentity
    );
  }

  // Support older recipes where submittedBy contains JSON text
  if (typeof recipe.submittedBy === "string") {
    try {
      const oldUser = JSON.parse(recipe.submittedBy);

      if (typeof oldUser === "object" && oldUser !== null) {
        const ownerIdentity = getUserIdentity(oldUser);

        return (
          String(ownerIdentity).toLowerCase().trim() === currentIdentity
        );
      }
    } catch {
      // It is a plain name rather than JSON
    }

    // Fallback for older recipes saved with only the user's name
    const ownerName = recipe.submittedBy.toLowerCase().trim();
    const currentName = String(
      currentUser.name || currentUser.fullName || ""
    )
      .toLowerCase()
      .trim();

    return ownerName !== "" && ownerName === currentName;
  }

  return false;
}

function UserDashboard() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
  });

  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [userRecipes, setUserRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("userRecipes") || "[]");
  });

  const currentUser = getLoggedInUser();

  // Original recipes only
  const allRecipes = recipes;

  const categories = [
    "all",
    ...new Set(allRecipes.map((recipe) => recipe.category)),
  ];

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      const matchesSearch = recipe.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        recipe.category === selectedCategory;

      const matchesFavorites =
        !showFavorites || favorites.includes(recipe.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [search, selectedCategory, showFavorites, favorites]);

  function toggleFavorite(recipeId) {
    const updatedFavorites = favorites.includes(recipeId)
      ? favorites.filter((id) => id !== recipeId)
      : [...favorites, recipeId];

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favoriteRecipes",
      JSON.stringify(updatedFavorites)
    );
  }

  function deleteRecipe(recipeId) {
    const recipeToDelete = userRecipes.find(
      (recipe) => recipe.id === recipeId
    );

    if (!recipeToDelete || !isOwnRecipe(recipeToDelete, currentUser)) {
      alert("You can delete only your own shared recipes.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) return;

    const updatedRecipes = userRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );

    setUserRecipes(updatedRecipes);

    localStorage.setItem(
      "userRecipes",
      JSON.stringify(updatedRecipes)
    );

    if (selectedRecipe && selectedRecipe.id === recipeId) {
      setSelectedRecipe(null);
    }

    alert("Your recipe has been deleted successfully!");
  }

  function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInRole");
    window.location.href = "/login";
  }

  return (
    <div className="user-dashboard">
      <header className="user-header">
        <div className="user-logo">🍴 The Food Recipe</div>

        <div className="user-header-actions">
          <button
            className="favorites-toggle"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            ❤️ Favorites ({favorites.length})
          </button>

          <button
            className="share-recipe-button"
            onClick={() => (window.location.href = "/share-recipe")}
          >
            ➕ Share Recipe
          </button>

          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <section className="recipe-hero">
        <h1>Discover Delicious Recipes</h1>
        <p>Find your next favourite meal and enjoy cooking!</p>

        <input
          type="text"
          className="recipe-search"
          placeholder="Search recipes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      {/* Original Recipes */}
      <section className="recipe-section">
        <div className="recipe-section-heading">
          <h2>{showFavorites ? "Your Favorites" : "Explore Recipes"}</h2>
          <span>{filteredRecipes.length} recipes</span>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all"
                ? "All Recipes"
                : category.replace(/^\w/, (letter) =>
                    letter.toUpperCase()
                  )}
            </button>
          ))}
        </div>

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <article className="recipe-card" key={recipe.id}>
              <div className="recipe-image-container">
                {recipe.image ? (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipe-image"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/600x400?text=Recipe+Image";
                    }}
                  />
                ) : (
                  <div className="recipe-image-placeholder">
                    🍲
                  </div>
                )}

                <button
                  className={
                    favorites.includes(recipe.id)
                      ? "favorite-button selected"
                      : "favorite-button"
                  }
                  aria-label="Toggle favorite"
                  onClick={() => toggleFavorite(recipe.id)}
                >
                  {favorites.includes(recipe.id) ? "❤️" : "🤍"}
                </button>
              </div>

              <div className="recipe-card-content">
                <span className="recipe-category">
                  {recipe.category}
                </span>

                <h3>{recipe.name}</h3>

                <button
                  className="view-recipe-button"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <p className="no-recipes">No recipes found.</p>
        )}
      </section>

      {/* Shared Recipes - Details Only, No Pictures */}
      <section className="recipe-section">
        <div className="recipe-section-heading">
          <h2>Shared Recipes</h2>
          <span>{userRecipes.length} recipes</span>
        </div>

        <div className="recipe-grid">
          {userRecipes.map((recipe) => (
            <article
              className="recipe-card shared-recipe-card"
              key={recipe.id}
            >
              <div className="recipe-card-content">
                <span className="recipe-category">
                  {recipe.category}
                </span>

                <h3>{recipe.name}</h3>

                <p>
                  {recipe.description || "No description provided."}
                </p>

                <button
                  className="view-recipe-button"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Details
                </button>

                {isOwnRecipe(recipe, currentUser) && (
                  <button
                    className="delete-recipe-button"
                    onClick={() => deleteRecipe(recipe.id)}
                  >
                    🗑️ Delete Recipe
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {userRecipes.length === 0 && (
          <p className="no-recipes">No shared recipes yet.</p>
        )}
      </section>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div
          className="recipe-modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="recipe-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-modal-button"
              onClick={() => setSelectedRecipe(null)}
            >
              ✕
            </button>

            {/* Show images only for original recipes */}
            {!userRecipes.some(
              (recipe) => recipe.id === selectedRecipe.id
            ) &&
              selectedRecipe.image && (
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="modal-recipe-image"
                />
              )}

            <h2>{selectedRecipe.name}</h2>

            <p className="modal-category">
              Category: {selectedRecipe.category}
            </p>

            {selectedRecipe.description && (
              <p>{selectedRecipe.description}</p>
            )}

            <h3>Ingredients</h3>

            {selectedRecipe.ingredients ? (
              <ul>
                {selectedRecipe.ingredients
                  .split("\n")
                  .map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            ) : (
              <p>Ingredients are not available.</p>
            )}

            <h3>Cooking Process</h3>

            {selectedRecipe.instructions ? (
              <div className="recipe-instructions">
                {selectedRecipe.instructions
                  .split("\n")
                  .map((step, index) => (
                    <p key={index}>{step}</p>
                  ))}
              </div>
            ) : (
              <p>Cooking process is not available.</p>
            )}

            {/* Shared by details removed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;

