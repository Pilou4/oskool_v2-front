import axios from 'axios';
import { REGISTER_CHILDREN } from 'src/actions/formChildren';
import { changeDateFormat } from 'src/selectors/oSkool';
import Cookies from 'js-cookie';

const formChildren = (store) => (next) => (action) => {
  const ROOT_URL = 'http://localhost:8000/api';
  const state = store.getState();
  const token = Cookies.get('token');
  const age = parseInt(state.parent.age, 0);
  console.log(state.formChildren.birthday);

  switch (action.type) {
    case REGISTER_CHILDREN:
      console.log('REGISTER_CHILDREN');
      axios.post(`${ROOT_URL}/students`, {
        firstname: state.formChildren.firstname,
        lastname: state.formChildren.lastname,
        birthday: state.formChildren.birthday,
        age,
        level: state.formChildren.level,
        hobbies: state.formChildren.hobbies,
        health: state.formChildren.health,
        imageRight: state.formChildren.imageRight,
      }, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then((response) => {
          console.log('middelware');
          console.log(response);
        })
        .error((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default formChildren;
