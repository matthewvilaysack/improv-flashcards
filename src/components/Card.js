
// Card.js
import React from 'react';

const Card = ({ question, answer, isQuestionVisible, setIsQuestionVisible }) => {
  const toggleVisibility = () => {
    setIsQuestionVisible(!isQuestionVisible);
  };

  return (
    <div className="card">
      <div className="card-content">
        {isQuestionVisible ? (
          <div className="card-side">
            <h2>Question</h2>
            <p>{question}</p>
          </div>
        ) : (
          <div className="card-side">
            <h2>Answer</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isQuestionVisible ? 'Show Answer' : 'Show Question'}
      </button>
    </div>
  );
};

export default Card;