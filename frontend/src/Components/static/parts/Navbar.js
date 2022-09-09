import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faHome,
  faUsers,
  faTv,
  faStore,
  faPeopleGroup,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../style.module.scss';

export class Navbar extends Component {
  render() {
    return (
      <div
        className={`${Scss.navbar} navbar d-flex justify-content-between align-items-center`}
      >
        <ul className="d-flex justify-content-between align-items-center">
          <li className={Scss.active}>
            <a href="#" className={Scss.activeLink}>
              <FontAwesomeIcon icon={faHome} />
            </a>
            <div className={Scss.info} id="abc">
              Anasayfa
            </div>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUsers} />
            </a>
            <div className={Scss.info}>Arkadaşlar</div>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTv} />
            </a>
            <div className={Scss.info}>Watch</div>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faStore} />
            </a>
            <div className={Scss.info}>Marketplace</div>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </a>
            <div className={Scss.info}>Grup</div>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
