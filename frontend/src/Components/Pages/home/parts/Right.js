import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// ? MODULE SCSS
import Scss from '../../../assets/scss/home-scss/styles/right.module.scss';

// ? SHARED
import { messageContainerOpen } from '../../../static/shared/Shared';

function Right() {
  return (
    <div
      id={Scss.RightContainer}
      className="rightContainerResp d-flex direction-column justify-content-end align-items-end"
    >
      <div className={`${Scss.head} head`}>
        <h3 className={Scss.title}>Grup Konuşmaları</h3>
      </div>

      <div className={`${Scss.groups} groupsResp`}>
        <ul>
          <li
            className="additionalButton private-btn"
            onClick={messageContainerOpen}
          >
            <button>
              <span className="mr-1">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Yeni Grup Ekle
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Right;
