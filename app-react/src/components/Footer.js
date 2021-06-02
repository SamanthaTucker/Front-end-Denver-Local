import React, { Component } from 'react' 
import Navbar from 'react-bootstrap/Navbar'


export default class Footer extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
          <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
              <Navbar.Brand className='footer-link' href="#">LinkedIn</Navbar.Brand>
              <Navbar.Brand className='footer-link' href="https://github.com/SamanthaTucker">GitHub</Navbar.Brand>
              <Navbar.Brand className='footer-link' href="#">Contact Me</Navbar.Brand>
          </Navbar>
      </div>
    )
  }
}