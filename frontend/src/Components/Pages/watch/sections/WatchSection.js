import React, { Component } from 'react';

// ? STATIC LEFT
import StaticLeft from '../../static/StaticLeft/StaticLeft';
import Content from '../parts/Content';

// ? SECTION MENU
import { menu, settingsMenu } from './SectionMenu';

class Section extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-start">
        <StaticLeft title="Watch" menu={menu} settingsMenu={settingsMenu} />

        <Content />
      </div>
    );
  }
}

export default Section;
