import React, { Component } from 'react';

// ? PARTS
import Left from './parts/Left';
import Content from './parts/Content';

// * REACT ROUTER 5.2.0
import { Route, Switch, withRouter } from 'react-router-dom';

// * ROUTES
import Wants from './sub-page/Wants/Wants';
import Suggestions from './sub-page/Suggestions/Suggestions';
import AllFriends from './sub-page/AllFriends/AllFriends';
import CustomLists from './sub-page/CustomLists/CustomLists';

class Section extends Component {
  render() {
    return (
      <div className="d-flex align-items-start">
        <Switch>
          <Route exact path={this.props.match.path}>
            <Left />
            <Content />
          </Route>

          <Route path={`${this.props.match.path}/wants`} component={Wants} />
          <Route
            path={`${this.props.match.path}/suggestions`}
            component={Suggestions}
          />
          <Route
            path={`${this.props.match.path}/all-friends`}
            component={AllFriends}
          />
          <Route path={`${this.props.match.path}/friends-birthday`} />
          <Route
            path={`${this.props.match.path}/custom-lists`}
            component={CustomLists}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Section);
