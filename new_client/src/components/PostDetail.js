// PostDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h2>{post.title}</h2>
      <div className="post-image">
        <img src={post.image || "https://via.placeholder.com/300"} alt="Post" />
      </div>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
