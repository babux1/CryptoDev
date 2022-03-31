import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PostPreview from "./PostPreview";

function Forum({ search, filteredReults, posts, setPosts }) {
  // const [posts, setPosts] = useState([]);
  let searchTerms;
  {
    search === "" ? (searchTerms = posts) : (searchTerms = filteredReults);
  }

  useEffect(() => {
    fetch("/postpreviews")
      .then((r) => r.json())
      .then((posts) => {
        // console.log(posts);
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
        avatarURL={post.avatar_url ? post.avatar_url : post.user?.avatar_url}
        poster={post.poster}
        date={post.date}
        comments={post.comments}
      />
    );
  });

  return (
    <div className="forum">
      <div className="create-post">
        <Link to={"/createpost"}>
          <button className="create-post-btn">Create Post</button>
        </Link>
      </div>
      {displayPosts}
      <Link to={"/createpost"}>
        <button className="create-post-btn">Create Post</button>
      </Link>
    </div>
  );
}

export default Forum;
