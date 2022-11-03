import React from 'react';

// ? SCSS
import Scss from '../../../assets/scss/reels-scss/navigation.module.scss';

// ? FONT AWESOME
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// * REACT ROUTER 5.2.0
import { NavLink, useParams } from 'react-router-dom';

function Navigation() {
  let { id } = useParams();

  return (
    <div className={Scss.navigation}>
      <NavLink to={`/reels/${id < 1 ? 1 : --id}`}>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </NavLink>

      <NavLink to={`/reels/${(id += 2)}`}>
        <div>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </NavLink>
    </div>
  );
}

export default Navigation;
