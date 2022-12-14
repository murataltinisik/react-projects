import React, { Component } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faCirclePlus,
  faClose,
  faCropSimple,
  faEdit,
  faImages,
  faPlus,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

// ? SCSS
import Scss from '../../../assets/scss/profile-scss/head.module.scss';
import '../../../assets/scss/profile-scss/responsive/responsive.head.scss';

// ? ASSETS
import '../../../assets/css/Dropdown/dropdown.scss';

// * REACT ROUTER 5.2.0
import { NavLink, withRouter } from 'react-router-dom';

class Head extends Component {
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

  // * DROPDOWN
  openDropdownMenu = e => {
    const dropdowns = document.getElementsByClassName('dropdown');
    let ariaLabel = '#' + e.target.id;
    let isPath = e.target.tagName === 'path';

    if (isPath) {
      ariaLabel = '#' + e.target.parentElement.parentElement.id;
    }

    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].getAttribute('aria-label') === ariaLabel) {
        dropdowns[i].style.display = 'flex';
      }
    }
  };

  render() {
    return (
      <div className={`${Scss.container} containerResp`}>
        {/* PROFILE EDIT CONTAINER */}
        <div
          className="popup profileEditPopup"
          onMouseLeave={() =>
            (document.getElementsByClassName('popup')[0].style.display = 'none')
          }
          aria-label="#profileEditContainer"
        >
          <div className="container profile-edit-container">
            {/* HEAD */}
            <div className="head">
              <div className="title">Profilini D??zenle</div>
              <div className="close" onClick={this.onClosePopUp}>
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* CONTENT */}
              <div className="content">
                {/* USER IMAGE */}
                <div className="userImage">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="title">Profil Resmi</div>
                    <a href="#" className="primary-link">
                      Ekle
                    </a>
                  </div>

                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KGMN7pZGaI8AX9wkVob&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8VeKixyjxvp1i9pz7bKBb_8iMnDIpCSvzhx25Ra0MwSQ&oe=634CFC78" />
                </div>

                {/* COVER IMAGE */}
                <div className="coverImage">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className={Scss.title}>Kapak Foto??raf??</div>
                    <a href="#" className="primary-link">
                      Ekle
                    </a>
                  </div>

                  <div className="coverView"></div>
                </div>
              </div>
            </div>

            {/* FOOT */}
            <div className="foot">
              <a className="primary-link">Bilgilerini G??ncelle</a>
              <div className="group">
                <button className="secondary-btn">??ptal</button>
                <button className="primary-btn">Kaydet</button>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE IMAGE UPDATE */}
        <div
          className="popup"
          onMouseLeave={() =>
            (document.getElementsByClassName('popup')[1].style.display = 'none')
          }
          aria-label="#profileImageContainer"
        >
          <div className="container profile-image-container">
            {/* HEAD */}
            <div className="head">
              <div className="title">Profilini D??zenle</div>
              <div className="close" onClick={this.onClosePopUp}>
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* CONTENT */}
              <div className="content d-flex justify-content-between align-items-center">
                {/* USER IMAGE */}
                <button className="facebook-btn width-50">
                  <FontAwesomeIcon icon={faPlus} className="mr1" />
                  Foto??raf?? Y??kle
                </button>

                <button
                  className="secondary-btn width-50 ml-1"
                  style={{ padding: '8px' }}
                >
                  <FontAwesomeIcon icon={faCropSimple} className="mr-1" />
                  ??er??eve Ekle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE */}
        <div id={Scss.Profile} className="profileContainerResp">
          {/* COVER */}
          <div className={`${Scss.cover} coverResp`}>
            {this.props.whereFrom === 'FriendContainer' || (
              <div className={Scss.coverAddBtn}>
                <button
                  className="white-btn"
                  id="cover-dropdown-menu"
                  onClick={this.openDropdownMenu}
                >
                  <FontAwesomeIcon icon={faCamera} />
                  <span className="ml-1">Kapak Foto??raf?? Ekle</span>

                  <div
                    className="dropdown"
                    aria-label="#cover-dropdown-menu"
                    onMouseLeave={() =>
                      (document.getElementsByClassName(
                        'dropdown'
                      )[0].style.display = 'none')
                    }
                  >
                    <ul>
                      <li className="private-btn">
                        <FontAwesomeIcon icon={faImages} className="mr-1" />
                        Foto??raf Se??
                      </li>

                      <li className="private-btn">
                        <FontAwesomeIcon icon={faUpload} className="mr-1" />
                        Foto??raf Y??kle
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* USER & BUTTON GROUP */}
          <div
            className={`userAndButtonGroupResp d-flex align-items-center px-4 justify-content-between ${
              this.props.whereFrom === 'FriendContainer' && 'direction-column'
            }`}
          >
            {/* USER */}
            <div
              className={`${
                Scss.user
              } userResp d-flex justify-content-start align-items-end ${
                this.props.whereFrom === 'FriendContainer' &&
                'direction-column align-items-center justify-content-center'
              } `}
            >
              <div className={Scss.image}>
                <img
                  id="profileImageContainer"
                  onClick={this.onOpenPopUp}
                  src="https://scontent.fesb4-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_k1JGnPK0ssAX8fryJI&_nc_ht=scontent.fesb4-1.fna&oh=00_AT87hiFH0GgsZJT0fvgNfPW7ppcCqpa5eYL8QgPjQ5uY5Q&oe=63411EF8"
                />
                <FontAwesomeIcon
                  className={Scss.icon}
                  id="profileImageContainer"
                  onClick={this.onOpenPopUp}
                  icon={faCamera}
                />
              </div>
              <div className={Scss.name}>Murat Alt??n??????k</div>
              {this.props.whereFrom === 'FriendContainer' && (
                <div
                  style={{
                    marginTop: '-1rem',
                    marginRight: '1.85rem',
                    marginBottom: '1rem',
                  }}
                >
                  500 Arkada??
                </div>
              )}
            </div>

            {/* BUTTON GROUP */}
            <div className={`${Scss.userOperation} userOperationResp`}>
              <button className="primary-btn width-auto p-0 position-relative">
                <FontAwesomeIcon icon={faCirclePlus} />
                <span className="ml-1">Hikayeye ekleme yap</span>
              </button>
              <button
                className="light-btn ml-1"
                id="profileEditContainer"
                onClick={this.onOpenPopUp}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                Profili D??zenle
              </button>
            </div>
          </div>

          {/* PROFILE MENU */}
          <div
            className={`${Scss.menu} menu d-flex justify-content-between align-items-center px-4`}
          >
            <ul className="d-flex justify-content-start align-items-center">
              <li>
                <NavLink
                  exact
                  to={`${this.props.match.url}`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  G??nderiler
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/about`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  Hakk??nda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/friends`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  Arkada??lar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/pictures`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  Foto??raflar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/videos`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  Videolar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/location-notifications`}
                  className="private-btn text-decoration-none"
                  activeClassName={Scss.active}
                >
                  Yer Bildirimleri
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Head);
