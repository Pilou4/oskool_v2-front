import { combineReducers } from 'redux';
import auth from './auth';
import profilParent from './profilParent';

// combineReducer permet d'aggréger plusieurs sous-reducers
// en un reducer global : on parle de rootReducer
export default combineReducers({
  auth,
  profilParent,
});
