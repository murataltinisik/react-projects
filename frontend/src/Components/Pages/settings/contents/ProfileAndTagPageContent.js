import React, { Component } from 'react';

// ? FONT AWESOME
import { faChevronDown, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? CLASSIC 2 SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/classic2.module.scss';

export class ProfileAndTagPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Profil ve Etiketleme</h3>

        {/* CONTENT */}
        <div id={Scss.ProfileAndTagPageContent}>
          {/* BOX */}
          <div className={Scss.box}>
            <div className={Scss.boxTitle}>Profil</div>

            {/* SETTING MENU */}
            <ul className={Scss.settingMenu}>
              <li>
                <p>Profilinde kimler paylaşımda bulunabilir?</p>
                <button className="secondary-btn">
                  <FontAwesomeIcon icon={faUsers} />
                  Arkadaşlar
                </button>
              </li>

              <li>
                <p>
                  Başkalarının senin profilinde paylaştığı gönderileri kimler
                  görebilir?
                </p>
                <button className="secondary-btn">
                  <FontAwesomeIcon icon={faUsers} />
                  Arkadaşlar
                </button>
              </li>

              <li className={Scss.clickable}>
                <p>Profilinde belirli kelimeleri içeren yorumları gizle</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </li>
            </ul>
          </div>

          {/* BOX */}
          <div className={Scss.box}>
            <div className={Scss.boxTitle}>Etiketleme</div>

            {/* SETTING MENU */}
            <ul className={Scss.settingMenu}>
              <li>
                <p>Etiketlendiğin gönderileri profilinde kimler görebilir?</p>
                <button className="secondary-btn">
                  <FontAwesomeIcon icon={faUsers} />
                  Arkadaşların arkaşları
                </button>
              </li>

              <li>
                <p>
                  Bir gönderide etiketlendiğinde, gönderinin hedef kitlesine
                  gönderini göremeyen hangi kişileri eklemek istersin?
                </p>
                <button className="secondary-btn">
                  <FontAwesomeIcon icon={faUsers} />
                  Arkadaşlar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileAndTagPageContent;
