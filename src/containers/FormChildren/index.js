import { connect } from 'react-redux';
import { changeValue, registerChildren } from 'src/actions/formChildren';
import FormChildren from '../../components/FormChildren';

const mapStateToProps = (state) => ({
  firstname: state.formChildren.firstname,
  lastname: state.formChildren.lastname,
  birthday: state.formChildren.birthday,
  age: state.formChildren.age,
  level: state.formChildren.level,
  hobbies: state.formChildren.hobbies,
  health: state.formChildren.health,
  imageRight: state.formChildren.imageRight,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },

  registerChildren: () => {
    dispatch(registerChildren());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FormChildren);
