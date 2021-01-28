/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { errorMessage, toastNotification } from '../../selectors/oSkool';
import { Redirect } from 'react-router-dom';
// import Input from '../Input/input';

import './styles.scss';

const Subscribe = ({
  email,
  password,
  verifyPassword,
  handleChange,
  submitRegister,
  response,
  success,
}) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    handleChange(value, name);
  };
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const allDataForRegister = [email, password, verifyPassword];
    const emptyElement = allDataForRegister.includes('');
    const divElt = '.subscribe__form--submit';

    // If inputs are empty
    if (emptyElement === true) {
      const message = 'Veuillez remplir tous les champs';
      errorMessage(message, divElt);
    }
    // if password and passwordVerify are not the same
    else if (password === verifyPassword) {
      // regex : lowerCase, upperCase, a number, eight letter minimum
      const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
      const isItGoodPasswordCharacter = password.match(regex);
      if (isItGoodPasswordCharacter === null) {
        const message = 'Votre mot de passe ne contient pas les caractères demandés';
        errorMessage(message, divElt);
      }
      else {
        submitRegister();
      }
    }
    else {
      const message = 'Vos mots de passe ne sont pas identiques';
      errorMessage(message, divElt);
    }
  };
  const toastFailOrSuccess = () => {
    const message = 'L\'inscription à réussi, veuillez vérifier vos mails';
    toastNotification(response, message);
  };

  useEffect(() => {
    toastFailOrSuccess();
  }, [response]);
  return (
    <main className="subscribe">
      <h2 className="subscribe__title">S'inscrire</h2>
      <form
        className="subscribe__form"
        onSubmit={handleOnSubmit}
      >
        <input
          type="email"
          value={email}
          placeholder="Entrer votre e-mail"
          className="subscribe__form__input"
          name="email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          className="subscribe__form__input"
          name="password"
          onChange={handleOnChange}
        />
        <input
          type="password"
          value={verifyPassword}
          placeholder="Répétez mot de passe"
          className="subscribe__form__input"
          name="verifyPassword"
          onChange={handleOnChange}
        />
        <div className="password__span">
          <span>
            Le mot de passe doit contenir au minimum 8 caractères,
            une majuscule et un chiffre
          </span>
        </div>
        <div className="subscribe__form--submit">
          <button
            type="submit"
            className="subscribe__form__btn"
          >
            S'inscrire
          </button>
          {success && (<Redirect exact to="login" />)}
        </div>
      </form>
    </main>
  );
};
Subscribe.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifyPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
  response: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default Subscribe;
