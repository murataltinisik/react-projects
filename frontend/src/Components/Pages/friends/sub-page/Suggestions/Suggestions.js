import React, { Component } from 'react';

// ? HEADER & SECTION
import Section from '../static/Section';

class Suggestions extends Component {
  render() {
    return (
      <Section
        title="Öneriler"
        info="Profillerinin önizlemesini görmek için kişilerin adlarını seç.
    "
      />
    );
  }
}

export default Suggestions;
