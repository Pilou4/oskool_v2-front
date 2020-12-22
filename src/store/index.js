import { applyMiddleware, createStore } from 'redux';
import reducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from 'src/middlewares/auth';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(auth)));

export default store;
