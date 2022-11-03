import React, { Component } from 'react';

// ? STATIC COMPONENTS
import SendCartList from '../../static/SendCart/SendCardList';
import MiniCardList from '../../static/MiniCard/MiniCardList';

// ? STYLE
import Scss from '../../../assets/scss/watch-scss/content.module.scss';
import '../../../assets/scss/watch-scss/responsive-content.scss';

// * REACT ROUTER 5.2.0
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function Content() {
  const { path } = useRouteMatch();

  return (
    <div id={Scss.ContentContainer} className="ContentContainerResp">
      <Switch>
        <Route exact path={`${path}`} component={SendCartList} />
        <Route path={`${path}/recorded-videos`} component={MiniCardList} />
      </Switch>
    </div>
  );
}

export default Content;
