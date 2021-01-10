import axios from 'axios';
import Cookies from 'js-cookie';
import { Children } from 'react';
import {
  LOGIN,
  saveUser,
  LOGOUT,
  CHECK_IS_LOGGED,
  checkIsLoggedParent,
  fetchProfilParent,
  fetchProfilChildren,
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
        // sessionStorage.setItem('token', response.data.token);
        Cookies.set('token', response.data.token);

        axios.get(`${ROOT_URL}/users`, {
          headers: { 'Authorization': `Bearer ${Cookies.get('token')}`},
        }).then((response) => {
          const usersData = response.data['hydra:member'];
          console.log(usersData);
          const dataUser = usersData.find((userData) => (userData.email === state.auth.email));
          console.log(dataUser);
          const id = Cookies.set('id', dataUser.id);
          // const students = dataUser.parent.students.find((children) => children);
          // console.log(dataUser.parent.students);
          if (dataUser.parent != null) {
            store.dispatch(checkIsLoggedParent(id));
            store.dispatch(fetchProfilParent(dataUser));
            const children = dataUser.parent.students;
            store.dispatch(fetchProfilChildren(children));
          }
          store.dispatch(saveUser());
        });
      }).catch((error) => console.log(error));
      break;
    }
    case CHECK_IS_LOGGED: {
      // const id = Cookies.get('id');
      // const token = Cookies.get('token');
      // if (token || !token === '') {
      //   axios.get(`${ROOT_URL}/users/${id}`, {
      //     headers: { 'Authorization': `Bearer ${token}` },
      //   }, {}, { withCredentials: true }).then((response) => {
      //   }).catch((error) => console.log(error));
      // }
      break;
    }
    case LOGOUT:
      Cookies.remove('token');
      Cookies.remove('id');
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
