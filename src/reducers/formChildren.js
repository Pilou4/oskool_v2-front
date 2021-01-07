import { CHANGE_VALUE } from 'src/actions/formChildren';

export const initialState = {
  firstname: '',
  lastname: '',
  birthday: '',
  age: '',
  level: '',
  hobbies: '',
  health: '',
  imageRight: '',
};

const formChildren = (state = initialState, action = {}) => {
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

export default formChildren;
