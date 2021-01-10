import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValue, login, logout } from '../../actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  roles: state.auth.user.roles,
  response: state.auth.response,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  handleLogin: () => {
    const action = login();
    dispatch(action);
  },
  handleLogout: () => {
    const action = logout();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
