import React, { useState } from 'react';

const FlashcardsList = ({ cards, currentCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="FlashcardsList">
      <div className={`card-container ${isFlipped ? 'show-answer' : ''}`} onClick={handleCardClick}>
        <div className={`card ${isFlipped ? 'back' : ''}`}>
          {isFlipped ? cards[currentCard].answer : cards[currentCard].question}
        </div>
      </div>
    </div>
  );
};

export default FlashcardsList;



