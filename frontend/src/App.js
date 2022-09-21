// TODO: HOME
import Home from './Components/Pages/home/Home';

// TODO: PROFILE
import Profile from './Components/Pages/profile/Profile';

// TODO: FRIENDS
import Friend from './Components/Pages/friends/Friends';
import Wants from './Components/Pages/friends/sub-page/Wants/Wants';
import Suggestions from './Components/Pages/friends/sub-page/Suggestions/Suggestions';
import AllFriends from './Components/Pages/friends/sub-page/AllFriends/AllFriends';
import CustomLists from './Components/Pages/friends/sub-page/CustomLists/CustomLists';

// TODO: AUTH
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import FindAccount from './Components/Pages/Auth/FindAccount';

function App() {
  return (
    <div className="App">
      <CustomLists />
    </div>
  );
}

export default App;
