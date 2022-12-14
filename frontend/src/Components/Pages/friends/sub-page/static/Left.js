import React, { Component } from 'react';

// ? FONT AWESOME
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ? ASSETS
import '../../../../assets/css/Link/link.scss';
import '../../../../assets/css/Display/flex.scss';
import '../../../../assets/css/Card/user-card-2.scss';

// ? MODULE SCSS
import Scss from '../../../../assets/scss/friends-scss/static-scss/styles/left.module.scss';
import { Link } from 'react-router-dom';

export class Left extends Component {
  render() {
    return (
      <div className={Scss.leftContainer}>
        {/* HEAD */}
        <div
          className={`${Scss.head} d-flex justify-content-start align-items-center`}
        >
          <Link
            to="/friends"
            className="light-link pl-1"
            style={{ fontSize: 'unset' }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

          <div className="pl-1">
            <a href="#" className="light-link">
              Arkadaşlar
            </a>
            <div className={Scss.title}>{this.props.title}</div>
          </div>
        </div>

        <div className="hr"></div>

        {/* BODY */}
        <div className={Scss.body}>
          <a href="#" className="user-card-2">
            {/* IMAGE */}
            <div className="image">
              <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c8Y23ztaUNIAX-si-UX&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9Jtbrv41wvJPKINgMMWhPjnN9OduM_lYyLiPV50W4sEQ&oe=6350F0F8" />
            </div>

            <div className="ml-1">
              {/* NAME */}
              <div className="name">Murat Altınışık</div>

              {/* ACTIONS */}
              <div className="actions">
                <button className="primary-btn">Arkadaşı Ekle</button>
                <button className="secondary-btn activeClass">Kaldır</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Left;
