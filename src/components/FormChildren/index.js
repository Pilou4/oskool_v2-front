import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/Input';

import './styles.scss';

const FormChildren = ({
  firstname,
  lastname,
  birthday,
  age,
  level,
  hobbies,
  health,
  imageRight,
  handleChange,
  registerChildren,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    registerChildren();
  };
  return (
    <div className="children">
      <h2 className="children__title">S'inscrire</h2>
      <form className="children__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstname"
          value={firstname}
          className="children__form__input"
          placeholder="prénom"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastname"
          value={lastname}
          className="children__form__input"
          placeholder="nom"
          onChange={handleChange}
        />
        <Input
          type="date"
          name="birthday"
          value={birthday}
          className="children__form__input"
          placeholder="date de naissance"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="age"
          value={age}
          className="children__form__input"
          placeholder="age"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="level"
          value={level}
          className="children__form__input"
          placeholder="niveau"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="hobbies"
          value={hobbies}
          className="children__form__input"
          placeholder="hobbies"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="health"
          value={health}
          className="children__form__input"
          placeholder="allergie connus"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="imageRight"
          value={imageRight}
          className="children__form__input"
          placeholder="autorisation d'être photographier"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="children__form__btn"
        >
          Soumettre mes informations
        </button>
      </form>
    </div>
  );
};

FormChildren.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.instanceOf(Date).isRequired,
  age: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  hobbies: PropTypes.string.isRequired,
  health: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  registerChildren: PropTypes.func.isRequired,
};

// FormParent.defaultProps = {
//   isLogged: false,
// };
export default FormChildren;
