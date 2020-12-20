import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <NavLink
      key="/mentions-legales"
      to="/mentions-legales"
      activeClassName="footer__link--active"
      className="footer__link"
      exact
    >
      Mentions légales
    </NavLink>
    <NavLink
      key="/plan-du-site"
      to="/plan-du-site"
      activeClassName="footer__link--active"
      className="header__link"
      exact
    >
      Plan du site
    </NavLink>
    <NavLink
      key="/contact"
      to="/contact"
      activeClassName="footer__link--active"
      className="footer__link"
      exact
    >
      Contactez-nous
    </NavLink>
  </footer>
);

export default Footer;