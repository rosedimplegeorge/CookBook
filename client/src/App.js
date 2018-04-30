import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
              <Jumbotron responsive>
                <h1>Cook Book !</h1>
                <p>
                  This App will help you to come up with some good options on a LAZY Saturday morning ! 
                </p>
                <p>
                  <Button bsStyle="primary">Sign In</Button>
                </p>
            </Jumbotron >
            <Image src="https://i.imgur.com/Km3kcgU.jpg" responsive />
        </div>
    );
  }
}

export default App;
