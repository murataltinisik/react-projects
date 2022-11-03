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
    link: '/watch',
  },
  {
    name: 'Canlı',
    icon: faCamera,
    link: '/watch/live',
  },
  {
    name: 'Programlar',
    icon: faFilm,
    link: '/watch/programs',
  },
  {
    name: 'Kaydedilen Videolar',
    icon: faBookmark,
    link: '/watch/recorded-videos',
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
