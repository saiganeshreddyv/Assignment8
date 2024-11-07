// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Navbar from './components/Navbar';
// // // import Home from './components/Home';
// // // import About from './components/About';
// // // import Contact from './components/Contact';
// // // import PostBlog from './components/PostBlog';
// // // import LoginSignup from './components/LoginSignup';
// // // import Posts from './components/Posts';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Navbar />
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/contact" element={<Contact />} />
// // //         <Route path="/auth" element={<LoginSignup />} />
// // //         <Route path="/post-blog" element={<PostBlog />} />
// // //         <Route path="/posts" element={<Posts />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // // App.js
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import About from './components/About';
// // import Contact from './components/Contact';
// // import PostBlog from './components/PostBlog';
// // import LoginSignup from './components/LoginSignup';

// // function App() {
// //   const [posts, setPosts] = useState([]);

// //   const handleAddPost = (newPost) => {
// //     setPosts([...posts, newPost]);
// //   };

// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home posts={posts} />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/auth" element={<LoginSignup />} />
// //         <Route path="/post-blog" element={<PostBlog onAddPost={handleAddPost} />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import PostBlog from './components/PostBlog';
// import PostDetail from './components/PostDetail';
// import './components/styles/style.css';
// function App() {
//   const [posts, setPosts] = useState([]);

//   const handleAddPost = (newPost) => {
//     setPosts([...posts, newPost]);
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home posts={posts} />} />
//         <Route path="/post-blog" element={<PostBlog onAddPost={handleAddPost} />} />
//         <Route path="/post/:id" element={<PostDetail posts={posts} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PostBlog from './components/PostBlog';
import LoginSignup from './components/LoginSignup';
import PostDetails from './components/PostDetails';

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/post-blog" element={<PostBlog onAddPost={handleAddPost} />} />
        <Route path="/posts/:id" element={<PostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;

