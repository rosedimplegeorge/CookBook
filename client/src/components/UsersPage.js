import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class UsersPage extends Component{


    render(){
        return(
            <div>
                <Jumbotron>
                    
                    <h1>Users Page</h1>
                    {this.props.users.map(user => {
                                return (<Link to={`/users/${user._id}`}>{user.userName}</Link>)})}
                    
                    
                    <p>
                        <Link to='/'><Button bsStyle="info">Home</Button></Link>
                        <Button bsStyle="success">Add New User</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default UsersPage