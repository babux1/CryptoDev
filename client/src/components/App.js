import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
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
    </div>
  );
}

export default App;
