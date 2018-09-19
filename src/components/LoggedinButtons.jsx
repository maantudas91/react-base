import React from 'react';
import { NavLink } from 'react-router-dom'

const LoggedinButtons = (props) =>{
    return (
        
        <ul className="nav navbar-nav float-lg-right">
            <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active"  to="/auth/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/auth/signup">Signup</NavLink>
            </li>
        </ul>
    );
}

export default LoggedinButtons;
