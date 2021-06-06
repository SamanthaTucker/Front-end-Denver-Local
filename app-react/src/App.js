import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import PostEntry from './components/PostEntry'
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

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      blogPosts: [],
      blogToEdit: {},
    }
  }

  getBlogPosts = () => {
    fetch(baseUrl + '/blog', {
      // credentials: 'include'
    })
    .then(res => {
      if(res.status === 200 || res.status === 201){
        return res.json()
      }
      else{
        return []
      }
    })
    .then(data => {
      this.setState({
        blogPosts: data
      })
    })
  }

  addBlogPost = (newPost) => {
    const copyPosts = [...this.state.blogPosts]
    copyPosts.push(newPost)
    this.setState({
      blogPosts: copyPosts
    })
    // this.getBlogPosts()
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const url = baseUrl + '/blog/' + this.state.blogToEdit.id 
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        activity: event.target.activity.value,
        location: event.target.location.value, 
        about: event.target.about.value, 
        date: event.target.date.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'include'
    })
    if(response.status === 200){
      const updatedPost = await response.json()
      const findIndex = this.state.blogPosts.findIndex(blog => blog.id === updatedPost.data.id)
      const copyPosts = [...this.state.blogPosts]
      copyPosts[findIndex] = updatedPost.data
      this.setState({
        blogPosts: copyPosts
      })
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  deleteBlogPost = async (id) => {
    const url = baseUrl + '/blog/' + id
    const response = await fetch(url, {
      method: 'DELETE'
    })
    const index = this.state.blogPosts.findIndex(blog => blog.id === id)
    const copyPosts = [...this.state.blogPosts]
    copyPosts.splice(index, 1)

    this.setState({
      blogPosts: copyPosts
    })
  }

  componentDidMount(){
    this.getBlogPosts()
  }

  // showEditForm = (entry) => {
  //   this.setState({
  //     editFormOpen: !this.state.editFormOpen,
  //     activity: entry.activity,
  //     location: entry.location,
  //     about: entry.about,
  //     date: entry.date,
  //     blogToEdit: entry
  //   })
  // }

  // onClose = e => {
  //   this.setState({
  //     editFormOpen: false,
  //     newPostShow: false
  //   })
  // }

  userLogin = async(event) => {
    event.preventDefault()
    const url = baseUrl + '/user/login'
    const loginBody = {
      username: event.target.username.value,
      password: event.target.username.value
    }
    try{
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        // credentials: 'include'
      })
      .then(response => {
        if(response.status === 200){
          return response.json()
        }
        else{
          return []
        }
      })
      .then(data => {
        this.setState({
          loggedIn: true,
          landingPageShow: false,
          loginFormShow: false,
          registerFormShow: false,
          username: event.target.username
        })
      })
      this.getBlogPosts()
    }
    catch(error){
      console.log('Error: ', error)
    }
  }

  userRegister = async(event) => {
    event.preventDefault()
    const url = baseUrl + '/user/register'
    try{
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.status === 400){
        console.log('Username already taken!')
      }
      else if(response.status === 200){
        this.userLogin(event)
        this.setState({
          landingPageShow: false,
          loginFormShow: false,
          registerFormShow: false
        })
      }
    }
    catch(error){
      console.log('Error: ', error)
    }
  }

  logoutUser = async(event) => {
    event.preventDefault()
    fetch(baseUrl + '/user/logout', {
      // credentials: 'include'
    })
    .then(res => {
      if(res.status === 200){
        return res.json()
      }
      else{
        return []
      }
    })
    .then(data => {
      this.setState({
        loggedIn: false,
        landingPageShow: true
      })
    })
  }

  // showLoginForm = (entry) => {
  //   this.setState({
  //     loginFormShow: !this.state.loginFormShow,
  //     registerFormShow: false
  //   })
  // }

  // showRegisterForm = (entry) => {
  //   this.setState({
  //     loginFormShow: false,
  //     registerFormShow: !this.state.registerFormShow
  //   })
  // }

  // showNewForm = (entry) => {
  //   this.setState({
  //     newPostShow: true
  //   })
  // }

  render(){
    return(
      <div>
        <NavBar />
        <MainBody />
        <PostEntry baseUrl={baseUrl} addBlogPost={this.addBlogPost} />
        {this.state.blogPosts.map(blog => {
          return(
            <Card key={blog.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{blog.activity}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{blog.location}</Card.Subtitle>
                <Card.Text>
                  {blog.about}
                </Card.Text>
                <Card.Text>{blog.date}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    )
  }
}


// api = GET /v3/users/me HTTP 1.1 Host: www.eventbriteapi.com Authorization: Bearer DJHZD52IIBIHAMRTWY6P

// base url https://www.eventbriteapi.com/v3
// https://www.eventbriteapi.com/v3/users/me/?token=DJHZD52IIBIHAMRTWY6P