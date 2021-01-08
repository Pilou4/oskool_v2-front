import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
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
  children,
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
          <p><strong>Prénom:</strong> <span>Prénom</span></p>
          <p><strong>Nom:</strong> <span>Nom</span></p>
          <p><strong>Santé:</strong> <span>Santé</span></p>
          <p><strong>Loisirs:</strong> <span>Loisirs</span></p>
          <label>
            <Link to="/formParent">
              <img src={editProfil} alt="editer profil" />
            </Link>
          </label>
        </article>
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
  children: PropTypes.array.isRequired,
  isLogged: PropTypes.bool,
};

ProfilParent.defaultProps = {
  isLogged: false,
};

export default ProfilParent;
