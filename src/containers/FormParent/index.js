import { connect } from 'react-redux';
import { changeValue, registerParent } from 'src/actions/parent';
import FormParent from '../../components/FormParent';

const mapStateToProps = (state) => ({
  firstname: state.parent.firstname,
  lastname: state.parent.lastname,
  phone: state.parent.phone,
  adress: state.parent.adress,
  zipcode: state.parent.zipcode,
  city: state.parent.city,
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
