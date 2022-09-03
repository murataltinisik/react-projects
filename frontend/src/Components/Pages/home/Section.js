import React from 'react';

// ? MODULE CSS
import Scss from './style.module.scss';

// * PARTS
import Left from './parts/Left';
import Center from './parts/Center';
import Right from './parts/Right';

function Section() {
  return (
    <section
      id={Scss.SectionContainer}
      className="d-flex justify-content-between"
    >
      {/* LEFT */}
      <Left />

      {/* CENTER */}
      <Center />

      {/* RIGHT */}
      <Right />
    </section>
  );
}

export default Section;
