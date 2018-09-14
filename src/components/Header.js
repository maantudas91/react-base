import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
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
                    </ul>

                    <ul className="nav navbar-nav float-lg-right">
                    <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active"  to="/auth/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active" to="/auth/signup">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>
        );
    }
}

export default Header;
