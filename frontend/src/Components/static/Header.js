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

function Header() {
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

export default Header;
