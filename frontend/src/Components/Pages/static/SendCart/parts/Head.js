import React, { useState } from 'react';

// ? FONT AWESOME
import {
  faCopy,
  faEllipsis,
  faGlobe,
  faPlusSquare,
  faSave,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Head() {
  const [whichSendCard, setWhichSendCard] = useState(null);

  // * OPTIONS MENU
  const onClickOptionsMenu = e => {
    const isButton = e.target.parentElement.parentElement.parentElement;
    const sendCards = document.getElementsByClassName('send-card');

    if (isButton) {
      setWhichSendCard(isButton.getAttribute('itemid'));

      for (let i = 0; i < sendCards.length; i++) {
        if (sendCards[i].getAttribute('itemid') === whichSendCard) {
          sendCards[i].childNodes[0].childNodes[1].childNodes[1].style.display =
            'block';
        }
      }
    }
  };

  const onMouseLeaveOptionsMenu = () => {
    const sendCards = document.getElementsByClassName('send-card');

    for (let i = 0; i < sendCards.length; i++) {
      sendCards[i].childNodes[0].childNodes[1].childNodes[1].style.display =
        'none';
    }
  };
  return (
    <div className="head d-flex justify-content-between align-items-center">
      <div className="send">
        <div className="d-flex">
          {/* IMAGE */}
          <div className="image">
            <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c8Y23ztaUNIAX-si-UX&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9Jtbrv41wvJPKINgMMWhPjnN9OduM_lYyLiPV50W4sEQ&oe=6350F0F8" />
          </div>

          <div className="d-flex direction-column ml-1">
            {/* NAME */}
            <div className="name">
              TRT 1<div className="elips mx-1"></div>
              <a href="#" className="primary-link">
                Takip Et
              </a>
            </div>
            {/* OTHER */}
            <div className="other">
              <span>6 Nisan</span>
              <div className="elips"></div>
              <span>
                <FontAwesomeIcon icon={faGlobe} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="options">
        <button
          className="white-btn"
          style={{ boxShadow: 'none' }}
          onClick={onClickOptionsMenu}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>

        <div className="options-menu" onMouseLeave={onMouseLeaveOptionsMenu}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSave} />
              <div>
                <b>Videoyu Kaydet</b>
                <small>Bunu kaydedilen videolara ekle</small>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faCopy} />
              <div>
                <b>Bağlantıyı Kopyala</b>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faPlusSquare} />
              <div>
                <b>TRT 1 Takip et</b>
                <small>
                  İzleme listende videolar ve Akışta gönderiler görmeye başla
                </small>
              </div>
            </li>

            <div className="hr"></div>

            <li>
              <FontAwesomeIcon icon={faWarning} />
              <div>
                <b>Videoyu şikayet et</b>
                <small>Bu videoyla ilgili endişelerim var.</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Head;
