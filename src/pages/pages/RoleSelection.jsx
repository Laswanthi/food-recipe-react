import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem("authRoleIntent", role);
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>🍽️ The Food Recipe</h1>
      <p>Choose how you want to continue</p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h2>👨‍💼 Admin</h2>
          <p>Manage users, recipes, and reviews.</p>
          <button onClick={() => selectRole("admin")}>
            Continue as Admin
          </button>
        </div>

        <div style={styles.card}>
          <h2>👩‍🍳 User</h2>
          <p>Explore recipes and share your favorites.</p>
          <button onClick={() => selectRole("user")}>
            Continue as User
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    background: "#fff7ed",
    color: "#432818",
    padding: "20px",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "25px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    width: "260px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
};

export default RoleSelection;