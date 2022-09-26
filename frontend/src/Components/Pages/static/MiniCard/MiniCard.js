import React from 'react';

// ? MINI CARD CSS
import '../../../assets/Card/mini-card.scss';

// ? FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function MiniCard() {
  return (
    <div className="mini-card">
      {/* IMAGE */}
      <div className="image">
        <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t15.5256-10/271998468_1182144635527288_625771246310333910_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=6nrIcdRbkEUAX-zjbL5&_nc_oc=AQlXXASblstkzvR527qRdts0pSHyFlbLuH8xIoqcs8js0DITjLDhfmGT0gr-DEcZ-i4&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8ceyAM5-aOVwBLUFO2aMnq8IYcqNQddZIVKEEJsgIwUw&oe=633760E8" />
      </div>

      <div className="group">
        {/* OWNER */}
        <div className="owner">
          <div className="image">
            <img src="https://scontent.fesb3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=AUCBojK_Ff4AX8ZhcxM&tn=U7RQGoxjCU6lu3jj&_nc_ht=scontent.fesb3-1.fna&oh=00_AT9_MSXiAWR_xc-_pl5Kmkdh3gdPfhqfmf6nN9dkale91A&oe=6358D9F8" />
          </div>
          <div className="name">Murat Altınışık</div>
        </div>

        {/* DETAIL */}
        <div className="detail">
          <div className="name">Elizabeth'in Tek Kızı</div>
        </div>

        {/* OTHER */}
        <div className="delete">
          <FontAwesomeIcon icon={faClose} />
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
