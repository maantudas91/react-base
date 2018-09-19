import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import LoggedinButtons from './LoggedinButtons';
import LoggedOutButtons from './LoggedOutButtons';
import { firebaseAuth } from '../firebase';
import { Authorize, Logout } from '../rdx/actions/AuthActions';
import { withRouter } from 'react-router'

class Header extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.dispatch(Logout());
    }

    render() {

        const { isLoggedin, user } = this.props.user;
        let authButton;
        if(isLoggedin){
            authButton = <LoggedOutButtons user={user} logout={this.logout}/>
        }else{
            authButton = <LoggedinButtons/>
        }

        return (
            <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light" role="navigation">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active"  to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active" to="/books">Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active" to="/profile">Profile</NavLink>
                        </li>
                    </ul>

                   {authButton}

                </div>
            </nav>
            </header>
        );
    }
}

export default withRouter(connect(null)(Header));
