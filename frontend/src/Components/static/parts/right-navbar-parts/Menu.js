// ? FONT AWESOME
import {
  faBagShopping,
  faBars,
  faBook,
  faBullhorn,
  faEdit,
  faFlag,
  faImagePortrait,
  faSearch,
  faUsers,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Scss from '../../style.module.scss';
import './scss/responsive/menu-responsive.scss';

class Menu extends Component {
  constructor({ onMouseLeave, onTabOpen }) {
    super(onMouseLeave, onTabOpen);
    this.state = {
      onMouseLeave: onMouseLeave,
      onTabOpen: onTabOpen,
    };
  }
  render() {
    return (
      <li itemID="0" className="listItem">
        <a href="#" onClick={this.state.onTabOpen}>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <div className={Scss.info}>Menü</div>

        <div
          className={`${Scss.menu} menu d-none`}
          onMouseLeave={this.state.onMouseLeave}
        >
          <div
            className={`${Scss.head} headResp d-flex justify-content-between align-items-center p-1 px-2-important`}
          >
            <h4 className={Scss.title}>Menü</h4>
          </div>

          <div className="d-flex justify-content-between align-items-start">
            <div className={`${Scss.searchMenu} searchMenu p-1 px-2`}>
              <div className="search-input">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input type="text" placeholder="Menü Ara" />
              </div>

              {/* CATEGORIES */}
              <div className={`${Scss.social} ${Scss.category}`}>
                <div className={`${Scss.title}`}>
                  <p>Sosyal</p>
                </div>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-start align-items-center private-btn dark-link text-decoration-none"
                    >
                      <div className={Scss.icon}>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" />
                      </div>
                      <div className={Scss.detail}>
                        <div className={Scss.title}>Etkinlikler</div>
                        <div className={Scss.description}>
                          Çevrimiçi ve yakınlarda yapılacak etkinlikler ve diğer
                          şeyler organize et veya bul.
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-start align-items-center private-btn dark-link text-decoration-none"
                    >
                      <div className={Scss.icon}>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
                      </div>
                      <div className={Scss.detail}>
                        <div className={Scss.title}>Arkdaşlarını Bul</div>
                        <div className={Scss.description}>
                          Arkadaşlarını veya tanıyor olabileceğin kişileri ara.
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-start align-items-center private-btn dark-link text-decoration-none"
                    >
                      <div className={Scss.icon}>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
                      </div>
                      <div className={Scss.detail}>
                        <div className={Scss.title}>Gruplar</div>
                        <div className={Scss.description}>
                          Seninle ortak ilgi alanlarına sahip kişilerle bağlantı
                          kur.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="hr mb-0 mt-2"></div>

              <div className={`${Scss.fun} ${Scss.category}`}>
                <div className={`${Scss.title}`}>
                  <p>Eğlence</p>
                </div>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="d-flex justify-content-start align-items-center private-btn dark-link text-decoration-none"
                    >
                      <div className={Scss.icon}>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png" />
                      </div>
                      <div className={Scss.detail}>
                        <div className={Scss.title}>Oyun Videoları</div>
                        <div className={Scss.description}>
                          En sevdiğin oyunları ve yayıncıları izle ve bunlarla
                          bağlantı kur.
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${Scss.builderMenu} builderMenu`}>
              <h5>Oluştur</h5>

              <ul>
                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    Gönderi
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faBook} />
                    </span>
                    Hikaye
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faVideoCamera} />
                    </span>
                    Oda
                  </a>
                </li>

                <div className="hr mx-1 mt-05 mb-05"></div>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faFlag} />
                    </span>
                    Sayfa
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faBullhorn} />
                    </span>
                    Reklam
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                    Grup
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faImagePortrait} />
                    </span>
                    Etkinlik
                  </a>
                </li>

                <li className="additionalButton btn-hover">
                  <a href="#" className="text-decoration-none dark-link">
                    <span>
                      <FontAwesomeIcon icon={faBagShopping} />
                    </span>
                    Marketplace İlanı
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Menu;
