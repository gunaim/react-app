import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import AppStore from "./reducers/AppStore";

const store = createStore(AppStore, composeWithDevTools(applyMiddleware(thunk)));
export default store;