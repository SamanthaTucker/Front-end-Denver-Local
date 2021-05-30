import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import PostEntry from './components/PostEntry'
import PostEdit from './components/PostEdit'
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'
import Footer from './components/Footer'

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
      usersName: ''
    }
  }

  //Fetch to Backend
  getPosts = ()=>{
    fetch(baseUrl + '/posts', {
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
    const url = baseUrl + '/posts/' + id

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

    const url = baseUrl + '/posts/' + this.state.postToEdit._id
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
    const url = baseUrl + '/account/login'
    let loginBody = {
      username: event.target.username.value ,
      password: event.target.password.value
    }
    try{
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })
      if(response.status === 200){
        this.getPosts()
        
        this.setState({
          loggedIn: true,
          loginShow: false,
          registerShow: false,
          usersName: event.target.username.value
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
    const url = baseUrl + '/account/register'
    
    if(event.target.password.value !== event.target.confirmPassword.value){
      alert('Passwords Do Not Match!')
    } else{
      try{
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(response.status === 401){
          alert('User Already Exists!')
        }else if(response.status === 201){
          this.loggedInUser(event)

          this.setState({
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
    const url = baseUrl + '/account/logout'

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
        usersname: ''
      })
    }
  }

  showLogin = (entry) =>{
    this.setState({
      loginShow: !this.state.loginShow,
      registerShow: false
    })
  }

  showRegister = (entry) => {
    this.setState({
      loginShow: false,
      registerShow: !this.state.registerShow
    })
  }

  render(){
    return(
      <div>

        <NavBar loggedIn={this.state.loggedIn} loggedInUser={this.loggedInUser} logOut={this.logOut} register={this.register} loginShow={this.loginShow} loginShow={this.state.loginShow} showRegister={this.showRegister} registerShow={this.state.registerShow} usersName={this.state.usersName}/>

        <Body />

        <UserRegister />

        <Footer />


      </div>
    )
  }
}
export default App 