import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ user, setPosts }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [post, setPost] = useState({});

  const navigate = useNavigate();

  function handleCreatePost(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: text,
        user_id: user.id,
        forum_id: 1,
      }),
    })
      .then((resp) => resp.json())
      .then((post) => {
        console.log(post);
        setPost(post);
      });
    navigate("/");
  }

  return (
    <div className="form">
      <h3>Create Post</h3>
      <form className="create-post-form" onSubmit={handleCreatePost}>
        <input
          className="form-input"
          type="text"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          className="form-input"
          type="text"
          required={true}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
        />
        <input className="create-post-btn btn-text" type="submit" value="Create Post" />
      </form>
    </div>
  );
}

export default CreatePost;
