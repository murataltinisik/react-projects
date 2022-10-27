import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faBell,
  faBirthdayCake,
  faCalendar,
  faChevronDown,
  faComment,
  faFlag,
  faFlagCheckered,
  faHeart,
  faSquare,
  faStore,
  faTag,
  faUserGroup,
  faUserPlus,
  faUsers,
  faUsersBetweenLines,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? NOTIFICATION SCSS
import Scss from '../../../assets/scss/settings-scss/contents-scss/notification.module.scss';

export class NotificationPageContent extends Component {
  render() {
    return (
      <>
        {/* TITLE */}
        <h3 className="title">Bildirim Ayarları</h3>

        {/* NOTIFICATION PAGE CONTENT */}
        <div id={Scss.NotificationPageContent}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Yorumlar</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faTag} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Etiketler</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faBell} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Hatırlatmalar</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faSquare} />
              <div className={Scss.detail}>
                <div className={Scss.title}>
                  Seninle İlgili diğer hareketler
                </div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faUsers} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Arkadaşlarının Güncellemeleri</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faUserPlus} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Arkadaşlık İstekleri</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faUsersBetweenLines} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Tanıyor olabileceğin kişiler</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faBirthdayCake} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Doğum Günleri</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Gruplar</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faVideo} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Video</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendar} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Etkinlikler</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendar} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Stages</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faFlag} />
              <div className={Scss.detail}>
                <div className={Scss.title}>
                  Yönettiğin sayfalar ve profiller
                </div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faFlagCheckered} />
              <div className={Scss.detail}>
                <div className={Scss.title}>
                  Takip ettiğin sayfalar ve profiller
                </div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faStore} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Marketplace</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>

            <li>
              <FontAwesomeIcon icon={faHeart} />
              <div className={Scss.detail}>
                <div className={Scss.title}>Bağış kampanyaları ve Krizler</div>
                <div className={Scss.info}>Anında İlet, E-posta, SMS</div>
              </div>
              <FontAwesomeIcon className={Scss.icon} icon={faChevronDown} />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NotificationPageContent;
