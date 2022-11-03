import React from 'react';

// ? SUB COMPONENTS
import Left from './Left';
import Content from './Content';

// ? SCSS
import Scss from '../../../../assets/scss/friends-scss/content.module.scss';

function Section({ title, info }) {
  return (
    <div className="d-flex justify-content-between" id={Scss.ContentContainer}>
      <Left title={title} />
      <Content info={info} />
    </div>
  );
}

export default Section;
