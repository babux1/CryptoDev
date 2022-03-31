import React from "react";

function Comment({ content, user, date, avatar }) {
  return (
    <div className="comment">
      <div className="avatar-display">
        <img src={avatar} alt={user} />
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
          <br />
          ________
          <br />
          <span className="date">
            Posted: {date.slice(0, 10)}, at {date.slice(11, 16)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Comment;
