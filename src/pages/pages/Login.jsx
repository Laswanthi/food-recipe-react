


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const role = localStorage.getItem("authRoleIntent") || "user";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Get registered users from Local Storage
  const registeredUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // Get registered emails for the selected role
  const registeredEmails = [
    ...new Set(
      registeredUsers
        .filter((user) => user.role === role)
        .map((user) => user.email)
    ),
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password &&
        user.role === role
    );

    if (!foundUser) {
      setMessage("Invalid email or password. Please sign up first.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    localStorage.setItem("loggedInRole", role);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div style={styles.container}>
      <form
        style={styles.form}
        onSubmit={handleLogin}
        autoComplete="off"
      >
        <h1>{role === "admin" ? "Admin Login" : "User Login"}</h1>

        {/* Email suggestions from Local Storage */}
        <input
          type="email"
          name="login-email"
          placeholder="Email"
          list="registered-emails"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          autoComplete="off"
          required
        />

        <datalist id="registered-emails">
          {registeredEmails.map((savedEmail) => (
            <option key={savedEmail} value={savedEmail} />
          ))}
        </datalist>

        {/* Password must be entered manually */}
        <input
          type="password"
          name="login-password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          autoComplete="new-password"
          required
        />

        <button type="submit">Login</button>

        {message && <p style={styles.error}>{message}</p>}

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

        <Link to="/">Back to role selection</Link>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff7ed",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  error: {
    color: "red",
  },
};

export default Login;
