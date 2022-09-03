import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// ? MODULE SCSS
import Scss from './styles/right.module.scss';

function Right() {
  return (
    <div
      id={Scss.RightContainer}
      className="d-flex direction-column justify-content-end align-items-end"
    >
      <div className={Scss.head}>
        <h3 className={Scss.title}>Grup Konuşmaları</h3>
      </div>

      <div className={Scss.groups}>
        <ul>
          <li className="additionalButton private-btn">
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
