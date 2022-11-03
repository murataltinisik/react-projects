import React, { Component } from 'react';

// ? FONT AWESOME
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../style.module.scss';
import { NavLink } from 'react-router-dom';

export class Title extends Component {
  // * SHOW SEARCH BOX
  showSearchBox = () => {
    document.getElementById('search-result').style.display = 'block';
  };

  // * FIND USER LIST
  onFindUserList = e => {
    // * USER ITEM
    const userResult = document.querySelectorAll(
      '#searchUserList .userResultItem'
    );

    for (let i = 0; i < userResult.length; i++) {
      if (userResult[i].childNodes[1].innerText.indexOf(e.target.value) > -1) {
        userResult[i].style.display = 'flex';
      } else {
        userResult[i].style.display = 'none';
      }
    }
  };

  render() {
    return (
      <div
        id="title"
        className={`${Scss.title} d-flex justify-content-between align-items-center`}
      >
        <NavLink exact to="/">
          <img src="https://logosvector.net/wp-content/uploads/2022/02/facebook-icon-vector.png" />
          <div id="siteTitle" className="d-none">
            <h1>Facebook</h1>
          </div>
        </NavLink>

        <div
          id={Scss.facebookSearchBox}
          className="facebookSearchBox d-flex justify-content-center align-items-center position-absolute tp-1"
        >
          <label
            className={`${Scss.facebookSearch} search-input`}
            style={{ cursor: 'pointer' }}
            onClick={this.showSearchBox}
            id="facebookSearch"
          >
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input
              type="text"
              className="search"
              placeholder="Facebook'ta Ara"
              onKeyUp={this.onFindUserList}
            />

            {/* RESULT */}
            <div className={Scss.result} id="search-result">
              {/* HEAD */}
              <div className="d-flex mb-1 justify-content-between align-items-center">
                <p className={Scss.title}>Yakınlardaki Aramalar</p>
                <a href="#" className="primary-link">
                  Düzenle
                </a>
              </div>

              {/* BODY */}
              <div className={Scss.body}>
                <ul id="searchUserList">
                  <li className={`${Scss.userResult} userResultItem`}>
                    <div className={Scss.icon}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>

                    <div className={`${Scss.username} username`}>
                      Murat Altınışık
                    </div>
                  </li>

                  <li className={`${Scss.userResult} userResultItem`}>
                    <div className={Scss.icon}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>

                    <div className={`${Scss.username} username`}>
                      Kübra Altınışık
                    </div>
                  </li>

                  <li className={`${Scss.userResult} userResultItem`}>
                    <div className={Scss.icon}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>

                    <div className={`${Scss.username} username`}>
                      Yusuf Altınışık
                    </div>
                  </li>

                  <li className={Scss.constant}>
                    <div className={Scss.icon}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>

                    <div className={Scss.username}>
                      Murat Altınışık için arama yap
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </label>

          <label
            className="search-input ml-1 d-none"
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faBars} className="icon" />
          </label>
        </div>
      </div>
    );
  }
}

export default Title;
