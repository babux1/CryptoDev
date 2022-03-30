import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form">
      <form className="create-post-form">
        <input
          className="form-input"
          type="text"
          required="true"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="form-input"
          type="password"
          required="true"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <input className="login-btn" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
