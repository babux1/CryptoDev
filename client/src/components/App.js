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

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser(null));
      }
    });
  }

  console.log(user);

  // if (!user) return <LoginPage onLogin={setUser} />;

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <a href="/">
            <h1>CryptoDev Forum</h1>
          </a>

          <ForumSearch
            search={search}
            setSearch={setSearch}
            setFilteredResults={setFilteredResults}
          />
        </div>
        <div className="header-right">
          <div className="btn-wrapper">
            <Link to="/loginpage">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/loginpage">
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
            <Link to="/signupform">
              <button className="login-btn">Signup</button>
            </Link>
          </div>
          <p className="user-profile">
            {user.username ? (
              <p>
                <span classname="header-user">Welcome, {user.username}!</span>
              </p>
            ) : null}
          </p>
        </div>
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
