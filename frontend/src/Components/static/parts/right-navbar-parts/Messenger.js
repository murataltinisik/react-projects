// ? FONT AWESOME
import {
  faCommentDots,
  faEdit,
  faEllipsis,
  faMaximize,
  faSearch,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Scss from '../../style.module.scss';
import MessengerScss from './scss/messenger.module.scss';

class Messenger extends Component {
  constructor({ onMouseLeave, onTabOpen }) {
    super(onMouseLeave, onTabOpen);
    this.state = {
      onMouseLeave: onMouseLeave,
      onTabOpen: onTabOpen,
    };
  }
  render() {
    return (
      <li itemID="1" className="listItem">
        <a
          href="#"
          onMouseOut={this.onOutTabClose}
          onClick={this.state.onTabOpen}
        >
          <FontAwesomeIcon icon={faCommentDots} />
        </a>
        <div className={Scss.info}>Messenger</div>

        <div
          onMouseLeave={this.state.onMouseLeave}
          className={`${Scss.menu} ${MessengerScss.messengerContainer} d-none width-auto height-auto`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div
              className={`${MessengerScss.head} d-flex justify-content-between align-items-center p-1 px-2`}
            >
              <h4 className={MessengerScss.title}>Sohbetler</h4>
            </div>

            {/* MESSENGER */}
            <ul
              className={`${MessengerScss.navigate} d-flex justify-content-between align-items-center`}
            >
              <li className="mr-2">
                <FontAwesomeIcon icon={faEllipsis} />
              </li>
              <li className="mr-2">
                <a href="#">
                  <FontAwesomeIcon icon={faMaximize} />
                </a>
              </li>
              <li className="mr-2">
                <FontAwesomeIcon icon={faVideoCamera} />
              </li>
              <li className="mr-3">
                <a href="#">
                  <FontAwesomeIcon icon={faEdit} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div
              className={`${MessengerScss.searchMenu} ${MessengerScss.boxShadowNone} p-1`}
            >
              <div className="search-input">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input type="text" placeholder="Messenger'da Ara" />
              </div>
            </div>

            <div className={MessengerScss.body}>
              <div className="d-flex justify-content-between align-items-center p-1 px-2">
                <div className="d-flex justify-content-start align-items-center">
                  <div className={MessengerScss.image}>
                    <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                  </div>
                  <div className="d-flex direction-column ml-1">
                    <div className={MessengerScss.name}>Kübra Altınışık</div>
                    <div
                      className={`${MessengerScss.message} d-flex justify-content-between align-items-center`}
                    >
                      <div className={MessengerScss.content}>
                        Murat Abiciğim Nerdesin
                      </div>
                      <div className="elips"></div>
                      <div className={MessengerScss.createDate}>5 dk</div>
                    </div>
                  </div>
                </div>
                <div className={MessengerScss.isSee}></div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-1 px-2">
                <div className="d-flex justify-content-start align-items-center">
                  <div className={MessengerScss.image}>
                    <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                  </div>
                  <div className="d-flex direction-column ml-1">
                    <div className={MessengerScss.name}>Kübra Altınışık</div>
                    <div
                      className={`${MessengerScss.message} d-flex justify-content-between align-items-center`}
                    >
                      <div className={MessengerScss.content}>
                        Murat Abiciğim Nerdesin
                      </div>
                      <div className="elips"></div>
                      <div className={MessengerScss.createDate}>5 dk</div>
                    </div>
                  </div>
                </div>
                <div className={MessengerScss.isSee}></div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-1 px-2">
                <div className="d-flex justify-content-start align-items-center">
                  <div className={MessengerScss.image}>
                    <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                  </div>
                  <div className="d-flex direction-column ml-1">
                    <div className={MessengerScss.name}>Kübra Altınışık</div>
                    <div
                      className={`${MessengerScss.message} d-flex justify-content-between align-items-center`}
                    >
                      <div className={MessengerScss.content}>
                        Murat Abiciğim Nerdesin
                      </div>
                      <div className="elips"></div>
                      <div className={MessengerScss.createDate}>5 dk</div>
                    </div>
                  </div>
                </div>
                <div className={MessengerScss.isSee}></div>
              </div>
            </div>

            <div className={`${MessengerScss.foot} text-center py-1`}>
              <a className="primary-link">Messenger'da Tümünü Gör</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Messenger;
