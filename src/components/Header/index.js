import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => (
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
    <NavLink
      key="/login"
      to="/login"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      se connecter
    </NavLink>
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

export default Header;
