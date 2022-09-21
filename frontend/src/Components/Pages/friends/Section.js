import React, { Component } from 'react';

// ? ASSETS
import '../../assets/Card/friend-card.scss';

// ? PARTS
import Left from './parts/Left';
import Content from './parts/Content';

class Section extends Component {
  render() {
    return (
      <div className="d-flex align-items-start">
        <Left />
        <Content />
      </div>
    );
  }
}

export default Section;
