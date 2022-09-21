import { useState } from 'react';

// ? FONT AWESOME
import {
  faBell,
  faChevronRight,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? MODULE SCSS
import Scss from './styles/left.module.scss';
import './styles/responsive-left.scss';

function StaticLeft({ title, menu, settingsMenu }) {
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
          <FontAwesomeIcon icon={faGear} onClick={onSettingMenuOpen} />

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
            {settingsMenu.map((setting, i) => (
              <div
                className={`${
                  setting.openAndClose && 'status-btn'
                } additionalButton d-flex justify-content-between align-items-center`}
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
          {menu.map((item, i) => (
            <li key={i} className={`${Scss.active} additionalButton`}>
              <span>
                <FontAwesomeIcon icon={item.icon} />
              </span>

              <a href={item.link}>{item.name}</a>

              {item.moreList && <FontAwesomeIcon icon={faChevronRight} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StaticLeft;
