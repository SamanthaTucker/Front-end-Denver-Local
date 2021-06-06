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
                    <Navbar.Brand href="#home">Denver Local</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/user/register">Create Account</Nav.Link>
                    <Nav.Link href="/user/login">Login</Nav.Link>
                    <Nav.Link href="/blog">Blog Posts</Nav.Link>
                    <Nav.Link href="/blog/new">Create Blog Post</Nav.Link>
                    </Nav>
                </Navbar>
            </>   
        )
    }
}


