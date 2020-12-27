import React from 'react';
import Field from './Field';
import './styles.scss';

const Subscrible = (
  email,
  password,
  changeField,
  handleSubscrible,
  handleLogout,
  isLogged,
  loggedMessage,
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handleSubscrible();
  };

  return (
    <div className="subscrible">
      {/* {isLogged && (
      <Redirect exact to="/login" />
      )} */}
      {isLogged && (
        <div className="subscrible__logged">
          <p className="subscrible__message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="subscrible__submit"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}

      {!isLogged && (
        <form className="subscrible__form" onSubmit={handleSubmit}>
          <Field
            className="subscrible__input"
            name="email"
            type="email"
            placeholder="email"
            onChange={changeField}
            // value={email}
          />
          <Field
            className="subscrible__input"
            name="password"
            type="password"
            placeholder="mot de passe"
            onChange={changeField}
            // value={password}
          />
          <Field
            className="subscrible__input"
            name="repeatPassword"
            type="password"
            placeholder="repetez mot de passe"
            onChange={changeField}
            // value={repeatPassword}
          />
          <button
            type="submit"
            className="subscrible__submit"
          >
            envoyer
          </button>
        </form>
      )}
    </div>
  );
};
export default Subscrible;
