import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import axios from 'axios'

class SpecificUserPage extends Component{

    state = {
        user: {}
    }

    handleChange = event => {
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

    editUser = event  => {
        event.preventDefault()
        const userId = this.props.user._id
        const payload = this.state.user
        console.log('Edit User is Called')
        axios.put(`/api/users/${userId}`, payload)
        .then(res => {
            this.setState({user: res.data})
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
                    name="name"
                    value={this.state.user.userName}
                    placeholder={this.props.userName}
                    />
                </div>
                <input type="submit" value="Update User" />
                </form>
                </Jumbotron>
      </div>
        )
    }
}

export default SpecificUserPage