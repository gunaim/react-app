import {combineReducers} from "redux";

import Posts from "./Posts";

const AppStore = combineReducers({
    posts: Posts
});

export default AppStore;