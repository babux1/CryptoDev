import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
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
          id="username"
          autoComplete="off"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">
          <h3>Email</h3>
        </label>
        <input
          className="form-input"
          type="email"
          required={true}
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="password">
          <h3>Password</h3>
        </label>
        <input
          className="form-input"
          required={true}
          type="password"
          id="password"
          value={password}
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="avatar">
          <h3>Enter Avatar URL</h3>
          <input
            className="form-input"
            required={true}
            type="text"
            id="avatarURL"
            value={avatarURL}
            placeholder="Avatar URL"
            onChange={(e) => setAvatarURL(e.target.value)}
          />
        </label>
        <input className="button" type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default SignUpForm;
