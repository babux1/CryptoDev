import React from "react";
import { Link } from "react-router-dom";

function PostPreview({
  title,
  content,
  poster,
  avatarURL,
  date,
  comments,
  id,
  // setSelectedPost,
}) {
  function handlePostClick(e) {
    console.log(e.target);
    // setPostID(id);
    // open post page
    // fetch(`/posts/${id}`)
    // .then((resp) => resp.json())
    // .then((post) => {
    // console.log(post);
    // setSelectedPost(post);
    // });
  }
  // const params = useParams();
  // console.log(params);

  return (
    <div className="forum-post-preview">
      <div className="avatar-display">
        <img src={avatarURL} alt="{poster}" />
        <p>
          <span className="username-font">
            <strong>Posted by:</strong>
            <br />
            {poster}
          </span>
        </p>
      </div>
      <div className="content-preview">
        <Link to={`/posts/${id}`}>
          <h2 onClick={handlePostClick}>{title}</h2>
        </Link>
        {content}

        <p className="post-stats">
          💬 {comments} comments
          <br />
          Post created: {date}
        </p>
      </div>
    </div>
  );
}

export default PostPreview;
