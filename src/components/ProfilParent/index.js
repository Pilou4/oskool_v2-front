/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import ProfilChildren from 'src/containers/ProfilChildren';
import editProfil from '../../assets/img/edit_profil.png';
import add from '../../assets/img/add_profil.png';

import './styles.scss';

const ProfilParent = ({
  firstname,
  lastname,
  email,
  adress,
  zipcode,
  city,
  isLogged,
  children,
  isParent,
}) => (
  <div className="profil">
    {!isLogged && (<Redirect to="/" />)}
    {!isParent && (
      <Link
        to="/formParent"
        className="profil__parent__link"
      >
        <img
          src={add}
          alt="addChildren"
          className="profil__parent__link__img"
        />
        <div className="profil__parent__link__subtitle">
          <h2>Créer profil</h2>
        </div>
      </Link>
    )}
    <article className="profil__parent__info">
      <h2>Mon profil</h2>
      <p><strong>Email:</strong> <span>{email}</span></p>
      <p><strong>Nom:</strong> <span>{lastname}</span></p>
      <p><strong>Prenom:</strong> <span>{firstname}</span></p>
      <p><strong>Adresse:</strong> <span>{adress}</span></p>
      <p><strong>Code postal:</strong> <span>{zipcode}</span></p>
      <p><strong>Ville:</strong> <span>{city}</span></p>
      <label>
        <Link to="/updateParent">
          <img src={editProfil} alt="editer profil" />
        </Link>
      </label>
    </article>
    <div className="profil__parent__children">
      {children.map((child) => (
        <ProfilChildren
          key={child.id}
          {...child}
        />
      ))}
    </div>
  </div>
);

ProfilParent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.any.isRequired,
  isLogged: PropTypes.bool,
  isParent: PropTypes.bool,
};

ProfilParent.defaultProps = {
  isLogged: false,
  isParent: false,
};

export default ProfilParent;
