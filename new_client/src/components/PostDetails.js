// components/PostDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetails.css';
function PostDetails({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p, index) => index.toString() === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="post-details-container">
      <button onClick={handleGoBack} className="back-button">Go Back</button>
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} alt="Blog" className="post-details-image" />}
      <p>{post.description}</p>
    </div>
  );
}

export default PostDetails;
