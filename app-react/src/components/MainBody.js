import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class MainBody extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1524429656589-6633a470097c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1586740070162-41777c99457f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media.gettyimages.com/photos/the-overlook-view-at-garden-of-the-gods-picture-id600968276?k=6&m=600968276&s=612x612&w=0&h=yG7DDwe7JaoAgUg-y2lJ5_5xf9FiDn4fpLk0KxJ5wwg="
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img id='carousel-img'
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    alt="Third slide"
                    width='100%'
                    height='90%'
                    />
                </Carousel.Item>
               <Carousel.Item>
                   <img id='carousel-img'
                    className="d-block w-100"
                    src="https://media.gettyimages.com/photos/town-of-cripple-creek-picture-id586104402?k=6&m=586104402&s=612x612&w=0&h=Ob-COo66kDWS0fuoVJWNop9Re1BktbESj-Y-cAXX6Zo="
                    alt="Third slide"
                    width='100%'
                    height='90%'
                    />
                </Carousel.Item>
                <Carousel.Item>
                   <img id='carousel-img'
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1508645255802-d7de28c18481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Third slide"
                    width='100%'
                    height='90%'
                    />
                </Carousel.Item>
                </Carousel>

                <Jumbotron fluid>
                    <Container>
                        <h1>Discover Colorful Colorado</h1>
                        <p>Create memories and post all about your unique adventures</p>
                    </Container>
                </Jumbotron>
            </>   
        )
    }
}