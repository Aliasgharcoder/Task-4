import { NavLink, useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Register.module.css";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    const user = { name, email, password };

    // Save the user in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the Login page after registration
    navigate("/Login");
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.row}>
          <button className={styles.btn} onClick={handleSignUp}>
            Sign Up
          </button>
          <NavLink to="/Login" className={styles.text}>
            Already have an account? Login
          </NavLink>
        </div>
      </form>
    </main>
  );
}
