import { combineReducers } from 'redux';
import auth from './auth';
import profilParent from './profilParent';
import profilChildren from './profilChildren';
import subscribe from './subscribe';
import formParent from './formParent';
import formChildren from './formChildren';

// combineReducer permet d'aggréger plusieurs sous-reducers
// en un reducer global : on parle de rootReducer
export default combineReducers({
  auth,
  profilParent,
  profilChildren,
  subscribe,
  formParent,
  formChildren,
});
