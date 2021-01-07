import { CHANGE_VALUE, SAVE_PROFIL_PARENT } from 'src/actions/formParent';

export const initialState = {
  firstname: '',
  lastname: '',
  phone: 0,
  adress: '',
  zipcode: 0,
  city: '',
};

const formParent = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_PROFIL_PARENT: {
      return {
        ...state,
        firstname: action.value,
        lastname: action.value,
        phone: action.value,
        adress: action.value,
        zipcode: action.value,
        city: action.value,
      };
    }
    default:
      return state;
  }
};

export default formParent;
