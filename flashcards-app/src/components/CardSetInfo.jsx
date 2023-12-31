import React from 'react';

const CardSetInfo = ({ title, description, totalCards }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Total cards: {totalCards}</p>
        </div>
    );
};

export default CardSetInfo;

