import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post({ id, title, content }) {
  const [post, setPost] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        setPost(posts);
      });
  }, []);

  return (
    <div className="forum-post-preview">
      {/* {onRender()} */}
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CreateComment />
    </div>
  );
}

export default Post;
