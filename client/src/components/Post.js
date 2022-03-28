import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post({ id, title, content }) {
  const [post, setPost] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then((posts) => {
        setPost(posts);
      });
  }, []);

  console.log(post);

  const renderComments = post.comments?.map((comment) => {
    const user = post.users.find((user) => comment.user_id == user.id);
    return (
      <Comment
        key={comment.id}
        content={comment.content}
        user={user.username}
        date={user.created_at}
      />
    );
  });


  // post.comments.map((comment) => console.log(comment));

  return (
    <div className="forum-post-preview">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {renderComments}
      <br />
      <CreateComment />
    </div>
  );
}

export default Post;
