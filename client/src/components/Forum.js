import React from "react";
import Post from "./Post";
import ForumSearch from "./ForumSearch";

function Forum() {
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
