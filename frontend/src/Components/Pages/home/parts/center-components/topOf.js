import React from 'react';

import {
  faChevronLeft,
  faChevronRight,
  faCircleArrowRight,
  faClock,
  faCommentDots,
  faHeart,
  faLink,
  faPlay,
  faPlus,
  faUserGroup,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function topOf({ Scss, active, setActive }) {
  // * ACTIVE TAB
  const makeActivate = e => {
    const itemId = e.target.getAttribute('itemId');

    document.querySelectorAll('.contents > div').forEach(item => {
      item.style.display = 'none';
    });

    document.querySelectorAll('.contents > div')[itemId].style.display = 'flex';

    setActive(itemId);
  };

  // * REELS SLIDER
  const reelsSlider = e => {
    // VARIABLE
    const reelContainer = document.getElementById('reels');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const { tagName } = e.target;

    if (e.target.id === 'next') {
      reelContainer.style.left = '-19rem';
      // NEXT
      tagName === 'BUTTON' && (e.target.style.display = 'none');
      tagName === 'BUTTON' && (e.target.style.opacity = '0');

      // PREV
      prev.style.display = 'block';
      setTimeout(() => (prev.style.opacity = '1'), 800);
    } else if (e.target.id === 'prev') {
      reelContainer.style.left = '0';

      // PREV
      tagName === 'BUTTON' && (e.target.style.display = 'none');
      tagName === 'BUTTON' && (e.target.style.opacity = '0');

      // NEXT
      next.style.display = 'block';
      setTimeout(() => (next.style.opacity = '1'), 800);
    }
  };

  return (
    <div className={Scss.topOf}>
      {/* HEAD */}
      <div className={Scss.head}>
        {/* MENU */}
        <ul className="menu d-flex justify-content-between">
          <li
            className={`${active == 0 ? Scss.active : ''} pb-1`}
            onClick={makeActivate}
            itemID="0"
          >
            Hikayeler
          </li>
          <li
            className={`${active == 1 ? Scss.active : ''} pb-1`}
            onClick={makeActivate}
            itemID="1"
          >
            Reels
          </li>
          <li
            className={`${active == 2 ? Scss.active : ''} pb-1`}
            onClick={makeActivate}
            itemID="2"
          >
            Odalar
          </li>
        </ul>

        {/* HR */}
        <div className="hr"></div>

        {/* MENU CONTENT */}
        <div className={`${Scss.contents} contents`}>
          {/* STORIES */}
          <div className={`${Scss.content}`}>
            <div className={Scss.stories}>
              <div className={Scss.image}>
                <img src="https://scontent.fesb10-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_8ak1Gi-hKwAX_yS4pc&_nc_ht=scontent.fesb10-1.fna&oh=00_AT9Q5dLtDBN2nSgZJ2BGQ97nINX8t_yH_3VnSdEoDrQcsw&oe=63314CF8" />
              </div>
              <div
                className={`${Scss.foot} d-flex direction-column align-items-center`}
              >
                <a href="#">
                  <FontAwesomeIcon icon={faPlus} />
                </a>
                <span>Hikaye Oluştur</span>
              </div>
            </div>

            {/* STORY INFO */}
            <div className={Scss.contentInfo}>
              <ul>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faHeart} className="pr-1" />
                  </span>
                  Arkadaşlarınla ve ailenle günlük anlarını paylaş.
                </li>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="pr-1" />
                  </span>
                  Hikayeler 24 saat sonra kaybolur.
                </li>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faCommentDots} className="pr-1" />
                  </span>
                  Yanıtlar ve ifadeler gizlidir.
                </li>
              </ul>
            </div>
          </div>

          {/* REELS */}
          <div id="reels" className={`${Scss.content} ${Scss.overflow} d-flex`}>
            <div id={Scss.reelsContainer}>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                  980 B
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                  1.2 M
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                  128 B
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                  900 B
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />
                  589 B
                </div>
              </div>
              <div className={Scss.reels}>
                <img src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6" />
                <div className={Scss.views}>
                  <FontAwesomeIcon icon={faPlay} />5 M
                </div>
              </div>
              <div className={`${Scss.reels} ${Scss.moreReels}`}>
                <div className="d-flex direction-column justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                  Daha Fazla Reels Videosu Gör
                </div>
              </div>
            </div>

            <button onClick={reelsSlider} className={Scss.nextBtn} id="next">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button onClick={reelsSlider} className={Scss.prevBtn} id="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>

          {/* ROOMS */}
          <div className={Scss.content}>
            <div
              className={`${Scss.rooms} d-flex direction-column justify-content-center align-items-center`}
            >
              <div
                className={`${Scss.icon} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faVideoCamera} />
              </div>

              <div
                className={`${Scss.foot} d-flex direction-column align-items-center`}
              >
                <p>Murat'ın Odası</p>
                <small>Başla</small>
                <button className="btn">Oluştur</button>
              </div>
            </div>

            {/* STORY INFO */}
            <div className={Scss.contentInfo}>
              <ul>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} className="pr-1" />
                  </span>
                  Arkadaşlarınla canlı sesli konuşmaları yap veya arkadaşlarınla
                  görüntülü sohbet et.
                </li>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} className="pr-1" />
                  </span>
                  Odanda sana kimin, ne zaman katılabileceğini kontrol et.
                </li>
                <li className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faLink} className="pr-1" />
                  </span>
                  Facebook hesabı olan kişiler bir bağlantıyla katılabilir.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topOf;
