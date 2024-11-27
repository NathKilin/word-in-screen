import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PostModal from "../../Components/PostModal/PostModal.jsx"; 
import styles from "./HomePage.module.css"; 

// Function to generate a list of sample posts
function generatePosts(numberOfPosts) {
  const posts = []; // Initialize an empty array for posts
  for (let i = 0; i < numberOfPosts; i++) {
    posts.push({
      id: i + 1, // Assign a unique ID to each post
      imagePlaceholder: `Image Placeholder ${i + 1}`, // Placeholder for the post's image
      caption: `Post text ${i + 1}`, // Placeholder for the post's caption
    });
  }
  return posts; // Return the array of generated posts
}

const HomePage = ({ isLogIn }) => {
  console.log(isLogIn); // Log the user's login status to the console

  // Redirect to the login page if the user is not logged in
  if (!isLogIn) {
    return <Navigate to="/login" replace />;
  }

  // Generate 20 posts to display on the homepage
  const posts = generatePosts(20); 

  // State to manage the currently selected post for the modal
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to open the modal and set the selected post
  const handleOpenModal = (post) => {
    setSelectedPost(post); // Set the selected post in the state
  };

  // Function to close the modal
  const handleCloseModal = () => {
    // Reset the selected post to null
    setSelectedPost(null); 
  };

  return (
    <div className="home-page">
      <main className={styles.feed}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            {/* Placeholder for the image */}
            <div className={styles.imagePlaceholder}>
              {post.imagePlaceholder}
            </div>

            {/* Post caption */}
            <p className={styles.caption}>{post.caption}</p>

            {/* Button to open the modal for this post */}
            <button
              className={styles.commentButton}
              // Passes the selected post to the modal
              onClick={() => handleOpenModal(post)} 
            >
              Comentar
            </button>
          </div>
        ))}
      </main>

      {/* Render the PostModal if a post is selected */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
};

// Exporting the component to be used in other parts of the app
export default HomePage; 
