import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class SpecificUserPage extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                <h1>Specific user</h1>
                {this.props.users.map(user => {
                        return (`${user.userName}
                                ${user.recipes}`)
                })}
                </Jumbotron>
            </div>
        )
    }
}

export default SpecificUserPage