import React, { useState } from "react";

function CreateComment() {
  const [comment, setComment] = useState("");

  return (
    <div className="create-comment">
      <form>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
        ></input>
      </form>
    </div>
  );
}

export default CreateComment;
