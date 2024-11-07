// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const PostBlog = () => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     if (image) formData.append('image', image);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/posts', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log('Post successful:', response.data);
// //       // Redirect or display success message
// //     } catch (err) {
// //       setError('Error posting blog');
// //       console.error('Error posting blog:', err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Post a Blog</h2>
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           required
// //         />
// //         <textarea
// //           placeholder="Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="file"
// //           onChange={(e) => setImage(e.target.files[0])}
// //         />
// //         <button type="submit">Post</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PostBlog;



// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const PostBlog = () => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Validate form fields
// //     if (!title || !description || !image) {
// //       setError("Please fill out all fields.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     formData.append('image', image);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/posts', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',  // Ensure correct content type
// //         },
// //       });

// //       // Show success message if the blog is posted
// //       setSuccess('Blog posted successfully!');
// //       setError('');
// //       console.log(response.data);
// //     } catch (err) {
// //       setError('Error posting blog');
// //       console.error('Error posting blog:', err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Post a Blog</h2>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       {success && <p style={{ color: 'green' }}>{success}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <textarea
// //           placeholder="Description"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //         />
// //         <input
// //           type="file"
// //           onChange={(e) => setImage(e.target.files[0])}
// //         />
// //         <button type="submit">Post</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PostBlog;



// // import React, { useState } from 'react';

// // const PostBlog = ({ onAddPost }) => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handlePost = () => {
// //     if (onAddPost) {
// //       const newPost = { title, description, image };
// //       onAddPost(newPost);

// //       // Clear the input fields
// //       setTitle('');
// //       setDescription('');
// //       setImage(null);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Post a Blog</h2>
// //       <input
// //         type="text"
// //         placeholder="Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Description"
// //         value={description}
// //         onChange={(e) => setDescription(e.target.value)}
// //       />
// //       <input
// //         type="file"
// //         onChange={(e) => setImage(e.target.files[0])}
// //       />
// //       <button onClick={handlePost}>Post</button>
// //     </div>
// //   );
// // };

// // export default PostBlog;



// // PostBlog.js
// import React, { useState } from 'react';

// function PostBlog({ onAddPost }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handlePost = () => {
//     const newPost = { title, content };
//     onAddPost(newPost);
//     setTitle('');
//     setContent('');
//   };

//   return (
//     <div>
//       <h2>Post a Blog</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// }

// export default PostBlog;
// import React, { useState } from 'react';

// function PostBlog({ onAddPost }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null); // New state for image

//   const handlePost = () => {
//     // Check if title and description are provided
//     if (title.trim() === '' || description.trim() === '') {
//       alert('Please fill out the title and description.');
//       return;
//     }

//     // Pass the data including the image to the onAddPost callback
//     onAddPost({
//       title,
//       description,
//       image, // Pass image as part of the post data
//     });

//     // Clear the form fields
//     setTitle('');
//     setDescription('');
//     setImage(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // Store base64 image data
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="post-blog-container">
//       <h2>Post a Blog</h2>
//       <input
//         type="text"
//         placeholder="Enter blog title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter blog description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange} // Image upload handler
//       />
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// }

// export default PostBlog;



// import React, { useState } from 'react';

// function PostBlog() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   const handlePost = async () => {
//     if (title.trim() === '' || description.trim() === '') {
//       alert('Please fill out the title and description.');
//       return;
//     }

//     // Prepare FormData for multipart/form-data request
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     if (image) {
//       formData.append('image', image);  // Add image file to FormData
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/posts', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Blog posted successfully');
//         setTitle('');
//         setDescription('');
//         setImage(null);
//       } else {
//         throw new Error('Failed to post blog');
//       }
//     } catch (error) {
//       console.error("Error posting blog:", error);
//       alert('Error posting blog');
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);  // Set image file to state
//     }
//   };

//   return (
//     <div className="post-blog-container">
//       <h2>Post a Blog</h2>
//       <input
//         type="text"
//         placeholder="Enter blog title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter blog description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//       />
//       <button onClick={handlePost}>Post</button>
//     </div>
//   );
// }

// export default PostBlog;


import React, { useState } from 'react';

function PostBlog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Blog posted successfully');
        setTitle('');
        setDescription('');
        setImage(null);
      } else {
        throw new Error('Failed to post blog');
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert('Error posting blog');
    }
  };

  return (
    <div className="post-blog-container">
      <h2>Post a Blog</h2>
      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter blog description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default PostBlog;
