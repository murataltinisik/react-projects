import React from 'react';
// ? MODULE CSS
import Scss from './style.module.scss';

// ? FONT AWESOME
import { faChevronDown, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section() {
  return (
    <section
      id={Scss.SectionContainer}
      className="d-flex justify-content-between"
    >
      <div className={Scss.left}>
        {/* LEFT MENU */}
        <ul id={Scss.leftMenu}>
          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className={`${Scss.userImage} mr-1`}
                src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=_8ak1Gi-hKwAX9W7f-1&_nc_ht=scontent.fesb3-2.fna&oh=00_AT_-03KAcZywVKfL26Wa3kUb-VbDzEmit2amgftExC7aeA&oe=63314CF8"
              />
              Murat Altınışık
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
              />
              Arkadaşlarını Bul
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
              />
              Gruplar
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
              />
              Marketplace
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
              />
              Watch
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
              />
              Anılar
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
              />
              Kaydedilenler
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
              />
              Sayfalar
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
              />
              Etkinlikler
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
              />
              En Yeniler
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png"
              />
              Favoriler
            </a>
          </li>

          <li className={`${Scss.hideMenuItem} hideMenuItem`}>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
              />
              Bağış Kampanyaları
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BNA7dRpTdeH.png"
              />
              Canlı Videolar
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png"
              />
              COVID-19 Bilgi Merkezi
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png"
              />
              Duygusal Sağlık
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png"
              />
              Facebook Pay
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"
              />
              İklim Bilgi Merkezi
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/CpdWrf1nzR2.png"
              />
              Kan Bağışları
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
              />
              Messenger
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
              />
              Messenger Kids
            </a>
          </li>

          <li>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dark-link"
            >
              <img
                className="mr-1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
              />
              Oyun Oyna
            </a>
          </li>

          {/* MORE MENU ITEM */}
          <li className={Scss.moreMenuItem}>
            <button>
              <span className="mr-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
              Daha Fazlasını Gör
            </button>
          </li>

          {/* MENU FOOTER */}
          <li className={`${Scss.menuFooter}`}>
            <a href="#" className="light-link">
              Gizlilik
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Koşullar
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Reklam
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Ad Choices
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Çerezler
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Diğer
            </a>
            <div className={Scss.elips}></div>
            <a href="#" className="light-link">
              Meta <FontAwesomeIcon icon={faCopyright} /> 2022
            </a>
          </li>
        </ul>
      </div>

      <div className={Scss.center}>
        <h1>CONTENT</h1>
      </div>

      <div className={Scss.right}>
        <h1>GROUPS</h1>
      </div>
    </section>
  );
}

export default Section;
