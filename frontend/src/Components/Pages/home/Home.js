import React, { PureComponent } from 'react';
// ? HEADER & SECTION
import Header from '../../static/Header';
import Section from './Section';

// ? ASSETS CSS
import '../../assets/Display/flex.scss';
import '../../assets/main.scss';
import '../../assets/MarginPadding/margin-padding.scss';
import '../../assets/Input/input.scss';
import '../../assets/Link/link.scss';
import '../../assets/Button/button.scss';
import '../../assets/Elips/elips.scss';

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
