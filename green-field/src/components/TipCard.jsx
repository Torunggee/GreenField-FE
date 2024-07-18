import React from 'react';
import '../styles/TipCard.scss';

const TipCard = ({ image, title }) => {
  return (
    <div className="tip-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default TipCard;
