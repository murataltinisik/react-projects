import React from 'react';

// ? FONT AWESOME
import {
  faBars,
  faBell,
  faBookmark,
  faCircleMinus,
  faClock,
  faCommentDots,
  faPeopleGroup,
  faPersonCircleMinus,
  faShare,
  faShieldVirus,
  faSortUp,
  faThumbsUp,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function send({ Scss, menuListShow, setMenuListShow }) {
  // * SEND MENU
  const onClickSend = () => {
    if (menuListShow === true) {
      setMenuListShow(false);
    } else {
      setMenuListShow(true);
    }
  };

  const onFocusSend = () => {
    setMenuListShow(true);
  };

  const onBlurSend = () => {
    setMenuListShow(false);
  };

  return (
    <div className={`${Scss.sendContainer} sendResp`}>
      <div className={Scss.send}>
        <div className="d-flex justity-content-between align-items-start">
          {/* USER */}
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

          {/* MENU */}
          <div className={Scss.menu}>
            <button
              className={`${Scss.menuBtn} btn`}
              onClick={onClickSend}
              onFocus={menuListShow === true ? onFocusSend : null}
              onBlur={onBlurSend}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            <ul
              className={`${Scss.menuList} ${
                menuListShow === true && 'd-block'
              }`}
              id="sendMenuList"
            >
              <div className={Scss.arrow}>
                <FontAwesomeIcon icon={faSortUp} />
              </div>

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
                    <p className={Scss.title}>Murat'dan gelen her şeyi gizle</p>
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

        {/* CONTENT */}
        <div className={Scss.content}>
          <div className={Scss.text}>
            Murat Altınışık Deneme Gönderisi Atılıd :) .....
          </div>
          <div className="hr mb-0 mt-1"></div>
          <div className={`${Scss.image} sendImage`}>
            <img src="https://www.netzwoche.ch/sites/default/files/styles/np8_full/public/media/2022/07/25/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg?itok=I1hQDNhD" />
          </div>
        </div>

        {/* DETAIL */}
        <div
          className={`${Scss.detail} px-1 py-1 d-flex justify-content-between align-items-center`}
        >
          {/* LIKES */}
          <div className={`${Scss.likes} d-flex align-items-center`}>
            <img
              height="18"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              width="18"
            />

            <span>9,4 B</span>
          </div>

          {/* COMMENTS & SHARING */}
          <div className={Scss.commentAndSharing}>
            <span className="mr-1">158 Yorum</span>
            <span>40 Paylaşım</span>
          </div>
        </div>

        <div className="hr mx-1 mb-0 bg-gray"></div>

        {/* FOOT */}
        <div
          className={`${Scss.foot} d-flex justify-content-between align-items-center`}
        >
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="ml-1">Beğen</span>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faCommentDots} />
            <span className="ml-1">Yorum Yap</span>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faShare} />
            <span className="ml-1">Paylaş</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default send;
