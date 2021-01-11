import axios from 'axios';
import { RESGISTER_PARENT, saveProfilParent } from 'src/actions/parent';
import Cookies from 'js-cookie';

const parent = (store) => (next) => (action) => {
  const ROOT_URL = 'http://localhost:8000/api';
  const state = store.getState();
  const token = Cookies.get('token');
  const phone = parseInt(state.parent.phone, 0);
  const zipcode = parseInt(state.parent.zipcode, 0);

  switch (action.type) {
    case RESGISTER_PARENT: {
      axios.post(`${ROOT_URL}/parents`, {
        firstname: state.parent.firstname,
        lastname: state.parent.lastname,
        phone,
        adress: state.parent.adress,
        zipcode,
        city: state.parent.city,
      }, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then((response) => {
          console.log('middelware');
          console.log(response);
          store.dispatch(saveProfilParent(
            state.parent.firstname,
            state.parent.lastname,
            phone,
            state.parent.adress,
            zipcode,
            state.parent.city,
          ));
        })
        .error((error) => {
          console.log(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default parent;
