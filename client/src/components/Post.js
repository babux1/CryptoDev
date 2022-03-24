import React from "react";
import Comment from "./Comment";

function Post() {
  return (
    <div className="Post">
      <h2>Post Title Here</h2>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Post;
