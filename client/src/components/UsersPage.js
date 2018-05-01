import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

class UsersPage extends Component{


    render(){
        return(
            <div>Users Page
                {this.props.users.map(user => {
                    return (<Link to={`/users/${user._id}`}>{user.userName}</Link>) })}
                <p>
                    <Link to='/'><Button bsStyle="info">Home</Button></Link>
                </p>

            </div>
        )
    }
}

export default UsersPage