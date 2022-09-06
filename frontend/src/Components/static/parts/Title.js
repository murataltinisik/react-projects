import React, { Component } from 'react';

// ? FONT AWESOME
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../style.module.scss';

export class Title extends Component {
  render() {
    return (
      <div
        className={`${Scss.title} d-flex justify-content-between align-items-center`}
      >
        <img src="https://logosvector.net/wp-content/uploads/2022/02/facebook-icon-vector.png" />
        <label className="search-input">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input type="text" className="search" placeholder="Facebook'ta Ara" />
        </label>
      </div>
    );
  }
}

export default Title;
