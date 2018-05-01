import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import styled from 'styled-components'
import AboutPage from './components/AboutPage'
import UsersPage from './components/UsersPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AboutPage}/>
          <Route exact path='/users' component={UsersPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
