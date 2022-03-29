import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Post from "./Post";
import ForumSearch from "./ForumSearch";
import PostTitle from "./PostPreview";
import { v4 as uuidv4 } from "uuid";
import PostPreview from "./PostPreview";

function Forum({ search, filteredReults }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);

  // console.log(filteredReults);

  let searchTerms;
  {
    search === "" ? (searchTerms = posts) : (searchTerms = filteredReults);
  }

  useEffect(() => {
    fetch("/postpreviews")
      .then((r) => r.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  const displayPosts = searchTerms.map((post) => {
    return (
      <PostPreview
        key={uuidv4()}
        id={post.id}
        title={post.title}
        content={post.content.slice(0, 100) + "..."}
        poster={post.poster}
        date={(date = Date(post.created_at))}
        comments={post.comments}
        // setPostID={setPostID}
        setSelectedPost={setSelectedPost}
      />
    );
  });

  function date(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDay();
    const month = date.getUTCMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month}, ${day}, ${year}, ${hours}:${minutes}`;
  }

  return <div className="forum">{displayPosts}</div>;
}

export default Forum;
