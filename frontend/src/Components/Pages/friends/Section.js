import React, { Component } from 'react';

// ? ASSETS
import '../../assets/Link/link.scss';
import '../../assets/Display/flex.scss';
import '../../assets/Button/button.scss';
import '../../assets/Card/friend-card.scss';
import '../../assets/MarginPadding/margin-padding.scss';

// ? PARTS
import Left from './parts/Left';
import Content from './parts/Content';

class Section extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-start">
        <Left />
        <Content />
      </div>
    );
  }
}

export default Section;
