import axios from 'axios';
import {
  LOGIN,
  saveUser,
  LOGOUT,
  CHECK_IS_LOGGED,
} from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  const ROOT_URL = 'http://localhost:8000/api';
  const state = store.getState();
  switch (action.type) {
    case LOGIN: {
      axios.post(`${ROOT_URL}/login`, {
        email: state.auth.email,
        password: state.auth.password,
      }, { 'Content-Type': 'application/json' },
      { withCredentials: true }).then((response) => {
        sessionStorage.setItem('token', response.data.token);

        axios.get(`${ROOT_URL}/users`, {
          headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
        }).then((response) => {
          const usersData = response.data['hydra:member'];
          const dataUser = usersData.find((userData) => (userData.email === state.auth.email));

          sessionStorage.setItem('id', dataUser.id);
          const action = saveUser(dataUser.id, dataUser.roles);
          store.dispatch(action);
        });
      }).catch((error) => console.log(error));
      break;
    }
    case CHECK_IS_LOGGED: {
      const id = sessionStorage.getItem('id');
      const token = sessionStorage.getItem('token');
      if (token || !token === '') {
        axios.get(`${ROOT_URL}/users/${id}`, {
          headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },
        }, {}, { withCredentials: true }).then((response) => {
        }).catch((error) => console.log(error));
        const action = saveUser(id);
        store.dispatch(action);
      }
      break;
    }
    case LOGOUT:
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('id');
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
