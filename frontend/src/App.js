// TODO: HOME
import Home from './Components/Pages/home/Home';

// TODO: PROFILE
import Profile from './Components/Pages/profile/Profile';

// TODO: FRIENDS
import Friend from './Components/Pages/friends/Friends';
import Wants from './Components/Pages/friends/sub-page/Wants/Wants';

// TODO: AUTH
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import FindAccount from './Components/Pages/Auth/FindAccount';

function App() {
  return (
    <div className="App">
      <Wants />
    </div>
  );
}

export default App;
