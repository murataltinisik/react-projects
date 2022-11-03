import React, { Component } from 'react';

// ? PARTS
import Navigation from './Navigation';

// ? STATIC
import ReelsCard from '../../static/ReelsCard/ReelsCard';

// ? SCSS
import Scss from '../../../assets/scss/reels-scss/body.module.scss';

class Body extends Component {
  render() {
    return (
      <div className={Scss.body}>
        <ReelsCard />

        {/* NAVIGATION */}
        <Navigation />
      </div>
    );
  }
}

export default Body;
