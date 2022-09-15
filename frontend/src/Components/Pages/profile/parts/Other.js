import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faClock,
  faGear,
  faGrip,
  faMessage,
  faShare,
  faSliders,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

// ? SCSS
import ShipmentScss from '../../home/parts/styles/component-css/shipment.module.scss';
import Scss from './styles/other.module.scss';
import './styles/responsive/responsive.other.scss';

// ? TOP
import Shipment from '../../home/parts/center-components/shipment';

class Other extends Component {
  render() {
    return (
      <div
        id={Scss.OtherComponents}
        className="otherComponentsResp d-flex justify-content-between align-items-start"
      >
        {/* LEFT */}
        <div className={`${Scss.left} leftResp`}>
          <div className="card-2">
            <div className="title">Künye</div>

            <ul>
              <li className="secondary-btn text-center mt-1 p-05">
                Biyografi Ekle
              </li>
              <li className="secondary-btn text-center mt-1 p-05">
                Detayları Düzenle
              </li>
              <li className="secondary-btn text-center mt-1 p-05">Hobi Ekle</li>
              <li className="secondary-btn text-center mt-1 p-05">
                Öne Çıkarma Ekle
              </li>
            </ul>
          </div>

          <div className="card-2 mt-2">
            <div className="title">
              Fotoğraflar
              <a href="#" className="primary-link">
                Tüm Fotoğrafları Göster
              </a>
            </div>
          </div>

          <div className="card-2 mt-2">
            <div className="title">
              Arkadaşlar
              <a href="#" className="primary-link">
                Tüm Arkadaşları Göster
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${Scss.right} rightResp`}>
          {/* SHIPMENT */}
          <Shipment Scss={ShipmentScss} />

          {/* SUBMISSIONS */}
          <div className={`${Scss.submissions} card-2 mt-1`}>
            <div className="title">
              Gönderiler
              <ul className="d-flex justify-content-end align-items-center width-100">
                <li className="secondary-btn width-auto mr-1 p-05">
                  <FontAwesomeIcon icon={faSliders} />
                  <span className="ml-1">Filtreler</span>
                </li>

                <li className="secondary-btn width-auto p-05">
                  <FontAwesomeIcon icon={faGear} />
                  <span className="ml-1">Gönderileri Yönet</span>
                </li>
              </ul>
            </div>

            <div className="dark-hr mb-0"></div>

            <ul
              className={`${Scss.layoutSelection} d-flex justify-content-between`}
            >
              <li className={`${Scss.active} text-center width-50`}>
                <a href="#">
                  <FontAwesomeIcon icon={faBars} />
                  <span className="ml-1">Liste Görünümü</span>
                </a>
              </li>
              <li className="text-center width-50">
                <a href="#">
                  <FontAwesomeIcon icon={faGrip} />
                  <span className="ml-1">Izgara Görünümü</span>
                </a>
              </li>
            </ul>
          </div>

          {/* BIRTHDAY */}
          <div className={`${Scss.birthday} mt-1`}>
            <div className="send-card">
              {/* HEAD */}
              <div className="head d-flex justify-content-between align-items-center">
                <div className="send">
                  <div className="d-flex justify-content-start align-items-center">
                    {/* IMAGE */}
                    <div className="image">
                      <img src="https://scontent.fesb10-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_k1JGnPK0ssAX88Gqed&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb10-2.fna&oh=00_AT9sqJFCHxZOSZmehOdnPjTiF5vAlZ9ux63P3C1d2fYYhg&oe=63411EF8" />
                    </div>

                    {/* DETAIL */}
                    <div className="ml-1 d-flex direction-column justify-content-start align-items-start">
                      <div className="name">Murat Altınışık</div>

                      <div className="other">
                        <span>16 Şubat 1986</span>
                        <div className="elips"></div>
                        <span>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <div className="elips"></div>
                        <span>
                          <FontAwesomeIcon icon={faUsers} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="menu">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>

              {/* BODY */}
              <div className="body d-flex direction-column justify-content-center align-items-center">
                <div className={Scss.birthdayIcon}>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/1SViyXWaRzP.png" />
                </div>
                <div className={`${Scss.date} mt-1`}>
                  29 Aralık 2004 Tarihinde Doğdu
                </div>
              </div>

              {/* FOOT */}
              <div className="foot">
                <ul className="d-flex  justify-content-between align-items-center">
                  <li className="private-btn width-100">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="ml-1">Beğen</span>
                  </li>

                  <li className="private-btn width-100">
                    <FontAwesomeIcon icon={faMessage} />
                    <span className="ml-1">Yorum Yap</span>
                  </li>

                  <li className="private-btn width-100">
                    <FontAwesomeIcon icon={faShare} />
                    <span className="ml-1">Paylaş</span>
                  </li>
                </ul>
              </div>

              {/* COMMENT */}
              <div className="comment">
                <div className="input">
                  <div className="image">
                    <img src="https://scontent.fesb10-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p32x32&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_k1JGnPK0ssAX88Gqed&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb10-2.fna&oh=00_AT9lJU5W_f7DmXOLZU6kNF-35VOacPG4OXjl7c2D7aKiVw&oe=63411EF8" />
                  </div>

                  <div className="input">
                    <input
                      type="text"
                      placeholder="Yorum yaz..."
                      className="search-input"
                    />
                  </div>
                </div>

                <div className="info">Paylaşmak için enter tuşuna bas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Other;
