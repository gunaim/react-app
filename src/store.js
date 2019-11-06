import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import AppStore from "./reducers/AppStore";

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(AppStore, composeWithDevTools(middleware));
export default store;