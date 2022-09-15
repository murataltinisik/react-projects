import React, { Component } from 'react';

// ? CAROUSEL
import '../../assets/Card/card.scss';
import '../../assets/Card/card2.scss';
import '../../assets/Card/send-card.scss';

// ? SCSS
import Scss from './style.module.scss';

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
