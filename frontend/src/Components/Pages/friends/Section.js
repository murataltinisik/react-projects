import React, { Component } from 'react';

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
