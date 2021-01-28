import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import { errorMessage } from 'src/selectors/oSkool';
import { Redirect } from 'react-router-dom';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  response,
}) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleLogin();
  // };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const allDataForLogin = [email, password];
    const emptyElement = allDataForLogin.includes('');
    const divElement = '.login__form--submit';
    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, divElement);
    }
    else {
      handleLogin();
    }
  };

  const handleErrorIndentification = () => {
    if (response === 'Error') {
      const divElement = '.login__form--submit';
      const message = 'Vos identifiants et/ou mot de passe ne sont pas corrects';
      errorMessage(message, divElement);
    }
  };
  useEffect(() => {
    handleErrorIndentification();
  }, [response]);
  return (
    <div className="login">
      {isLogged && (
      <Redirect exact to="/profil" />
      )}
      <h2 className="login__title">Se connecter</h2>
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
        <div className="login__form--submit">
          <button
            type="submit"
            className="login__submit"
          >
            se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};
export default Login;
