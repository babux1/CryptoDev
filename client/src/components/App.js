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
      <header>
        <ForumSearch
          search={search}
          setSearch={setSearch}
          setFilteredResults={setFilteredResults}
        />
        <h1>CryptoDev Forum</h1>
        <Login />
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
      {/* <div className="right-column">
        <ForumsList />
      </div> */}
    </div>
  );
}

export default App;
