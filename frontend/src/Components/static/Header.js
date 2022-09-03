// ? MODULE SCSS
import Scss from './style.module.scss';

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
  faEllipsis,
  faMaximize,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <div
        id={Scss.HeaderContainer}
        className="px-1"
      >
        <header className="d-flex justify-content-between align-items-center">
          {/* TITLE */}
          <div
            className={`${Scss.title} d-flex justify-content-between align-items-center`}
          >
            <img src="https://logosvector.net/wp-content/uploads/2022/02/facebook-icon-vector.png" />
            <label className="search-input">
              <FontAwesomeIcon
                icon={faSearch}
                className="icon"
              />
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
                <a
                  href="#"
                  className={Scss.activeLink}
                >
                  <FontAwesomeIcon icon={faHome} />
                </a>
                <div
                  className={Scss.info}
                  id="abc"
                >
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

                    <ul>
                      <li>
                        <a
                          href="#"
                          className="secondary-link"
                        >
                          <FontAwesomeIcon icon={faEllipsis} />
                        </a>
                      </li>
                    </ul>
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
