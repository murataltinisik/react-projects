import { useState } from 'react';

// ? FONT AWESOME
import { faA, faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? POPUP
import PopUpCard, { onOpenPopUp } from '../PopUpCard/PopUpCard';

// ? MODULE SCSS
import Scss from './styles/left.module.scss';
import './styles/responsive-left.scss';

function StaticLeft({
  title,
  menuStyle,
  menu,
  settingsMenu,
  storyType,
  textStorySettings,
  setTextStorySettings,
}) {
  // * MENU OPEN STATE
  const [isSettingMenuOpen, setSettingsMenuOpen] = useState(false);
  const [isSettingMenuActive, setSettingMenuActive] = useState(false);

  // * SETTING MENU OPEN & CLOSE
  const onSettingMenuOpen = e => {
    if (isSettingMenuOpen) {
      document.getElementById('settingsMenu').style.display = 'none';
      e.target.style.backgroundColor = '#fff';
      e.target.style.color = '#000';
      setSettingsMenuOpen(false);
    } else if (!isSettingMenuOpen) {
      document.getElementById('settingsMenu').style.display = 'block';
      e.target.style.backgroundColor = '#166FE520';
      e.target.style.color = '#1877F2';
      setSettingsMenuOpen(true);
    }
  };

  // * OPEN AND CLOSE NOTIFICATE
  const openAndCloseNotificate = e => {
    const equalsTagName =
      e.target.tagName === 'path' ||
      e.target.tagName === 'svg' ||
      e.target.tagName === 'P' ||
      e.target.tagName === 'DIV';
    const childNodes = e.target.parentElement.childNodes;

    if (equalsTagName) {
      if (childNodes[2]) {
        if (isSettingMenuActive) {
          childNodes[2].style.backgroundColor = '#1877F2';
          childNodes[2].childNodes[0].style.left = '1.4rem';
          setSettingMenuActive(false);
        } else {
          childNodes[2].style.backgroundColor = '#eee';
          childNodes[2].childNodes[0].style.left = '0';
          setSettingMenuActive(true);
        }
      }
    }
  };

  // * TEXT STORY SETTINGS
  const selectionColor = e => {
    let colors = document.querySelectorAll('#color-navigation div');

    for (let i = 0; i < colors.length; i++) {
      if (e.target.className === colors[i].className) {
        e.target.style.border = '3px solid blue';
        e.target.style.boxShadow = 'inset 0 0 3px #000';

        setTextStorySettings({
          ...textStorySettings,
          background: e.target.className,
        });
      } else {
        colors[i].style.border = 'none';
        colors[i].style.boxShadow = '0 0 6px #ccc';
      }
    }
  };

  const selectionFontFamily = e => {
    const fontFamily = e.target.value;
    setTextStorySettings({ ...textStorySettings, fontFamily: fontFamily });
  };

  const inputValue = e => {
    const title = e.target.value;
    setTextStorySettings({ ...textStorySettings, title: title });
  };

  // * IMAGE STORY ADD TEXT
  const ImageStoryAddText = () => {
    document.getElementsByClassName('ImageStoryAddText')[0].style.display =
      'flex';
  };

  return (
    <div id={Scss.LeftContainer} className="LeftContainerResp">
      {/* HEAD */}
      <div
        className={`${Scss.head} headResp d-flex justify-content-between align-items-center`}
      >
        {/* TITLE */}
        <h3 className={Scss.title}>{title}</h3>

        {/* SETTINGS */}
        <div className={`${Scss.settings} settingsResp`}>
          {settingsMenu && (
            <FontAwesomeIcon icon={faGear} onClick={onSettingMenuOpen} />
          )}

          {/* SETTINGS MENU */}
          <div className={Scss.menu} id="settingsMenu">
            {/* MESSAGE */}
            <div className={Scss.message}>
              <div className={Scss.title}>Bildirim Ayarları</div>

              <div className={Scss.description}>
                Arkadaşlarının güncellemeleri hakkında nasıl bildirim alacağını
                yönetebilirsin.
              </div>
            </div>

            {/* NOTIFICATE */}
            {settingsMenu &&
              settingsMenu.map((setting, i) => (
                <div
                  className={`mt-1 ${
                    setting.openAndClose && 'status-btn'
                  }  additionalButton d-flex justify-content-start align-items-center`}
                  onClick={openAndCloseNotificate}
                  key={i}
                  itemID={i}
                >
                  <span>
                    <FontAwesomeIcon icon={setting.icon} />
                  </span>

                  <p>{setting.title}</p>

                  {setting.openAndClose && (
                    <div>
                      <div className="circle"></div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className={Scss.menu}>
        <ul>
          {menu &&
            menu.map((item, i) => (
              <>
                <li
                  key={i}
                  className={`${
                    menuStyle === 'normal-link'
                      ? Scss.normalLinkActive
                      : Scss.active
                  } ${item.image && Scss.illustrated} ${
                    menuStyle === 'normal-link'
                      ? Scss.normalLink
                      : 'additionalButton'
                  }`}
                >
                  {!item.image ? (
                    <>
                      <span>
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                      <a href={item.link}>{item.name}</a>
                    </>
                  ) : (
                    <>
                      <div className={Scss.image}>
                        <img src={item.image[1]} />
                      </div>
                      <p className="ml-1">{item.name}</p>
                    </>
                  )}

                  {item.moreList && <FontAwesomeIcon icon={faChevronRight} />}
                </li>

                {item.isHere && <div className={Scss.hr} />}
              </>
            ))}
        </ul>

        {storyType && storyType === 'text_story' && (
          <div className={Scss.textStory}>
            <textarea
              placeholder="Yazmaya Başla"
              onKeyUp={inputValue}
            ></textarea>

            <select onChange={selectionFontFamily}>
              <option value="Poppins">Başlık</option>
              <option value="Times New Roman">Sade</option>
              <option value="Poppins">Temiz</option>
              <option value="cursive">Rahat</option>
              <option value="fantasy">Süslü</option>
            </select>

            <div className={Scss.backgrounds}>
              <div className={Scss.title}>Arkaplanlar</div>

              <div className={Scss.colors} id="color-navigation">
                <div
                  onClick={selectionColor}
                  className="bg-blue-gradient"
                ></div>
                <div onClick={selectionColor} className="bg-red-gradient"></div>
                <div
                  onClick={selectionColor}
                  className="bg-orange-gradient"
                ></div>
                <div
                  onClick={selectionColor}
                  className="bg-black-gradient"
                ></div>
                <div
                  onClick={selectionColor}
                  className="bg-white-gradient"
                ></div>
                <div
                  onClick={selectionColor}
                  className="bg-green-gradient"
                ></div>
                <div
                  onClick={selectionColor}
                  className="bg-yellow-gradient"
                ></div>
              </div>
            </div>
          </div>
        )}

        {storyType && storyType === 'image_story' && (
          <div
            className="additionalButton width-100 mx-1"
            style={{
              padding: '8px',
              cursor: 'pointer',
              borderTop: '1px solid #ccc',
            }}
            onClick={ImageStoryAddText}
            id="ImageStoryAddText"
          >
            <span>
              <FontAwesomeIcon icon={faA} />
            </span>
            Metin Ekle
          </div>
        )}

        {storyType && (
          <>
            <PopUpCard
              head={{ title: 'Hikayeyi Sil?', label: 'CancelStory' }}
              body={{
                description:
                  'Bu Hikayeyi Silmek istediğinden emin misin? Hikayen kaydedilmeyecek.',
              }}
              foot={{ whereFromFoot: 'Story' }}
            />

            <div className={Scss.storyActions}>
              <button
                className="secondary-btn"
                onClick={e => onOpenPopUp(e, 'CancelStory')}
              >
                Yok Say
              </button>
              <button className="primary-btn">Hikayende Paylaş</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StaticLeft;
