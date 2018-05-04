import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import {Image} from 'react-bootstrap';


class AboutPage extends Component{
    
        render(){

            return(
                <div className='about'>
                    <Jumbotron>
                        <h1>Cook Book</h1>
                        <p>
                            This Application is created for people who loves to 
                        </p>
                        <p>
                            <Link to='/users'><Button bsStyle="primary">Users</Button></Link>
                        </p>
                    </Jumbotron>  
                    <Image src="https://i.imgur.com/Km3kcgU.jpg" responsive />;    
                </div>   
        )
    }
}

export default AboutPage;