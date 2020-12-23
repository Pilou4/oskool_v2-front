import { CHANGE_VALUE, SAVE_USER, LOGOUT } from 'src/actions/auth';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  user: {
    id: '',
    roles: '',
  },
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        user: {
          id: action.id,
          roles: action.roles,
        },
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};
export default auth;
