import React from 'react' 
import Button from 'react-bootstrap/Button'


export default function UserLogin(props){

    return(
        <div className='login-form'>
            <h4>Login</h4>
            <form onSubmit={props.UserLogin}>
                <label>Username: </label>
                <input type='text' id='username' name='username' placeholder='username123'></input>

                <label>Password: </label>
                <input type='password' id='password' name='password' placeholder='password123'></input>

                <Button variant="outline-secondary" type='submit'>Log In</Button>{' '}

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

// class UserLogin extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

    // handleChange = (e) => {
    //     this.setState({ [e.target.id] : e.target.value })
    // }

    // loggingUser = async(e) => {
    //     e.preventDefault()
    //     const url = baseUrl + '/user/login'

    //     const loginBody = {
    //         username: this.state.username,
    //         password: this.state.password
    //     }
    //     try{
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(loginBody),
    //             credentials: 'include'
    //         })
    //         if(response.status === 200){
    //             console.log('User is authenticated!!')
    //             this.props.getPosts()
    //             this.setState({
    //                 loggedIn: true,
    //                 showBodyPage: false,
    //                 loginShow: false,
    //                 registerShow: false,
    //               })
    //         }
    //     }catch(error){
    //         console.log('Error => ', error)
    //     }
    // }

//     render() {
//         console.log(this.state)
//         return(
//             <div id='login-form'>

//                 <Form>
//                     <Form.Group controlId="username">

//                         <Form.Label>Username: </Form.Label>
//                         <Form.Control type="text" placeholder="Username" onChange={this.handleChange}/>

//                     </Form.Group>

//                     <Form.Group controlId="password">

//                         <Form.Label>Password: </Form.Label>
//                         <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />

//                     </Form.Group>

//                     <Button variant="primary" type="submit">Login</Button>
//                 </Form>

//             </div>
//         )
//     }
// }
// export default UserLogin
