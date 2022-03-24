import React from "react";
import Post from "./Post";
import ForumSearch from "./ForumSearch";

function Forum() {
  return (
    <div className="forum">
      Forum component
      <ForumSearch />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Forum;
