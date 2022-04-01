import React from "react";

function Comment({ content, user, date, avatar }) {
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
          <span className="date">{parsedDate(date)}</span>
        </p>
      </div>
    </div>
  );
}

export default Comment;
