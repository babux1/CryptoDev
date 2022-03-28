import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import Login from "./Login";
import LoginPage from "./LoginPage"
import Forum from "./Forum";
import Post from "./Post";
import ForumsList from "./ForumsList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>CryptoDev Forum</h1>
        <Login />
      </header>
      <Nav />

      <div className="left-column">
        <Routes>
          <Route path="/" element={<Forum />}></Route>
          <Route path="posts/:id" element={<Post />} />
        </Routes>
      </div>

      <div>
      <Routes>
      <Route path = "loginpage" element = {<LoginPage />}/>
      </Routes>
      </div>
      {/* <div className="right-column">
        <ForumsList />
      </div> */}

    </div>
  );
}

export default App;
