import React from 'react';
import Scss from './style.module.scss';

function Section() {
  return (
    <section
      id={Scss.SectionContainer}
      className="d-flex justify-content-between"
    >
      <div className={Scss.left}>
        <h1>MENU</h1>
      </div>
      <div className={Scss.center}>
        <h1>CONTENT</h1>
      </div>
      <div className={Scss.right}>
        <h1>GROUPS</h1>
      </div>
    </section>
  );
}

export default Section;
