import React from 'react';

// ? SUB COMPONENTS
import Left from '../static/Left';
import Content from '../static/Content';

// ? SCSS
import Scss from '../../../../assets/scss/friends-scss/content.module.scss';

function Section() {
  return (
    <div className="d-flex justify-content-between" id={Scss.ContentContainer}>
      <Left title="Öneriler" />
      <Content info="Profillerinin önizlemesini görmek için kişilerin adlarını seç." />
    </div>
  );
}

export default Section;
