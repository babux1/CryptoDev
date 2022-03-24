import React from "react";
import Comment from "./Comment";

function Thread() {
  return (
    <div className="thread">
      <h2>Thread Title Here</h2>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Thread;
