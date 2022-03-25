import React from "react";

function PostPreview({
  title,
  content,
  poster = "Don",
  date = Date.now(),
  comments = 0,
}) {
  return (
    <div className="forum-post-preview">
      <h2>{title}</h2>
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
