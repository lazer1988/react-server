import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
          </ul>

          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
          </Switch>
      </div>
    );
  }
}

export default App;
