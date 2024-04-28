import React from 'react';

const CommentsList = ({ comments, deleteComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-text">{comment.text}</div>
          <button className="delete-button" onClick={() => deleteComment(comment.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;