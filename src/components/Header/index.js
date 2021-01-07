import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import './styles.scss';
import oskool from 'src/assets/img/Logo.webp';

const Header = ({
  isLogged,
  handleLogout,
  success,
  isTeacher,
  isParent,
}) => (
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
    {(!isLogged && !success) && (
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
    {(isLogged && isParent) && (
      <NavLink
        key="/profil"
        to="/profil"
        activeClassName="header__link--active"
        className="header__link"
        exact
      >
        profil
      </NavLink>
    )}
    {(isLogged && isParent) && (
      <NavLink
        key="/FormChildren"
        to="/FormChildren"
        activeClassName="header__link--active"
        className="header__link"
        exact
      >
        ajouter un enfant
      </NavLink>
    )}
    {(isLogged && !isParent) && (
      <NavLink
        key="/formParent"
        to="/formParent"
        activeClassName="header__link--active"
        className="header__link"
        exact
      >
        ajouter profil
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
  handleLogout: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  isParent: PropTypes.bool,
  isTeacher: PropTypes.bool,
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
  isTeacher: false,
  isParent: false,
};

export default Header;
