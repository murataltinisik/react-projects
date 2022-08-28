import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
    document.querySelectorAll('.contents > div')[itemId].style.display =
      'block';

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
            </div>
            {/* REELS */}
            <div className={Scss.content}>Reels</div>
            {/* ROOMS */}
            <div className={Scss.content}>Odalar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
