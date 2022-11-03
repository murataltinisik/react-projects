// TODO: HOME
import Home from '../Pages/home/Home';

// TODO: PROFILE
import Profile from '../Pages/profile/Profile';

// TODO: STORIES
import Stories from '../Pages/stories/Stories';

// TODO: REELS
import Reels from '../Pages/reels/Reels';

// TODO: SETTINGS
import Settings from '../Pages/settings/Settings';

// TODO: BOOKMARKS
import Bookmarks from '../Pages/bookmarks/Bookmarks';

// TODO: AUTH
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import FindAccount from '../Pages/Auth/FindAccount';

// TODO: WATCH
import Watch from '../Pages/watch/Watch';

// TODO: FRIENDS
import Friends from '../Pages/friends/Friends';

// TODO: NOT MATCH
import NotMatch from '../Pages/NotMatch/NotMatch';

// * REACT ROUTER 5.2.0
import { Switch, Route } from 'react-router-dom';

function FacebookRoutes() {
  return (
    <Switch>
      {/* HOME */}
      <Route exact path="/" component={Home} />

      {/* MESSAGES - NO COMPONENT */}
      <Route path="/messages" component={Home} />

      {/* PROFILE */}
      <Route path="/profile" component={Profile} />

      {/* STORIES */}
      <Route path="/stories" component={Stories} />

      {/* REELS */}
      <Route path="/reels/:id" component={Reels} />

      {/* SETTINGS */}
      <Route path="/settings" component={Settings} />

      {/* BOOKMARKS */}
      <Route path="/bookmarks" component={Bookmarks} />

      {/* AUTHENTICATION */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/find-account" component={FindAccount} />

      {/* WATCH */}
      <Route path="/watch" component={Watch} />

      {/* FRIENDS */}
      <Route path="/friends" component={Friends} />

      {/* NOT FOUND */}
      <Route path="/*" component={NotMatch} />
    </Switch>
  );
}

export default FacebookRoutes;
