import React, { useState } from 'react';
import FlashcardsList from './FlashcardsList.jsx';
import CardSetInfo from './CardSetInfo.jsx';
import NextButton from './NextButton.jsx';
import soccerFacts from '../data/soccerFacts';  
import '../styles/Flashcards.css';
import '../styles/App.css'; 
import '../styles/Flashcards.css'; 
import '../styles/FlashcardsList.css'; 
import '../styles/CardSetInfo.css'; 
import '../styles/NextButton.css'; 

const Flashcards = () => {
    const [cards, setCards] = useState(soccerFacts);  // Use soccerFacts as your initial state
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNext = () => {
        setCurrentCard(Math.floor(Math.random() * cards.length));  // Set currentCard to a random index
        setShowAnswer(false);
    };

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="Flashcards">
            <CardSetInfo title="Do you know your soccer facts? " description="Learn random soccer facts!" totalCards={cards.length} />
            <FlashcardsList cards={cards} currentCard={currentCard} showAnswer={handleShowAnswer} />
            <NextButton handleNext={handleNext} />
        </div>
    );
};

export default Flashcards;
