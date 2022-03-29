import React from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
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
