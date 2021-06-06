import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button'


export default class PostEntry extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(this.props.baseUrl + '/', {
            method: 'POST',
            body: JSON.stringify({
                activity: this.state.activity,
                location: this.state.location,
                about: this.state.about,
                date: this.state.date
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.props.addBlogPost(data.data)
            this.props.onClose()
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
        return(
            <div>
                
            </div>
        )
    }

}