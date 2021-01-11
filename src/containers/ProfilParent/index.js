import { connect } from 'react-redux';
import ProfilParent from 'src/components/ProfilParent';
// import {  } from '../../actions/auth';

const mapStateToProps = (state) => ({
  firstname: state.parent.firstname,
  lastname: state.parent.lastname,
  adress: state.parent.adress,
  zipcode: state.parent.zipcode,
  city: state.parent.city,
  phone: state.parent.phone,
  email: state.parent.email,
  roles: state.parent.roles,
  children: state.parent.children,
  isLogged: state.auth.isLogged,
  isParent: state.auth.isParent,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilParent);
