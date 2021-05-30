import React, { Component } from 'react' 
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

import {Navbar, Nav} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default class NavBar extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className='navBar-div'>
			<Navbar id='navBar' sticky="top"  variant="dark">
				<Navbar.Brand id='navbar-title'>Denver Local</Navbar.Brand>
				<Nav>
					<Nav.Link onClick= {this.props.loginShow}>Login</Nav.Link>
					{this.props.loginShow &&
						<UserLogin loggedIn={this.props.loggedIn}/>
					}
					<Nav.Link onClick={this.props.registerShow}>Register</Nav.Link>
					{this.props.registerShow &&
						<UserRegister register={this.props.register}/>
					}
					{this.props.loggedIn &&
						<Button onClick={this.props.logOut}>Log Out</Button>
					}
					<Nav className="float-sm-right">
						<Navbar.Brand>{this.props.usersName}</Navbar.Brand>
					</Nav>
				</Nav>	
			</ Navbar>
      </div>
    )
  }
}