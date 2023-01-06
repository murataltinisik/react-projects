import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faArrowTurnRight,
  faChevronLeft,
  faChevronRight,
  faCircleInfo,
  faClipboardList,
  faCopyright,
  faDoorOpen,
  faGear,
  faGlobe,
  faLock,
  faMessage,
  faMoon,
  faQuestionCircle,
  faUser,
  faUserLock,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? STYLE
import Scss from '../../style.module.scss';
import UserScss from './scss/users.module.scss';

// * REACT ROUTER 5.2.0
import { NavLink } from 'react-router-dom';

class Users extends Component {
  constructor({
    onTabOpen,
    onMouseLeave,
    onSettingsDetail,
    userProfileBackMenu,
  }) {
    super(onMouseLeave, onTabOpen, onSettingsDetail, userProfileBackMenu);
    this.state = {
      onTabOpen: onTabOpen,
      onMouseLeave: onMouseLeave,
      onSettingsDetail: onSettingsDetail,
      userProfileBackMenu: userProfileBackMenu,
      user: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
    };
  }

  onLeave = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");

    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  render() {
    return (
      <li itemID="3" className="listItem">
        <a href="javascript:void(0)" onClick={this.state.onTabOpen}>
          <FontAwesomeIcon icon={faUser} />
        </a>
        <div className={Scss.info}>Hesap</div>

        <div
          onMouseLeave={this.state.onMouseLeave}
          className={`${Scss.menu} ${UserScss.userProfileContainer} d-none width-auto height-auto`}
        >
          <div>
            <div className={UserScss.profile} id="profile">
              <NavLink
                to="/profile"
                className={`${UserScss.selectedProfile} dark-link text-decoration-none px-2 py-05 d-flex justify-content-start align-items-center`}
              >
                <img src="https://scontent.fesb4-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX9V38AS&_nc_ht=scontent.fesb4-1.fna&oh=00_AT9daDbbsXxh0Fbrq5zuH8FOZJo5nyZHr6TeJavbEbLiHA&oe=633D2A78" />
                <span className="ml-1">{this.state.user.name + " " + this.state.user.surname}</span>
              </NavLink>
              <div className="hr mb-0"></div>
              <div
                className={`${UserScss.allProfileSee} private-btn text-left`}
              >
                Tüm Profileri Gör
              </div>
            </div>

            <div className={`${UserScss.profileMenu} profileMenu`}>
              <ul id="firstUl">
                <li
                  onClick={this.state.onSettingsDetail}
                  itemID="0"
                  className="additionalButton d-flex align-items-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faGear} />
                  </span>
                  <button>
                    Ayarlar ve Gizlilik
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>

                <li
                  onClick={this.state.onSettingsDetail}
                  itemID="1"
                  className="additionalButton d-flex align-items-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                  <button>
                    Yardım ve Destek
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>

                <li
                  onClick={this.state.onSettingsDetail}
                  itemID="2"
                  className="additionalButton d-flex align-items-center"
                >
                  <span>
                    <FontAwesomeIcon icon={faMoon} />
                  </span>
                  <button>
                    Görünüm ve Erişebilirlik
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faWarning} />
                  </span>
                  <button>Görüş Bildir</button>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faDoorOpen} />
                  </span>
                  <button onClick={this.onLeave}>Çıkış Yap</button>
                </li>

                {/* MENU FOOTER */}
                <li className={`${UserScss.menuFooter}`}>
                  <a href="#" className="light-link">
                    Gizlilik
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Koşullar
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Reklam
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Ad Choices
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Çerezler
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Diğer
                  </a>
                  <div className="elips"></div>
                  <a href="#" className="light-link">
                    Meta <FontAwesomeIcon icon={faCopyright} /> 2022
                  </a>
                </li>
              </ul>

              {/* ---- */}

              <ul
                tabIndex="0"
                className={`${UserScss.bottomProfileMenu} bottomProfileMenu`}
              >
                <li className={UserScss.bottomProfilMenuBack}>
                  <span onClick={this.state.userProfileBackMenu}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <button className="btn">Ayarlar ve Gizlilik</button>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faGear} />
                  </span>
                  <NavLink
                    to="/settings"
                    className="light-link text-decoration-none"
                  >
                    Ayarlar
                  </NavLink>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span className="px-1 pr-0">
                    <FontAwesomeIcon icon={faUserLock} />
                  </span>
                  <NavLink
                    to="/settings"
                    className="light-link text-decoration-none"
                  >
                    Gizlilik Ayarı Kontrolü
                  </NavLink>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <NavLink
                    to="/settings/privacy"
                    className="light-link text-decoration-none"
                  >
                    Gizlilik Merkezi
                  </NavLink>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faArrowTurnRight} />
                  </span>
                  <a href="#" className="light-link text-decoration-none">
                    Hareket Dökümü
                  </a>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faClipboardList} />
                  </span>

                  <a href="#" className="light-link text-decoration-none">
                    Akış Tercihleri
                  </a>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>

                  <NavLink
                    to="/settings/language-and-region"
                    className="light-link text-decoration-none"
                  >
                    Dil
                  </NavLink>
                </li>
              </ul>

              <ul
                tabIndex="1"
                className={`${UserScss.bottomProfileMenu} bottomProfileMenu`}
              >
                <li className={UserScss.bottomProfilMenuBack}>
                  <span onClick={this.state.userProfileBackMenu}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <button className="btn">Yardım ve Destek</button>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <a href="#" className="light-link text-decoration-none">
                    Yardım Merkezi
                  </a>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span className="px-1 pr-0">
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  <a href="#" className="light-link text-decoration-none">
                    Destek Gelen Kutusu
                  </a>
                </li>

                <li className="additionalButton d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faWarning} />
                  </span>
                  <a href="#" className="light-link text-decoration-none">
                    Sorun Bildir
                  </a>
                </li>
              </ul>

              <ul
                tabIndex="2"
                className={`${UserScss.bottomProfileMenu} bottomProfileMenu`}
              >
                <li className={UserScss.bottomProfilMenuBack}>
                  <span onClick={this.state.userProfileBackMenu}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                  <button className="btn">Görünüm ve Erişebilirlik</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Users;
