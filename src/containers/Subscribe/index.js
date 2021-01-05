import { connect } from 'react-redux';
import Subscribe from 'src/components/Subscribe';
import { changeValue, subscribeSubmit } from '../../actions/subscribe';

const mapStateToProps = (state) => ({
  email: state.subscribe.email,
  password: state.subscribe.password,
  verifyPassword: state.subscribe.verifyPassword,
  response: state.subscribe.response,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeValue(value, name));
  },
  submitRegister: () => {
    dispatch(subscribeSubmit());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
