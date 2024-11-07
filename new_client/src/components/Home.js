// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const Home = () => {
// // // // // //   const [posts, setPosts] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchPosts = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get('http://localhost:5000/api/posts');
// // // // // //         setPosts(response.data);
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching posts', error);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchPosts();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="home-container">
// // // // // //       <h1>Blog Posts</h1>
// // // // // //       {posts.length === 0 ? (
// // // // // //         <p>No blog posts available</p>
// // // // // //       ) : (
// // // // // //         <div className="posts-list">
// // // // // //           {posts.map((post) => (
// // // // // //             <div key={post._id} className="post-card">
// // // // // //               <h2>{post.title}</h2>
// // // // // //               <img src={`http://localhost:5000/${post.image}`} alt={post.title} width="300" />
// // // // // //               <p>{post.description}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;


// // // // // // import React, { useState } from 'react';
// // // // // // import PostBlog from './PostBlog'; // Ensure this import is correct

// // // // // // const Home = () => {
// // // // // //   const [posts, setPosts] = useState([]);

// // // // // //   // Function to add a new post
// // // // // //   const addPost = (post) => {
// // // // // //     setPosts([...posts, post]);
// // // // // //   };

// // // // // //   // Function to remove a post by its index
// // // // // //   const removePost = (index) => {
// // // // // //     setPosts(posts.filter((_, i) => i !== index));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Home</h2>
// // // // // //       {/* Pass addPost as onAddPost prop to PostBlog */}
// // // // // //       <PostBlog onAddPost={addPost} />
// // // // // //       <div>
// // // // // //         {posts.map((post, index) => (
// // // // // //           <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
// // // // // //             <h3>{post.title}</h3>
// // // // // //             <p>{post.description}</p>
// // // // // //             {post.image && <img src={URL.createObjectURL(post.image)} alt={post.title} width="100" />}
// // // // // //             <button onClick={() => removePost(index)}>Remove</button>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;




// // // // // // // Home.js
// // // // // // import React from 'react';

// // // // // // function Home({ posts }) {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Blog Posts</h2>
// // // // // //       {posts.map((post, index) => (
// // // // // //         <div key={index}>
// // // // // //           <h3>{post.title}</h3>
// // // // // //           <p>{post.content}</p>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Home;



// // // // // // Home.js
// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';

// // // // // function Home({ posts }) {
// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       <h2>Blog Posts</h2>
// // // // //       <div className="posts-grid">
// // // // //         {posts.map((post, index) => (
// // // // //           <div key={index} className="post-preview">
// // // // //             <div className="image-placeholder"> {/* Placeholder for image */}
// // // // //               <img src={post.image || "https://via.placeholder.com/150"} alt="Post" />
// // // // //             </div>
// // // // //             <div className="text-content">
// // // // //               <h3>{post.title}</h3>
// // // // //               <p>{post.content.slice(0, 100)}...</p>
// // // // //               <Link to={`/post/${index}`} className="read-more">Read More</Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Home;



// // // // import React from 'react';

// // // // function Home({ posts }) {
// // // //   return (
// // // //     <div className="home-container">
// // // //       <h1>Blog Posts</h1>
// // // //       {posts.map((post, index) => (
// // // //         <div key={index} className="post-container">
// // // //           <h3>{post.title}</h3>
// // // //           {post.image && (
// // // //             <img
// // // //               src={post.image}
// // // //               alt="Blog"
// // // //               className="post-image"
// // // //             />
// // // //           )}
// // // //           <p>{post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description}</p>
// // // //           <button>Read More</button>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Home;


// // // // components/Home.js
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // function Home({ posts }) {
// // //   return (
// // //     <div className="home-container">
// // //       <h1>Blog Posts</h1>
// // //       {posts.map((post, index) => (
// // //         <div key={index} className="post-container">
// // //           <h3>{post.title}</h3>
// // //           {post.image && <img src={post.image} alt="Blog" className="post-image" />}
// // //           <p>{post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description}</p>
// // //           <Link to={`/posts/${index}`}>
// // //             <button>Read More</button>
// // //           </Link>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // // components/Home.js
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Home({ posts }) {
// //   return (
// //     <div className="home-container">
// //       <h1>Blog Posts</h1>
// //       {posts.map((post, index) => (
// //         <div key={index} className="post-container">
// //           <h3>{post.title}</h3>
// //           {post.image && <img src={post.image} alt="Blog" className="post-preview-image" />}
// //           <p>{post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description}</p>
// //           <Link to={`/posts/${index}`}>
// //             <button className="read-more-button">Read More</button>
// //           </Link>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Home;



// // components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// function Home({ posts }) {
//   return (
//     <div className="home-container">
//       <h1>Blog Posts</h1>
//       {posts.map((post, index) => (
//         <div key={index} className="post-container">
//           <h3>{post.title}</h3>
//           {post.image && <img src={post.image} alt="Blog" className="post-preview-image" />}  {/* Ensure image is here */}
//           <p>{post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description}</p>
//           <Link to={`/posts/${index}`}>
//             <button className="read-more-button">Read More</button>
//           </Link>
//         </div>
//       ))}

//     <footer className="footer">
//       <p>&copy; 2023 Blog. All rights reserved.</p>
//     </footer>
//     </div>
//   );

// }



// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ posts }) {
  return (
    <div className="home-container">
      <h1>Blogs</h1>

      {/* Static Post Containers */}
      <div className="post-container">
        <h3>Static Post 1</h3>
        <img src="static-image1.jpg" alt="Static Blog 1" className="post-preview-image" />
        <p>This is a description for the first static post. It’s always visible regardless of other posts.</p>
        <Link to="#">
          <button className="read-more-button">Read More</button>
        </Link>
      </div>
      
      <div className="post-container">
        <h3>Static Post 2</h3>
        <img src="static-image2.jpg" alt="Static Blog 2" className="post-preview-image" />
        <p>This is a description for the second static post. It’s always visible regardless of other posts.</p>
        <Link to="#">
          <button className="read-more-button">Read More</button>
        </Link>
      </div>

      {/* Dynamic Post Containers */}
      {posts.map((post, index) => (
        <div key={index} className="post-container">
          <h3>{post.title}</h3>
          {post.image && <img src={post.image} alt="Blog" className="post-preview-image" />}
          <p>{post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description}</p>
          <Link to={`/posts/${index}`}>
            <button className="read-more-button">Read More</button>
          </Link>
        </div>
      ))}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-about">
          <h4>About</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="footer-categories">
          <h4>Categories</h4>
          <ul>
            <li>Website Design</li>
            <li>UI Design</li>
            <li>Web Development</li>
            <li>Video Editor</li>
            <li>Theme Creator</li>
            <li>Templates</li>
          </ul>
        </div>
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Contribute</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2023 All Rights Reserved by Blog.</p>
        </div>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-globe"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

