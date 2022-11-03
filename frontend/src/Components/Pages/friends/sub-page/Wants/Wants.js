import React, { Component } from 'react';

// ? ASSETS
import '../../../../assets/css/Card/friend-card.scss';

// ? HEADER & SECTION
import Section from '../static/Section';

class Wants extends Component {
  render() {
    return (
      <Section
        title="Arkadaş İstekleri"
        info="Arkadaşlık istekleri veya önerileri olduğunda, burada görünecekler."
      />
    );
  }
}

export default Wants;
