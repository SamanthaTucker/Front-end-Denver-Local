import React, { Component } from 'react' 

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { render } from '@testing-library/react'


export default function UserRegister(props) {



        return(
            <div className='register-form'>
                <h3>Create An Account</h3>

                <form onSubmit={props.register}>
                <label htmlFor='Username'>Username: </label>
                <input className='input-field' type='text' id='username' name='username'></input>

                <label htmlFor='password'>Password: </label>
                <input className='input-field' type='text' id='password' name='username'></input>

                <label htmlFor='confirmPassword'>Confirm Password: </label>
                <input className='input-field' type='text' id='confirmPassword' name='confirmPassword'></input>

                <div className="mb-2">
                    <Button type='submit' value='register' variant="secondary" size="md">Register</Button>
                </div>

                </form>

            </div> 
        )
}