import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import styled from 'styled-components'
import AboutPage from './components/AboutPage'
import UsersPage from './components/UsersPage'
import SpecificUserPage from './components/SpecificUserPage'
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    users:[]
}
componentDidMount(){
    this.getAllUsers()
}
getAllUsers = () => {
    console.log('The Users Page was Called')
    axios.get('/api/users')
    .then(res =>{
        console.log("Saving users to state", res.data)
        this.setState({users: res.data})
    })
    .catch(err => {
        console.error(err)
      })
}

  render() {

    const UsersList = props => {
      return<UsersPage users={this.state.users} {...props} />
    }

    const SpecificUser = props => {
      return<SpecificUserPage users={this.state.users} {...props} />
    }


    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AboutPage}/>
          <Route exact path='/users' render={UsersList}/>
          <Route exact path='/users/:id' render={SpecificUser}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
