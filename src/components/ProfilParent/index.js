import React from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import './styles.scss';

const ProfilParent = ({
  firstname,
  lastname,
  email,
  adress,
  zipcode,
  city,
  children,
  handleDeconnexion,
  isLogged,
}) => (
    <div className="profil">
       <article className="parentProfil__info">
        <h2>Parent</h2>
        <p><strong>Nom:</strong> <span>{lastname}</span></p>
        <p><strong>Prenom:</strong> <span>{firstname}</span></p>
        <p><strong>Email:</strong> <span>email</span></p>
        <p><strong>Adresse:</strong> <span>{adress}</span></p>
        <p><strong>Code postal:</strong> <span>{zipcode}</span></p>
        <p><strong>Ville:</strong> <span>{city}</span></p>
        <Link to='/parentForm'>
          <label htmlFor="profilParent">
            {/* <img src={edit_profil} alt="editer profil" /> */}
          </label>
        </Link>
      </article>
  </div>
);

ProfilParent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.any.isRequired,
  children: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ProfilParent;
