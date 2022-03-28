import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post({ id }) {
  const params = useParams();

  function onRender() {
    fetch(`/posts/${id}`)
      .then((resp) => resp.json())
      .then((comment) => {
        console.log(comment);
      });
  }
  console.log(id);
  return (
    <div className="forum-post-preview">
      <h2>Post Title Here</h2>
      <Comment />
      <Comment />
      <Comment />
      <CreateComment />
    </div>
  );
}

export default Post;
