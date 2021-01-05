import { combineReducers } from 'redux';
import auth from './auth';
import profilParent from './profilParent';
import subscribe from './subscribe';

// combineReducer permet d'aggréger plusieurs sous-reducers
// en un reducer global : on parle de rootReducer
export default combineReducers({
  auth,
  profilParent,
  subscribe,
});
