import React from "react";
import styles from "./PostModal.module.css";

const PostModal = ({ post, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imagePlaceholder}>
          {post.imagePlaceholder}
        </div>
        <p className={styles.caption}>{post.caption}</p>
        <div className={styles.comments}>
          <h3>Comentários</h3>
          {/* Renderize comentários estáticos como exemplo */}
          <p>Usuário1: Ótimo post!</p>
          <p>Usuário2: Muito interessante!</p>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PostModal;
