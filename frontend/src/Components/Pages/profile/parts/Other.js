import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faClock,
  faClose,
  faGear,
  faGlobe,
  faGrip,
  faMessage,
  faPlus,
  faShare,
  faSliders,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

// ? SCSS
import ShipmentScss from '../../home/parts/styles/component-css/shipment.module.scss';
import Scss from './styles/other.module.scss';
import './styles/responsive/responsive.other.scss';

// ? ASSETS
import '../../../assets/PopUp/popup.scss';

// ? TOP
import Shipment from '../../home/parts/center-components/shipment';

let selections = [];
class Other extends Component {
  constructor() {
    super();
    this.state = {
      biographyForm: document.getElementById('biographyForm'),
      biographyBtn: document.getElementById('biographyBtn'),
    };
  }

  componentDidMount() {
    this.state.biographyForm = document.getElementById('biographyForm');
    this.state.biographyBtn = document.getElementById('biographyBtn');
  }

  addBiography = () => {
    this.state.biographyForm.style.display = 'block';
    this.state.biographyBtn.style.display = 'none';
  };

  biographyCancel = () => {
    this.state.biographyForm.style.display = 'none';
    this.state.biographyBtn.style.display = 'block';
  };

  // * SELECTION HOBIES
  selectionHobie = e => {
    selections.push(e.target.getAttribute('itemRef'));
    e.target.setAttribute('class', 'selection');
  };

  // * POPUP
  onOpenPopUp = e => {
    const popups = document.getElementsByClassName('popup');
    let ariaLabel = '#' + e.target.id;
    for (let i = 0; i < popups.length; i++) {
      if (popups[i].getAttribute('aria-label') === ariaLabel) {
        popups[i].style.display = 'flex';
      }
    }
  };

  onClosePopUp = e => {
    let isSvg = e.target.tagName;
    let isPath = e.target.tagName;
    const popups = document.getElementsByClassName('popup');
    let ariaLabel;

    if (isSvg) {
      ariaLabel =
        e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'aria-label'
        );
    } else if (isPath) {
      ariaLabel =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'aria-label'
        );
    }

    for (let i = 0; i < popups.length; i++) {
      if (popups[i].getAttribute('aria-label') === ariaLabel) {
        popups[i].style.display = 'none';
      }
    }
  };

  render() {
    return (
      <div
        id={Scss.OtherComponents}
        className="otherComponentsResp d-flex justify-content-between align-items-start"
      >
        {/* DETAIL EDITING */}
        <div
          className="popup"
          onMouseLeave={() =>
            (document.getElementsByClassName('popup')[0].style.display = 'none')
          }
          aria-label="#detailContainer"
        >
          <div className="container detail-container">
            {/* HEAD */}
            <div className="head">
              <div className="title">Detayları Düzenle</div>
              <div className="close" onClick={this.onClosePopUp}>
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* TITLE & DESCRIPTION */}
              <div>
                <div className="title">Künyeni Özelleştir</div>
                <div className="description">
                  Seçtiğin detaylar herkese açık olacak.
                </div>
              </div>

              {/* CONTENT */}
              <div className="content">
                <ul>
                  <li className="d-flex direction-column">
                    <span>İş</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faPlus} />
                      <span>Bir İşyeri Ekle</span>
                    </a>
                  </li>

                  <li className="d-flex direction-column">
                    <span>Eğitim</span>
                    <div className="d-flex direction-column align-items-start justify-content-center">
                      <a href="#">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Lise Ekle</span>
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Üniversite Ekle</span>
                      </a>
                    </div>
                  </li>

                  <li className="d-flex direction-column">
                    <span>Yaşadığı Şehir</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faPlus} />
                      <span>Yaşadığı şehri ekle</span>
                    </a>
                  </li>

                  <li className="d-flex direction-column">
                    <span>Memleket</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faPlus} />
                      <span>Memleket Ekle</span>
                    </a>
                  </li>

                  <li className="d-flex direction-column">
                    <span>İlişki</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faPlus} />
                      <span>İlişki durumunu Ekle</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* FOOT */}
            <div className="foot">
              <a className="primary-link">Bilgilerini Güncelle</a>
              <div className="group">
                <button className="secondary-btn">İptal</button>
                <button className="primary-btn">Kaydet</button>
              </div>
            </div>
          </div>
        </div>

        {/* HOBIES ADD */}
        <div
          className="popup"
          onMouseLeave={() =>
            (document.getElementsByClassName('popup')[1].style.display = 'none')
          }
          aria-label="#hobiesContainer"
        >
          <div className="container hobies-container">
            {/* HEAD */}
            <div className="head">
              <div className="title">
                <p>Hobi Ekle</p>
                <p className="description">
                  Neler yapmayı seviyorsun? Aşağıdaki popüler hobilerden seçim
                  yap veya başka hobiler ekle.
                </p>
              </div>
              <div className="close" onClick={this.onClosePopUp}>
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* TITLE & DESCRIPTION */}
              <div>
                <div className="title text-center">TAVSİYE EDILEN HOBİLER</div>
              </div>

              {/* CONTENT */}
              <div className="content">
                <ul>
                  <li itemRef="0" onClick={this.selectionHobie}>
                    Kitap Okuma
                  </li>
                  <li itemRef="1" onClick={this.selectionHobie}>
                    Müzik Dinleme
                  </li>
                  <li itemRef="2" onClick={this.selectionHobie}>
                    Seyahat
                  </li>
                  <li itemRef="3" onClick={this.selectionHobie}>
                    Film İzleme
                  </li>
                  <li itemRef="4" onClick={this.selectionHobie}>
                    Doğa Yürüyüşü
                  </li>
                  <li itemRef="5" onClick={this.selectionHobie}>
                    Alışveriş
                  </li>
                  <li itemRef="6" onClick={this.selectionHobie}>
                    Yürüyüş
                  </li>
                  <li itemRef="7" onClick={this.selectionHobie}>
                    Doğa Fotoğrafçılığı
                  </li>
                  <li itemRef="8" onClick={this.selectionHobie}>
                    Yemek Pişirme
                  </li>
                  <li itemRef="9" onClick={this.selectionHobie}>
                    Araba Sürme
                  </li>
                  <li className="search">Başka Ara</li>
                </ul>
              </div>
            </div>

            {/* FOOT */}
            <div className="foot">
              <a
                href="javascript:void(0)"
                className="dark-link text-decoration-none"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span className="ml-1">Hobiler Herkese Açıktır</span>
              </a>
            </div>
          </div>
        </div>

        {/* EDIT FEATURED */}
        <div
          className="popup"
          onMouseLeave={() =>
            (document.getElementsByClassName('popup')[2].style.display = 'none')
          }
          aria-label="#editFeaturedContainer"
        >
          <div className="container featured-container">
            {/* HEAD */}
            <div className="head">
              <div className="title">
                <p>Öne Çıkanları Düzenle</p>
              </div>
              <div className="close" onClick={this.onClosePopUp}>
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* TITLE & DESCRIPTION */}
              <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gL1slwup025.png" />
              </div>

              <div className="content">
                Tüm arkadaşlarının görmesi için en sevdiğin fotoğrafları ve
                hikayeleri burada öne çıkar.
                <button className="facebook-btn mt-1">Yeni Ekle</button>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT */}
        <div className={`${Scss.left} leftResp`}>
          <div className={`${Scss.tags} card-2`}>
            <div className="title">Künye</div>

            <ul>
              <li onClick={this.addBiography}>
                <div
                  className="secondary-btn text-center mt-1 p-05"
                  id="biographyBtn"
                >
                  Biyografi Ekle
                </div>

                <div className={Scss.hide} id="biographyForm">
                  <textarea placeholder="Kim olduğunu anlat"></textarea>
                  <div className={Scss.detail}>
                    <div className={Scss.characterCount}>
                      100 Karakter kaldı.
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className={Scss.tagStatus}>
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Herkese Açık</span>
                      </div>
                      <div className="d-flex">
                        <button
                          className="secondary-btn mr-1"
                          onMouseDown={this.biographyCancel}
                        >
                          İptal
                        </button>
                        <button className="secondary-btn">Kaydet</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="secondary-btn text-center mt-1 p-05"
                id="detailContainer"
                onClick={this.onOpenPopUp}
              >
                Detayları Düzenle
              </li>

              <li
                className="secondary-btn text-center mt-1 p-05"
                id="hobiesContainer"
                onClick={this.onOpenPopUp}
              >
                Hobi Ekle
              </li>

              <li
                className="secondary-btn text-center mt-1 p-05"
                id="editFeaturedContainer"
                onClick={this.onOpenPopUp}
              >
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
