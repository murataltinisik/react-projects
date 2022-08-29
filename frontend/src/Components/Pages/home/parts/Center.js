import {
  faChevronRight,
  faCircleArrowRight,
  faClock,
  faCommentDots,
  faHeart,
  faPlay,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// ? MODULE SCSS
import Scss from './styles/center.module.scss';

function Center() {
  // ACTIVE TAB MENU
  const [active, setActive] = useState(0);

  const makeActivate = e => {
    const itemId = e.target.getAttribute('itemId');

    document.querySelectorAll('.contents > div').forEach(item => {
      item.style.display = 'none';
    });

    document.querySelectorAll('.contents > div')[itemId].style.display = 'flex';

    setActive(itemId);
  };

  return (
    <div id={Scss.CenterContainer}>
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
              <div className={Scss.storyInfo}>
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
            <div className={`${Scss.content} ${Scss.overflow} d-flex`}>
              <div id={Scss.reelsContainer}>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-1.fna.fbcdn.net/v/t15.5256-10/297722868_393717246195070_3089430352480405677_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=bZRPKBQ04s0AX8n9iGq&_nc_ht=scontent.fesb10-1.fna&oh=00_AT9hOttHH4JLVJOt3qJeh1lPwbktor7Lt5_-hwGB-qjBqQ&oe=6312B195" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                    980 B
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-2.fna.fbcdn.net/v/t15.5256-10/299105325_186268160436461_3837895208531490866_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=CCBZTdcf8LwAX9uLoJt&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb10-2.fna&oh=00_AT-a86MdlYX1o5_udXqQFtGbBt0TNDky8WUKosjoIoNUvg&oe=6311C823" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                    1.2 M
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-3.fna.fbcdn.net/v/t15.5256-10/299955264_629580761786374_8645924828131214424_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ozvo7KSwYRQAX--lLm9&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb10-3.fna&oh=00_AT_D1qCV_X4mzLpYIxqAI8WLPP9BZ_C64zVgovi5RJo1jw&oe=63112BF9" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                    128 B
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-1.fna.fbcdn.net/v/t51.36329-10/297887317_170210362241449_3765804610679131290_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Y1LlIA68vIcAX_nSCNO&_nc_ht=scontent.fesb10-1.fna&oh=00_AT-44lGyDCVAxSnIy_Am9bhxA2q-1D31mFxJq2FsIR-6lw&oe=6311DE18" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-4.fna.fbcdn.net/v/t15.5256-10/299942818_1242426626542260_6924429989657914675_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=zFN5VCZhUVwAX-2i4jK&_nc_ht=scontent.fesb10-4.fna&oh=00_AT-_Z8qnozJgCOLCNqmPgU_MJ8t6LXRYiqkZjL6y_oho5g&oe=63123712" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                    900 B
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-5.fna.fbcdn.net/v/t51.36329-10/297291940_3399278940358907_8507382346974356704_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=22AP0WcK_vEAX8dxXlC&_nc_ht=scontent.fesb10-5.fna&oh=00_AT8N-6ebsPXorqpleCy9kWq1suV5R07vrdzPu15oN4CH9w&oe=63115C98" />
                  <div className={Scss.views}>
                    <FontAwesomeIcon icon={faPlay} />
                    589 B
                  </div>
                </div>
                <div className={Scss.reels}>
                  <img src="https://scontent.fesb10-1.fna.fbcdn.net/v/t15.5256-10/295997566_1041219333432887_2784980479997053865_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=tpA4xG-ek8UAX8NjTgk&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb10-1.fna&oh=00_AT_CL6W6HBX-cxcA5W_H7WkkfGIUtwgMrk4sbciG2YylCQ&oe=6312C27E" />
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

              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* ROOMS */}
            <div className={Scss.content}>Odalar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
