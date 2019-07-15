import React, {Component} from 'react';
//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import {Login} from './components/Login.js';
import {Signup} from './components/Signup.js';
//import {Dashboard} from './components/Dashboard.js'
import './App.css';

class App extends Component {
  render() {
  return (
  <div className="App">
      <div className="App-content">
          <Switch>  
              <Route exact path="/" component={Login}/>
              <Route exact path ="/signup" component={Signup}/>
          </Switch>
      </div>
  </div>
  );
}
}
export default App;
