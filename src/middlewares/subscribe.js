import axios from 'axios';
import Cookies from 'js-cookie';
import {
  SUBSCRIBE_SUBMIT,
  subscribeSaveUser,
  saveRegisterResponse,
} from 'src/actions/subscribe';

const subscribe = (store) => (next) => (action) => {
  const state = store.getState();
  const ROOT_URL = 'http://localhost:8000/api';
  switch (action.type) {
    case SUBSCRIBE_SUBMIT: {
      axios.post(`${ROOT_URL}/users/add`, {
        email: state.subscribe.email,
        password: state.subscribe.password,
      })
        .then(response => {
          console.log(response.data);
          store.dispatch(subscribeSaveUser(state.subscribe.email, state.subscribe.password));
          // store.dispatch(saveRegisterResponse('Success'));
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(saveRegisterResponse('Error'));
        });
      break;
    }
    default:
      next(action);
  }
};

export default subscribe;
