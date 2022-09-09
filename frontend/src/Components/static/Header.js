// ? MODULE SCSS
import Scss from './style.module.scss';
import './responsive.scss';

// ? ASSETS SCSS
import '../assets/Button/button.scss';
import '../assets/Link/link.scss';
import '../assets/Display/flex.scss';
import '../assets/MarginPadding/margin-padding.scss';
import '../assets/WidthHeight/width-height.scss';
import '../assets/Display/display.scss';

// ? PARTS
import Title from './parts/Title';
import Navbar from './parts/Navbar';
import RightNavbar from './parts/RightNavbar';

function Header() {
  return (
    <>
      <div
        id={Scss.HeaderContainer}
        className="HeaderContainer px-1"
      >
        <header className="d-flex justify-content-between align-items-center">
          {/* TITLE */}
          <Title />

          {/* NAVBAR */}
          <Navbar />

          {/* RIGHT NAVBAR */}
          <RightNavbar />
        </header>
      </div>
    </>
  );
}

export default Header;
