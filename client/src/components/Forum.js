import React from "react";
import Thread from "./Thread";
import ForumSearch from "./ForumSearch";

function Forum() {
  return (
    <div className="forum">
      Forum component
      <ForumSearch />
      <Thread />
      <Thread />
      <Thread />
    </div>
  );
}

export default Forum;
