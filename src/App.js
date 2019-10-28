import React, {Component} from 'react'
import {Provider} from "react-redux";
import store from './store'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Home from "./components/Home";
import Increment from "./components/increments/Increment";
import Posts from "./components/posts/Posts";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/increments' component={Increment}/>
                <Route exact path='/posts' component={Posts}/>
            </Switch>
        </Router>
    </Provider>
);

export default App;