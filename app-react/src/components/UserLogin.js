import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'

export default function UserLogin(props) {

        return(
            <div>

                <form onSubmit={props.loggedInUser}>

                    <label htmlFor='username'>Username: </label>
                    <input className='input-field' type='text' id='username' name='username'></input>

                    <label htmlFor='password'>Password: </label>
                    <input className='input-field' type='password' id='password' name='password'></input>

                    <Button variant="outline-secondary" type='submit'>Login</Button>
                </form>

            </div>
        )
}