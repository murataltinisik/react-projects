import React, { useState } from 'react';

import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faClose,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function acquaintances({ Scss }) {
  // FRIEND
  let friendContainer = document.getElementById('friendContainer');
  let friends = document.getElementsByClassName('friend');
  let size = friends.length;
  let counter = 0;

  // BTN
  var prevSlider = document.getElementById('prevFriend');
  var nextSlider = document.getElementById('nextFriend');

  window.onload = () => {
    friendContainer = document.getElementById('friendContainer');
    friends = document.getElementsByClassName('friend');
    size = friends.length;
    prevSlider = document.getElementById('prevFriend');
    nextSlider = document.getElementById('nextFriend');
  };

  // * ONCLICK
  const nextFriend = () => {
    size = size - 3;
    counter += 3;
    if (size >= 3) {
      friendContainer.style.left = `${-12.65 * counter}rem`;
    } else if (size < 3 && size > 0) {
      size = friends.length - 3 - 0.15;
      friendContainer.style.left = `${-12.65 * size}rem`;
      setTimeout(() => {
        nextSlider.style.opacity = '0';
        nextSlider.style.display = 'block';
      }, 500);
    }
    prevSlider.style.display = 'block';
    setTimeout(() => {
      prevSlider.style.opacity = '1';
    }, 500);
  };

  const prevFriend = () => {};

  return (
    <div className={`${Scss.acquaintances} px-2 p-1`} id="Acquaintances">
      {/* HEAD */}
      <div
        className={`${Scss.head} d-flex  justify-content-between align-items-center`}
      >
        <p>Tanıyor Olabileceğin Kişiler</p>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* NEXT & PREV */}
      <div className={`${Scss.nextAndPrev} d-flex justify-content-between`}>
        <div id="prevFriend" onClick={prevFriend}>
          <FontAwesomeIcon icon={faChevronLeft} id="prevIcon" />
        </div>

        <div id="nextFriend" onClick={nextFriend}>
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
      </div>
    </div>
  );
}

export default acquaintances;
