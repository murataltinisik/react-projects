import React, { Component } from 'react';

// ? MODULE SCSS
import Scss from './styles/content.module.scss';

class Content extends Component {
  render() {
    return (
      <div className={Scss.contentContainer}>
        {/* INFO */}
        <div className={Scss.info}>{this.props.info}</div>
      </div>
    );
  }
}

export default Content;
