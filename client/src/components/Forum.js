import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PostPreview from "./PostPreview";

function Forum({ search, filteredReults }) {
  const [posts, setPosts] = useState([]);
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
        avatarURL={post.avatar_url}
        poster={post.poster}
        date={post.date}
        comments={post.comments}
        // setPostID={setPostID}
        // setSelectedPost={setSelectedPost}
      />
    );
  });

  function handleCreatePost(e) {
    console.log(e.target);
    // fetch POST post/create
  }

  return (
    <div className="forum">
      <div className="create-post">
        <Link to={"/createpost"}>
          <button className="create-post-btn" onClick={handleCreatePost}>
            Create Post
          </button>
        </Link>
      </div>
      {displayPosts}
    </div>
  );
}

export default Forum;
