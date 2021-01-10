/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import editProfil from '../../assets/img/edit_profil.png';
import add from '../../assets/img/add_profil.png';
import './styles.scss';
import ProfilChildren from 'src/containers/ProfilChildren';

const ProfilParent = ({
  firstname,
  lastname,
  email,
  adress,
  zipcode,
  city,
  isLogged,
}) => (
  <div className="profil">
    {!isLogged && (<Redirect to="/" />)}
    <article className="profil__parent__info">
      <h2>Parent</h2>
      <p><strong>Nom:</strong> <span>{lastname}</span></p>
      <p><strong>Prenom:</strong> <span>{firstname}</span></p>
      <p><strong>Email:</strong> <span>{email}</span></p>
      <p><strong>Adresse:</strong> <span>{adress}</span></p>
      <p><strong>Code postal:</strong> <span>{zipcode}</span></p>
      <p><strong>Ville:</strong> <span>{city}</span></p>
      <label>
      <Link to="/formParent">
          <img src={editProfil} alt="editer profil" />
      </Link>
      </label>
    </article>
    <ProfilChildren />
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
};

ProfilParent.defaultProps = {
  isLogged: false,
};

export default ProfilParent;
