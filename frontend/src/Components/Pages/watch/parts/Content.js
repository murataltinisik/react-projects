import {
  faComment,
  faGlobe,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import Scss from './styles/content.module.scss';

class Content extends Component {
  render() {
    return (
      <div id={Scss.ContentContainer} className="mt-2">
        <div className="send-card">
          {/* HEAD */}
          <div className="head">
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
          </div>

          {/* BODY */}
          <div className="body">
            <div className="content">
              <b>ALPARSLAN BÜYÜK SELÇUKLU</b>
              <p>Bu Aksam Saat 21:00'da</p>
            </div>
            <div className="image">
              <img src="https://img.piri.net/resim/imagecrop/2021/11/08/10/20/resized_3cba4-8aad84e8alparslanpost8llp.jfif" />
            </div>
          </div>

          {/* FOOT */}
          <div className="foot">
            <ul>
              <li className="private-btn">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className="ml-1">Beğen</span>
              </li>
              <li className="private-btn">
                <FontAwesomeIcon icon={faComment} />
                <span className="ml-1">Yorum Yap</span>
              </li>
              <li className="private-btn">
                <FontAwesomeIcon icon={faShare} />
                <span className="ml-1">Paylaş</span>
              </li>
            </ul>
          </div>

          {/* COMMENTS */}
          <div className="comment">
            {/* INPUT */}
            <div className="input">
              <div className="image">
                <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=c8Y23ztaUNIAX-si-UX&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9Jtbrv41wvJPKINgMMWhPjnN9OduM_lYyLiPV50W4sEQ&oe=6350F0F8" />
              </div>

              <input type="text" placeholder="Yorum Yaz" />
            </div>

            {/* INFO */}
            <div className="info">Paylaşmak için enter tuşuna bas.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
