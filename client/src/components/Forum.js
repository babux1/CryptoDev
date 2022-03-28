import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Post from "./Post";
import ForumSearch from "./ForumSearch";
import PostTitle from "./PostPreview";
import { v4 as uuidv4 } from "uuid";
import PostPreview from "./PostPreview";

function Forum() {
  const [posts, setPosts] = useState([]);
  // const [postID, setPostID] = useState();
  const [selectedPost, setSelectedPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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
  const displayedPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  const displayPosts = posts.map((post) => {
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
        posts={displayedPosts}
      />
    );
  });

  return (
    <div className="forum">
      <h2>Solidity Forum</h2>
      <ForumSearch searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      {displayPosts}
      {/* {displayedPosts} */}
    </div>
  );
}

export default Forum;
