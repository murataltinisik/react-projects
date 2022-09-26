import React, { Component } from 'react';

// ? STATIC COMPONENTS
import SendCart from '../../static/SendCart/SendCart';
import MiniCard from '../../static/MiniCard/MiniCard';

// ? STYLE
import Scss from './styles/content.module.scss';
import './styles/responsive-content.scss';

class Content extends Component {
  render() {
    return (
      <div id={Scss.ContentContainer} className="ContentContainerResp">
        <SendCart itemId="0" />
        <SendCart itemId="1" />

        <MiniCard />
        <MiniCard />
      </div>
    );
  }
}

export default Content;
