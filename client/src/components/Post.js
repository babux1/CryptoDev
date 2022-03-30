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
            ________
            <br />
            <span className="date">Date posted: {post.user?.created_at}</span>
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
