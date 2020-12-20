import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { userLogin } from '../../actions/auth';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    const action = userLogin();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);