import React, { useState } from "react";

function CreateComment({ post, user }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    // e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
        post_id: post.id,
      }),
    });
    // setContent("");
  }

  return (
    <div className="create-comment">
      <form onSubmit={handleSubmit}>
        <label>
          {/* <h4>Post Comment:</h4> */}
          <input
            className="form-input"
            type="text"
            required={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Leave a comment"
          />
        </label>
        <br />
        <input className="create-post-btn" type="submit" value="Post Comment" />
      </form>
    </div>
  );
}

export default CreateComment;
