import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import Login from "./Login";
import LoginPage from "./LoginPage"
import Forum from "./Forum";
import ForumsList from "./ForumsList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <h1>CryptoDev Forum</h1>
      <div className="left-column">
        <Forum />
      </div>
      <div>
      <div>
      <Routes>
      <Route path = "loginpage" element = {<LoginPage />}/>
      </Routes>
      </div>
      </div>
      {/* <div className="right-column">
        <ForumsList />
      </div> */}
    </div>
  );
}

export default App;
