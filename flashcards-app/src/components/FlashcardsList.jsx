import React, { useState } from 'react';

const FlashcardsList = ({ card, userGuess, onGuessChange, onGuessSubmit, isCorrect }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNextClick = () => {
    loadNextCard();
    setIsFlipped(false); 
  };

  return (
    <div className="FlashcardsList">
      <div className="CardContainer">
        <div className={`Card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          {!isFlipped && (
            <div className="CardContent Front">
              {card.question}
            </div>
          )}
          {isFlipped && (
            <div className="CardContent Back">
              {card.answer}
            </div>
          )}
        </div>
        <div className="UserInput">
          <input
            type="text"
            value={userGuess}
            onChange={onGuessChange}
            placeholder="Enter your answer"
          />
          <button onClick={onGuessSubmit}>Submit</button>
        </div>
      </div>
      {isCorrect !== null && (
        <div className={`Feedback ${isCorrect ? 'Correct' : 'Incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect! Try again.'}
        </div>
      )}
    </div>
  );
};

export default FlashcardsList;
