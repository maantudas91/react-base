import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Books from './views/Books';
import Auth from './views/Auth';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <Header/>
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
              <Route path="/auth" component={Auth}/>
            </Switch>
          </main>
          <Footer/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
