import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use hardcoded posts data for testing
  const postsData = [
    { _id: 1, title: 'Post 1', content: 'This is post 1.' },
    { _id: 2, title: 'Post 2', content: 'This is post 2.' },
  ];

  useEffect(() => {
    // Normally, you would fetch the data from the API, but for now, let's use hardcoded data
    setPosts(postsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
