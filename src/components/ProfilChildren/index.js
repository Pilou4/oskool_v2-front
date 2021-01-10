/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeDateFormat } from 'src/selectors/oSkool';
import editProfil from '../../assets/img/edit_profil.png';
import add from '../../assets/img/add_profil.png';

import './styles.scss';

const ProfilChildren = ({
  firstname,
  lastname,
  age,
  birthday,
  health,
  hobbies,
  level,
  image_right,
}) => {
  const newDate = changeDateFormat(birthday);
  return (
    <div className="profilChildren">
      <div className="profil__children">
        <Link
          to="/formChildren"
          className="profil__children__link"
        >
          <img
            src={add}
            alt="addChildren"
            className="profil__children__link__img"
          />
          <div className="profil__children__link__subtitle">
            <h2>Ajouter un enfant</h2>
          </div>
        </Link>
        <article className="profil__children__info">
          <h2>Enfant</h2>
          <p><strong>Prénom :</strong> <span>{firstname}</span></p>
          <p><strong>Nom :</strong> <span>{lastname}</span></p>
          <p><strong>Age :</strong> <span>{age}</span></p>
          <p><strong>Date de naissance :</strong> <span>{newDate}</span></p>
          <p><strong>Santé :</strong> <span>{health}</span></p>
          <p><strong>Loisirs :</strong> <span>{hobbies}</span></p>
          <p><strong>Classes :</strong> <span>{level}</span></p>
          <p><strong>Photo :</strong> <span>{image_right}</span></p>
          <label>
            <Link to="/formParent">
              <img src={editProfil} alt="editer profil" />
            </Link>
          </label>
        </article>
      </div>
    </div>
  );
};

ProfilChildren.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  birthday: PropTypes.instanceOf(Date).isRequired,
  health: PropTypes.string.isRequired,
  hobbies: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  image_right: PropTypes.string.isRequired,
};

export default ProfilChildren;
