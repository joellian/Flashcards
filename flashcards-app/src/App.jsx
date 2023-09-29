import React from 'react';
import Flashcards from './components/Flashcards.jsx';
import FlashcardsList from './components/FlashcardsList.jsx';
import soccerData from './data/soccerFacts.jsx';
import './styles/App.css'; 
import './styles/Flashcards.css'; 
import './styles/FlashcardsList.css'; 
import './styles/CardSetInfo.css'; 
import './styles/NextButton.css'; 


const App = () => {
    return (
        <div className="App">
            <Flashcards title="Soccer Facts" description="Learn random soccer facts!" cardsData={soccerData} />
        </div>
    );
};

export default App;