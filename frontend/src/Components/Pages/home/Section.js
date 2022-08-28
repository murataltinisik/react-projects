import React from 'react';

// ? MODULE CSS
import Scss from './style.module.scss';

// * PARTS
import Left from './parts/Left';
import Center from './parts/Center';

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

      <div className={Scss.right}>
        <h1>GROUPS</h1>
      </div>
    </section>
  );
}

export default Section;
