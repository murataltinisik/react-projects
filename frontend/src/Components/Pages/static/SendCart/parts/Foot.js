import React from 'react';

// ? FONT AWESOME
import {
  faComment,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Foot() {
  // * MAKE COMMENT
  const makeComment = e => {
    const sendCards = document.getElementsByClassName('send-card');
    let cardId =
      e.target.parentElement.parentElement.parentElement.getAttribute('itemid');

    if (e.target.tagName === 'SPAN') {
      cardId =
        e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'itemid'
        );
    }

    for (let i = 0; i < sendCards.length; i++) {
      if (sendCards[i].getAttribute('itemid') === cardId) {
        sendCards[i].childNodes[3].style.display = 'block';
      }
    }
  };

  return (
    <div className="foot">
      <ul>
        <li className="private-btn">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span className="ml-1">Beğen</span>
        </li>
        <li className="private-btn" onClick={makeComment}>
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-1">Yorum Yap</span>
        </li>
        <li className="private-btn">
          <FontAwesomeIcon icon={faShare} />
          <span className="ml-1">Paylaş</span>
        </li>
      </ul>
    </div>
  );
}

export default Foot;
