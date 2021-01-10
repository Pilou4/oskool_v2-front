import { CHANGE_VALUE, SUBSCRIBE_SAVE_USER } from 'src/actions/subscribe';

export const initialState = {
  id: '',
  email: '',
  password: '',
  verifyPassword: '',
  response: '',
  success: false,
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
        id: action.id,
        email: '',
        password: '',
        verifyPassword: '',
        response: action.value,
        success: true,
      };
    default:
      return state;
  }
};

export default subscribe;
