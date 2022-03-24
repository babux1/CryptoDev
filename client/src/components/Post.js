import React from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post() {
  return (
    <div className="post">
      <h2>Post Title Here</h2>
      <Comment />
      <Comment />
      <Comment />
      <CreateComment />
    </div>
  );
}

export default Post;
