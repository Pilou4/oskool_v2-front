import {
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT,
  CHECK_IS_LOGGED,
  CHECK_IS_LOGGED_PARENT,
} from 'src/actions/auth';

export const initialState = {
  email: '',
  password: '',
  response: '',
  isLogged: false,
  isTeacher: false,
  isParent: false,
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
    case CHECK_IS_LOGGED:
      return {
        ...state,
      };
    case CHECK_IS_LOGGED_PARENT:
      return {
        ...state,
        isParent: true,
        isTeacher: false,
        isLogged: true,
        id: action.id,
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        isTeacher: false,
        isParent: false,
        isLogged: false,
      };

    default:
      return state;
  }
};
export default auth;
