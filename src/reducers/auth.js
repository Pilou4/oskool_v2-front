import { LOGIN_CHECK, CHANGE_VALUE, SAVE_USER } from 'src/actions/auth';

const initialState = {
  user: { email: 'fred@oclock.io', password: 'fred' },
  email: '',
  password: '',
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case...
    case CHANGE_VALUE: {
      const newUser = {
        ...state.user,
        [action.key]: action.value,
      };
      return {
        ...state,
        user: newUser,
      };
    }

    default:
      return state;
  }
};

export default reducer;
