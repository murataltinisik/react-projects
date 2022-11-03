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

// * REACT ROUTER 5.2.0
import { useRouteMatch } from 'react-router-dom';

function Section() {
  let { url } = useRouteMatch();

  function linking(link) {
    return url + '/' + link;
  }

  const menu = [
    { name: 'Genel', icon: faCog, link: linking('generic') },
    {
      name: 'Güvenlik ve Giriş',
      icon: faShield,
      link: linking('security-and-login'),
    },
    {
      name: 'Facebook Bilgilerin',
      icon: faUserCircle,
      link: linking('facebook-info'),
      isHere: true,
    },
    { name: 'Gizlilik', icon: faLock, link: linking('privacy') },
    {
      name: 'Profil ve Etiketleme',
      icon: faTag,
      link: linking('profile-and-tag'),
    },
    {
      name: 'Herkese Açık Gönderiler',
      icon: faComment,
      link: linking('public-posts'),
    },
    { name: 'Engelleme', icon: faUserMinus, link: linking('block') },
    {
      name: 'Dil ve Bölge',
      icon: faLanguage,
      link: linking('language-and-region'),
    },
    {
      name: 'Hikayeler',
      icon: faImages,
      link: linking('stories'),
      isHere: true,
    },
    { name: 'Bildirimler', icon: faBell, link: linking('notification') },
    { name: 'Mobil', icon: faMobile, link: linking('mobile'), isHere: true },
    {
      name: 'Uygulamalar ve İnternet Siteleri',
      icon: faSquare,
      link: linking('apps-and-website'),
    },
    {
      name: 'İşletme Entegrasyonları',
      icon: faBriefcase,
      link: linking('integrations'),
    },
    { name: 'Reklamlar', icon: faTv, link: linking('ads') },
    {
      name: 'Reklam Ödemeleri',
      icon: faCreditCard,
      link: linking('ads-payment'),
    },
    {
      name: 'Facebook Pay',
      icon: faCreditCardAlt,
      link: linking('facebook-pay'),
    },
    {
      name: 'Destek Gelen Kutusu',
      icon: faInbox,
      link: linking('sport-incoming-box'),
    },
    { name: 'Videolar', icon: faVideo, link: linking('videos') },
  ];

  return (
    <div className="d-flex" style={{ backgroundColor: '#fff' }}>
      <StaticLeft title="Ayarlar" menuStyle="normal-link" menu={menu} />
      <Content />
    </div>
  );
}

export default Section;
