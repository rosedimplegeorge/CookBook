import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import axios from 'axios'

class SpecificUserPage extends Component{

    state = {
        user: {}
    }

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



    render(){
        return(
            <div>
                <Jumbotron>
                <h1>{this.state.user.userName}</h1>
                <h2>{this.state.recipes.title}</h2>
                
                </Jumbotron>
            </div>
        )
    }
}

export default SpecificUserPage