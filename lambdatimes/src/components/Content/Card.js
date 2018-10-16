import React from 'react';
// import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="author" /* image source goes here */ />
        </div>
        <span className="author-font">By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
