import React, {Component} from 'react'
import {Provider} from "react-redux";
import store from './store'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Home from "./components/Home";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Router>
    </Provider>
);

export default App;