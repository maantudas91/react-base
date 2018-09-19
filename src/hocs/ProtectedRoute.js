import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, user, ...rest}) => {
   
    const userData = user;
    console.log(userData);
    return (
        <Route {...rest} render={(props) => (
            (userData.isLoggedin) 
            //(localStorage.getItem('user'))
        ? <Component {...props} />
        : <Redirect 
            to={{
                pathname: '/auth/login',
                state: { from: props.location }
              }}
        />
        )} />
    )
};

export default ProtectedRoute;
