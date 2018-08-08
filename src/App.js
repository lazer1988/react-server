import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
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
