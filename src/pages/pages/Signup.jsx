
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const role = localStorage.getItem("authRoleIntent") || "user";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const emailExists = registeredUsers.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      setMessage("This email is already registered. Please log in.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
    };

    registeredUsers.push(newUser);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(registeredUsers)
    );

    setMessage("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <div style={styles.container}>
      <form
        style={styles.form}
        onSubmit={handleSignup}
        autoComplete="on"
      >
        <h1>{role === "admin" ? "Admin Signup" : "User Signup"}</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (minimum 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          minLength={6}
          required
        />

        <button type="submit">Create Account</button>

        {message && <p>{message}</p>}

        <p>
          Already have an account? <Link to="/login">Login</Link>
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
};

export default Signup;
