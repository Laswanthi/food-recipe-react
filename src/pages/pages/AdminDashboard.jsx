import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [sharedRecipes, setSharedRecipes] = useState([]);
  const [activities, setActivities] = useState([]);

  function loadAdminData() {
    setUsers(JSON.parse(localStorage.getItem("registeredUsers") || "[]"));
    setSharedRecipes(JSON.parse(localStorage.getItem("userRecipes") || "[]"));
    setActivities(JSON.parse(localStorage.getItem("activities") || "[]"));
  }

  useEffect(() => {
    loadAdminData();
  }, []);

  function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInRole");
    window.location.href = "/login";
  }

  function deleteUser(email) {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h2>🍴 The Food Recipe — Admin</h2>
        <button onClick={logout}>Logout</button>
      </header>

      <main className="admin-main">
        <h1>Admin Dashboard</h1>
        <p>Manage and monitor your recipe website.</p>

        <section className="admin-stats">
          <div className="admin-stat-card">
            <span>👥</span>
            <h3>Total Users</h3>
            <strong>{users.filter((user) => user.role === "user").length}</strong>
          </div>

          <div className="admin-stat-card">
            <span>🍲</span>
            <h3>Shared Recipes</h3>
            <strong>{sharedRecipes.length}</strong>
          </div>

          <div className="admin-stat-card">
            <span>📊</span>
            <h3>Activities</h3>
            <strong>{activities.length}</strong>
          </div>
        </section>

        <section className="admin-section">
          <div className="admin-section-heading">
            <h2>Registered Users</h2>
            <button onClick={loadAdminData}>Refresh</button>
          </div>

          {users.length === 0 ? (
            <p>No registered users yet.</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.email || index}>
                      <td>{user.name || "—"}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        {user.role !== "admin" && (
                          <button
                            className="delete-user-button"
                            onClick={() => deleteUser(user.email)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin-section">
          <h2>Recently Shared Recipes</h2>

          {sharedRecipes.length === 0 ? (
            <p>No user-shared recipes yet.</p>
          ) : (
            <div className="shared-recipe-list">
              {sharedRecipes.map((recipe) => (
                <div className="shared-recipe-item" key={recipe.id}>
                  <strong>{recipe.name}</strong>
                  <span>{recipe.category || "Uncategorized"}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="admin-section">
          <h2>Recent Activities</h2>

          {activities.length === 0 ? (
            <p>No activities recorded yet.</p>
          ) : (
            <ul className="activity-list">
              {activities.slice(-10).reverse().map((activity, index) => (
                <li key={activity.id || index}>
                  {activity.message || activity.description || JSON.stringify(activity)}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;