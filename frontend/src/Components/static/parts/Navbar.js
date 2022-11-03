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

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div
        className={`${Scss.navbar} navbar d-flex justify-content-between align-items-center`}
      >
        <ul className="d-flex justify-content-between align-items-center">
          <li>
            <NavLink exact to="/" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <div className={Scss.info} id="abc">
              Anasayfa
            </div>
          </li>

          <li>
            <NavLink to="/friends" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faUsers} />
            </NavLink>
            <div className={Scss.info}>Arkadaşlar</div>
          </li>

          <li>
            <NavLink to="/watch" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faTv} />
            </NavLink>
            <div className={Scss.info}>Watch</div>
          </li>

          <li>
            <NavLink to="/marketplace" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faStore} />
            </NavLink>
            <div className={Scss.info}>Marketplace</div>
          </li>

          <li>
            <NavLink to="/group" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faPeopleGroup} />
            </NavLink>
            <div className={Scss.info}>Grup</div>
          </li>

          <li id={Scss.responsiveOpenMenu} className="responsiveOpenMenu">
            <NavLink to="/bookmarks" activeClassName={Scss.activeLink}>
              <FontAwesomeIcon icon={faBars} />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
