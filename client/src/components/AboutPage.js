import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import {Image} from 'react-bootstrap';
import AppTitle from './styledComponents/AppTitle'

class AboutPage extends Component{
    
        render(){

            return(
                <div className='about'>
                    <Jumbotron>
                        <AppTitle>
                        <h1>Cook Book</h1>
                        </AppTitle>
                        <p>
                            This Application is created for people who loves to cook, and keep their recipes with them with the ingredients and the reviews they got. Personlize your Favourites by keeping the reviews that you got ! 
                        </p>
                        <p>
                            <AppTitle>
                            <Link to='/users'><Button bsStyle="primary">Users</Button></Link>
                            </AppTitle>
                        </p>
                    </Jumbotron>  
                    <Image src="https://i.imgur.com/Km3kcgU.jpg" responsive />;    
                </div>   
        )
    }
}

export default AboutPage;