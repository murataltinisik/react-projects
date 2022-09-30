import React from 'react';

// ? STYLE
import Scss from './styles/style.module.scss';

// ? PARTS
import Head from './parts/Head';
import Body from './parts/Body';

function Section() {
  return (
    <div id={Scss.ReelsContainer}>
      {/* HEAD */}
      <Head />

      {/* BODY */}
      <Body />
    </div>
  );
}

export default Section;
