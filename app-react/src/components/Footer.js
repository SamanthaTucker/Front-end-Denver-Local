import React, { Component } from 'react' 
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default class NavBar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Denver Local</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="https://www.linkedin.com/in/samantha-tucker-1827a9128/">LinkedIn</Nav.Link>
                    <Nav.Link href="https://github.com/SamanthaTucker">Github</Nav.Link>
                    <Nav.Link href="https://unsplash.com/">Image Source</Nav.Link>
                    </Nav>
                </Navbar>
            </>   
        )
    }
}