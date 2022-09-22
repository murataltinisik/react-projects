import React, { Component } from 'react';

// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './Section';

// ? ASSETS
import '../../assets/Card/send-card.scss';

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
