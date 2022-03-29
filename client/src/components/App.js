import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ForumSearch from "./ForumSearch";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Login from "./Login";
import LoginPage from "./LoginPage";
import Forum from "./Forum";
import Post from "./Post";
import ForumsList from "./ForumsList";

function App() {
  const [search, setSearch] = useState("");
  const [filteredReults, setFilteredResults] = useState([]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-1-c">CryptoDev Forum</h1>
        <ForumSearch
          className="header-2-c"
          search={search}
          setSearch={setSearch}
          setFilteredResults={setFilteredResults}
        />
        <Login className="header-3c" />
      </header>
      <Nav />

      <div className="left-column">
        <Routes>
          <Route
            path="/"
            element={<Forum search={search} filteredReults={filteredReults} />}
          ></Route>
          <Route path="posts/:id" element={<Post />} />
        </Routes>
      </div>

      <div>
        <Routes>
          <Route path="loginpage" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
