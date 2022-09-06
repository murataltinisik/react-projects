import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faBagShopping,
  faBars,
  faBell,
  faBook,
  faBullhorn,
  faChevronRight,
  faCircleInfo,
  faCommentDots,
  faCopyright,
  faDoorOpen,
  faEdit,
  faEllipsis,
  faFlag,
  faGear,
  faImagePortrait,
  faMaximize,
  faMoon,
  faSearch,
  faUser,
  faUsers,
  faVideoCamera,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from '../style.module.scss';
export class RightNavbar extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      profileMenuIndex: 0,
      element: document.querySelectorAll(
        '#rightNavbarContainer #ListContainer .listItem'
      ),
      profileMenuContainer: document.querySelectorAll('.profileMenu')[0],
      profileMenuElement: document.querySelectorAll('.profileMenu > ul > li'),
    };
  }

  componentDidMount() {
    this.state.element = document.querySelectorAll(
      '#rightNavbarContainer #ListContainer .listItem'
    );
    this.state.profileMenuElement = document.querySelectorAll(
      '.profileMenu > ul > li'
    );
    this.state.profileMenuContainer =
      document.querySelectorAll('.profileMenu')[0];
  }

  // ? ON TAB OPEN
  onTabOpen = e => {
    const mainElement = e.target.parentElement;
    let id = this.state.index;
    const isA = e.target.parentElement.getAttribute('itemid') !== null;
    const isSVG =
      e.target.parentElement.parentElement.getAttribute('itemid') !== null;
    const isPATH =
      e.target.parentElement.parentElement.parentElement.getAttribute(
        'itemid'
      ) !== null;

    if (isA) {
      id = mainElement.getAttribute('itemid');
    } else if (isSVG) {
      id = mainElement.parentElement.getAttribute('itemid');
    } else if (isPATH) {
      id = mainElement.parentElement.parentElement.getAttribute('itemid');
    }

    for (let i = 0; i < this.state.element.length; i++) {
      this.state.element[i].childNodes[2].style.display = 'none';
    }
    this.state.element[id].childNodes[2].style.display = 'block';
  };

  // ? ON SETTINGS DETAIL
  onSettingsDetail = e => {
    let id = this.state.profileMenuIndex;
    const mainElement = e.target.parentElement;
    const isSpan = e.target.parentElement.getAttribute('itemId') !== null;
    const isButton = e.target.parentElement.getAttribute('itemId') !== null;

    if (isSpan) {
      id = mainElement.getAttribute('itemid');
    } else if (isButton) {
      id = mainElement.getAttribute('itemid');
    }

    console.log(this.state.profileMenuContainer);
    this.state.profileMenuContainer.style.marginLeft = '-22.5rem';
  };

  render() {
    return (
      <div
        id="rightNavbarContainer"
        className={`${Scss.rightNavbar} d-flex justify-content-between align-items-center`}
      >
        <ul
          id="ListContainer"
          className="d-flex justify-content-between align-items-center"
        >
          {/* MENU */}
          <li itemID="0" className="listItem">
            <a href="#" onClick={this.onTabOpen}>
              <FontAwesomeIcon icon={faBars} />
            </a>
            <div className={Scss.info}>Menü</div>

            <div className={`${Scss.menu} d-none`}>
              <div
                className={`${Scss.head} d-flex justify-content-between align-items-center p-1 px-2`}
              >
                <h4 className={Scss.title}>Menü</h4>
              </div>

              <div className="d-flex justify-content-between align-items-start">
                <div className={`${Scss.searchMenu} p-1 px-2`}>
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
                              Çevrimiçi ve yakınlarda yapılacak etkinlikler ve
                              diğer şeyler organize et veya bul.
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
                              Arkadaşlarını veya tanıyor olabileceğin kişileri
                              ara.
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
                              Seninle ortak ilgi alanlarına sahip kişilerle
                              bağlantı kur.
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
                              En sevdiğin oyunları ve yayıncıları izle ve
                              bunlarla bağlantı kur.
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`${Scss.builderMenu}`}>
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

          {/* MESSENGER */}
          <li itemID="1" className="listItem">
            <a href="#" onClick={this.onTabOpen}>
              <FontAwesomeIcon icon={faCommentDots} />
            </a>
            <div className={Scss.info}>Messenger</div>

            <div
              className={`${Scss.menu} ${Scss.messengerContainer} d-none width-auto height-auto`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className={`${Scss.head} d-flex justify-content-between align-items-center p-1 px-2`}
                >
                  <h4 className={Scss.title}>Sohbetler</h4>
                </div>

                {/* MESSENGER */}
                <ul
                  className={`${Scss.navigate} d-flex justify-content-between align-items-center`}
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
                <div className={`${Scss.searchMenu} ${Scss.boxShadowNone} p-1`}>
                  <div className="search-input">
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                    <input type="text" placeholder="Messenger'da Ara" />
                  </div>
                </div>

                <div className={Scss.body}>
                  <div className="d-flex justify-content-between align-items-center p-1 px-2">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className={Scss.image}>
                        <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                      </div>
                      <div className="d-flex direction-column ml-1">
                        <div className={Scss.name}>Kübra Altınışık</div>
                        <div
                          className={`${Scss.message} d-flex justify-content-between align-items-center`}
                        >
                          <div className={Scss.content}>
                            Murat Abiciğim Nerdesin
                          </div>
                          <div className="elips"></div>
                          <div className={Scss.createDate}>5 dk</div>
                        </div>
                      </div>
                    </div>
                    <div className={Scss.isSee}></div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center p-1 px-2">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className={Scss.image}>
                        <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                      </div>
                      <div className="d-flex direction-column ml-1">
                        <div className={Scss.name}>Kübra Altınışık</div>
                        <div
                          className={`${Scss.message} d-flex justify-content-between align-items-center`}
                        >
                          <div className={Scss.content}>
                            Murat Abiciğim Nerdesin
                          </div>
                          <div className="elips"></div>
                          <div className={Scss.createDate}>5 dk</div>
                        </div>
                      </div>
                    </div>
                    <div className={Scss.isSee}></div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center p-1 px-2">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className={Scss.image}>
                        <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3H8EZVZrRu0AX8bO26F&_nc_ad=z-m&_nc_cid=1120&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_HfjJbFgU_1SA_Xw0E98ckOKpwDwjTPXeVt1V58u_q2w&oe=633D2A78" />
                      </div>
                      <div className="d-flex direction-column ml-1">
                        <div className={Scss.name}>Kübra Altınışık</div>
                        <div
                          className={`${Scss.message} d-flex justify-content-between align-items-center`}
                        >
                          <div className={Scss.content}>
                            Murat Abiciğim Nerdesin
                          </div>
                          <div className="elips"></div>
                          <div className={Scss.createDate}>5 dk</div>
                        </div>
                      </div>
                    </div>
                    <div className={Scss.isSee}></div>
                  </div>
                </div>

                <div className={`${Scss.foot} text-center py-1`}>
                  <a className="primary-link">Messenger'da Tümünü Gör</a>
                </div>
              </div>
            </div>
          </li>

          {/* NOTIFICATE */}
          <li itemID="2" className="listItem">
            <a href="#" onClick={this.onTabOpen}>
              <FontAwesomeIcon icon={faBell} />
            </a>
            <div className={Scss.info}>Bildirimler</div>

            <div
              className={`${Scss.menu} ${Scss.notificateContainer} d-none width-auto height-auto`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className={`${Scss.head} p-1 px-2`}>
                  <h4 className={Scss.title}>Bildirimler</h4>
                </div>

                {/* MESSENGER */}
                <ul
                  className={`${Scss.navigate} d-flex justify-content-between align-items-center`}
                >
                  <li className="mr-2">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </li>
                </ul>
              </div>

              <div className={`${Scss.container} px-2 mt-1`}>
                <ul
                  id="shownBtn"
                  className={`${Scss.shown} d-flex jusitfy-content-start align-items-center px-2 mt-1`}
                >
                  <li className="facebook-btn width-auto mr-2">Tümü</li>
                  <li className={`${Scss.notActive} facebook-btn width-auto`}>
                    Hiç Okunmayanlar
                  </li>
                </ul>

                <div className={Scss.prevNotificate}>
                  <div className="d-flex justify-content-between align-items-center px-2">
                    <div className={Scss.title}>Daha Öncekiler</div>
                    <div className={Scss.seeMore}>
                      <a href="#" className="primary-link">
                        Tümünü Gör
                      </a>
                    </div>
                  </div>

                  <div className={`${Scss.notificates}`} id="notificates">
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={Scss.image}>
                              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                            </div>
                            <div className="d-flex direction-column align-items-start pl-1">
                              <div className={Scss.message}>
                                Yeni bir arkadaş önerin var:
                                <b>Yusuf Altınışık</b>
                              </div>
                              <div className={Scss.createDate}>1 gün önce</div>
                            </div>
                            <div className={Scss.isSee}></div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="text-decoration-none">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={Scss.image}>
                              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                            </div>
                            <div className="d-flex direction-column align-items-start pl-1">
                              <div className={Scss.message}>
                                Yeni bir arkadaş önerin var:
                                <b>Yusuf Altınışık</b>
                              </div>
                              <div className={Scss.createDate}>1 gün önce</div>
                            </div>
                            <div className={Scss.isSee}></div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="text-decoration-none">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={Scss.image}>
                              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                            </div>
                            <div className="d-flex direction-column align-items-start pl-1">
                              <div className={Scss.message}>
                                Yeni bir arkadaş önerin var:
                                <b>Yusuf Altınışık</b>
                              </div>
                              <div className={Scss.createDate}>1 gün önce</div>
                            </div>
                            <div className={Scss.isSee}></div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="text-decoration-none">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={Scss.image}>
                              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                            </div>
                            <div className="d-flex direction-column align-items-start pl-1">
                              <div className={Scss.message}>
                                Yeni bir arkadaş önerin var:
                                <b>Yusuf Altınışık</b>
                              </div>
                              <div className={Scss.createDate}>1 gün önce</div>
                            </div>
                            <div className={Scss.isSee}></div>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <div className="d-flex justify-content-start align-items-center">
                            <div className={Scss.image}>
                              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX8g0LaA&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-YAFyR6cxMHJOd2A9BrsAFYypflWfb27k_xIkb852W-Q&oe=633D2A78" />
                            </div>
                            <div className="d-flex direction-column align-items-start pl-1">
                              <div className={Scss.message}>
                                Yeni bir arkadaş önerin var:
                                <b>Yusuf Altınışık</b>
                              </div>
                              <div className={Scss.createDate}>1 gün önce</div>
                            </div>
                            <div className={Scss.isSee}></div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* USERS */}
          <li itemID="3" className="listItem">
            <a href="#" onClick={this.onTabOpen}>
              <FontAwesomeIcon icon={faUser} />
            </a>
            <div className={Scss.info}>Hesap</div>

            <div
              className={`${Scss.menu} ${Scss.userProfileContainer} d-none width-auto height-auto`}
            >
              <div className="profileMenu">
                <div className={Scss.profile}>
                  <div
                    className={`${Scss.selectedProfile} px-2 py-05 d-flex justify-content-start align-items-center`}
                  >
                    <img src="https://scontent.fesb4-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jvAgaOmK2RAAX9V38AS&_nc_ht=scontent.fesb4-1.fna&oh=00_AT9daDbbsXxh0Fbrq5zuH8FOZJo5nyZHr6TeJavbEbLiHA&oe=633D2A78" />
                    <span className="ml-1">Murat Altınışık</span>
                  </div>
                  <div className="hr mb-0"></div>
                  <div
                    className={`${Scss.allProfileSee} private-btn text-left`}
                  >
                    Tüm Profileri Gör
                  </div>
                </div>

                <div className={`${Scss.profileMenu}`}>
                  <ul>
                    <li
                      onClick={this.onSettingsDetail}
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
                      onClick={this.onSettingsDetail}
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
                      onClick={this.onSettingsDetail}
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
                      <button>Çıkış Yap</button>
                    </li>

                    {/* MENU FOOTER */}
                    <li className={`${Scss.menuFooter}`}>
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

                  <ul>
                    <li
                      onClick={this.onSettingsDetail}
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
                      onClick={this.onSettingsDetail}
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
                      onClick={this.onSettingsDetail}
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
                      <button>Çıkış Yap</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default RightNavbar;
