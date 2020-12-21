import { CHANGE_VALUE } from 'src/actions/auth';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};
export default auth;
