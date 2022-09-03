import React from 'react';

// ? FONT AWESOME
import { faChevronDown, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? MODULE SCSS
import Scss from './styles/left.module.scss';

function Left() {
  return (
    <div
      className={Scss.left}
      id={Scss.LeftContainer}
    >
      {/* LEFT MENU */}
      <ul id={Scss.leftMenu}>
        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className={`${Scss.userImage} mr-1`}
              src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=_8ak1Gi-hKwAX9W7f-1&_nc_ht=scontent.fesb3-2.fna&oh=00_AT_-03KAcZywVKfL26Wa3kUb-VbDzEmit2amgftExC7aeA&oe=63314CF8"
            />
            Murat Altınışık
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
            />
            Arkadaşlarını Bul
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            />
            Gruplar
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
            />
            Marketplace
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
            />
            Watch
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
            />
            Anılar
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
            />
            Kaydedilenler
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
            />
            Sayfalar
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
            />
            Etkinlikler
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
            />
            En Yeniler
          </a>
        </li>

        <li className="private-btn">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none dark-link"
          >
            <img
              className="mr-1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png"
            />
            Favoriler
          </a>
        </li>

        {/* MORE MENU ITEM */}
        <li className="additionalButton private-btn">
          <button>
            <span className="mr-1">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            Daha Fazlasını Gör
          </button>
        </li>

        {/* MENU FOOTER */}
        <li className={`${Scss.menuFooter}`}>
          <a
            href="#"
            className="light-link"
          >
            Gizlilik
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Koşullar
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Reklam
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Ad Choices
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Çerezler
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Diğer
          </a>
          <div className="elips"></div>
          <a
            href="#"
            className="light-link"
          >
            Meta <FontAwesomeIcon icon={faCopyright} /> 2022
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Left;
