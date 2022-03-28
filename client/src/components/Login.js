import React from "react";
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";

function Login() {

  return (
    <div>
      <Link to="/loginpage">
      <button type="button">
            Logout
      </button>
      </Link>
      <Link to="/">
      <button type="button">
            Login
      </button>
      </Link>
    </div>
  )
  
}

export default Login;
