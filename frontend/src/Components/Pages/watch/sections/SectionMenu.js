import {
  faBell,
  faBookmark,
  faCamera,
  faFilm,
  faGear,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

// * MENU
export const menu = [
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
export const settingsMenu = [
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
