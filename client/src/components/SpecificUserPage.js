import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import {Image} from 'react-bootstrap';

class SpecificUserPage extends Component{

    state = {
        user: {},
    }

    handleChange = (event) => {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
      };

    componentDidMount = () => {
        this.getSpecificUser()
    }

    getSpecificUser = () => {
        const userId = this.props.match.params.userId
        console.log('User ID: ', userId)
        axios.get(`/api/users/${userId}`)
        .then((res) => {
            console.log('From server: ', res.data)
            this.setState({user: res.data})
        })
    }

    editUser = (event)  => {
        event.preventDefault()
        const userId = this.state.user._id
        const payload = this.state.user
        console.log('Edit User is Called')
        axios.put(`/api/users/${userId}`, payload)
        .then((res) => {
            console.log('edit user return: ', res.data)
            const user = res.data
            this.setState({user})
            // this.getSpecificUser()
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                <Jumbotron>
                <h1>{this.state.user.userName}</h1>
                <form onSubmit={this.editUser}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    name="userName"
                    value={this.state.user.userName}
                    />
                </div>
                <input type="submit" value="Update User" />
                </form>
                <Link to='/'><Button bsStyle="info">Home</Button></Link>
                </Jumbotron>
                <Image src="https://i.imgur.com/Km3kcgU.jpg" responsive />;
      </div>
        )
    }
}

export default SpecificUserPage