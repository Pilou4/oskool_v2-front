import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeValue } from '../../actions/auth';

const mapStateToProps = (state, ownProps) => {
  const key = ownProps.name;
  return {
    inputValue: state.user[key],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setInputValue: (value) => {
    const key = ownProps.name;
    const action = changeValue(value, key);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);