import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <br></br>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default LoginPage;