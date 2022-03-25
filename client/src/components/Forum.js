import React, { useState, useEffect } from "react";
import Post from "./Post";
import ForumSearch from "./ForumSearch";
import PostTitle from "./PostPreview";
import { v4 as uuidv4 } from "uuid";

function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/postpreviews")
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  function date(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDay();
    const month = date.getUTCMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month}, ${day}, ${year}, ${hours}:${minutes}`;
  }

  const displayPosts = posts.map((post) => {
    return (
      <PostTitle
        key={uuidv4()}
        title={post.title}
        content={post.content.slice(0, 100) + "..."}
        poster={post.poster}
        date={(date = Date(post.created_at))}
        comments={post.comments}
      />
    );
  });

  return (
    <div className="forum">
      <h2>Solidity Forum</h2>
      <ForumSearch />
      {displayPosts}
    </div>
  );
}

export default Forum;
