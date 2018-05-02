import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class UsersPage extends Component{

    state = {
        newUser:{}
    }

    componentDidMount(){
        
    }

    handleChange = (event) => {
        const user = {...this.state.newUser}
        user[event.target.name] = event.target.value
        console.log("form value: ", user)
        this.setState({newUser: user})
      }

    callCreateUser = () => {
        console.log('Call Create user s Called')
        const newUser = {...this.state.newUser}
        console.log('newUser: ', newUser)
        this.props.createUser(newUser)
    }    

      render(){
        
        return(
            <div>
                <Jumbotron>  
                    <h1>Users Page</h1>
                    {this.props.users.map(user => {                   
                        return (<Link to={`/users/${user._id}`}><li>{user.userName}</li></Link>)
                        })
                    }
                    <p>
                        
                        <form onSubmit={this.callCreateUser}>
                        <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" />
                        </div>
                        <input type="submit" value="Add New User" />
                        </form>
                        <Link to='/'><Button bsStyle="info">Home</Button></Link>
                        {/* <Button bsStyle="success">Add New User</Button> */}
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default UsersPage