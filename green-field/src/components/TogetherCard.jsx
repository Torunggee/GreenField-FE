import React from 'react';
import '../styles/TogetherCard.scss';

const TogetherCard = ({ title, description, author, progress, max }) => {
  return (
    <div className="together-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="author">
        <span>{author}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${(progress / max) * 100}%` }}></div>
        <span>{progress}/{max}</span>
      </div>
    </div>
  );
};

export default TogetherCard;
