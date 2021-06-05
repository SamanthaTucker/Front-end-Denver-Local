import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import PostEntry from './components/PostEntry'
import PostEdit from './components/PostEdit'
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

import './App.css'

console.log(process.env.NODE_ENV)
let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:3003'
}else{
  baseUrl = 'heroku link here ---'
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }



}





// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       postEntries: [],
//       postToEdit: {},
//       modalOpen: false,
//       modalOpenNew: false,
//       activity: '',
//       location: '',
//       about: '',
//       date: '',
//       loginShow: false,
//       loggedIn: false,
//       registerShow: false,
//       showBodyPage: true,
//       usersName: ''
//     }
//   }

//   //Fetch to Backend
//   getPosts = ()=>{
//     fetch(baseUrl + '/post', {
//       credentials: "include"
//     })
//     .then(res => {
//       if(res.status === 200 || res.status === 201){
//         return res.json()
//       }else{
//         return []
//       }
//     })
//     .then(data => {
//       this.setState({
//         postEntries: data
//       })
//     })
//   }

//   // Create new post
//   addPost = (newPost) => {
//     const copyPosts = [...this.state.postEntries]
//     copyPosts.push(newPost)
//     this.setState({
//       postEntries: copyPosts
//     })
//   }

//   componentDidMount(){
//     this.getPosts()
//   }

//   handleChange = (event) =>{
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   //Delete Post
//   deletePost = async(id) =>{
//     const url = baseUrl + '/post/' + id

//     try{
//       const response = await fetch(url, {method: "DELETE"})
//       const index = this.state.postEntries.findIndex(post => post._id === id)
//       const copyPosts = [...this.state.postEntries]
//       copyPosts.splice(index, 1)

//       this.setState({
//         postEntries: copyPosts
//       })
//     }
//     catch(error){
//       console.log('Error: ', error)
//     }
//   }

//   handleSubmit = async (event) =>{
//     event.preventDefault()

//     const url = baseUrl + '/post/' + this.state.postToEdit._id
//     const response = await fetch(url, {
//       method: 'PUT',
//       body: JSON.stringify({
//         activity: event.target.activity.value,
//         location: event.target.location.value,
//         about: event.target.about.value,
//         date: event.target.date.value
//       }),
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       credentials: 'include'
//     })
//     if(response.status === 200){
//       const updatedPost = await response.json()
//       const findIndex = this.state.postEntries.
//       findindex(entry => entry._id === updatedPost.data._id)
//       const copyPosts = [...this.state.postEntries]
//       copyPosts[findIndex] = updatedPost.data 

//       this.setState({
//         postEntries: copyPosts,
//         modalOpen: false,
//         modalOpenNew: false
//       })
//     }
//   }

//   //EDIT
//   showEditForm = (entry) => {
//     this.setState({
//       modalOpen: true,
//       modalOpenNew: false,
//       activity: entry.activity,
//       location: entry.location,
//       about: entry.about,
//       date: entry.about,
//       postToEdit: entry
//     })
//   }

//   //NEW
//   showNewForm = (entry) => {
//     this.setState({
//       modalOpen: false,
//       modalOpenNew: !this.state.modalOpenNew,
//       activity: '',
//       location: '',
//       about: '',
//       date: ''
//     })
//   }

//   onClose = e => {
//     this.setState({
//       modalOpenNew: false
//     })
//   }

//   loggingUser = async(e) => {
//     e.preventDefault()
//     const url = baseUrl + '/user/login'

//     const loginBody = {
//         username: e.target.username.value,
//         password: e.target.password.value
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
//             this.getPosts()
//             this.setState({
//                 loggedIn: true,
//                 showBodyPage: false,
//                 loginShow: false,
//                 registerShow: false,
//                 usersName: e.target.username.value
//               })
//         }
//     }catch(error){
//         console.log('Error => ', error)
//     }
// }

// register = async (e) => {
//   e.preventDefault()
//   const url = baseUrl + '/user/register'
//   console.log('register function', e.target.password.value, e.target.confirmPassword.value)

//   if (e.target.password.value !== e.target.confirmPassword.value){
//     alert('passwords do not match')
//     } 
//   else {
//     try {
//       console.log('before request')
//       const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//           username: e.target.username.value,
//           password: e.target.password.value,
//           confirmPassword: e.target.confirmPassword.value
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       console.log('after request')
//       if (response.status === 401) {
//           console.log('user already exists')
//           alert("User Already Exists")
//       }
//      else if (response.status === 201) {
//         console.log('register hit')

//       this.loggingUser(e)
//       this.setState({
//         showLanding: false,
//         loginShow: false,
//         signupShow: false
//       })
//     } 
//   } catch(error) {
//     console.log(error)
//   }
// }
// }

//   logOut = async (e) => {
//     e.preventDefault()
//     const url = baseUrl + '/user/logout'

//     const response = await fetch(url, {
//       method: 'DELETE',
//       body: JSON.stringify({
//         username: '',
//         password: ''
//       }),
//       headers: {
//         'Content-Type': 'applicaiton/json'
//       }
//     })
//     if(response.status === 200) {
//       this.setState({
//         loggedIn: false,
//         showLanding: true,
//         usersName: ''
//       })
//     }
//   }

//   showLogin = (entry) => {
//     this.setState({
//       loginShow: !this.state.loginShow,
//       registerShow: false
//     })
//   }

//   showRegister = (entry) => {
//     this.setState({
//       loginShow: false,
//       registerShow: !this.state.registerShow
//     })
//   }

//   render(){
//     console.log(this.state)
//     return(
//       <div>

//         <NavBar loggedIn={this.state.loggedIn} loggingUser={this.loggingUser} logOut={this.logOut} register={this.register} showLogin={this.showLogin} loginShow={this.state.loginShow} showRegister={this.showRegister} registerShow={this.state.registerShow} usersName={this.state.usersName}/>

//         {this.state.showBodyPage &&
//         <div className='body-div'>
//           <Carousel>
//           <Carousel.Item>
//               <img id='carousel-img'
//               className="d-block w-100"
//               src="https://images.unsplash.com/photo-1524429656589-6633a470097c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
//               alt="First slide"
//               width='100%'
//               height='90%'
//               />
//               <Carousel.Caption>
//               <h3>Find an Adventure In Colorado</h3>
//               </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//               <img id='carousel-img'
//               className="d-block w-100"
//               src="https://images.unsplash.com/photo-1586740070162-41777c99457f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
//               alt="First slide"
//               width='100%'
//               height='90%'
//               />
//           </Carousel.Item>
//           <Carousel.Item>
//               <img id='carousel-img'
//               className="d-block w-100"
//               src="https://media.gettyimages.com/photos/the-overlook-view-at-garden-of-the-gods-picture-id600968276?k=6&m=600968276&s=612x612&w=0&h=yG7DDwe7JaoAgUg-y2lJ5_5xf9FiDn4fpLk0KxJ5wwg="
//               alt="Second slide"
//               width='100%'
//               height='90%'
//               />
//           </Carousel.Item>
//           <Carousel.Item>
//               <img id='carousel-img'
//               className="d-block w-100"
//               src="https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
//               alt="Third slide"
//               width='100%'
//               height='90%'
//               />
//           </Carousel.Item>
//           <Carousel.Item>
//               <img id='carousel-img'
//               className="d-block w-100"
//               src="https://media.gettyimages.com/photos/town-of-cripple-creek-picture-id586104402?k=6&m=586104402&s=612x612&w=0&h=Ob-COo66kDWS0fuoVJWNop9Re1BktbESj-Y-cAXX6Zo="
//               alt="Third slide"
//               width='100%'
//               height='90%'
//               />
//           </Carousel.Item>
//           </Carousel>

//       </div>
//         }

//           {this.state.loggedIn && 
//             <div className='loggedIn-div'>
//               <Button className='addPost-btn' variant="outline-secondary" type='submit'> Create Event Post</Button>
//                 {this.state.modalOpenNew && 
//                   <PostEntry baseUrl={baseUrl} addPost={this.addPost} onClose={this.onClose} />
//                 }

//                 <div className='event-cards'>
//                   {this.state.postEntries.map(entry => {

//                     return(
//                       <Card style={{ width: '18rem' }} key={entry._id}>
//                       <Card.Img variant="top" src="holder.js/100px180" />
//                       <Card.Body>

//                         <Card.Title>{entry.activity}</Card.Title>

//                         <Card.Text>Location: {entry.location}</Card.Text>

//                         <Card.Text>About: {entry.about}</Card.Text>

//                         <Card.Text>{entry.date}</Card.Text>

//                         <Button variant="primary" className='edit-btn' onClick={()=>this.showEditForm(entry)}>Edit</Button>

//                         <Button variant="primary" className='delete-btn' onClick={()=>this.deletePost(entry._id)}>Delete</Button>

//                       </Card.Body>
//                     </Card>
//                     )
//                   })}
//                 </div>

//             </div>
//           }

//           {this.state.modalOpen && 
//             <div className='edit-form'>
//               <form onSubmit={this.handleSubmit}>

//                 <label>Event: </label>
//                 <input name='activity' value={this.state.activity} onChange={this.handleChange}></input>

//                 <label>Location: </label>
//                 <input name='location' value={this.state.location} onChange={this.handleChange}></input>

//                 <label>About: </label>
//                 <input name='about' value={this.state.about} onChange={this.handleChange}></input>

//                 <label>Date: </label>
//                 <input name='date' value={this.state.date} onChange={this.handleChange}></input>

//                 <input type='submit' value='Submit Change'></input>
//               </form>

//             </div>
//           }
  
//         <Footer />


//       </div>
//     )
//   }
// }
// export default App 

// api = GET /v3/users/me HTTP 1.1 Host: www.eventbriteapi.com Authorization: Bearer DJHZD52IIBIHAMRTWY6P

// base url https://www.eventbriteapi.com/v3
// https://www.eventbriteapi.com/v3/users/me/?token=DJHZD52IIBIHAMRTWY6P