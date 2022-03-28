import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import Login from "./Login";
import LoginPage from "./LoginPage"
import Forum from "./Forum";
import Post from "./Post";
import ForumsList from "./ForumsList";

function App() {

  const [logout, setLogout] = useState("")

  function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setLogout());
      }
    
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then(r => {
      if(r.ok) {
        r.json().then(user => setUser(user))
      }
    });
  }, []);

  if(user) {

  return (

    <div className="App">
      <header>
        <h1>CryptoDev Forum</h1>
        <h2>Welcome, {user.username}!</h2>;
        <Login />
        <header>
          <button onClick={handleLogout}>Logout</button>
        </header>
      </header>
      <Nav />

      <div className="left-column">
        <Routes>
          <Route path="/" element={<Forum />}/>
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
  else {
    return <LoginPage onLogin = {setUser} />
  }
}

export default App;
