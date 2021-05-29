import React, { Component } from 'react' 


export default function UserRegister(props) {

        return(
            <div>
                <form onSubmit={props.register}>
                    <label htmlFor='Username'>Username: </label>
                    <input className='input-field' type='text' id='username' name='username'></input>

                    <label htmlFor='password'>Password: </label>
                    <input className='input-field' type='text' id='password' name='username'></input>

                    <label htmlFor='confirmPassword'>Confirm Password: </label>
                    <input className='input-field' type='text' id='confirmPassword' name='confirmPassword'></input>

                    <Button variant="contained" color="primary" type='submit' value='Register'>Register</Button>
                </form>

            </div>
        )
}