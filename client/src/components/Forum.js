import React, { useState, useEffect } from "react";
import Post from "./Post";
import ForumSearch from "./ForumSearch";

function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="forum">
      <h2>Solidity Forum</h2>
      <ForumSearch />

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Forum;
