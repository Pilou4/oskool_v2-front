import { FETCH_PROFIL_PARENT, FETCH_PROFIL_CHILDREN } from 'src/actions/auth';

export const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  adress: '',
  zipcode: '',
  city: '',
  phone: '',
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

const profilParent = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default profilParent;
