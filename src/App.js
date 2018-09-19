import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home'
import About from './views/About'
import Books from './views/Books'
import Auth from './views/Auth'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import PrivateRoute from './hocs/ProtectedRoute';
import Profile from './views/Profile';
import { withRouter } from 'react-router'
import { Authorize } from './rdx/actions/AuthActions';

class App extends Component {

  constructor(props){
    super(props);
    //this.props.dispatch(Authorize());
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header user={user}/>
        <main className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/auth" component={Auth}/>
          <PrivateRoute user={user} path="/profile" component={Profile}/>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth };
};

export default withRouter(connect(mapStateToProps)(App));

//https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
//https://medium.com/quick-code/adding-authentication-to-react-redux-firebase-app-f0efcb1c519a
//https://dev.to/_arpy/loading-components-asynchronously-in-react-app-with-an-hoc-6nh
//https://github.com/HydroCarbons/redux-react-boilerplate-2018
//https://github.com/tsaiDavid/simple-redux-boilerplate
