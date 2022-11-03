import React from 'react';

// ? FONT AWESOME
import { faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

// ? STATIC LEFT
import StaticLeft from '../../static/StaticLeft/StaticLeft';

// * REACT ROUTER 5.2.0
import { useRouteMatch } from 'react-router-dom';

function Left() {
  // * URL
  let { url } = useRouteMatch();

  // * MENU
  const menu = [
    {
      name: 'Ana Sayfa',
      icon: faUsers,
      link: `${url}`,
      moreList: true,
    },
    {
      name: 'Arkaşlık İstekleri',
      icon: faUsers,
      link: `${url}/wants`,
      moreList: true,
    },
    {
      name: 'Öneriler',
      icon: faUsers,
      link: `${url}/suggestions`,
      moreList: true,
    },
    {
      name: 'Tüm Arkadaşlar',
      icon: faUsers,
      link: `${url}/all-friends`,
      moreList: true,
    },
    {
      name: 'Doğum Günleri',
      icon: faUsers,
      link: `${url}/friends-birthday`,
    },
    {
      name: 'Özel Listeler',
      icon: faUsers,
      link: `${url}/custom-lists`,
      moreList: true,
    },
  ];

  // * SETTINGS MENU
  const settingsMenu = [
    {
      title: 'Bildirim Nokta Simgelerini Göster',
      icon: faBell,
      openAndClose: true,
    },
  ];

  return (
    <StaticLeft title="Arkadaşlar" menu={menu} settingsMenu={settingsMenu} />
  );
}

export default Left;
