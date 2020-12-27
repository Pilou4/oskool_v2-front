import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from 'src/containers/Login';
import './styles.scss';
import oskool from 'src/assets/img/Logo.webp';

const Header = () => (
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
