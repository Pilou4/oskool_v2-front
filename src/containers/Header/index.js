import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  success: state.subscribe.success,
  roles: state.auth.user.roles,
  isParent: state.auth.isParent,
  isTeacher: state.auth.isTeacher,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    const action = logout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
