import React, { useState } from 'react';

// ? FONT AWESOME
import { faEllipsis, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Head({ who, actions, actionIcon }) {
  const [whichSendCard, setWhichSendCard] = useState(null);

  // * OPTIONS MENU
  const onClickOptionsMenu = e => {
    const isButton = e.target.parentElement.parentElement.parentElement;
    const sendCards = document.getElementsByClassName('send-card');

    if (isButton) {
      setWhichSendCard(isButton.getAttribute('itemid'));

      for (let i = 0; i < sendCards.length; i++) {
        if (sendCards[i].getAttribute('itemid') === whichSendCard) {
          sendCards[i].childNodes[0].childNodes[1].childNodes[1].style.display =
            'block';
        }
      }
    }
  };

  const onMouseLeaveOptionsMenu = () => {
    const sendCards = document.getElementsByClassName('send-card');

    for (let i = 0; i < sendCards.length; i++) {
      sendCards[i].childNodes[0].childNodes[1].childNodes[1].style.display =
        'none';
    }
  };

  return (
    <div className="head d-flex justify-content-between align-items-center">
      {who && (
        <div className="send">
          <div className="d-flex">
            {/* IMAGE */}
            <div className="image">
              <img src={who && who.image} alt="" />
            </div>

            <div className="d-flex direction-column ml-1">
              {/* NAME */}
              <div className="name">
                {who && who.name}
                <div className="elips mx-1"></div>
                <a href="#" className="primary-link">
                  Takip Et
                </a>
              </div>
              {/* OTHER */}
              <div className="other">
                <span>{who && who.transferDate}</span>
                <div className="elips"></div>
                <span>
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="options">
        <button
          className="white-btn"
          style={{ boxShadow: 'none' }}
          onClick={onClickOptionsMenu}
        >
          <FontAwesomeIcon icon={actionIcon ? actionIcon : faEllipsis} />
        </button>

        {/* MENU */}
        <div className="options-menu" onMouseLeave={onMouseLeaveOptionsMenu}>
          <ul>
            {actions &&
              actions.map(action => (
                <li>
                  <FontAwesomeIcon icon={action.icon && action.icon} />
                  <div>
                    <b>{action.title && action.title}</b>
                    <small>{action.description && action.description}</small>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Head;
