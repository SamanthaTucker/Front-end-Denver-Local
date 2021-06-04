import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'

console.log(process.env.NODE_ENV)
let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:3003'
} else {
    baseUrl = ''
}

class UserLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id] : e.target.value })
    }

    loggingUser = async(e) => {
        e.preventDefault()
        const url = baseUrl + '/user/login'

        const loginBody = {
            username: this.state.username,
            password: this.state.password
        }
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginBody),
                credentials: 'include'
            })
            if(response.status === 200){
                console.log('User is authenticated!!')
                this.props.getPosts()
                // this.setState({
                //     loggedIn: true,
                //     showBodyPage: false,
                //     loginShow: false,
                //     registerShow: false,
                //   })
            }
        }catch(error){
            console.log('Error => ', error)
        }
    }

    render() {
        console.log(this.state)
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
}
export default UserLogin