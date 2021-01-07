import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/Input';

import './styles.scss';

const FormParent = ({
  firstname,
  lastname,
  phone,
  adress,
  zipcode,
  city,
  handleChange,
  registerParent,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    registerParent();
  };
  return (
    <div className="parent">
      <h2 className="parent__title">S'inscrire</h2>
      <form className="parent__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstname"
          value={firstname}
          className="parent__form__input"
          placeholder="prénom"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastname"
          value={lastname}
          className="parent__form__input"
          placeholder="nom"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="phone"
          value={phone}
          className="parent__form__input"
          placeholder="numéro de téléphone"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="adress"
          value={adress}
          className="parent__form__input"
          placeholder="adresse"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="zipcode"
          value={zipcode}
          className="parent__form__input"
          placeholder="code postal"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="city"
          value={city}
          className="parent__form__input"
          placeholder="ville"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="parent__form__btn"
        >
          Soumettre mes informations
        </button>
      </form>
    </div>
  );
};

FormParent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  adress: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  registerParent: PropTypes.func.isRequired,
};

// FormParent.defaultProps = {
//   isLogged: false,
// };
export default FormParent;
