import { FETCH_PROFIL_PARENT } from 'src/actions/auth';

export const initialState = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  adress: '',
  zipcode: '',
  city: '',
  phone: '',
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
      };

    default:
      return state;
  }
};

export default profilParent;
