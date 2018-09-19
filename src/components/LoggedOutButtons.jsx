import React from 'react';
import { NavLink } from 'react-router-dom'

const LoggedOutButtons = (props) =>{
    const { user, logout}  = props;

    
    return (
        <React.Fragment>
        <ul className="nav navbar-nav float-lg-right">
            <li className="nav-item">
                <button type="button" className="btn btn-link" onClick={logout}>Logout</button>
            </li>
        </ul>
        {user && user.email} 
        {(!user.emailVerified) ?
            <button type="button" className="btn btn-primary">Verify</button>
            : ''
        }
        </React.Fragment>
    );
}

export default LoggedOutButtons;
