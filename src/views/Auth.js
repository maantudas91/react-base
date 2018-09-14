import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

class Auth extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let { match } = this.props;
        return (
            <div>
                Auth
               <Switch>
                    <Route exact path={match.url} component={Login} />
                    <Route path={`${match.url}/login`} component={Login} />
                    <Route path={`${match.url}/signup`} component={Signup} />
                </Switch>
            </div>
        );
    }
}

export default Auth;
