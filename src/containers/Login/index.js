import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValue, login } from '../../actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
