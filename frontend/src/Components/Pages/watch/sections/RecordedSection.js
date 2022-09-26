import React from 'react';

// ? STATIC LEFT
import StaticLeft from '../../static/StaticLeft/StaticLeft';
import Content from '../parts/Content';

// ? SECTION MENU
import { menu, settingsMenu } from './SectionMenu';

function RecordedSection() {
  return (
    <div className="d-flex justify-content-center align-items-start">
      <StaticLeft
        title="Kaydedilen Videolar"
        menu={menu}
        settingsMenu={settingsMenu}
      />

      <Content />
    </div>
  );
}

export default RecordedSection;
