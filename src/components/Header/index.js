import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import './styles.scss';
import oskool from 'src/assets/img/Logo.webp';

const Header = ({ isLogged, handleLogout }) => (
  <nav className="header">
    <NavLink
      key="/"
      to="/"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      <img src={oskool} alt="logo" className="header__logo"></img>
    </NavLink>
    {!isLogged && (
      <NavLink
        key="/subscribe"
        to="/subscribe"
        activeClassName="header__link--active"
        className="header__link"
        exact
      >
        s'inscrire
      </NavLink>
    )}
    {isLogged && (
      <button
        type="button"
        className="logout__submit"
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    )}
    {!isLogged && (
      <NavLink
        key="/login"
        to="/login"
        activeClassName="header__link--active"
        className="header__link"
        exact
      >
        se connecter
      </NavLink>
    )}
    {!isLogged && (
      <Redirect exact to="/" />
    )}
  </nav>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
export default Header;
