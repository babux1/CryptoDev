import React from "react";
import { Link } from "react-router-dom";

function PostPreview({
  title,
  content,
  poster,
  avatarURL,
  date,
  comments,
  id,
  // setSelectedPost,
}) {
  return (
    <div className="forum-post-preview">
      <div className="avatar-display">
        <img src={avatarURL} alt="{poster}" />
        <p>
          <span className="username-font">
            <strong>Posted by:</strong>
            <br />
            {poster}
          </span>
        </p>
      </div>
      <div className="content-preview">
        <Link to={`/posts/${id}`}>
          <h2>{title}</h2>
        </Link>
        {content}

        <p className="post-stats date">
          💬 {comments} comments
          <br />
          Posted: {date.slice(0, 10)}, at {date.slice(11, 19)}
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
