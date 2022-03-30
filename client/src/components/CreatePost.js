import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleCreatePost(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: text,
        user: 101,
        forum: 4,
      }),
    });
  }

  return (
    <div>
      <h3>Create Post</h3>
      <form className="create-post-form" onSubmit={handleCreatePost}>
        <input
          type="text"
          required="true"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          required="true"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
        />
        <input className="button" type="submit" value="Create Post" />
      </form>
    </div>
  );
}

export default CreatePost;
