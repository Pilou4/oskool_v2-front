import React from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import './styles.scss';

const ParentProfil = ({
  firstNameParent,
  lastNameParent,
  email,
  adressParent,
  cityParent,
  zipcodeParent,
  children,
  handleDeconnexion,
  isLogged,
}) => (
    <div className="profil">
       <article className="parentProfil__info">
        <h2>Parent</h2>
        <p><strong>Nom:</strong> <span>firstNameParent</span></p>
        <p><strong>Prenom:</strong> <span>lastNameParent</span></p>
        <p><strong>Email:</strong> <span>email</span></p>
        <p><strong>Adresse:</strong> <span>adressParent</span></p>
        <p><strong>Ville:</strong> <span>cityParent</span></p>
        <p><strong>Code postal:</strong> <span>zipcodeParent</span></p>
        <Link to='/parentForm'>
          <label htmlFor="profilParent">
            {/* <img src={edit_profil} alt="editer profil" /> */}
          </label>
        </Link>
      </article>
  </div>
);

Profil.propTypes = {
  firstNameParent: PropTypes.string.isRequired,
  lastNameParent: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adressParent: PropTypes.string.isRequired,
  cityParent: PropTypes.string.isRequired,
  zipcodeParent: PropTypes.any.isRequired,
  children: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ParentProfil;
