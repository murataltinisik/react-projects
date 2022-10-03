import React, { PureComponent } from 'react';

// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './Section';

// ? ASSETS CSS
import '../../assets/css/Input/input.scss';
import '../../assets/css/Elips/elips.scss';
import '../../assets/css/Background/background.scss';

export class Home extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Section />
      </>
    );
  }
}

export default Home;
