import React from 'react';

// ? HEADER & SECTION
import Header from '../../static/Header';
import LeftMenu from '../static/LeftMenu/LeftMenu';

// ? MODULE SCSS
import Scss from '../../assets/scss/home-scss/styles/left.module.scss';

function Bookmarks() {
  return (
    <>
      <Header />
      <div id={Scss.LeftContainer}>
        <LeftMenu />
      </div>
    </>
  );
}

export default Bookmarks;
