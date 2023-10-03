import React from 'react';

const NextButton = ({ text, onClick }) => {
  return (
    <button className="NextButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default NextButton;
