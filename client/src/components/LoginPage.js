import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setUser(user);
        });
      }
    });
    navigate("/");
  }

  return (
    <div className="form">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <h3>Username</h3>
        </label>
        <input
          className="form-input"
          required={true}
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">
          <h3>Password</h3>
        </label>
        <input
          className="form-input"
          required={true}
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <input className="create-post-btn" type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default LoginPage;
