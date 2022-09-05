// ? MODULE SCSS
import Scss from './style.module.scss';

// ? ASSETS SCSS
import '../assets/Button/button.scss';
import '../assets/Link/link.scss';
import '../assets/Display/flex.scss';
import '../assets/MarginPadding/margin-padding.scss';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHome,
  faUsers,
  faTv,
  faStore,
  faPeopleGroup,
  faCommentDots,
  faBell,
  faUser,
  faBars,
  faEdit,
  faBook,
  faVideoCamera,
  faFlag,
  faBullhorn,
  faImagePortrait,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <div id={Scss.HeaderContainer} className="px-1">
        <header className="d-flex justify-content-between align-items-center">
          {/* TITLE */}
          <div
            className={`${Scss.title} d-flex justify-content-between align-items-center`}
          >
            <img src="https://logosvector.net/wp-content/uploads/2022/02/facebook-icon-vector.png" />
            <label className="search-input">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input
                type="text"
                className="search"
                placeholder="Facebook'ta Ara"
              />
            </label>
          </div>

          {/* NAVBAR */}
          <div
            className={`${Scss.navbar} d-flex justify-content-between align-items-center`}
          >
            <ul className="d-flex justify-content-between align-items-center">
              <li className={Scss.active}>
                <a href="#" className={Scss.activeLink}>
                  <FontAwesomeIcon icon={faHome} />
                </a>
                <div className={Scss.info} id="abc">
                  Anasayfa
                </div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faUsers} />
                </a>
                <div className={Scss.info}>Arkadaşlar</div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTv} />
                </a>
                <div className={Scss.info}>Watch</div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faStore} />
                </a>
                <div className={Scss.info}>Marketplace</div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </a>
                <div className={Scss.info}>Grup</div>
              </li>
            </ul>
          </div>

          {/* RIGHT NAVBAR */}
          <div
            className={`${Scss.rightNavbar} d-flex justify-content-between align-items-center`}
          >
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBars} />
                </a>
                <div className={Scss.info}>Menü</div>

                <div className={Scss.menu}>
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
                                  Çevrimiçi ve yakınlarda yapılacak etkinlikler
                                  ve diğer şeyler organize et veya bul.
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
                                <div className={Scss.title}>
                                  Arkdaşlarını Bul
                                </div>
                                <div className={Scss.description}>
                                  Arkadaşlarını veya tanıyor olabileceğin
                                  kişileri ara.
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
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faEdit} />
                            </span>
                            Gönderi
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faBook} />
                            </span>
                            Hikaye
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faVideoCamera} />
                            </span>
                            Oda
                          </a>
                        </li>

                        <div className="hr mx-1 mt-05 mb-05"></div>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faFlag} />
                            </span>
                            Sayfa
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faBullhorn} />
                            </span>
                            Reklam
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faUsers} />
                            </span>
                            Grup
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            <span>
                              <FontAwesomeIcon icon={faImagePortrait} />
                            </span>
                            Etkinlik
                          </a>
                        </li>

                        <li className="additionalButton btn-hover">
                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
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

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCommentDots} />
                </a>
                <div className={Scss.info}>Messenger</div>

                <div className={Scss.menu}>dsfa</div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBell} />
                </a>
                <div className={Scss.info}>Bildirimler</div>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faUser} />
                </a>
                <div className={Scss.info}>Hesap</div>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
