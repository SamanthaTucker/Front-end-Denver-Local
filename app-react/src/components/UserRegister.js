import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'



export default function UserRegister(props){

    return(
        <div className='register-form'>
            <h4>Register Account</h4>

            <form onSubmit={props.UserRegister}>

                <label>Username: </label>
                <input type='text' id='username' name='username' placeholder='username123'></input>

                <label>Password: </label>
                <input type='password' id='password' name='password' placeholder='password123'></input>

                <Button variant="outline-secondary" type='submit'>Register Account</Button>{' '}

            </form>
        </div>
    )
}







// console.log(process.env.NODE_ENV)
// let baseUrl = ''

// if(process.env.NODE_ENV === 'development'){
//     baseUrl = 'http://localhost:3003'
// } else {
//     baseUrl = ''
// }

// class UserRegister extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             username: '',
//             password: '',
//         }
//     }

//     handleChange = (e) => {
//         this.setState({ [e.target.id]: e.target.value })
//     }

//     registerUser = async (e) => {
//         e.preventDefault()

//         const url = baseUrl + '/user/register'
//         const registerBody = {
//             username: this.state.username,
//             password: this.state.password
//         }
//         try{
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(registerBody),
//                 credentials: 'include'
//             })
//             if(response.status === 201){
//                 console.log('User successfully created!!')
                
//             }
//         }
//         catch(error){
//             console.log('Error: ', error)
//         }
//     }

//     render(){
//         console.log(this.state)
//         return(
//             <div id='register-form'>
//                 <Form>
//                     <Form.Group controlId="username">

//                         <Form.Label>Username: </Form.Label>
//                         <Form.Control type="text" placeholder="Username" onChange={this.handleChange}/>

//                     </Form.Group>

//                     <Form.Group controlId="password">

//                         <Form.Label>Password: </Form.Label>
//                         <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />

//                     </Form.Group>

//                     <Button variant="primary" type="submit">Sign Up</Button>
//                 </Form>

//             </div>
//         )
//     }
// }
// export default UserRegister
