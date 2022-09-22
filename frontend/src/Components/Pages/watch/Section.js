import {
  faBell,
  faBookmark,
  faCamera,
  faFilm,
  faGear,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

// ? STATIC LEFT
import StaticLeft from '../static/StaticLeft/StaticLeft';
import Content from './parts/Content';

class Section extends Component {
  // * MENU
  menu = [
    {
      name: 'Ana Sayfa',
      icon: faVideo,
      link: '#',
    },
    {
      name: 'Canlı',
      icon: faCamera,
      link: '#',
    },
    {
      name: 'Programlar',
      icon: faFilm,
      link: '#',
    },
    {
      name: 'Kaydedilen Videolar',
      icon: faBookmark,
      link: '#',
    },
  ];

  // * SETTINGS MENU
  settingsMenu = [
    {
      title: 'Bildirim Nokta Simgelerini Göster',
      icon: faBell,
      openAndClose: true,
    },
    {
      title: 'Özel Bildirimler',
      icon: faGear,
    },
  ];

  render() {
    return (
      <div className="d-flex justify-content-center align-items-start">
        <StaticLeft
          title="Watch"
          menu={this.menu}
          settingsMenu={this.settingsMenu}
        />

        <Content />
      </div>
    );
  }
}

export default Section;
