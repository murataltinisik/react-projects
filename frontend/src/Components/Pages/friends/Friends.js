import React, { Component } from 'react';

// ? ASSETS
import '../../assets/css/Card/friend-card.scss';

// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './Section';

class Friends extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

export default Friends;
