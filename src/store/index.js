import { applyMiddleware, createStore } from 'redux';
import reducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from 'src/middlewares/auth';
import subscribe from '../middlewares/subscribe';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(auth, subscribe)));

export default store;
