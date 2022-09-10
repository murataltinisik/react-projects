import React, { Component } from 'react';

// ? CAROUSEL
import '../../assets/Card/card.scss';
import '../../assets/Card/card2.scss';
import '../../assets/Card/send-card.scss';

// ? FONT AWESOME
import {
  faBars,
  faCamera,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCirclePlus,
  faClock,
  faClose,
  faEdit,
  faEllipsis,
  faGear,
  faGrip,
  faMessage,
  faShare,
  faSliders,
  faThumbsUp,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? SCSS
import Scss from './style.module.scss';
import ShipmentScss from '../home/parts/styles/component-css/shipment.module.scss';

// ? TOP
import Shipment from '../home/parts/center-components/shipment';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      next: document.getElementById('next'),
      prev: document.getElementById('prev'),
      groups: document.querySelectorAll('.cardContainer .group'),
      container: document.getElementsByClassName('cards')[0],
    };
  }

  componentDidMount() {
    this.state.next = document.getElementById('next');
    this.state.prev = document.getElementById('prev');
    this.state.groups = document.querySelectorAll('.cardContainer .group');
    this.state.container = document.getElementsByClassName('cards')[0];
  }

  // ? BUTTON HIDE
  buttonHide = (component, opacity, display) => {
    if (component === 'next') {
      setTimeout(() => {
        this.state.next.style.opacity = opacity;
      }, 500);
      this.state.next.style.display = display;
    } else if (component === 'prev') {
      setTimeout(() => {
        this.state.prev.style.opacity = opacity;
      }, 500);
      this.state.prev.style.display = display;
    }
  };

  // ? NEXT
  onNext = () => {
    let counter = this.state.counter++;

    if (counter >= this.state.groups.length - 1) {
      counter = this.state.groups.length - 1;
      this.buttonHide('next', 0, 'none');
    }

    this.state.container.style.left = `-${98.675 * counter}%`;

    this.buttonHide('prev', 1, 'block');
    console.log(counter);
  };

  // ? PREV
  onPrev = () => {};

  render() {
    return (
      <div id={Scss.ProfileContainer}>
        {/* PROFILE */}
        <div className={Scss.container}>
          <div id={Scss.Profile}>
            {/* COVER */}
            <div className={Scss.cover}>
              <div className={Scss.coverAddBtn}>
                <button className="white-btn">
                  <FontAwesomeIcon icon={faCamera} />
                  <span className="ml-1">Kapak Fotoğrafı Ekle</span>
                </button>
              </div>
            </div>

            {/* USER & BUTTON GROUP */}
            <div className="d-flex justify-content-between align-items-center px-4">
              {/* USER */}
              <div
                className={`${Scss.user} d-flex justify-content-start align-items-end`}
              >
                <div className={Scss.image}>
                  <img src="https://scontent.fesb4-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_k1JGnPK0ssAX8fryJI&_nc_ht=scontent.fesb4-1.fna&oh=00_AT87hiFH0GgsZJT0fvgNfPW7ppcCqpa5eYL8QgPjQ5uY5Q&oe=63411EF8" />
                  <FontAwesomeIcon className={Scss.icon} icon={faCamera} />
                </div>
                <div className={Scss.name}>Murat Altınışık</div>
              </div>

              {/* BUTTON GROUP */}
              <div className={Scss.userOperation}>
                <button className="primary-btn width-auto p-0 position-relative">
                  <FontAwesomeIcon icon={faCirclePlus} />
                  <span className="ml-1">Hikayeye ekleme yap</span>
                </button>
                <button className="light-btn ml-1">
                  <FontAwesomeIcon icon={faEdit} />
                  <span className="ml-1">Profili Düzenle</span>
                </button>
              </div>
            </div>

            {/* PROFILE MENU */}
            <div
              className={`${Scss.menu} d-flex justify-content-between align-items-center px-4`}
            >
              <ul className="d-flex justify-content-start align-items-center">
                <li className={Scss.active}>
                  <a href="#" className="private-btn text-decoration-none">
                    Gönderiler
                  </a>
                </li>
                <li>
                  <a href="#" className="private-btn text-decoration-none">
                    Hakkında
                  </a>
                </li>
                <li>
                  <a href="#" className="private-btn text-decoration-none">
                    Arkadaşlar
                  </a>
                </li>
                <li>
                  <a href="#" className="private-btn text-decoration-none">
                    Fotoğraflar
                  </a>
                </li>
                <li>
                  <a href="#" className="private-btn text-decoration-none">
                    Videolar
                  </a>
                </li>
                <li>
                  <a href="#" className="private-btn text-decoration-none">
                    Yer Bildirimleri
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="private-btn text-decoration-none"
                  >
                    Diğer
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </a>
                </li>
              </ul>

              <div className={Scss.otherMenu}>
                <button className="private-btn">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div id={Scss.Carousel} className="cardContainer">
          {/* HEAD */}
          <div className="head d-flex justify-content-between align-items-center">
            <h5>Tanıyor Olabileceğin Kişiler</h5>
            <button className="menu btn">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>

          {/* CARDS */}
          <div className="cards d-flex justify-content-start align-items-center">
            <div className="group d-flex justify-content-start align-items-center">
              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group d-flex justify-content-start align-items-center">
              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group d-flex justify-content-start align-items-center">
              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group d-flex justify-content-start align-items-center">
              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group d-flex justify-content-start align-items-center">
              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="head">
                  <FontAwesomeIcon icon={faClose} />
                </div>

                <div className="body">
                  <div className="image">
                    <img src="https://istanbulsinopspor.com/wp-content/uploads/1988/07/omerresimyok.jpg" />
                  </div>

                  <div className="content">Kübra Altınışık</div>

                  <div className="foot">
                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Arkadaşı Ekle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="navigation">
            <button id="prev" onClick={this.onPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id="next" onClick={this.onNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* OTHER */}
        <div
          id={Scss.OtherComponents}
          className="d-flex justify-content-between align-items-start"
        >
          {/* LEFT */}
          <div className={Scss.left}>
            <div className="card-2">
              <div className="title">Künye</div>

              <ul>
                <li className="secondary-btn text-center mt-1 p-05">
                  Biyografi Ekle
                </li>
                <li className="secondary-btn text-center mt-1 p-05">
                  Detayları Düzenle
                </li>
                <li className="secondary-btn text-center mt-1 p-05">
                  Hobi Ekle
                </li>
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
          <div className={Scss.right}>
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
      </div>
    );
  }
}

export default Section;
