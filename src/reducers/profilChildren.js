import { FETCH_PROFIL_CHILDREN } from 'src/actions/auth';

export const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  age: '',
  birthday: '',
  health: '',
  hobbies: '',
  level: '',
};

const profilChildren = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROFIL_CHILDREN:
      return {
        ...state,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        age: action.age,
        birthday: action.birthday,
        health: action.health,
        hobbies: action.hobbies,
        level: action.level,
      };

    default:
      return state;
  }
};

export default profilChildren;
