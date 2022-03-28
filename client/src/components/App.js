import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Forum from "./Forum";
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
          <Route path="/" element={<Forum />} />
        </Routes>
      </div>
      {/* <div className="right-column">
        <ForumsList />
      </div> */}
    </div>
  );
}

export default App;
