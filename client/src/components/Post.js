import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post({ user }) {
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [params.id]);

  const renderComments = post.comments?.map((comment) => {
    const user = post.users.find((user) => comment.user_id === user.id);
    return (
      <Comment
        key={comment.id}
        avatar={user.avatar_url}
        content={comment.content}
        user={user.username}
        date={user.created_at}
      />
    );
  });

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
    <div className="post">
      <h2 className="h2-bar">{post.title}</h2>

      <div className="comment">
        <div className="avatar-display">
          <img src={post.user?.avatar_url} alt={post.user?.username} />
          <p className="post-stats">
            <strong>Posted by:</strong>
            <br />
            {post.user?.username}
          </p>
        </div>
        <div className="comment-content">
          <p>
            {post.content}
            <br />
            ____
            <br />
            <span className="date">{parsedDate(post.user?.created_at)}</span>
          </p>
        </div>
      </div>
      {renderComments}
      <br />
      <CreateComment post={post} user={user} />
    </div>
  );
}

export default Post;
