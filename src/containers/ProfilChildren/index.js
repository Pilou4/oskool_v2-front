import { connect } from 'react-redux';
import ProfilChildren from 'src/components/ProfilChildren';
// import {  } from '../../actions/auth';

const mapStateToProps = (state) => ({
  // children: state.profilChildren.children,
//   isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilChildren);
