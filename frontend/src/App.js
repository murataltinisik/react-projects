// TODO: HOME
import Home from './Components/Pages/home/Home';

// TODO: PROFILE
import Profile from './Components/Pages/profile/Profile';

// TODO: STORIES
import Stories from './Components/Pages/stories/Stories';

// TODO: REELS
import Reels from './Components/Pages/reels/Reels';

// TODO: AUTH
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import FindAccount from './Components/Pages/Auth/FindAccount';

// TODO: WATCH
import Watch from './Components/Pages/watch/Watch';
import RecordedVideos from './Components/Pages/watch/RecordedVideos';

// TODO: FRIENDS
import Friend from './Components/Pages/friends/Friends';
import Wants from './Components/Pages/friends/sub-page/Wants/Wants';
import Suggestions from './Components/Pages/friends/sub-page/Suggestions/Suggestions';
import AllFriends from './Components/Pages/friends/sub-page/AllFriends/AllFriends';
import CustomLists from './Components/Pages/friends/sub-page/CustomLists/CustomLists';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
