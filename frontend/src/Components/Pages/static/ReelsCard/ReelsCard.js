import React from 'react';

// ? STYLE
import Scss from './styles/style.module.scss';
import './styles/responsive.scss';

// ? CARD HEAD
import CardHead from '../CardHead/CardHead';

// ? MP4
import cover from '../../../assets/videos/video.mp4';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

function ReelsCard() {
  return (
    <div id={Scss.ReelsCardContainer} className="ReelsCardContainerResp">
      <div className={`${Scss.ReelsCard} ReelsCardResp`}>
        {/* HEAD */}
        <div className={Scss.head}>
          <CardHead itemId={0} />
        </div>

        {/* BODY */}
        <div className={Scss.body}>
          {/* VIDEO */}
          <video
            className="reel-video"
            loop
            itemID="0"
            width="100%"
            height="100%"
          >
            <source src={cover} type={'video/mp4'} />
          </video>
        </div>

        {/* FOOT */}
        <div className={Scss.foot}>
          <marquee className={Scss.description} direction="left">
            Kerem Önder - Bu 5 Farzı Yapan Kurtulur Bu 5 Farzı Yapan Kurtulur Bu
            5 Farzı Yapan Kurtulur
          </marquee>
        </div>

        {/* RIGHT */}
        <div className={`${Scss.right} rightResp`}>
          {/* ACTIONS */}
          <div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faThumbsUp} /> <span>1.3B</span>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faComment} /> <span>200</span>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faShare} /> <span>100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReelsCard;
