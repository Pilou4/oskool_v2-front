import { applyMiddleware, createStore } from 'redux';
import reducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from 'src/middlewares/auth';
import subscribe from '../middlewares/subscribe';
import formParent from 'src/middlewares/formParent';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(auth, subscribe, formParent)));

export default store;
