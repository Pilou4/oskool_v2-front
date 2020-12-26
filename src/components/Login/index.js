import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import { Redirect, Link } from 'react-router-dom';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="login">
      {isLogged && (
      <Redirect exact to="/profil" />
      )}
      {isLogged && (
        <div className="login__logged">
          <p className="login__message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login__submit"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}

      {!isLogged && (
        <form className="login__form" onSubmit={handleSubmit}>
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
      )}
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
