import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ isLogged }) => (
  <nav className="header">
    <NavLink
      key="/"
      to="/"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      Oskool
    </NavLink>
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
    {isLogged && (
    <NavLink
      key="/logout"
      to="/logout"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      se deconneter
    </NavLink>
    )}
    <NavLink
      key="/subscrible"
      to="/subscrible"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      s'inscrire
    </NavLink>
    <NavLink
      key="/profil"
      to="/profil"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      profil
    </NavLink>
  </nav>
);

Header.propTypes = {
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};

export default Header;
