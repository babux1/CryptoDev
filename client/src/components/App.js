import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ForumSearch from "./ForumSearch";
import Nav from "./Nav";

import Login from "./Login";
import LoginPage from "./LoginPage";
import Forum from "./Forum";
import Post from "./Post";

function App() {
  // const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredReults, setFilteredResults] = useState([]);

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;

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
