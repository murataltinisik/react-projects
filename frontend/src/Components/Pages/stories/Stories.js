import React, { Component } from 'react';

// ? STATIC
import Header from '../../static/Header';
import Section from './Section';

import { StorieSelectionProvider } from '../../Context/StorieSelectionContext';

class Strories extends Component {
  render() {
    return (
      <StorieSelectionProvider>
        <Header />
        <Section />
      </StorieSelectionProvider>
    );
  }
}

export default Strories;
