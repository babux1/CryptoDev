import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

function PostPreview({
  title,
  content,
  poster,
  date,
  comments,
  id,
  setPostID,
  handlePostClick,
}) {
  function handlePostClick(e) {
    console.log(e.target);
    setPostID(id);
    // open post page
  }
  // const params = useParams();
  // console.log(params);

  return (
    <div className="forum-post-preview">
      {/* <NavLink to="/posts/:id"> */}

      {/* <Routes> */}
      {/* <Route path="/posts/:id"> */}
      <h2 onClick={handlePostClick}>{title}</h2>
      {/* </Route> */}
      {/* </Routes> */}

      {/* </NavLink> */}

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
