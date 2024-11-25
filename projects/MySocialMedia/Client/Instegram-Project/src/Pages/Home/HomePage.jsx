import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PostModal from "../../Components/PostModal/PostModal.jsx"; // Importe o modal
import styles from "./HomePage.module.css";

function generatePosts(numberOfPosts) {
  const posts = [];
  for (let i = 0; i < numberOfPosts; i++) {
    posts.push({
      id: i + 1,
      imagePlaceholder: `Image Placeholder ${i + 1}`,
      caption: `Post text ${i + 1}`,
    });
  }
  return posts;
}

const HomePage = ({ isLogIn }) => {
  console.log(isLogIn);

  if (!isLogIn) {
    return <Navigate to="/login" replace />;
  }

  const posts = generatePosts(20);

  // Estado para gerenciar o modal
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post) => {
    setSelectedPost(post); // Define o post selecionado
  };

  const handleCloseModal = () => {
    setSelectedPost(null); // Fecha o modal
  };

  return (
    <div className="home-page">
      <main className={styles.feed}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <div className={styles.imagePlaceholder}>
              {post.imagePlaceholder}
            </div>
            <p className={styles.caption}>{post.caption}</p>
            <button
              className={styles.commentButton}
              onClick={() => handleOpenModal(post)}
            >
              Comentar
            </button>
          </div>
        ))}
      </main>

      {/* Renderiza o modal se um post foi selecionado */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HomePage;
