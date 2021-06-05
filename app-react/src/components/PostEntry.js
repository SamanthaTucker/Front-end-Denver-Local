import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'

export default class PostEntry extends Component {
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

    handleChange(event){
        console.log(event.target.value)

        this.setState({
            [event.target.activity]: event.target.value,
            [event.target.location]: event.target.value,
            [event.target.about]: event.target.value,
            [event.target.date]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()

        fetch(this.props.baseUrl + '/post/new', {
            method: 'POST',
            body: JSON.stringify({
                activity: this.state.activity,
                location: this.state.location,
                about: this.state.about,
                date: this.state.date,
                modalOpenNew: this.state.modalOpenNew
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            this.props.addPost(data)
            this.setState({
                activity: '',
                location: '',
                about: '',
                date: ''
            })
        }).catch(error => console.log({'error: ': error}))
    }



    render() {
        console.log(this.state)
        return(
            <div>

                <form className='new-post-form' onSubmit={ (event)=> this.handleSubmit(event)}>
                    <label htmlFor='activity'>Activity: </label>
                    <input type='text' id='activity' name='activity' placeholder='Activity...' onChange={(event)=> this.handleChange(event)}></input>

                    <label htmlFor='location'>Location: </label>
                    <input type='text' id='location' name='location' placeholder='Location...' onChange={(event)=> this.handleChange(event)}></input>

                    <label htmlFor='about'>About: </label>
                    <input type='text' id='about' name='about' placeholder='Write about your experience!' onChange={(event)=> this.handleChange(event)}></input>

                    <label htmlFor='date'>Date: </label>
                    <input type='text' id='date' name='date' placeholder='When did you go?'></input>

                    <Button variant="outline-secondary" type='submit'> Create Post!</Button>

                </form>
                
                <Button onClick={this.props.onClose}>Close</Button>
            </div>
        )
    }
}