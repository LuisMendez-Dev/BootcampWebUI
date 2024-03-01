import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/images/menu.png';
import Uniologo from '../../assets/images/unio-logo.png';
import plusIcon from '../../assets/icons/plus.svg';
import ModalNewContact from '../modal/ModalNewContact';
import './navigation.css';

const NAV_BAR_ROUTES = ['/overview', '/contacts', '/favorites'];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalBehavior, setModalBehavior] = useState(false);

  const toggleModal = () => {
    setModalBehavior(!modalBehavior);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'navigation__link navigation__link--active' : 'navigation__link';

  const menuButtonAlternative = isMenuOpen ? 'Close menu' : 'Open menu';

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navigation__top">
        <img src={Uniologo} alt="Unio logo" className="navigation__logo" />
        <button
          className="navigation__button--menu"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label={menuButtonAlternative}
        >
          <img
            src={menu}
            alt={menuButtonAlternative}
            className="navigation__menu-icon"
          />
        </button>
      </div>
      <div
        id="navigation-menu"
        className={`navigation__menu ${isMenuOpen ? 'navigation__menu--open' : ''}`}
      >
        <ul className="navigation__list">
          {NAV_BAR_ROUTES.map((route, index) => (
            <li key={index} className="navigation__item">
              <NavLink to={route} className={getNavLinkClass} end>
                {route.substring(1).charAt(0).toUpperCase() +
                  route.substring(2)}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="navigation__button"
          aria-label="Add new contact"
          onClick={toggleModal}
        >
          <img
            src={plusIcon}
            alt="Add new contact"
            className="navigation__button--icon"
          />
          NEW
        </button>
      </div>
      <ModalNewContact openModal={modalBehavior} closeModal={toggleModal} />
    </nav>
  );
}

export default Navigation;
