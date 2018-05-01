import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class AboutPage extends Component{
    
        render(){

            return(
                <div>
                    <Jumbotron>
                        <h1>Cook Book</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Link to='/users'><Button bsStyle="primary">Users</Button></Link>
                        </p>
                    </Jumbotron>
                </div>
        )
    }
}

export default AboutPage;