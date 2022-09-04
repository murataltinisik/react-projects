// ? MODULE SCSS
import Scss from './style.module.scss';

// ? ASSETS SCSS
import '../assets/Button/button.scss';
import '../assets/Link/link.scss';

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
  faPager,
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
                    </div>
                    <div className={`${Scss.builderMenu} p-1 px-2`}>
                      <h5>Oluştur</h5>

                      <ul>
                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faEdit} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Gönderi
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faBook} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Hikaye
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faVideoCamera} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Oda
                          </a>
                        </li>

                        <div className="hr"></div>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faFlag} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Sayfa
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faBullhorn} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Reklam
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faUsers} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Grup
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faImagePortrait} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
                            Etkinlik
                          </a>
                        </li>

                        <li className="additionalButton">
                          <span>
                            <FontAwesomeIcon icon={faBagShopping} />
                          </span>

                          <a
                            href="#"
                            className="text-decoration-none dark-link"
                          >
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
