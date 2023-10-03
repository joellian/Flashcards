import React, { useState } from 'react';
import FlashcardsList from './FlashcardsList';
import CardSetInfo from './CardSetInfo';
import NextButton from './NextButton';
import soccerFacts from '../data/soccerFacts';
import '../styles/Flashcards.css';
import '../styles/App.css';
import '../styles/Flashcards.css';
import '../styles/FlashcardsList.css';
import '../styles/CardSetInfo.css';
import '../styles/NextButton.css';

const Flashcards = () => {
  const [cards, setCards] = useState(soccerFacts);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = cards[currentCardIndex];

  const handleNextCard = () => {
    const newIndex = currentCardIndex + 1;
    if (newIndex < cards.length) {
      setCurrentCardIndex(newIndex);
    } else {
    
      setCurrentCardIndex(0);
    }
    setUserGuess('');
    setIsCorrect(null);
  };

  const handlePreviousCard = () => {
    const newIndex = currentCardIndex - 1;
    if (newIndex >= 0) {
      setCurrentCardIndex(newIndex);
    }
    setUserGuess('');
    setIsCorrect(null);
  };

  const handleGuessSubmit = () => {
    if (userGuess.toLowerCase().trim() === currentCard.answer.toLowerCase().trim()) {
      setIsCorrect(true);
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1);
      }
    } else {
      setIsCorrect(false);
      setStreak(0);
    }
  };

  return (
    <div className="Flashcards">
      <CardSetInfo
        title="Do you know your soccer facts? "
        description="Learn random soccer facts!"
        totalCards={cards.length}
      />
      <FlashcardsList
        card={currentCard}
        userGuess={userGuess}
        onGuessChange={(e) => setUserGuess(e.target.value)}
        onGuessSubmit={handleGuessSubmit}
        isCorrect={isCorrect}
      />
      <div className="ButtonContainer">
  <NextButton text="Back" onClick={handlePreviousCard} />
  <NextButton text="Next" onClick={handleNextCard} />
</div>
      <div className="ScoreContainer">
        <div className="Score">Score: {score}</div>
        <div className="Streak">Streak: {streak}</div>
        <div className="LongestStreak">Longest Streak: {longestStreak}</div>
      </div>
    </div>
  );
};

export default Flashcards;
