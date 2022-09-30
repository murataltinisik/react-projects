import React, { Component } from 'react';

// ? PARTS
import Navigation from './Navigation';

// ? STATIC
import ReelsCardList from '../../static/ReelsCard/ReelsCarsList';

// ? SCSS
import Scss from '../styles/body.module.scss';

class Body extends Component {
  render() {
    return (
      <div className={Scss.body}>
        {/* REELS CARD LIST */}
        <ReelsCardList />

        {/* NAVIGATION */}
        <Navigation />
      </div>
    );
  }
}

export default Body;
