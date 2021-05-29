import React, { Component } from 'react' 
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

import Button from 'react-bootstrap/Button'

export default class NavBar extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="mb-2">
        <Button variant="secondary" size="lg">Large button</Button>
      </div>
    )
  }
}