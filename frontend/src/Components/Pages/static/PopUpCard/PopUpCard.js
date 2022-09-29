import React from 'react';

// ? FONT AWESOME
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? ASSETS
import '../../../assets/color/color.scss';

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

  return (
    <div
      className="popup"
      onMouseLeave={() =>
        (document.getElementsByClassName('popup')[0].style.display = 'none')
      }
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
        <div className="body">
          {/* TITLE & DESCRIPTION */}
          <div>
            {body.title && <div className="title">{body.title}</div>}
            {body.description && (
              <div className="description">{body.description}</div>
            )}
          </div>

          {/* CONTENT */}
          <div className="content"></div>
        </div>

        {/* FOOT */}
        <div className="foot">
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
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;
