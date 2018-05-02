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

createUser = (newUser) => {
  console.log('Create user is Called')
  axios.post('/api/users', {newUser})
  .then((res) => {
    console.log('Res from Server', res.data)
    const users = [this.state.users]
    users.push(res.data)
    this.setState({users})
  })
}

  render() {

    const UsersList = props => {
      console.log('Test')
      return<UsersPage users={this.state.users} createUser={this.createUser} {...props} />
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
