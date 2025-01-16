import { Link } from "react-router-dom";
import LogoLL from "/src/assets/img/logo 16@4x.png";
const Header = (props) => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={LogoLL} alt="Little Lemon Logo" />
        </div>
        <nav className="nav-links">
          <ul>
            {props.navList && props.navList.length > 0 ? (
              props.navList.map((item) => (
                <li key={item.navName}>
                  <Link to={item.navURL}>{item.navName}</Link>
                </li>
              ))
            ) : (
              <li>No navigation items available</li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
