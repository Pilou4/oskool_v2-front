import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import { Redirect, Link } from 'react-router-dom';

import './styles.scss';

const Login = ({
  login,
  isLogged,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className="login">
      <h2 className="login__title">Se connecter</h2>
      {isLogged && (
      <Redirect exact to="/profil" />
      )}

      {!isLogged && (
        <form className="login__form" onSubmit={handleOnSubmit}>
          <Field
            name="email"
            type="email"
            title="email"
          />
          <Field
            name="password"
            type="password"
            title="password"
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
  login: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
