import axios from 'axios';
import { RESGISTER_PARENT, saveProfilParent } from 'src/actions/formParent';
import Cookies from 'js-cookie';

const formParent = (store) => (next) => (action) => {
  const ROOT_URL = 'http://localhost:8000/api';
  const state = store.getState();
  const token = Cookies.get('token');
  const phone = parseInt(state.formParent.phone, 0);
  const zipcode = parseInt(state.formParent.zipcode, 0);

  switch (action.type) {
    case RESGISTER_PARENT: {
      axios.post(`${ROOT_URL}/parents`, {
        firstname: state.formParent.firstname,
        lastname: state.formParent.lastname,
        phone,
        adress: state.formParent.adress,
        zipcode,
        city: state.formParent.city,
      }, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then((response) => {
          console.log('middelware');
          console.log(response);
          store.dispatch(saveProfilParent(
            state.formParent.firstname,
            state.formParent.lastname,
            phone,
            state.formParent.adress,
            zipcode,
            state.formParentcity,
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

export default formParent;
