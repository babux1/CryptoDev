import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ForumSearch from "./ForumSearch";
import Nav from "./Nav";
import LoginPage from "./LoginPage";
import Forum from "./Forum";
import Post from "./Post";
import CreatePost from "./CreatePost";
import SignUpForm from "./SignupForm";

function App() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [filteredReults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user);

  if (!user) return <LoginPage onLogin={setUser} />;

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
        <Link to="/loginpage">
          <button className="login-btn">{user ? "Login" : "Logout"}</button>
        </Link>
        <Link to="/signupform">
          <button className="login-btn">Signup</button>
        </Link>
      </header>
      <Nav />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Forum search={search} filteredReults={filteredReults} />}
          ></Route>
          <Route path="posts/:id" element={<Post user={user} />} />
          <Route path="createpost" element={<CreatePost user={user} />} />
        </Routes>
      </div>

      <div>
        <Routes>
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="signupform" element={<SignUpForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
