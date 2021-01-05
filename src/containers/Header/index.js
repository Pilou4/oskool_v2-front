import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    const action = logout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
