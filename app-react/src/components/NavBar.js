import React, { Component } from 'react' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Button from 'react-bootstrap/Button'

export default function NavBar(props){

    return(
      <Router>
      <div className='navBar-div'>
        <nav className='navbar'>
          <ul>

            <li>
              <Link to='/'>Denver Local</Link>
            </li>

            <li>
              <Link to='/blog'>Event Blogs</Link>
            </li>

            <li>
              <Link to='/blog/new'>Create a Blog Post</Link>
            </li>

            <li>
              <Link to='/user/login'>
                <Button>Log In</Button>
              </Link>
            </li>

            <li>
              <Link to='/user/register'>
                <Button>Register</Button>
              </Link>
            </li>

            <li>
              <Link to='/user/profile'>
                <Button>Profile</Button>
              </Link>
            </li>

          </ul>

        </nav>

      </div>
      </Router>
    )
}

