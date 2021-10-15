import "./navbar.scss";
import Menu from "./menu/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserTie,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";



const NavbarMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      {/* ----------When Menu Closed------------- */}
      <div className={"topbar " + (menuOpen && "active")}>

        <div className="wrapper">

          {/*left side*/}
          <div className="left">
            <a href="#landingPage" aria-label="refraction" className="logo">
              aidev.
            </a>
            <div className="itemContainer">
            <FontAwesomeIcon className='icon text-center' icon={faUserTie} />
              <span>+46 735957162</span>
            </div>
            <div className="itemContainer">
            <FontAwesomeIcon className='icon text-center' icon={faEnvelope} />
              <span>anton.isak@outlook.com</span>
            </div>
          </div>
          {/*----------*/}
          {/*right side*/}
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
          {/*----------*/}
        </div>

      </div>
      {/* -------------------------------- */}
      
      {/* ----------Menu Open------------- */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* ----------------------- */}
    </div>
  );
};

export default NavbarMenu;
