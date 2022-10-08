import React from 'react';

function Body({ card }) {
  return (
    <div className="body">
      <div className="content">
        {card.title && <b>{card.title}</b>}
        {card.description && <p>{card.description}</p>}
      </div>
      {card.image && (
        <div className="image">
          <img src={card.image} alt={card.title && card.title} />
        </div>
      )}
    </div>
  );
}

export default Body;
