import React from "react";

function Comment({ content, user, date }) {
  return (
    <div className="comment">
      <p>{content}</p>
      <p className="post-stats">Posted by: {user}</p>
      <p className="post-stats">{date}</p>
    </div>
  );
}

export default Comment;
