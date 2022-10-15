import React, { useState } from 'react';

// ? FONT AWESOME
import {
  faChevronLeft,
  faClose,
  faFaceSmile,
  faFlag,
  faGlobe,
  faImages,
  faLocation,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? ASSETS
import '../../../assets/css/color/color.scss';
import '../../../assets/css/PopUp/popup.scss';

export const onOpenPopUp = (e, label = null) => {
  const popups = document.getElementsByClassName('popup');
  let ariaLabel = '#' + (label ? label : e.target.id);
  for (let i = 0; i < popups.length; i++) {
    if (popups[i].getAttribute('aria-label') === ariaLabel) {
      popups[i].style.display = 'flex';
    }
  }
};

function PopUpCard({ head, body, foot }) {
  // * POPUP
  const onClosePopUp = (e, isReload) => {
    let isSvg = e.target.tagName;
    let isPath = e.target.tagName;
    const popups = document.getElementsByClassName('popup');
    let ariaLabel;

    if (isSvg) {
      ariaLabel =
        e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'aria-label'
        );
    } else if (isPath) {
      ariaLabel =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'aria-label'
        );
    }

    for (let i = 0; i < popups.length; i++) {
      if (popups[i].getAttribute('aria-label') === ariaLabel) {
        popups[i].style.display = 'none';
      }
    }

    if (isReload === 'OK') {
      window.location.reload();
    }
  };

  // * CHANGE BG COLOR
  const changeBgColor = e => {
    document
      .querySelectorAll('.body-content textarea')[0]
      .setAttribute('class', e.target.className);
    document.querySelectorAll('.body-content textarea')[0].style.textAlign =
      'center';
    document.querySelectorAll('.body-content textarea')[0].style.height =
      '18rem';
    document.querySelectorAll('.body-content textarea')[0].style.lineHeight =
      '18rem';
    document.querySelectorAll(
      '.body-content textarea'
    )[0].style.fontWeight = 700;
  };

  // * ON SHOW BG COLOR CONTAINER
  const onShowBgColorContainer = () => {
    document.getElementsByClassName('picker')[0].style.display = 'none';
    document.getElementById('colorContainer').style.display = 'flex';
  };

  // * ON BG BACK
  const onBgBack = () => {
    document.getElementById('colorContainer').style.display = 'none';
    document.getElementsByClassName('picker')[0].style.display = 'flex';

    document
      .querySelectorAll('.body-content textarea')[0]
      .setAttribute('class', 'bg-white');
    document.querySelectorAll('.body-content textarea')[0].style.textAlign =
      'unset';
    document.querySelectorAll('.body-content textarea')[0].style.height =
      'unset';
    document.querySelectorAll('.body-content textarea')[0].style.lineHeight =
      'unset';
    document.querySelectorAll('.body-content textarea')[0].style.fontWeight =
      'unset';
  };

  return (
    <div
      className="popup"
      // onMouseLeave={() =>
      //   (document.getElementsByClassName('popup')[0].style.display = 'none')
      // }
      aria-label={`#${head.label}`}
    >
      <div className="container">
        {/* HEAD */}
        <div className="head">
          <div className="title">{head.title}</div>
          <div className="close" onClick={onClosePopUp}>
            <FontAwesomeIcon icon={faClose} />
          </div>
        </div>

        {/* BODY */}
        <div className={`body ${body.where === 'ShipmentContainer' && 'p-0'}`}>
          {body.where !== 'ShipmentContainer' ? (
            <>
              {/* TITLE & DESCRIPTION */}
              <div>
                {body.title && <div className="title">{body.title}</div>}
                {body.description && (
                  <div className="description">{body.description}</div>
                )}
              </div>

              {/* CONTENT */}
              <div className="content"></div>
            </>
          ) : (
            <div className="body-shipment-container">
              {/* BODY TOP */}
              <div className="body-top d-flex align-items-center">
                <div className="image">
                  <img
                    src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3BXEdWJ40HkAX_E7_2F&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9Wf1boljnDdcmbT6-qSUFbGsgkAInZBGER17gRExCnyw&oe=636CA078"
                    alt=""
                  />
                </div>

                <div>
                  <div className="name">Murat Altınışık</div>
                  <div className="access">
                    Herkese Açık <FontAwesomeIcon icon={faGlobe} />
                  </div>
                </div>
              </div>

              {/* BODY CONTENT */}
              <div className="body-content">
                <textarea
                  placeholder="Ne düşünüyorsun, Murat?"
                  onKeyUp={body.onKeyDown}
                ></textarea>
              </div>

              {/* BODY FOOT */}
              <div className="body-foot">
                {/* TOOLS */}
                <div className="tools">
                  <div className="color-picker">
                    <div
                      className="picker"
                      id="picker"
                      onClick={onShowBgColorContainer}
                    >
                      Aa
                    </div>

                    <div id="colorContainer">
                      <div onClick={onBgBack} className="bg-color">
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-white"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-blue-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-red-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-orange-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-yellow-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        className="bg-color bg-green-gradient"
                      ></div>
                    </div>
                  </div>
                  <div className="faces">
                    <FontAwesomeIcon icon={faFaceSmile} />
                  </div>
                </div>

                {/* ADDITIONS */}
                <div className="additions">
                  <div className="title">Gönderine Ekle</div>
                  <div>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faImages} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faUserTag} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faFaceSmile} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faLocation} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faFlag} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOT */}
        <div
          className={`foot ${
            body.where === 'ShipmentContainer' && 'border-none p-0'
          }`}
        >
          {foot && (
            <>
              {foot.isLink && (
                <a href={foot.isLink.link} className="primary-link">
                  {foot.isLink.content}
                </a>
              )}

              {foot.whereFromFoot === 'Story' ? (
                <div className="group">
                  <button
                    className="white-btn color-blue"
                    onClick={onClosePopUp}
                  >
                    Düzeltmeye Devam Et
                  </button>
                  <button
                    className="primary-btn"
                    onClick={e => onClosePopUp(e, 'OK')}
                  >
                    Yok Say
                  </button>
                </div>
              ) : (
                <div className="group">
                  <button className="secondary-btn" onClick={onClosePopUp}>
                    İptal
                  </button>
                  <button className="primary-btn">Kaydet</button>
                </div>
              )}
            </>
          )}

          {body.where === 'ShipmentContainer' && (
            <button className="share-post" disabled>
              Paylaş
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;
