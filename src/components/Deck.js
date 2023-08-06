
// Deck.js
import React from 'react';
import Card from './Card';

const Deck = ({ flashcards, activeCardIndex, isQuestionVisible, setIsQuestionVisible }) => {
  const activeCard = flashcards[activeCardIndex];

  return (
    <div className="deck">
      <Card
        question={activeCard.question}
        answer={activeCard.answer}
        isQuestionVisible={isQuestionVisible}
        setIsQuestionVisible={setIsQuestionVisible}
      />
    </div>
  );
};

export default Deck;
