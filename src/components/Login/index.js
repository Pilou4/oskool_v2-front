import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import { Redirect, Link } from 'react-router-dom';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handlelogin,
  handlelogout,
  isLogged,
  loggedMessage,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    handlelogin();
  };

  return (
    <div className="login">
      <h2 className="login__title">Se connecter</h2>
      {/* {isLogged && (
      <Redirect exact to="/profil" />
      )} */}

      {/* {!isLogged && ( */}
        <form className="login__form" onSubmit={handleOnSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="password"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login__submit"
          >
            envoyer
          </button>
        </form>
      {/* )} */}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
