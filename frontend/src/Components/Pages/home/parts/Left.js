import React from 'react';

// ? MODULE SCSS
import Scss from '../../../assets/scss/home-scss/styles/left.module.scss';

// LEFT MENU
import LeftMenu from '../../static/LeftMenu/LeftMenu';

function Left() {
  return (
    <div className={`${Scss.left} leftContainerResp`} id={Scss.LeftContainer}>
      <LeftMenu />
    </div>
  );
}

export default Left;
