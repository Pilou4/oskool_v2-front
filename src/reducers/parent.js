import { CHANGE_VALUE, SAVE_PROFIL_PARENT } from 'src/actions/parent';
import { FETCH_PROFIL_PARENT, FETCH_PROFIL_CHILDREN } from 'src/actions/auth';

export const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
  adress: '',
  zipcode: '',
  city: '',
  children: [
    {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      birthday: '',
      level: '',
      health: '',
      hobbies: '',
      imageRight: '',
    },
  ],
};

const parent = (state = initialState, action = {}) => {
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
    case FETCH_PROFIL_PARENT:
      return {
        ...state,
        email: action.email,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        adress: action.adress,
        zipcode: action.zipcode,
        city: action.city,
        phone: action.phone,
        children: action.children,
      };
    case FETCH_PROFIL_CHILDREN:
      return {
        ...state,
        children: action.children,
      };
    default:
      return state;
  }
};

export default parent;
