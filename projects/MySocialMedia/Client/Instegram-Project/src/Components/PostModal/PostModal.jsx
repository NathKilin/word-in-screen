import React, { useState, useEffect } from "react"; 
import styles from "./PostModal.module.css"; 

// Component for the post modal
const PostModal = ({ post, onClose }) => {
  // holding list of comments
  const [comments, setComments] = useState([]); 
  // holding value of new comment
  const [newComment, setNewComment] = useState(""); 

  // fake API function to fetch
  const fetchComments = () => {
    return [
      { id: 1, user: "User 1", text: "My maaaan!" }, 
      { id: 2, user: "User 2", text: "Mazal Tov" }
    ];
  };

  // simulating loading comments when the modal opens
  useEffect(() => {
    // fake API call
    const simulatedComments = fetchComments(); 
    // Setting the fetched comments in the state
    setComments(simulatedComments); 
    // Empty dependency array ensures this runs only once when the modal is rendered
  }, []); 

  // Function to handle adding a new comment
  const handleAddComment = () => {
    // Prevents adding empty comments
    if (newComment.trim() === "") return; 
    const newCommentObj = {
      id: comments.length + 1, // Unique ID for the new comment
      user: "You", // Simulated current user
      text: newComment, // Text of the new comment
    };
    setComments([...comments, newCommentObj]); // Updates the comments state with the new comment
    setNewComment(""); // Clears the input field
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}> 
      {/* Backdrop that closes the modal when clicked */}
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content container; click events inside do not close the modal */}

        <div className={styles.imagePlaceholder}>
          {/* Placeholder for the post's image */}
          {post.imagePlaceholder} {/* Displays the post's image or placeholder */}
        </div>

        <p className={styles.caption}>{post.caption}</p> 
        {/* Displays the caption of the post */}

        <div className={styles.comments}>
          <h3>Comentários</h3> 
          {/* Comments section header */}
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                {/* Displays each comment with the username and text */}
                <strong>{comment.user}:</strong> {comment.text}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.addComment}>
          {/* Input field and button to add a new comment */}
          <input
            type="text"
            placeholder="Adicione um comentário..."
            value={newComment} // Binds the input value to newComment state
            onChange={(e) => setNewComment(e.target.value)} // Updates state on user input
          />
          <button onClick={handleAddComment}>Enviar</button>
          {/* Button to submit the new comment */}
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          {/* Button to close the modal */}
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PostModal; // Exporting the component for use in other parts of the app
