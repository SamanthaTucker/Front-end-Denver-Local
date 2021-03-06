import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'


export default class PostEntry extends Component{
    constructor(props){
        super(props)
        this.state = {
            activity: '',
            location: '',
            about: '',
            date: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(this.props.baseUrl + '/blog', {
            method: 'POST',
            body: JSON.stringify({
                activity: this.state.activity,
                location: this.state.location,
                about: this.state.about,
                date: this.state.date
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.props.addBlogPost(data)
            this.setState({
                activity: '',
                location: '',
                about: '',
                date: ''
            })
        })
        .catch(error=> console.log({'Error': error}))
    }

    render(){
        console.log(this.state)
        return(
            <div className='postEntry-div'>
                <form onSubmit={(event)=> this.handleSubmit(event)}>

                    <label className='postEntry-label' htmlFor='activity'>Place: </label>
                    <input className='postEntry-input' type='text' id='activity' name='activity' onChange={(event)=> this.handleChange(event)} value={this.state.activity}></input>

                    <label className='postEntry-label' htmlForm='location'>Location: </label>
                    <input className='postEntry-input' type='text' id='location' name='location' onChange={(event)=> this.handleChange(event)} value={this.state.location}></input>

                    <label className='postEntry-label' htmlForm='about'>About: </label>
                    <input className='postEntry-input' type='text' id='about' name='about' onChange={(event)=> this.handleChange(event)} value={this.state.about}></input>

                    <label className='postEntry-label' htmlFor='date'>Date: </label>
                    <input className='postEntry-input' type='text' id='date' name='date' onChange={(event)=> this.handleChange(event)} value={this.state.date}></input>

                    <Button className='submit-btn' variant="outline-info" type='submit' id='submit' name='submit'>Submit</Button>{' '}

                </form>
            </div>
        )
    }

}