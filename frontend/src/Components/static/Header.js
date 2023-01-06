// ? MODULE SCSS
import Scss from './style.module.scss';
import './responsive.scss';

// ? ASSETS SCSS
import '../assets/main.scss';
import '../assets/css/Link/link.scss';
import '../assets/css/Display/flex.scss';
import '../assets/css/Button/button.scss';
import '../assets/css/Display/display.scss';
import '../assets/css/WidthHeight/width-height.scss';
import '../assets/css/MarginPadding/margin-padding.scss';

// ? PARTS
import Title from './parts/Title';
import Navbar from './parts/Navbar';
import RightNavbar from './parts/RightNavbar';
import NewMessage from './parts/NewMessage';

// * REDUX
import { connect } from 'react-redux'
import { fetchUser } from "../../actions/User/user";
import {useEffect, useState} from "react";

function Header(props) {
  // * STATE
  const [isRequest, setIsRequest] = useState(false);

  useEffect(() => {
    if(!isRequest){
      props.fetchUser(JSON.parse(localStorage.getItem("user")).id);
      setIsRequest(true);
    }
  }, [isRequest]);

  return (
    <>
      <div id={Scss.HeaderContainer} className="HeaderContainer px-1">
        <header className="d-flex justify-content-between align-items-center">
          {/* TITLE */}
          <Title />

          {/* NAVBAR */}
          <Navbar />

          {/* RIGHT NAVBAR */}
          <RightNavbar />

          {/* NEW MESSAGE */}
          <NewMessage />
        </header>
      </div>
    </>
  );
}

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = {
  fetchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
