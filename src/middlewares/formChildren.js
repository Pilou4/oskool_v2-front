import axios from 'axios';
import { REGISTER_CHILDREN } from 'src/actions/formChildren';
import Cookies from 'js-cookie';

const formChildren = (store) => (next) => (action) => {
  const ROOT_URL = 'http://localhost:8000/api';
  const state = store.getState();
  const token = Cookies.get('token');

  switch (action.type) {
    case REGISTER_CHILDREN:
      console.log('REGISTER_CHILDREN');
      break;
    default:
      next(action);
  }
};

export default formChildren;
