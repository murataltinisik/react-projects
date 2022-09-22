import { faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// ? MODULE SCSS
import Scss from './styles/content.module.scss';

import Profile from '../../../profile/parts/Head';

class Content extends Component {
  render() {
    return (
      <div className={Scss.contentContainer}>
        {/* INFO */}
        <div className={Scss.info}>{this.props.info}</div>

        <Profile whereFrom="FriendContainer" />
      </div>
    );
  }
}

export default Content;
