import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import PostEntry from './components/PostEntry'
import PostEdit from './components/PostEdit'
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './App.css'

console.log(process.env.NODE_ENV)
let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:3003'
}else{
  baseUrl = 'heroku link here ---'
}


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      postEntries: [],
      postToEdit: {},
      modalOpen: false,
      modalOpenNew: false,
      activity: '',
      location: '',
      about: '',
      date: '',
      loginShow: false,
      loggedIn: false,
      registerShow: false,
      showBodyPage: true,
      usersName: '',
      username: '',
      password: ''
    }
  }

  //Fetch to Backend
  getPosts = ()=>{
    fetch(baseUrl + '/post', {
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200 || res.status === 201){
        return res.json()
      }else{
        return []
      }
    })
    .then(data => {
      this.setState({
        postEntries: data
      })
    })
  }

  // Create new post
  addPost = (newPost) => {
    const copyPosts = [...this.state.postEntries]
    copyPosts.push(newPost)
    this.setState({
      postEntries: copyPosts
    })
  }

  componentDidMount(){
    this.getPosts()
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Delete Post
  deletePost = async(id) =>{
    const url = baseUrl + '/post/' + id

    try{
      const response = await fetch(url, {method: "DELETE"})
      const index = this.state.postEntries.findIndex(post => post._id === id)
      const copyPosts = [...this.state.postEntries]
      copyPosts.splice(index, 1)

      this.setState({
        postEntries: copyPosts
      })
    }
    catch(error){
      console.log('Error: ', error)
    }
  }

  handleSubmit = async (event) =>{
    event.preventDefault()

    const url = baseUrl + '/post/' + this.state.postToEdit._id
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        activity: event.target.activity.value,
        location: event.target.location.value,
        about: event.target.about.value,
        date: event.target.date.value
      }),
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'include'
    })
    if(response.status === 200){
      const updatedPost = await response.json()
      const findIndex = this.state.postEntries.
      findindex(entry => entry._id === updatedPost.data._id)
      const copyPosts = [...this.state.postEntries]
      copyPosts[findIndex] = updatedPost.data 

      this.setState({
        postEntries: copyPosts,
        modalOpen: false
      })
    }
  }

  //EDIT
  showEditForm = (entry) => {
    this.setState({
      modalOpen: true,
      modalOpenNew: false,
      activity: entry.activity,
      location: entry.location,
      about: entry.about,
      date: entry.about,
      postToEdit: entry
    })
  }

  //NEW
  showNewForm = (entry) => {
    this.setState({
      modalOpen: false,
      modalOpenNew: !this.state.modalOpenNew,
      activity: '',
      location: '',
      about: '',
      date: ''
    })
  }

  onClose = event => {
    this.setState({
      modalOpenNew: false
    })
  }

  loggedInUser = async (event) => {
    event.preventDefault()
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
        credentials: "include"
      })
      console.log(response)
      console.log("BODY: ",response.body)
      if(response.status === 200){
        console.log('User is Authenticated!!!')
        this.usersName(this.state.username)
        this.getPosts()
        this.setState({
          loggedIn: true,
          showBodyPage: false,
          loginShow: false,
          registerShow: false,
        })
      }
    }
    catch(error){
      console.log('Error => ', error)
    }
  }

  //Register
  register = async(event) => {
    event.preventDefault()
    const url = baseUrl + '/user/register'
    const registerBody = {
      username: this.state.username,
      password: this.state.password
    }
    
    if(event.target.password.value !== event.target.confirmPassword.value){
      alert('Passwords Do Not Match!')
    } else{
      try{
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(registerBody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(response.status === 401){
          alert('User Already Exists!')
        }else if(response.status === 201){
          this.loggedInUser(event)

          this.setState({
            showLanding: false,
            loginShow: false,
            registerShow: false
          })
        }
      } catch(error){
        console.log('Error: ', error)
      }
    }
  }

  logOut = async (event) => {
    event.preventDefault()
    const url = baseUrl + '/user/logout'

    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({
        username: '',
        password: ''
      }),
      headers: {
        'Content-Type': 'applicaiton/json'
      }
    })
    if(response.status === 200) {
      this.setState({
        loggedIn: false,
        showLanding: true,
        usersname: ''
      })
    }
  }

  showLogin = (entry) => {
    this.setState({
      loginShow: !this.state.loginShow,
      signupShow: false
    })
  }

  showRegister = (entry) => {
    this.setState({
      loginShow: false,
      registerShow: !this.state.registerShow
    })
  }

  render(){
    console.log(this.state)
    return(
      <div>

        <NavBar loggedIn={this.state.loggedIn} loggedInUser={this.loggedInUser} logOut={this.logOut} register={this.register} showLogin={this.showLogin} loginShow={this.state.loginShow} showRegister={this.showRegister} registerShow={this.state.registerShow} usersName={this.state.usersName}/>

        {this.state.showBodyPage &&
          <Body />
        }

          {this.state.loggedIn && 
            <div className='loggedIn-div'>
              <Button className='addPost-btn' variant="outline-secondary" type='submit'> Create Event Post</Button>
                {this.state.modalOpenNew && 
                  <PostEntry baseUrl={baseUrl} addPost={this.addPost} onClose={this.onClose} />
                }

                <div className='event-cards'>
                  {this.state.postEntries.map(entry => {
                    return(
                      <Card style={{ width: '18rem' }} key={entry._id}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>{entry.activity}</Card.Title>
                        <Card.Text>Location: {entry.location}</Card.Text>
                        <Card.Text>About: {entry.about}</Card.Text>
                        <Card.Text>{entry.date}</Card.Text>
                        <Button variant="primary" className='edit-btn' onClick={()=>this.showEditForm(entry)}>Edit</Button>
                        <Button variant="primary" className='delete-btn' onClick={()=>this.deletePost(entry._id)}>Delete</Button>
                      </Card.Body>
                    </Card>
                    )
                  })}
                </div>

            </div>
          }

        <Footer />


      </div>
    )
  }
}
export default App 

// api = GET /v3/users/me HTTP 1.1 Host: www.eventbriteapi.com Authorization: Bearer DJHZD52IIBIHAMRTWY6P

// base url https://www.eventbriteapi.com/v3
// https://www.eventbriteapi.com/v3/users/me/?token=DJHZD52IIBIHAMRTWY6P