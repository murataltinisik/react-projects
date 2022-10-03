import React, { Component } from 'react';

// ? CAROUSEL
import '../../assets/css/Card/card.scss';
import '../../assets/css/Card/card2.scss';
import '../../assets/css/Card/send-card.scss';
import '../../assets/css/PopUp/popup.scss';

// ? SCSS
import Scss from '../../assets/scss/profile-scss/style.module.scss';

// ? COMPONENTS
import Head from './parts/Head';
import Carousel from './parts/Carousel';
import Other from './parts/Other';

class Section extends Component {
  render() {
    return (
      <div id={Scss.ProfileContainer}>
        {/* PROFILE */}
        <Head />

        {/* CAROUSEL */}
        <Carousel />

        {/* OTHER */}
        <Other />
      </div>
    );
  }
}

export default Section;
