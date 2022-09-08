import React, { Component } from 'react';

// ? SCSS
import Scss from '../style.module.scss';
import Menu from './right-navbar-parts/Menu';
import Messenger from './right-navbar-parts/Messenger';
import Notificate from './right-navbar-parts/Notificate';
import Users from './right-navbar-parts/Users';

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
      profileMenuElement: document.querySelectorAll(
        '.profileMenu > #firstUl > li'
      ),
      profileMainList: document.getElementById('firstUl'),
      profileMain: document.getElementById('profile'),
      bottomProfileMenu: document.getElementsByClassName('bottomProfileMenu'),
    };
  }

  // * DID MOUNT
  componentDidMount() {
    this.state.element = document.querySelectorAll(
      '#rightNavbarContainer #ListContainer .listItem'
    );
    this.state.profileMenuElement = document.querySelectorAll(
      '.profileMenu > #firstUl > li'
    );
    this.state.profileMainList = document.getElementById('firstUl');
    this.state.profileMenuContainer =
      document.querySelectorAll('.profileMenu')[0];
    this.state.profileMain = document.getElementById('profile');
    this.state.bottomProfileMenu =
      document.getElementsByClassName('bottomProfileMenu');
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
      this.state.element[i].childNodes[0].childNodes[0].style.color = '#000';
      this.state.element[i].childNodes[0].style.backgroundColor = '#eee';
    }
    this.state.element[id].childNodes[2].style.display = 'block';
    this.state.element[id].childNodes[0].childNodes[0].style.color = '#1877F2';
    this.state.element[id].childNodes[0].style.backgroundColor = '#1877F210';
  };

  // ? ON MOVE TAB CLOSE
  onMouseLeave = () => {
    for (let i = 0; i < this.state.element.length; i++) {
      this.state.element[i].childNodes[2].style.display = 'none';
      this.state.element[i].childNodes[0].childNodes[0].style.color = '#000';
      this.state.element[i].childNodes[0].style.backgroundColor = '#eee';
    }

    // * PROFILE MENU CONTAINER
    this.state.profileMenuContainer.style.left = '0';

    // * PROFILE MAIN LIST
    this.state.profileMainList.style.height = '100%';

    // * PROFILE MAIN
    this.state.profileMain.style.overflow = 'visible';
    this.state.profileMain.style.height = '100%';
    this.state.profileMain.style.margin = '1rem auto';
    this.state.profileMain.style.padding = '3px';
    this.state.profileMain.style.display = 'block';
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
    } else {
      id = e.target.getAttribute('itemid');
    }

    for (let i = 0; i < this.state.bottomProfileMenu.length; i++) {
      this.state.bottomProfileMenu[i].style.display = 'none';
    }
    this.state.bottomProfileMenu[id].style.display = 'block';

    // * PROFILE MENU CONTAINER
    this.state.profileMenuContainer.style.left = '-22.8rem';

    //* BOTTOM PROFILE MENU
    this.state.bottomProfileMenu[id].style.height = 'auto';

    // * PROFILE MAIN LIST
    this.state.profileMainList.style.height = '0';

    // * PROFILE MAIN
    this.state.profileMain.style.overflow = 'hidden';
    this.state.profileMain.style.height = '0';
    this.state.profileMain.style.padding = '0';
    this.state.profileMain.style.margin = '0';
    this.state.profileMain.style.display = 'none';
  };

  // ? USER PROFILE BACK MENU
  userProfileBackMenu = () => {
    // * PROFILE MENU CONTAINER
    this.state.profileMenuContainer.style.left = '0';

    // * PROFILE MAIN LIST
    this.state.profileMainList.style.height = '100%';

    // * PROFILE MAIN
    this.state.profileMain.style.overflow = 'visible';
    this.state.profileMain.style.height = '100%';
    this.state.profileMain.style.margin = '1rem auto';
    this.state.profileMain.style.padding = '3px';
    this.state.profileMain.style.display = 'block';
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
          <Menu onTabOpen={this.onTabOpen} onMouseLeave={this.onMouseLeave} />

          {/* MESSENGER */}
          <Messenger
            onTabOpen={this.onTabOpen}
            onMouseLeave={this.onMouseLeave}
          />

          {/* NOTIFICATE */}
          <Notificate
            onTabOpen={this.onTabOpen}
            onMouseLeave={this.onMouseLeave}
          />

          {/* USERS */}
          <Users
            onTabOpen={this.onTabOpen}
            onMouseLeave={this.onMouseLeave}
            onSettingsDetail={this.onSettingsDetail}
            userProfileBackMenu={this.userProfileBackMenu}
          />
        </ul>
      </div>
    );
  }
}

export default RightNavbar;
