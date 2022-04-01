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
}) {
  function parsedDate(date) {
    let pdate = new Date(date);
    let month = pdate.getMonth();
    let day = pdate.getDay();
    let year = pdate.getFullYear();
    let hours = pdate.getHours();
    let minutes = pdate.getMinutes();

    switch (month) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "Jun";
        break;
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sept";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
    }

    return `${month} ${day}, ${year}, at: ${hours}:${minutes}`;
  }

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
          Posted: {parsedDate(date)}
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
