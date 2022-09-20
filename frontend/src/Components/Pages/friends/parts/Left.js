import {
  faBell,
  faChevronRight,
  faGear,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? MODULE SCSS
import Scss from '../parts/styles/left.module.scss';

class Left extends Component {
  state = {
    isSettingMenuOpen: false,
  };

  onSettingMenuOpen = e => {
    if (this.state.isSettingMenuOpen) {
      document.getElementById('settingsMenu').style.display = 'none';
      e.target.style.backgroundColor = '#fff';
      this.state.isSettingMenuOpen = false;
    } else if (!this.state.isSettingMenuOpen) {
      document.getElementById('settingsMenu').style.display = 'block';
      e.target.style.backgroundColor = '#eee';
      this.state.isSettingMenuOpen = true;
    }
  };

  render() {
    return (
      <div id={Scss.LeftContainer}>
        {/* HEAD */}
        <div
          className={`${Scss.head} d-flex justify-content-between align-items-center`}
        >
          {/* TITLE */}
          <h3 className={Scss.title}>Arkadaşlar</h3>

          {/* SETTINGS */}
          <div className={Scss.settings}>
            <FontAwesomeIcon icon={faGear} onClick={this.onSettingMenuOpen} />

            {/* SETTINGS MENU */}
            <div className={Scss.menu} id="settingsMenu">
              {/* MESSAGE */}
              <div className={Scss.message}>
                <div className={Scss.title}>Bildirim Ayarları</div>

                <div className={Scss.description}>
                  Arkadaşlarının güncellemeleri hakkında nasıl bildirim
                  alacağını yönetebilirsin.
                </div>
              </div>

              {/* NOTIFICATE */}
              <div
                className={`${Scss.notificateBtn} additionalButton status-btn d-flex justify-content-between align-items-center`}
              >
                <span>
                  <FontAwesomeIcon icon={faBell} />
                </span>

                <p>Bildirim Nokta Simgelerini Göster</p>

                <div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className={Scss.menu}>
          <ul>
            <li className={`${Scss.active} additionalButton`}>
              <span>
                <FontAwesomeIcon icon={faUsers} />
              </span>

              <a href="#">Ana Sayfa</a>
            </li>

            <li className="additionalButton">
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>

              <a href="#">
                Arkadaşlık İstekleri
                <FontAwesomeIcon icon={faChevronRight} className={Scss.arrow} />
              </a>
            </li>

            <li className="additionalButton">
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>

              <a href="#">
                Öneriler
                <FontAwesomeIcon icon={faChevronRight} className={Scss.arrow} />
              </a>
            </li>

            <li className="additionalButton">
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>

              <a href="#">
                Tüm Arkadaşlar
                <FontAwesomeIcon icon={faChevronRight} className={Scss.arrow} />
              </a>
            </li>

            <li className="additionalButton">
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>

              <a href="#">Doğum Günleri</a>
            </li>

            <li className="additionalButton">
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>

              <a href="#">
                Özel Listeler
                <FontAwesomeIcon icon={faChevronRight} className={Scss.arrow} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Left;
