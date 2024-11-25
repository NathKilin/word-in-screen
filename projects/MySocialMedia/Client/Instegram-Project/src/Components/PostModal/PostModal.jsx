import React, { useState, useEffect } from "react";
import styles from "./PostModal.module.css";

const PostModal = ({ post, onClose }) => {
  const [comments, setComments] = useState([]); // Comentários do post
  const [newComment, setNewComment] = useState(""); // Novo comentário

  // Simula uma API que carrega comentários
  const fetchComments = () => {
    return [
      { id: 1, user: "Usuário1", text: "Ótimo post!" },
      { id: 2, user: "Usuário2", text: "Muito interessante!" },
    ];
  };

  // Simula carregar comentários ao abrir o modal
  useEffect(() => {
    const simulatedComments = fetchComments();
    setComments(simulatedComments);
  }, []);

  // Função para adicionar um comentário
  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Evita comentários vazios
    const newCommentObj = {
      id: comments.length + 1,
      user: "Você", // Simula o usuário atual
      text: newComment,
    };
    setComments([...comments, newCommentObj]); // Adiciona o novo comentário
    setNewComment(""); // Limpa o campo de entrada
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imagePlaceholder}>
          {post.imagePlaceholder}
        </div>
        <p className={styles.caption}>{post.caption}</p>

        <div className={styles.comments}>
          <h3>Comentários</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user}:</strong> {comment.text}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.addComment}>
          <input
            type="text"
            placeholder="Adicione um comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Enviar</button>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PostModal;
