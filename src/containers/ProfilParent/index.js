import { connect } from 'react-redux';
import ProfilParent from 'src/components/ProfilParent';
// import {  } from '../../actions/auth';

const mapStateToProps = (state) => ({
  firstname: state.profilParent.firstname,
  lastname: state.profilParent.lastname,
  adress: state.profilParent.adress,
  zipcode: state.profilParent.zipcode,
  city: state.profilParent.city,
  phone: state.profilParent.phone,
  email: state.profilParent.email,
  roles: state.profilParent.roles,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilParent);
