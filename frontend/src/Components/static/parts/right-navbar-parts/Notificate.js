import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsis } from '@fortawesome/free-solid-svg-icons';

// ? STYLE
import Scss from '../../style.module.scss';
import NotificateScss from './scss/notificate.module.scss';

class Notificate extends Component {
  constructor({ onMouseLeave, onTabOpen }) {
    super(onMouseLeave, onTabOpen);
    this.state = {
      onMouseLeave: onMouseLeave,
      onTabOpen: onTabOpen,
    };
  }
  render() {
    return (
      <li itemID="2" className="listItem">
        <a href="#" onClick={this.state.onTabOpen}>
          <FontAwesomeIcon icon={faBell} />
        </a>
        <div className={Scss.info}>Bildirimler</div>

        <div
          onMouseLeave={this.state.onMouseLeave}
          className={`${Scss.menu} ${NotificateScss.notificateContainer} d-none width-auto height-auto`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className={`${NotificateScss.head} p-1 px-2`}>
              <h4 className={NotificateScss.title}>Bildirimler</h4>
            </div>

            {/* MESSENGER */}
            <ul
              className={`${NotificateScss.navigate} d-flex justify-content-between align-items-center`}
            >
              <li className="mr-2">
                <FontAwesomeIcon icon={faEllipsis} />
              </li>
            </ul>
          </div>

          <div className={`${NotificateScss.container} px-2 mt-1`}>
            <ul
              id="shownBtn"
              className={`${NotificateScss.shown} d-flex jusitfy-content-start align-items-center px-2 mt-1`}
            >
              <li className="facebook-btn width-auto mr-2">Tümü</li>
              <li
                className={`${NotificateScss.notActive} facebook-btn width-auto`}
              >
                Hiç Okunmayanlar
              </li>
            </ul>

            <div className={NotificateScss.prevNotificate}>
              <div className="d-flex justify-content-between align-items-center px-2">
                <div className={NotificateScss.title}>Daha Öncekiler</div>
                <div className={NotificateScss.seeMore}>
                  <a href="#" className="primary-link">
                    Tümünü Gör
                  </a>
                </div>
              </div>

              <div className={`${NotificateScss.notificates}`} id="notificates">
                <ul>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className={NotificateScss.image}>
                          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                        </div>
                        <div className="d-flex direction-column align-items-start pl-1">
                          <div className={NotificateScss.message}>
                            Yeni bir arkadaş önerin var:
                            <b>Yusuf Altınışık</b>
                          </div>
                          <div className={NotificateScss.createDate}>
                            1 gün önce
                          </div>
                        </div>
                        <div className={NotificateScss.isSee}></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className={NotificateScss.image}>
                          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                        </div>
                        <div className="d-flex direction-column align-items-start pl-1">
                          <div className={NotificateScss.message}>
                            Yeni bir arkadaş önerin var:
                            <b>Yusuf Altınışık</b>
                          </div>
                          <div className={NotificateScss.createDate}>
                            1 gün önce
                          </div>
                        </div>
                        <div className={NotificateScss.isSee}></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className={NotificateScss.image}>
                          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                        </div>
                        <div className="d-flex direction-column align-items-start pl-1">
                          <div className={NotificateScss.message}>
                            Yeni bir arkadaş önerin var:
                            <b>Yusuf Altınışık</b>
                          </div>
                          <div className={NotificateScss.createDate}>
                            1 gün önce
                          </div>
                        </div>
                        <div className={NotificateScss.isSee}></div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className={NotificateScss.image}>
                          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                        </div>
                        <div className="d-flex direction-column align-items-start pl-1">
                          <div className={NotificateScss.message}>
                            Yeni bir arkadaş önerin var:
                            <b>Yusuf Altınışık</b>
                          </div>
                          <div className={NotificateScss.createDate}>
                            1 gün önce
                          </div>
                        </div>
                        <div className={NotificateScss.isSee}></div>
                      </div>
                    </a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className={NotificateScss.image}>
                          <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                        </div>
                        <div className="d-flex direction-column align-items-start pl-1">
                          <div className={NotificateScss.message}>
                            Yeni bir arkadaş önerin var:
                            <b>Yusuf Altınışık</b>
                          </div>
                          <div className={NotificateScss.createDate}>
                            1 gün önce
                          </div>
                        </div>
                        <div className={NotificateScss.isSee}></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Notificate;
