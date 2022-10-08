import React, { Component } from 'react';

// ? FONT AWESOME
import {
  faBars,
  faBell,
  faBookmark,
  faClock,
  faClose,
  faFolderClosed,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

// ? SEND CARD
import SendCart from './SendCart';

class SendCardList extends Component {
  // * HEAD
  head = {
    who: {
      name: 'TRT 1',
      image:
        'https://scontent.fesb10-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX_69JjQ&_nc_ht=scontent.fesb10-1.fna&oh=00_AT_iOEwmZA3QWgBPFZBJ37_n_Vx5tWHDmfcX7sxcmhSW7Q&oe=6368ABF8',
      transferDate: '7 Nisan',
    },
    actions: [
      {
        icon: faBookmark,
        title: 'Bağlantıyı Kaydet',
        description: 'Bunu Kaydedilen içeriklerine ekle.',
      },
      {
        icon: faBell,
        title: 'Bu gönderi için bildirimleri aç',
      },
      {
        icon: faClose,
        title: 'Gönderi gizle',
        description: 'Bunun gibi gönderileri daha az gör.',
      },
      {
        icon: faClock,
        title: "TRT 1'i 30 Günlüğüne geçici gizle",
        description: 'Gönderi almayı geçici olarak durdur.',
      },
      {
        icon: faFolderClosed,
        title: 'TRT"1 den gelen her şeyi gizle',
        description: 'Bu sayfadan gönderiler almayı durdur.',
      },
      {
        icon: faWarning,
        title: 'Fotoğrafı şikayet et',
        description: 'Bu gönderiyle ilgili endişelerim var.',
      },
    ],
    actionIcon: faBars,
  };

  // * BODY
  body = {
    card: {
      title: 'ALPARSLAN - BÜYÜK SELÇUKLU',
      description: 'Bu Aksam Saat 21:00"da sizlerle - YENİ SEZON',
      image:
        'https://imgrosetta.mynet.com.tr/file/13487460/13487460-728xauto.jpg',
    },
  };

  render() {
    return (
      <div>
        <SendCart itemId="0" head={this.head} body={this.body} />
      </div>
    );
  }
}

export default SendCardList;
