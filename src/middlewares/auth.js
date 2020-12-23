import axios from 'axios';
import { LOGIN, saveUser, LOGOUT } from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const ROOT_URL = 'http://localhost:8000/api';
      const state = store.getState();

      axios.post(`${ROOT_URL}/login`, {
        email: state.auth.email,
        password: state.auth.password,
      }, { 'Content-Type': 'application/json' },
      { withCredentials: true }).then((response) => {
        localStorage.setItem('token', response.data.token);

        axios.get(`${ROOT_URL}/users`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`},
        }).then((response) => {
          const usersData = response.data['hydra:member'];
          const dataUser = usersData.find((userData) => (userData.email === state.auth.email));
          const action = saveUser(dataUser.id, dataUser.roles);
          store.dispatch(action);
        });
      }).catch((error) => console.log(error));
      break;
    }
    case LOGOUT:
      localStorage.removeItem('token');
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
