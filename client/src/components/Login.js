import React from "react";
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";

function Login() {

  return (
    <Link to="/loginpage">
     <button type="button">
          Login
     </button>
    </Link>
    
  )
  
}

export default Login;
