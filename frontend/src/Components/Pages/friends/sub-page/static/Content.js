import React, { Component } from 'react';

// ? MODULE SCSS
import Scss from '../../../../assets/scss/friends-scss/static-scss/styles/content.module.scss';

// ? PROFILE HEAD
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
