import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#landingPage">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#resume">Resume</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#skills">Skills and Progress</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
    </div>
  );
};

export default Menu;
