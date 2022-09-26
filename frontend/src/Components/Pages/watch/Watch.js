import React, { Component } from 'react';

// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './sections/WatchSection';

class Watch extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

export default Watch;
