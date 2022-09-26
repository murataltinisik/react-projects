import React, { Component } from 'react';

// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './sections/RecordedSection';

export class RecordedVideos extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

export default RecordedVideos;
