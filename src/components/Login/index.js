import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import { Redirect } from 'react-router-dom';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
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
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;
