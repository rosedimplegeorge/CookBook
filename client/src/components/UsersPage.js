import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import axios from 'axios'
import {Image} from 'react-bootstrap';

class UsersPage extends Component {

    state = {
        newUser: {}
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        const user = { ...this.state.newUser }
        user[event.target.name] = event.target.value
        console.log("form value: ", user)
        this.setState({ newUser: user })
    }

    callCreateUser = () => {
        console.log('Call Create user s Called')
        const newUser = { ...this.state.newUser }
        console.log('newUser: ', newUser)
        this.props.createUser(newUser)
    }

    deleteThisUser = (userId) => {
        this.props.deleteUser(userId)
      }

    render() {

        return (
            <div>
                <Jumbotron>
                    <h1>Users Page</h1>
                    {this.props.users.map(user => {
                        return (
                            <div>
                                <Link to={`/users/${user._id}`}><li>{user.userName}</li></Link>
                                {/* <input type="submit" value="Delete User" /> */}
                                <button
                                    onClick={() => { this.deleteThisUser(user._id) }}>
                                    Delete User
                                </button>
                            </div>
                        )
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
                <Image src="https://i.imgur.com/Km3kcgU.jpg" responsive />;
            </div>
        )
    }
}
export default UsersPage