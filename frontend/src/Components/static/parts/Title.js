import React, { Component } from 'react';

// ? FONT AWESOME
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../style.module.scss';

export class Title extends Component {
  render() {
    return (
      <div
        id="title"
        className={`${Scss.title} d-flex justify-content-between align-items-center`}
      >
        <img src="https://logosvector.net/wp-content/uploads/2022/02/facebook-icon-vector.png" />
        <div id="siteTitle" className="d-none">
          <h1>Facebook</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center position-absolute tp-1">
          <label className="search-input">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input
              type="text"
              className="search"
              placeholder="Facebook'ta Ara"
            />
          </label>
          <label className="search-input ml-1 d-none">
            <FontAwesomeIcon icon={faBars} className="icon" />
          </label>
        </div>
      </div>
    );
  }
}

export default Title;
