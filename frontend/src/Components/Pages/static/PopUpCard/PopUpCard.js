import React, { useState } from 'react';

// ? FONT AWESOME
import {
  faChevronLeft,
  faClose,
  faFaceSmile,
  faFlag,
  faGlobe,
  faImage,
  faImages,
  faLocation,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? ASSETS
import '../../../assets/css/color/color.scss';
import '../../../assets/css/PopUp/popup.scss';
import { useShipment } from '../../../Context/ShipmentDataContext';

// * ON OPEN POP UP
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
  // * SHIPMENT DATAS
  const { shipmentDatas, setShipmentDatas } = useShipment();

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

  // * ON KEY DOWN
  const onKeyUp = e => {
    // * SET SHIPMENT DATAS
    setShipmentDatas({
      ...shipmentDatas,
      shipment: {
        message: e.target.value,
        image: shipmentDatas.shipment.image,
      },
    });

    // STYLE OPERATION
    if (e.target.value.length > 0) {
      document
        .getElementsByClassName('share-post')[0]
        .removeAttribute('disabled');

      document.getElementsByClassName('share-post')[0].style.backgroundColor =
        '#1877F2';
      document.getElementsByClassName('share-post')[0].style.color = 'white';
    } else {
      document
        .getElementsByClassName('share-post')[0]
        .setAttribute('disabled', true);

      document.getElementsByClassName('share-post')[0].style.backgroundColor =
        '#eee';
      document.getElementsByClassName('share-post')[0].style.color = 'initial';
    }
  };

  // * ON IMAGE SOURCE
  const showSelectedImageContainer = () => {
    document.querySelector('#InputFile').style.display = 'block';
  };

  const selectedImage = () => {
    document
      .getElementById('imageSource')
      .addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
          // PREVIEW
          document.querySelector('#ImagePreview').style.display = 'block';
          document.querySelectorAll('#ImagePreview img')[0].src = this.result;

          // STATE
          setShipmentDatas({
            ...shipmentDatas,
            shipment: {
              message: shipmentDatas.shipment.message,
              image: this.result,
            },
          });

          // BODY FOOT
          document.getElementsByClassName('tools')[0].style.display = 'none';
          document.getElementById('InputFile').style.display = 'none';
        });
        reader.readAsDataURL(this.files[0]);
      });
  };

  const deleteImage = () => {
    // STATE
    setShipmentDatas({
      ...shipmentDatas,
      shipment: { message: shipmentDatas.shipment.message, image: '' },
    });

    // PREVIEW
    document.querySelectorAll('#ImagePreview img')[0].src = '';

    // BODY FOOT
    document.getElementsByClassName('tools')[0].style.display = 'flex';
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
                  onKeyUp={onKeyUp}
                ></textarea>

                <div id="SelectedImage">
                  {/* INPUT FILE */}
                  <div className="input-file" id="InputFile">
                    <label onClick={selectedImage}>
                      <input type="file" id="imageSource" />

                      <div className="d-flex direction-column justify-content-center align-items-center">
                        <span>
                          <FontAwesomeIcon icon={faImage} />
                        </span>
                        <p>Fotoğraflar / Videolar Ekle</p>
                        <small>veya sürükle ve bırak</small>
                      </div>
                    </label>
                  </div>

                  {/* IMAGE SOURCE */}
                  <div className="image-preview" id="ImagePreview">
                    <span>
                      <FontAwesomeIcon icon={faClose} onClick={deleteImage} />
                    </span>
                    <img src="" alt="" />
                  </div>
                </div>
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
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
                        className="bg-color bg-white"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
                        className="bg-color bg-blue-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
                        className="bg-color bg-red-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
                        className="bg-color bg-orange-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
                        className="bg-color bg-yellow-gradient"
                      ></div>
                      <div
                        onClick={changeBgColor}
                        onMouseUp={e =>
                          setShipmentDatas({
                            ...shipmentDatas,
                            style: { bg: e.target.classList[1] },
                          })
                        }
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
                        <FontAwesomeIcon
                          icon={faImages}
                          onClick={showSelectedImageContainer}
                        />
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
