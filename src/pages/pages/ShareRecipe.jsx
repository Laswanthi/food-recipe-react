
import { useState } from "react";
import "./ShareRecipe.css";

function ShareRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  function handleChange(event) {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const savedRecipes = JSON.parse(
      localStorage.getItem("userRecipes") || "[]"
    );

    // Get logged-in user's details
    let loggedInUser = {};

    try {
      const storedUser = localStorage.getItem("loggedInUser") || "{}";
      const parsedUser = JSON.parse(storedUser);

      loggedInUser =
        typeof parsedUser === "string"
          ? { name: parsedUser }
          : parsedUser;
    } catch {
      loggedInUser = {
        name: localStorage.getItem("loggedInUser") || "User",
      };
    }

    // Create the recipe with its owner's identity
    const newRecipe = {
      ...recipe,
      id: Date.now(),
      submittedBy: loggedInUser.name || loggedInUser.fullName || "User",
      submittedById:
        loggedInUser.id ||
        loggedInUser.userId ||
        loggedInUser.email ||
        loggedInUser.username ||
        loggedInUser.name ||
        loggedInUser.fullName ||
        "User",
      image: "",
    };

    savedRecipes.push(newRecipe);

    localStorage.setItem("userRecipes", JSON.stringify(savedRecipes));

    alert("Your recipe has been shared successfully!");

    setRecipe({
      name: "",
      category: "",
      description: "",
      ingredients: "",
      instructions: "",
    });
  }

  return (
    <div className="share-recipe-page">
      <h1>🍲 Share Your Recipe</h1>
      <p>Share your favourite recipe with the community.</p>

      <form className="share-recipe-form" onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input
          name="name"
          value={recipe.name}
          onChange={handleChange}
          placeholder="Enter recipe name"
          required
        />

        <label>Category</label>
        <select
          name="category"
          value={recipe.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="fastfood">Fast Food</option>
          <option value="dessert">Dessert</option>
          <option value="other">Other</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Describe your recipe"
          required
        />

        <label>Ingredients</label>
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          placeholder="Enter ingredients, one per line"
          required
        />

        <label>Instructions</label>
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          placeholder="Write cooking steps"
          required
        />

        <button type="submit">Share Recipe</button>
      </form>
    </div>
  );
}

export default ShareRecipe;