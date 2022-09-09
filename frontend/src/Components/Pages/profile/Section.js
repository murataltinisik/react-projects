import {
  faArrowsToDot,
  faCamera,
  faChevronDown,
  faCirclePlus,
  faEdit,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? SCSS
import Scss from './style.module.scss';

class Section extends Component {
  render() {
    return (
      <div id={Scss.ProfileContainer}>
        {/* PROFILE */}
        <div id={Scss.Profile}>
          {/* COVER */}
          <div className={Scss.cover}>
            <div className={Scss.coverAddBtn}>
              <button className="white-btn">
                <FontAwesomeIcon icon={faCamera} />
                <span className="ml-1">Kapak Fotoğrafı Ekle</span>
              </button>
            </div>
          </div>

          {/* USER & BUTTON GROUP */}
          <div className="d-flex justify-content-between align-items-center px-4">
            {/* USER */}
            <div
              className={`${Scss.user} d-flex justify-content-start align-items-end`}
            >
              <div className={Scss.image}>
                <img src="https://scontent.fesb4-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_k1JGnPK0ssAX8fryJI&_nc_ht=scontent.fesb4-1.fna&oh=00_AT87hiFH0GgsZJT0fvgNfPW7ppcCqpa5eYL8QgPjQ5uY5Q&oe=63411EF8" />
              </div>
              <div className={Scss.name}>Murat Altınışık</div>
            </div>

            {/* BUTTON GROUP */}
            <div className={Scss.userOperation}>
              <button className="primary-btn width-auto p-0 position-relative">
                <FontAwesomeIcon icon={faCirclePlus} />
                <span className="ml-1">Hikayeye ekleme yap</span>
              </button>
              <button className="light-btn ml-1">
                <FontAwesomeIcon icon={faEdit} />
                <span className="ml-1">Profili Düzenle</span>
              </button>
            </div>
          </div>

          {/* PROFILE MENU */}
          <div
            className={`${Scss.menu} d-flex justify-content-between align-items-center px-4`}
          >
            <ul className="d-flex justify-content-start align-items-center">
              <li className={Scss.active}>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Gönderiler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Hakkında
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Arkadaşlar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Fotoğraflar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Videolar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="private-btn text-decoration-none"
                >
                  Yer Bildirimleri
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="private-btn text-decoration-none"
                >
                  Diğer
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-1"
                  />
                </a>
              </li>
            </ul>

            <div className={Scss.otherMenu}>
              <button className="private-btn">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
