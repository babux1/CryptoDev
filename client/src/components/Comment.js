import React from "react";

function Comment({ content, user, date, avatar }) {
  return (
    <div className="comment">
      <div className="avatar-display">
        <img src={avatar} />
        <p className="post-stats">
          <strong>User:</strong>
          <br />
          {user}
          <br />
        </p>
      </div>
      <div className="comment-content">
        <p>
          {content}
          <hr />
          <span className="date">Date posted: {date}</span>
        </p>
      </div>
    </div>
  );
}

export default Comment;
