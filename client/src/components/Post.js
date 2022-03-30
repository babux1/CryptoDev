import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post() {
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
        <p>{post.content}</p>
        {/* <p className="post-stats">Post created by: {post.user.username}</p> */}
      </div>
      {renderComments}
      <br />
      <CreateComment post={post} />
    </div>
  );
}

export default Post;
