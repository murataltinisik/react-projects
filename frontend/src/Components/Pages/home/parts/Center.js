import { useState } from 'react';

// ? MODULE SCSS
import Scss from '../../../assets/scss/home-scss/styles/center.module.scss';

// ? CENTER COMPONENT
import TopOf from './center-components/topOf';
import Shipment from './center-components/shipment';
import Send from './center-components/send';
import Acquaintances from './center-components/acquaintances';

function Center() {
  // ACTIVE TAB MENU
  const [active, setActive] = useState(0);

  // MENU LIST SHOW
  const [menuListShow, setMenuListShow] = useState(false);

  // FETCH USER DATA
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div id={Scss.CenterContainer} className="centerContainerResp">
      {/* TOP OF */}
      <TopOf userData={user} Scss={Scss} active={active} setActive={setActive} />

      {/* SHIPMENT OPERATION */}
      <Shipment userData={user} Scss={Scss} />

      {/* ACQUAINTANCES */}
      <Acquaintances
        Scss={Scss}
        menuListShow={menuListShow}
        setMenuListShow={setMenuListShow}
      />

      {/* SEND AND OTHER */}
      <Send Scss={Scss} />
    </div>
  );
}

export default Center;
