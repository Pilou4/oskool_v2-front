import { connect } from 'react-redux';
import { changeValue, registerParent } from 'src/actions/formParent';
import FormParent from '../../components/FormParent';

const mapStateToProps = (state) => ({
  firstname: state.formParent.firstname,
  lastname: state.formParent.lastname,
  phone: state.formParent.phone,
  adress: state.formParent.adress,
  zipcode: state.formParent.zipcode,
  city: state.formParent.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  registerParent: () => {
    dispatch(registerParent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormParent);
