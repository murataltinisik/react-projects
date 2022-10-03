import React, { Component } from 'react';

// ? FONT AWESOME
import { faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

// ? STATIC LEFT
import StaticLeft from '../../static/StaticLeft/StaticLeft';

class Left extends Component {
  // * MENU
  menu = [
    {
      name: 'Ana Sayfa',
      icon: faUsers,
      link: '#',
      moreList: true,
    },
    {
      name: 'Arkaşlık İstekleri',
      icon: faUsers,
      link: '#',
      moreList: true,
    },
    {
      name: 'Öneriler',
      icon: faUsers,
      link: '#',
      moreList: true,
    },
    {
      name: 'Tüm Arkadaşlar',
      icon: faUsers,
      link: '#',
      moreList: true,
    },
    {
      name: 'Doğum Günleri',
      icon: faUsers,
      link: '#',
    },
    {
      name: 'Özel Listeler',
      icon: faUsers,
      link: '#',
      moreList: true,
    },
  ];

  // * SETTINGS MENU
  settingsMenu = [
    {
      title: 'Bildirim Nokta Simgelerini Göster',
      icon: faBell,
      openAndClose: true,
    },
  ];

  render() {
    return (
      <StaticLeft
        title="Arkadaşlar"
        menu={this.menu}
        settingsMenu={this.settingsMenu}
      />
    );
  }
}

export default Left;
