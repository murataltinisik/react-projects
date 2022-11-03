import {
  faCircleCheck,
  faClose,
  faEdit,
  faImage,
  faImagePortrait,
  faPlusCircle,
  faThumbsUp,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? SCSS
import Scss from '../style.module.scss';

// ? SHARED
import { messageContainerOpen } from '../shared/Shared';
import { withRouter } from 'react-router-dom';

class NewMessage extends Component {
  // DID MOUNT
  componentDidUpdate() {
    if (this.props.location.search) {
      this.selectUser();
      document.getElementById('userResult').style.display = 'block';
    }
  }

  // * MESSAGE CONTAINER CLOSE
  messageContainerClose = () => {
    document.getElementById('messageContainer').style.display = 'none';
    this.discardUser();
  };

  // * FIND USER
  findUser = e => {
    document.getElementById('messageList').style.display = 'none';
    document.getElementById('userResult').style.display = 'block';

    //
    if (e.target.value.length <= 0) {
      // * DISPLAY : NONE
      document.getElementById('userResult').style.display = 'none';
      document.getElementById('userSpeech').style.display = 'none';

      // * DISPLAY : BLOCK
      document.getElementById('userList').style.display = 'block';
      document.getElementById('messageList').style.display = 'block';
      document.getElementById('userResultTitle').style.display = 'block';
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

  // * SELECT USER
  selectUser = () => {
    // * DISPLAY : NONE
    document.getElementById('userList').style.display = 'none';
    document.getElementById('messageList').style.display = 'none';
    document.getElementById('userResultTitle').style.display = 'none';
    document.querySelectorAll('#buyer input')[0].style.display = 'none';

    // * DISPLAY : BLOCK
    document.getElementById('userSpeech').style.display = 'block';
    document.getElementById('selectedUser').style.display = 'block';
  };

  // * DISCARD USER
  discardUser = () => {
    // * DISPLAY : NONE
    document.getElementById('userSpeech').style.display = 'none';
    document.getElementById('selectedUser').style.display = 'none';

    // * DISPLAY : BLOCK
    document.getElementById('messageList').style.display = 'block';
    document.querySelectorAll('#buyer input')[0].style.display = 'block';

    // * INPUT VALUE
    document.getElementById('findUser').value = '';
  };

  render() {
    console.log();
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

              <div className={Scss.buyer} id="buyer">
                <span>Alıcı:</span>
                <input type="text" onKeyUp={this.findUser} id="findUser" />
                <div className={Scss.selectedUser} id="selectedUser">
                  Murat Altınışık
                  <FontAwesomeIcon icon={faClose} onClick={this.discardUser} />
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className={Scss.body}>
              <ul id="messageList" className={Scss.messageList}>
                <li className={Scss.active}>Önerilenler</li>
              </ul>
            </div>
          </div>

          {/* USER RESULT */}
          <div className={Scss.result} id="userResult">
            <div className={Scss.title} id="userResultTitle">
              Accounts
            </div>

            {/* USER LIST */}
            <ul id="userList">
              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

              <li
                onClick={this.selectUser}
                className="d-flex justify-content-start align-items-center"
              >
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

            {/* USER SPEECH */}
            <div className={Scss.userSpeech} id="userSpeech">
              {/* SELECTED USER DETAIL */}
              <div className={Scss.selectedUserDetail}>
                {/* IMAGE */}
                <div className={Scss.image}>
                  <img
                    src="https://scontent.fesb3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=triOvM3Gcs0AX-RjwMl&_nc_ht=scontent.fesb3-2.fna&oh=00_AT9cwptAmnutc3SIi_Dvfnn7-FkTujJ_iZS8nieYYPOoxw&oe=63748978"
                    alt=""
                  />
                </div>

                {/* DETAIL */}
                <div className={Scss.detail}>
                  <b>Murat Altınışık</b>
                  <p>Facebook</p>
                  <small>Facebook arkadaş değilsiniz.</small>
                </div>
              </div>

              {/* CHAT */}
              <div className={Scss.chat}>
                <div className={Scss.firstPerson}>
                  <div className={`${Scss.message} ${Scss.firstsMessage}`}>
                    <p className={Scss.text}>Nasılsın?</p>
                  </div>

                  <div className={`${Scss.message} ${Scss.firstsMessage}`}>
                    <p className={Scss.text}>Bende iyiyim Teşekkür ederim?</p>
                  </div>
                </div>
                <div className={Scss.secondPerson}>
                  <div className={`${Scss.message} ${Scss.secondsMessage}`}>
                    <p className={Scss.text}>
                      Hangi okulu kazandın nereye gidiyorsun ve hazırlık
                      okuyormusun?
                    </p>
                  </div>
                </div>
              </div>

              {/* CHAT FORM */}
              <div className={Scss.chatForm}>
                <ul className={Scss.icons}>
                  <li>
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faImage} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faImagePortrait} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faVideo} />
                  </li>
                  <li>
                    <input type="text" placeholder="Aa" />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewMessage);
