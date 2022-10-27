import {
  faBell,
  faBriefcase,
  faCog,
  faComment,
  faCreditCard,
  faCreditCardAlt,
  faImages,
  faInbox,
  faLanguage,
  faLocation,
  faLock,
  faMobile,
  faShield,
  faSquare,
  faTag,
  faTv,
  faUserCircle,
  faUserMinus,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// ? LEFT
import StaticLeft from '../static/StaticLeft/StaticLeft';

// ? CONTENT
import Content from './Content';

function Section() {
  const menu = [
    { name: 'Genel', icon: faCog, link: '#' },
    { name: 'Güvenlik ve Giriş', icon: faShield, link: '#' },
    {
      name: 'Facebook Bilgilerin',
      icon: faUserCircle,
      link: '#',
      isHere: true,
    },
    { name: 'Gizlilik', icon: faLock, link: '#' },
    { name: 'Profil ve Etiketleme', icon: faTag, link: '#' },
    { name: 'Herkese Açık Gönderiler', icon: faComment, link: '#' },
    { name: 'Engelleme', icon: faUserMinus, link: '#' },
    { name: 'Konum', icon: faLocation, link: '#' },
    { name: 'Dil ve Bölge', icon: faLanguage, link: '#' },
    { name: 'Hikayeler', icon: faImages, link: '#', isHere: true },
    { name: 'Bildirimler', icon: faBell, link: '#' },
    { name: 'Mobil', icon: faMobile, link: ' #', isHere: true },
    { name: 'Uygulamalar ve İnternet Siteleri', icon: faSquare, link: ' #' },
    { name: 'İşletme Entegrasyonları', icon: faBriefcase, link: '#' },
    { name: 'Reklamlar', icon: faTv, link: '#' },
    { name: 'Reklam Ödemeleri', icon: faCreditCard, link: '#' },
    { name: 'Facebook Pay', icon: faCreditCardAlt, link: '#' },
    { name: 'Destek Gelen Kutusu', icon: faInbox, link: '#' },
    { name: 'Videolar', icon: faVideo, link: '#' },
  ];

  return (
    <div className="d-flex" style={{ backgroundColor: '#fff' }}>
      <StaticLeft title="Ayarlar" menuStyle="normal-link" menu={menu} />
      <Content />
    </div>
  );
}

export default Section;
