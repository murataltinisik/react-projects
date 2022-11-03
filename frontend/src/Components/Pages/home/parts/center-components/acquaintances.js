import React, { Component } from 'react';

import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faClose,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Scss from '../../../../assets/scss/home-scss/styles/component-css/acquaintances.module.scss';
import { NavLink } from 'react-router-dom';

class acquaintances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendContainer: document.querySelector('#friendContainer'),
      friends: document.querySelectorAll('#friendContainer .friend'),
      friendSize: document.querySelectorAll('#friendContainer .friend').length,
      constLength: document.querySelectorAll('#friendContainer .friend').length,
      slideCounter: 0,
      nextFriend: document.getElementById('nextFriend'),
      prevFriend: document.getElementById('prevFriend'),
      width: 12.65,
      nextClickedCount: 0,
      prevClickedCount: 0,
    };
  }

  componentDidMount() {
    this.state.friendContainer = document.querySelector('#friendContainer');
    this.state.friends = document.querySelectorAll('#friendContainer .friend');
    this.state.constLength = document.querySelectorAll(
      '#friendContainer .friend'
    ).length;
    this.state.friendSize = document.querySelectorAll(
      '#friendContainer .friend'
    ).length;
    this.state.slideCounter = 0;
    this.state.nextFriend = document.getElementById('nextFriend');
    this.state.prevFriend = document.getElementById('prevFriend');
  }

  nextFriendStyle = (display, opacity) => {
    setTimeout(() => {
      this.state.nextFriend.style.opacity = opacity;
      this.state.nextFriend.style.display = display;
    }, 500);
  };

  prevFriendStyle = (display, opacity) => {
    setTimeout(() => {
      this.state.prevFriend.style.opacity = opacity;
      this.state.prevFriend.style.display = display;
    }, 500);
  };

  // * NEXT FRIEND
  nextFriend = () => {
    // VARIABLE
    let size = (this.state.friendSize -= 3);
    let container = this.state.friendContainer;
    const width = this.state.width;
    let clickedCount = ++this.state.nextClickedCount;

    if (size >= 3) {
      this.state.slideCounter += 3;
      container.style.left = `${-width * this.state.slideCounter}rem`;
    } else if (size < 3 && size > 0) {
      this.state.slideCounter += size - 0.17;
      container.style.left = `${-width * this.state.slideCounter}rem`;
      this.nextFriendStyle('none', '0');
    }

    if (this.state.friendSize < 0) {
      this.state.friendSize = 3;
    }

    if (clickedCount > 3) {
      container.style.left = `${-width * this.state.slideCounter}rem`;
    }

    if (size <= 0) {
      container.style.right = '0';
    }

    if (size <= 3) {
      this.nextFriendStyle('none', 0);
      container.style.left = parseInt(container.style.left) + 1 + 'rem';
    }

    this.prevFriendStyle('block', '1');
    console.log('next', size);
  };

  // * PREV FRIEND
  prevFriend = () => {
    // VARIABLE
    let size = (this.state.friendSize += 3);
    let container = this.state.friendContainer;
    let length = this.state.constLength;
    const width = this.state.width;

    if (this.state.friendSize > length) {
      this.state.friendSize = length;
    }

    if (this.state.friendSize < length) {
      this.state.friendSize = length;
    }

    if (this.state.friendSize < 0) {
      this.state.friendSize = 3;
    }

    if (this.state.slideCounter <= 3) {
      this.state.slideCounter = 0;
      container.style.left = `${-width * this.state.slideCounter}rem`;
      this.prevFriendStyle('none', '0');
    } else {
      this.state.slideCounter -= 3;
      this.state.slideCounter = Math.floor(this.state.slideCounter);

      container.style.left = `${
        -width * Math.floor(this.state.slideCounter)
      }rem`;

      this.state.slideCounter = Math.floor(this.state.slideCounter);
    }

    this.nextFriendStyle('block', '1');

    console.log('prev', size);
  };

  render() {
    return (
      <div
        className={`${Scss.acquaintances} acquaintancesResp px-2-important p-1`}
        id="Acquaintances"
      >
        {/* HEAD */}
        <div
          className={`${Scss.head} d-flex  justify-content-between align-items-center`}
        >
          <p>Tanıyor Olabileceğin Kişiler</p>
          <span>
            <FontAwesomeIcon id="menuBtn2" icon={faBars} />
          </span>
        </div>

        {/* NEXT & PREV */}
        <div className={`${Scss.nextAndPrev} d-flex justify-content-between`}>
          <div id="prevFriend" onClick={this.prevFriend}>
            <FontAwesomeIcon icon={faChevronLeft} id="prevIcon" />
          </div>

          <div id="nextFriend" onClick={this.nextFriend}>
            <FontAwesomeIcon icon={faChevronRight} id="nextIcon" />
          </div>
        </div>

        {/* FRIENDS */}
        <div
          id="friendContainer"
          className={`${Scss.friends} ${Scss.friendOverflow} d-flex justify-content-start align-items-center mt-1`}
        >
          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 1
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 2
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 3
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 4
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 5
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 6
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 7
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 8
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 9
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 10
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 11
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <NavLink
              to="/friends/suggestions?user=5"
              className={Scss.ImageLink}
            >
              <img
                className={Scss.image}
                alt=""
                src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
              />
            </NavLink>

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>
                <NavLink to="/friends/suggestions?user=5">
                  Murat Altınışık 12
                </NavLink>
              </p>

              <button className="facebook-btn btn">
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default acquaintances;
