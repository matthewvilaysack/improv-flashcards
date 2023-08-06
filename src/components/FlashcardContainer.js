// FlashcardContainer.js
import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import flashcardsData from '../data/flashcards.json';

const FlashcardContainer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true); // New state for question visibility

  useEffect(() => {
    // Shuffle the flashcards when the component mounts
    shuffleFlashcards();
  }, []);

  const shuffleFlashcards = () => {
    const shuffledFlashcards = [...flashcardsData];
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledFlashcards[i], shuffledFlashcards[j]] = [
        shuffledFlashcards[j],
        shuffledFlashcards[i],
      ];
    }
    setFlashcards(shuffledFlashcards);
  };

  const handleNextCard = () => {
    setIsQuestionVisible(true); // Set isQuestionVisible to true to show the question
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePreviousCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flashcard-container">
      <h1>TAPS103 Flashcards</h1>
      {flashcards.length > 0 ? (
        <Deck
          flashcards={flashcards}
          activeCardIndex={activeCardIndex}
          isQuestionVisible={isQuestionVisible} // Pass down the isQuestionVisible state
          setIsQuestionVisible={setIsQuestionVisible} // Pass down the setIsQuestionVisible function
        />
      ) : (
        <p>Loading flashcards...</p>
      )}
      <div className="controls">
        <button className="previous-button" onClick={handlePreviousCard}>
          Previous
        </button>
        <button className="next-button" onClick={handleNextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardContainer;
