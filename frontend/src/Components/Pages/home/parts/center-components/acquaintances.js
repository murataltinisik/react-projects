import React, { Component } from 'react';

import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faClose,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Scss from '../styles/center.module.scss';

class acquaintances extends Component {
  constructor() {
    super();
    this.state = {
      friendContainer: document.querySelector('#friendContainer'),
      friends: document.querySelectorAll('#friendContainer .friend'),
      friendSize: document.querySelectorAll('#friendContainer .friend').length,
      constLength: document.querySelectorAll('#friendContainer .friend').length,
      slideCounter: 0,
      nextFriend: document.getElementById('nextFriend'),
      prevFriend: document.getElementById('prevFriend'),
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

    if (size >= 3) {
      this.state.slideCounter += 3;
      container.style.left = `${-12.65 * this.state.slideCounter}rem`;
    } else if (size < 3 && size > 0) {
      this.state.slideCounter += size - 0.17;
      container.style.left = `${-12.65 * this.state.slideCounter}rem`;
      this.nextFriendStyle('none', '0');
    }

    this.prevFriendStyle('block', '1');
  };

  // * PREV FRIEND
  prevFriend = () => {
    // VARIABLE
    let size = (this.state.friendSize += 3);
    let container = this.state.friendContainer;
    let length = this.state.constLength;

    if (size > length) {
      size = length;
    }

    if (this.state.slideCounter <= 3) {
      this.state.slideCounter = 0;
      container.style.left = `${-12.65 * this.state.slideCounter}rem`;
      this.prevFriendStyle('none', '0');
    } else {
      this.state.slideCounter -= 3;
      this.state.slideCounter = Math.floor(this.state.slideCounter);

      container.style.left = `${
        -12.65 * Math.floor(this.state.slideCounter)
      }rem`;

      this.state.slideCounter = Math.floor(this.state.slideCounter);
    }

    this.nextFriendStyle('block', '1');
  };

  render() {
    return (
      <div
        className={`${Scss.acquaintances} px-2 p-1`}
        id="Acquaintances"
      >
        {/* HEAD */}
        <div
          className={`${Scss.head} d-flex  justify-content-between align-items-center`}
        >
          <p>Tanıyor Olabileceğin Kişiler</p>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* NEXT & PREV */}
        <div className={`${Scss.nextAndPrev} d-flex justify-content-between`}>
          <div
            id="prevFriend"
            onClick={this.prevFriend}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              id="prevIcon"
            />
          </div>

          <div
            id="nextFriend"
            onClick={this.nextFriend}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              id="nextIcon"
            />
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

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 1</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 2</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 3</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 4</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 5</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 6</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 7</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 8</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 9</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 10</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 11</p>

              <button className={`${Scss.add} btn`}>
                <FontAwesomeIcon icon={faUserPlus} /> Arkadaş Ekle
              </button>
            </div>
          </div>

          <div className={`${Scss.friend} friend`}>
            <div className={Scss.hide}>
              <FontAwesomeIcon icon={faClose} />
            </div>

            <img
              className={Scss.image}
              src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__340.png"
            />

            <div className="px-2 d-flex direction-column align-items-center">
              <p className={Scss.name}>Murat Altınışık 12</p>

              <button className={`${Scss.add} btn`}>
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