import React, { useState } from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }
  return (
    <div className="login">
      {/* <LoginPage /> */}

      <Link to="/loginpage">
        <button className="login-btn" type="button">
          Login
        </button>
      </Link>
      <Link to="/">
        <button className="login-btn" type="button">
          Logout
        </button>
      </Link>
    </div>
  );
}

export default Login;
