import { useState } from "react";
import simpsonsLogo from "../../assets/images/simpsonsLogo.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__logo-container">
          <img src={simpsonsLogo} alt="Simpsons logo" className="nav__logo" />
        </div>
        <button className="nav__hamburger" onClick={toggleMenu}>
          <span className="nav__hamburger-icon">☰</span>
        </button>
      </div>
      <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "nav__link--active" : ""} nav__link`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/quotes"
            className={({ isActive }) =>
              `${isActive ? "nav__link--active" : ""} nav__link`
            }
          >
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
