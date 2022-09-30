import React, { useState } from 'react';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faBug,
  faClose,
  faEllipsis,
  faGlobe,
  faLink,
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeXmark,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

// ? ASSET
import '../../../assets/Card/card-head.scss';

function CardHead({ itemId }) {
  // * STATE
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // ? BROWSE THE LISTS
  const browseTheLists = (display, ariaLabel) => {
    let menus = document.getElementsByClassName('card-menu');

    for (let i = 0; i < menus.length; i++) {
      if (menus[i].getAttribute('aria-label') === ariaLabel) {
        menus[i].style.display = display;
      }
    }
  };

  const PlayAndPauseStyle = which => {
    const videoPlay = document.getElementsByClassName('videoPlay');
    const videoPause = document.getElementsByClassName('videoPause');

    if (which === 'play') {
      for (let i = 0; i < videoPlay.length; i++) {
        if (videoPlay[i].getAttribute('itemid') == itemId) {
          videoPlay[i].style.display = 'none';
          videoPause[i].style.display = 'block';
        }
      }
    } else {
      for (let i = 0; i < videoPlay.length; i++) {
        if (videoPlay[i].getAttribute('itemid') == itemId) {
          videoPlay[i].style.display = 'block';
          videoPause[i].style.display = 'none';
        }
      }
    }
  };

  const MutedAndPauseStyle = which => {
    const videoUnmuted = document.getElementsByClassName('videoUnmuted');
    const videoMuted = document.getElementsByClassName('videoMuted');

    if (which === 'unmuted') {
      for (let i = 0; i < videoUnmuted.length; i++) {
        if (videoUnmuted[i].getAttribute('itemid') == itemId) {
          videoUnmuted[i].style.display = 'none';
          videoMuted[i].style.display = 'block';
        }
      }
    } else {
      for (let i = 0; i < videoUnmuted.length; i++) {
        if (videoUnmuted[i].getAttribute('itemid') == itemId) {
          videoUnmuted[i].style.display = 'block';
          videoMuted[i].style.display = 'none';
        }
      }
    }
  };

  // * OPEN MENU
  const onClick = label => {
    const ariaLabel = `#${label}`;

    if (!isOpenMenu) {
      browseTheLists('block', ariaLabel);
      setIsOpenMenu(true);
    }

    if (isOpenMenu) {
      browseTheLists('none', ariaLabel);
      setIsOpenMenu(false);
    }
  };

  // * PLAY VIDEO
  const playVideo = id => {
    const videos = document.getElementsByClassName('reel-video');

    for (let i = 0; i < videos.length; i++) {
      if (videos[i].getAttribute('itemid') == id) {
        videos[i].play();
      }
    }

    PlayAndPauseStyle('play');
  };

  const pauseVideo = id => {
    const videos = document.getElementsByClassName('reel-video');

    for (let i = 0; i < videos.length; i++) {
      if (videos[i].getAttribute('itemid') == id) {
        videos[i].pause();
      }
    }

    PlayAndPauseStyle('pause');
  };

  // * MUTED VIDEO
  const unmutedVideo = id => {
    const videos = document.getElementsByClassName('reel-video');

    for (let i = 0; i < videos.length; i++) {
      if (videos[i].getAttribute('itemid') == id) {
        videos[i].muted = true;
      }
    }

    MutedAndPauseStyle('unmuted');
  };

  const mutedVideo = id => {
    const videos = document.getElementsByClassName('reel-video');

    for (let i = 0; i < videos.length; i++) {
      if (videos[i].getAttribute('itemid') == id) {
        videos[i].muted = false;
      }
    }

    MutedAndPauseStyle('muted');
  };

  return (
    <div className="cardHead">
      {/* HEAD */}
      <div className="head">
        <div className="d-flex">
          {/* IMAGE */}
          <div className="image">
            <img src="https://scontent.fesb3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mvzbp2eS_CYAX-Tt59y&_nc_ht=scontent.fesb3-1.fna&oh=00_AT-MnOi_hp-_w9BvrZ7_ebXbY4dCLGEMw2npaqDc0U3jNw&oe=635CCE78" />
          </div>

          <div className="d-flex direction-column">
            {/* DETAIL */}
            <div className="detail">
              <div className="title">Murat Altınışık</div>

              <div className="elips"></div>

              <a href="#" className="white-link text-decoration-none">
                Takip Et
              </a>
            </div>

            {/* ACCESS */}
            <div className="access">
              <FontAwesomeIcon icon={faGlobe} />
              <span>Herkese Açık</span>
            </div>
          </div>
        </div>
      </div>

      {/* OPTIONS */}
      <div className="options">
        <div className="d-flex">
          {/* VIDEO PLAY */}
          <div
            className="option-btn videoPlay"
            itemID={itemId}
            onClick={() => playVideo(itemId)}
          >
            <FontAwesomeIcon icon={faPlay} />

            <div className="info">Oynat</div>
          </div>

          {/* VIDEO PAUSE */}
          <div
            className="option-btn videoPause"
            onClick={() => pauseVideo(itemId)}
          >
            <FontAwesomeIcon icon={faPause} />

            <div className="info">Durdur</div>
          </div>

          {/* VIDEO SOUND */}
          <div
            className="option-btn videoUnmuted"
            itemID={itemId}
            onClick={() => unmutedVideo(itemId)}
          >
            <FontAwesomeIcon icon={faVolumeHigh} />

            <div className="info">Sessize al</div>
          </div>

          {/* VIDEO SOUND */}
          <div
            className="option-btn videoMuted"
            onClick={() => mutedVideo(itemId)}
          >
            <FontAwesomeIcon icon={faVolumeXmark} />

            <div className="info">Sesini aç</div>
          </div>

          {/* MENU OPENNER */}
          <div className="option-btn" onClick={() => onClick('menuOpen')}>
            <FontAwesomeIcon icon={faEllipsis} />

            <div className="info">Diğer Seçenekler</div>
          </div>
        </div>

        {/* MENU */}
        <ul className="menu card-menu" aria-label="#menuOpen">
          <li>
            <div>
              <FontAwesomeIcon icon={faBookmark} />
              <p>Reels Videosunu Kaydet</p>
            </div>
          </li>

          <li>
            <div>
              <FontAwesomeIcon icon={faLink} />
              <p>Bağlantıyı Kopyala</p>
            </div>
          </li>

          <li>
            <div>
              <FontAwesomeIcon icon={faWarning} />
              <p>Destek al veya videouyu şikayet et</p>
            </div>
          </li>

          <li>
            <div>
              <FontAwesomeIcon icon={faBug} />
              <p>Bir Şey Çalışmıyor</p>
            </div>
          </li>

          <li>
            <div>
              <FontAwesomeIcon icon={faClose} />
              <p>Daha azını gör</p>
            </div>
            <span>
              Reels videosunu Reels kısmında gizle ve Murat Altınışık'in
              videolarını daha az gör.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardHead;
