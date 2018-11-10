import React, {Component} from 'react';
import {Route,Router, Switch} from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import Signup from "./Signup";
import UserHome from "./UserHome";
import Home from "./Home";
import '../App.css';
import history from "./history";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/welcome' component={Welcome}/>
                    <Route  path='/signup' component={Signup}/>
                    <Route  path='/UserHome' component={UserHome}/>
                </Switch>
            </Router>
        );

    }
}
export default Routes;