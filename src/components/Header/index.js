import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from 'src/containers/Login';
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
      key="/subscrible"
      to="/subscrible"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      s'inscrire
    </NavLink>
    <Login />
    {/* <NavLink
      key="/profil"
      to="/profil"
      activeClassName="header__link--active"
      className="header__link"
      exact
    >
      profil
    </NavLink> */}
  </nav>
);

export default Header;
