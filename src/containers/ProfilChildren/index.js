import { connect } from 'react-redux';
import ProfilChildren from 'src/components/ProfilChildren';
// import {  } from '../../actions/auth';

const mapStateToProps = (state) => ({
  firstname: state.profilChildren.firstname,
  lastname: state.profilChildren.lastname,
  age: state.profilChildren.age,
  birthday: state.profilChildren.birthday,
  health: state.profilChildren.health,
  hobbies: state.profilChildren.hobbies,
  level: state.profilChildren.level,
//   isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilChildren);
