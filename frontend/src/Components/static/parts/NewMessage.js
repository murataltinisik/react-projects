import {
  faCircleCheck,
  faClose,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? SCSS
import Scss from '../style.module.scss';

// ? SHARED
import { messageContainerOpen } from '../shared/Shared';

class NewMessage extends Component {
  // * MESSAGE CONTAINER CLOSE
  messageContainerClose = () => {
    document.getElementById('messageContainer').style.display = 'none';
  };

  // * FIND USER
  findUser = e => {
    document.getElementById('messageList').style.display = 'none';
    document.getElementById('userResult').style.display = 'block';

    //
    if (e.target.value.length <= 0) {
      document.getElementById('messageList').style.display = 'block';
      document.getElementById('userResult').style.display = 'none';
    } else {
      const users = document.querySelectorAll('#userResult li');
      const usersName = document.querySelectorAll('#userResult li .name');

      for (let i = 0; i < users.length; i++) {
        if (usersName[i].innerText.indexOf(e.target.value) > -1) {
          users[i].style.display = 'flex';
        } else {
          users[i].style.display = 'none';
        }
      }
    }
  };

  render() {
    return (
      <div className={Scss.newMessage}>
        {/* BUTTON */}
        <div className={Scss.button} onClick={messageContainerOpen}>
          <FontAwesomeIcon icon={faEdit} />

          {/* INFO */}
          <div className={Scss.info}>Yeni Mesaj</div>
        </div>

        {/* CONTAINER */}
        <div className={Scss.container} id="messageContainer">
          {/* BG */}
          <div className={Scss.bg}>
            {/* HEAD */}
            <div className={Scss.head}>
              <div className="d-flex justify-content-between align-items-center">
                <span>Yeni Mesaj</span>
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={this.messageContainerClose}
                />
              </div>
              <div className={Scss.buyer}>
                <span>Alıcı:</span>
                <input type="text" onKeyUp={this.findUser} />
              </div>
            </div>

            {/* BODY */}
            <div className={Scss.body}>
              <ul id="messageList" className={Scss.messageList}>
                <li className={Scss.active}>Önerilenler</li>
              </ul>
            </div>
          </div>

          <div className={Scss.result} id="userResult">
            <div className={Scss.title}>Accounts</div>
            <ul id="userList">
              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Murat Altınışık</div>
                    <div className={`${Scss.approved} ml-1`}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                  </div>
                  <div className={Scss.description}>murat40</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Yusuf</div>
                  </div>
                  <div className={Scss.description}>yusufsss</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Yiğit</div>
                  </div>
                  <div className={Scss.description}>Yiğit154</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Ali</div>
                  </div>
                  <div className={Scss.description}>alialtinisikkkk</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Murat Altınışık</div>
                    <div className={`${Scss.approved} ml-1`}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                  </div>
                  <div className={Scss.description}>murat40</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Murat Altınışık</div>
                    <div className={`${Scss.approved} ml-1`}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                  </div>
                  <div className={Scss.description}>murat40</div>
                </div>
              </li>

              <li className="d-flex justify-content-start align-items-center">
                <div className={Scss.image}>
                  <img src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Iey42NUlTi8AX-8cZ8l&_nc_ht=scontent.fesb3-2.fna&oh=00_AT8B9uDcBuKQeq0WB0JxsWoAe_gCsRsT-KzPtMyUmcZKbA&oe=6364B778" />
                </div>

                <div className="ml-1">
                  <div className="d-flex align-items-center">
                    <div className={`${Scss.name} name`}>Murat Altınışık</div>
                    <div className={`${Scss.approved} ml-1`}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                  </div>
                  <div className={Scss.description}>murat40</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMessage;
