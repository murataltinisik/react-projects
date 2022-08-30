import {
  faBars,
  faBell,
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faCircleArrowRight,
  faCircleMinus,
  faClock,
  faCommentDots,
  faHeart,
  faLink,
  faPeopleGroup,
  faPersonCircleMinus,
  faPlay,
  faPlus,
  faShieldVirus,
  faUserGroup,
  faVideoCamera,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// ? MODULE SCSS
import Scss from './styles/center.module.scss';

function Center() {
  // ACTIVE TAB MENU
  const [active, setActive] = useState(0);

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
    <div id={Scss.CenterContainer}>
      {/* TOP OF */}
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
            <div
              id="reels"
              className={`${Scss.content} ${Scss.overflow} d-flex`}
            >
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
                    Arkadaşlarınla canlı sesli konuşmaları yap veya
                    arkadaşlarınla görüntülü sohbet et.
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

      {/* SHIPMENT OPERATION */}
      <div className={Scss.shipment}>
        <div className={`${Scss.head} d-flex align-items-center`}>
          <img
            className={Scss.userImage}
            src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_8ak1Gi-hKwAX9W7f-1&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8-9RopME8tahZV5NAK4znBSHYHINKF56z2r_TDildnUw&oe=63354178"
          />

          <div className={`${Scss.whatDoYouThink} ml-1`}>
            Ne Düşünüyorsun, Murat?
          </div>
        </div>

        <div className="hr mb-0"></div>

        <div
          className={`${Scss.foot} d-flex justify-content-between align-items-center`}
        >
          <div
            className={`${Scss.liveVideo} d-flex justify-content-center align-items-center`}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.7em"
              height="1.7em"
              color="red"
              className="mr-1"
            >
              <g fill-rule="evenodd" transform="translate(-444 -156)">
                <g>
                  <path
                    d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                    transform="translate(354 158.5)"
                  ></path>
                  <path
                    d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                    transform="translate(354 158.5)"
                  ></path>
                </g>
              </g>
            </svg>
            Canlı Video
          </div>

          <div
            className={`${Scss.imageOrVideo} d-flex justify-content-center align-items-center`}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.7em"
              height="1.7em"
              color="green"
              className="mr-1"
            >
              <g fill-rule="evenodd" transform="translate(-444 -156)">
                <g>
                  <path
                    d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                    transform="translate(352 156.5)"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                    transform="translate(352 156.5)"
                  ></path>
                </g>
              </g>
            </svg>
            Fotoğraf/Video
          </div>

          <div
            className={`${Scss.feelingOrMove} d-flex justify-content-center align-items-center`}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.7em"
              height="1.7em"
              color="orange"
              className="mr-1"
            >
              <g fill-rule="evenodd" transform="translate(-444 -156)">
                <g>
                  <path
                    d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                    transform="translate(353.5 156.5)"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                    transform="translate(353.5 156.5)"
                  ></path>
                  <path
                    d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                    transform="translate(353.5 156.5)"
                  ></path>
                </g>
              </g>
            </svg>
            His/Hareket
          </div>
        </div>
      </div>

      {/* SEND AND OTHER */}
      <div className={Scss.sendAndOther}>
        <div className={Scss.send}>
          <div className="d-flex justity-content-between align-items-start">
            <div className={`${Scss.user} d-flex align-items-center`}>
              <div className={Scss.image}>
                <img
                  className={Scss.userImage}
                  src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_8ak1Gi-hKwAX9W7f-1&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8-9RopME8tahZV5NAK4znBSHYHINKF56z2r_TDildnUw&oe=63354178"
                />
              </div>
              <div className="d-flex direction-column">
                <div className={Scss.title}>Murat Altınışık</div>
                <div className="d-flex align-items-center">
                  <div className={Scss.created_at}>30 Ağustos, 22,11</div>
                  <div className="elips"></div>
                  <div className={`${Scss.accessIcon}`}>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </div>
                </div>
              </div>
            </div>

            <div className={Scss.menu}>
              <div className={Scss.menuBtn}>
                <FontAwesomeIcon icon={faBars} />
              </div>

              <ul className={Scss.menuList}>
                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faBookmark} />
                    <div className="text-left">
                      <p className={Scss.title}>Ürünü Kaydet</p>
                      <p className={Scss.description}>
                        Bunu Kaydedilenlerin içine ekle
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faBell} />
                    <div className="text-left">
                      <p className={Scss.title}>
                        Bu Gönderi için bildirimleri aç
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faShieldVirus} />
                    <div className="text-left">
                      <p className={Scss.title}>
                        Bu Gönderi için bildirimleri aç
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faWarning} />
                    <div className="text-left">
                      <p className={Scss.title}>İlanı Şikayet Et</p>
                      <p className={Scss.description}>
                        Bu gurubun satılık ilanlarıyla ilgili sorunu anlat
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faCircleMinus} />
                    <div className="text-left">
                      <p className={Scss.title}>Gönderiyi Gizle</p>
                      <p className={Scss.description}>
                        Bunun gibi gönderileri daha az gör.
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <div className="text-left">
                      <p className={Scss.title}>
                        Murat'ı 30 Günlüğüne geçici gizle
                      </p>
                      <p className={Scss.description}>
                        Gönderi almayı geçici olarak durdur.
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faPersonCircleMinus} />
                    <div className="text-left">
                      <p className={Scss.title}>
                        Murat'dan gelen her şeyi gizle
                      </p>
                      <p className={Scss.description}>
                        Bu Kişinin gönderilerini görmeyi durdur.
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <div className="text-left">
                      <p className={Scss.title}>
                        Altınışık Grup'unu 30 günlüğüne geçici olarak gizle.
                      </p>
                      <p className={Scss.description}>
                        Gönderi Almayı geçici olarak durdur
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="btn d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faPersonCircleMinus} />
                    <div className="text-left">
                      <p className={Scss.title}>Altınışık Grup takibi bırak</p>
                      <p className={Scss.description}>
                        Gönderiler almayı durdur ama grupta kal.
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className={Scss.content}>
            Murat Altınışık Deneme Gönderisi Atılıd :) .....
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
