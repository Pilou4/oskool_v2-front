import { connect } from 'react-redux';
import Oskool from 'src/components/Oskool';
import { checkIsLogged } from '../../actions/auth';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    const action = checkIsLogged();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Oskool);
