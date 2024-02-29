import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/images/menu.png';
import Uniologo from '../../assets/images/unio-logo.png';
import plusIcon from '../../assets/images/plus.svg';
import './navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'navigation__link navigation__link--active' : 'navigation__link';

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navigation__top">
        <img src={Uniologo} alt="Unio logo" className="navigation__logo" />
        <button
          className="navigation__button--menu"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
        >
          <img src={menu} alt="Toggle menu" className="navigation__menu-icon" />
        </button>
      </div>
      <div
        id="navigation-menu"
        className={`navigation__menu ${isMenuOpen ? 'navigation__menu--open' : ''}`}
      >
        <ul className="navigation__list">
          {['/overview', '/contacts', '/favorites'].map((path, index) => (
            <li key={index} className="navigation__item">
              <NavLink to={path} className={getNavLinkClass}>
                {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}{' '}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="navigation__button" aria-label="Add new contact">
          <img
            src={plusIcon}
            alt="Add new"
            className="navigation__button--icon"
          />
          NEW
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
