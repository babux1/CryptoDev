import React from "react";
import Nav from "./Nav";
import Login from "./Login";
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
      <div className="right-column">
        <ForumsList />
      </div>
    </div>
  );
}

export default App;
