import axios from 'axios';
import { LOGIN } from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const ROOT_URL = 'http://localhost:8000/api';
      const state = store.getState();
      console.log(`J'arrete l'action Login`);
      axios.post(`${ROOT_URL}/login`, {
        email: state.auth.email,
        password: state.auth.password,
      },
      { 'Content-Type': 'application/json' },
      { withCredentials: true },
      ).then((response) => {
        console.log(response);
      }).catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default auth;
