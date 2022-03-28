import React, { useState } from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostPreview({
  title,
  content,
  poster,
  date,
  comments,
  id,
  // setPostID,
  setSelectedPost,
}) {
  function handlePostClick(e) {
    console.log(e.target);
    // setPostID(id);
    // open post page
    // fetch(`/posts/${id}`)
    // .then((resp) => resp.json())
    // .then((post) => {
    // console.log(post);
    // setSelectedPost(post);
    // });
  }
  // const params = useParams();
  // console.log(params);

  return (
    <div className="forum-post-preview">
      <Link to={`/posts/${id}`}>
        <h2 onClick={handlePostClick}>{title}</h2>
      </Link>
      <p className="content-preview">{content}</p>
      <hr />
      <p className="post-stats">
        Posted by: {poster} <br />
        Post created: {date}
        <br />
        💬 {comments} comments
      </p>
    </div>
  );
}

export default PostPreview;
