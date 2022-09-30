import React from 'react';

// ? SCSS
import Scss from '../styles/navigation.module.scss';

// ? FONT AWESOME
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  return (
    <div className={Scss.navigation}>
      <div>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}

export default Navigation;
