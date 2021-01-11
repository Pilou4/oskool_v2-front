import { applyMiddleware, createStore } from 'redux';
import reducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from 'src/middlewares/auth';
import parent from 'src/middlewares/parent';
import subscribe from '../middlewares/subscribe';
import formChildren from '../middlewares/formChildren';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  auth,
  subscribe,
  parent,
  formChildren,
)));

export default store;
