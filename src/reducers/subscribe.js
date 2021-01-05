import { CHANGE_VALUE, SUBSCRIBE_SAVE_USER } from 'src/actions/subscribe';

export const initialState = {
  email: '',
  password: '',
  verifyPassword: '',
  response: '',
};

const subscribe = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SUBSCRIBE_SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
        verifyPassword: '',
        response: action.value,
      };
    default:
      return state;
  }
};

export default subscribe;
