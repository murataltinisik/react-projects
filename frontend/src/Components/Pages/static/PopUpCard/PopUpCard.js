import React from 'react';

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
  faSearch,
  faTag,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? ASSETS
import '../../../assets/css/color/color.scss';
import '../../../assets/css/PopUp/popup.scss';

// ? USE SHIPMENT
import { useShipment } from '../../../Context/ShipmentDataContext';

// ? POPUP PROPERTIES
import {
  onShowBgColorContainer,
  changeBgColor,
  onBgBack,
  showSelectedImageContainer,
  selectedImage,
  deleteImage,
  onFindUserTag,
  onTagUser,
  onTag,
  onBackPage,
} from './PopUpProperties/PopUpProperties';

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
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
          'aria-label'
        );
    } else if (isPath) {
      ariaLabel =
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
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

  // * ON KEY DOWN
  const onKeyUp = e => {
    // * SET SHIPMENT DATAS
    setShipmentDatas({
      ...shipmentDatas,
      shipment: {
        message: e.target.value,
        image: shipmentDatas.shipment.image,
        tagUserId: shipmentDatas.shipment.tagUserId,
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

  return (
    <div
      className="popup"
      // onMouseLeave={() =>
      //   (document.getElementsByClassName('popup')[0].style.display = 'none')
      // }
      aria-label={`#${head.label}`}
    >
      <div
        className={`container ${
          body.where === 'ShipmentContainer' &&
          'd-flex justify-content-between align-items-center'
        }`}
      >
        <div id={`${body.where === 'ShipmentContainer' && 'main-popup'}`}>
          {/* HEAD */}
          <div className="head">
            <div className="title">{head.title}</div>
            <div className="close" onClick={onClosePopUp}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>

          {/* BODY */}
          <div
            className={`body ${body.where === 'ShipmentContainer' && 'p-0'}`}
          >
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
                      <label
                        onClick={() =>
                          selectedImage(setShipmentDatas, shipmentDatas)
                        }
                      >
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
                        <FontAwesomeIcon
                          icon={faClose}
                          onClick={() =>
                            deleteImage(setShipmentDatas, shipmentDatas)
                          }
                        />
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
                          <FontAwesomeIcon
                            icon={faUserTag}
                            onClick={onTagUser}
                          />
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

        {body.where === 'ShipmentContainer' && (
          <div className="popup-pages" id="popup-pages">
            {/* HEAD */}
            <div className="head" style={{ width: '18rem' }}>
              <div className="title">Kişileri Etiketle</div>
              <div className="close back-page" onClick={onBackPage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </div>

            {/* BODY */}
            <div className="body">
              {/* SEARCH */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="search">
                  <FontAwesomeIcon icon={faSearch} />
                  <input
                    type="text"
                    placeholder="Arkadaşlarını Ara"
                    onKeyUp={onFindUserTag}
                  />
                </div>
                <button className="searcing-end">Bitti</button>
              </div>

              {/* RESULT MESSAGE */}
              <div className="result-message">Kimse Bulunamadı.</div>

              {/* USER RESULTS */}
              <div id="userResults">
                <ul>
                  <li onClick={() => onTag(1, setShipmentDatas, shipmentDatas)}>
                    <div>
                      <div className="image">
                        <img
                          src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-qf7mgz00rQfy_f6M8iCLsEbFTRZXWzWyrgHv7LYyoTQ&oe=63787DF8"
                          alt=""
                        />
                      </div>

                      <div className="detail">
                        <div className="name">Murat Altınışık</div>
                      </div>
                    </div>

                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faTag} />
                      Etiketle
                    </button>
                  </li>

                  <li onClick={() => onTag(2, setShipmentDatas, shipmentDatas)}>
                    <div>
                      <div className="image">
                        <img
                          src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-qf7mgz00rQfy_f6M8iCLsEbFTRZXWzWyrgHv7LYyoTQ&oe=63787DF8"
                          alt=""
                        />
                      </div>

                      <div className="detail">
                        <div className="name">Kübra Altınışık</div>
                      </div>
                    </div>

                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faTag} />
                      Etiketle
                    </button>
                  </li>

                  <li onClick={() => onTag(3, setShipmentDatas, shipmentDatas)}>
                    <div>
                      <div className="image">
                        <img
                          src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-qf7mgz00rQfy_f6M8iCLsEbFTRZXWzWyrgHv7LYyoTQ&oe=63787DF8"
                          alt=""
                        />
                      </div>

                      <div className="detail">
                        <div className="name">Emir Altınışık</div>
                      </div>
                    </div>

                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faTag} />
                      Etiketle
                    </button>
                  </li>

                  <li onClick={() => onTag(4, setShipmentDatas, shipmentDatas)}>
                    <div>
                      <div className="image">
                        <img
                          src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-qf7mgz00rQfy_f6M8iCLsEbFTRZXWzWyrgHv7LYyoTQ&oe=63787DF8"
                          alt=""
                        />
                      </div>

                      <div className="detail">
                        <div className="name">Yusuf Altınışık</div>
                      </div>
                    </div>

                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faTag} />
                      Etiketle
                    </button>
                  </li>

                  <li onClick={() => onTag(5, setShipmentDatas, shipmentDatas)}>
                    <div>
                      <div className="image">
                        <img
                          src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT-qf7mgz00rQfy_f6M8iCLsEbFTRZXWzWyrgHv7LYyoTQ&oe=63787DF8"
                          alt=""
                        />
                      </div>

                      <div className="detail">
                        <div className="name">Mehmet Altınışık</div>
                      </div>
                    </div>

                    <button className="facebook-btn">
                      <FontAwesomeIcon icon={faTag} />
                      Etiketle
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUpCard;
