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
                    src="https://images.unsplash.com/photo-1620248742445-ce3a0de4b2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80"
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
                    src="https://images.unsplash.com/photo-1616474632177-aefa7a4fbb1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img id='carousel-img'
                    className="d-block w-100"
                    src="https://c0.wallpaperflare.com/preview/634/741/263/breckenridge-brewery-16th-street-mall-downtown-denver-colorado-astronaut-paramount-cafe.jpg"
                    alt="Third slide"
                    width='100%'
                    height='90%'
                    />
                </Carousel.Item>
               <Carousel.Item>
                   <img id='carousel-img'
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1611851120517-0c7351a027c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
                        <h1>Discover the Mile High City</h1>
                        <p>Recommend a denver local resturant, bar, shop, anything you want!</p>
                    </Container>
                </Jumbotron>
            </>   
        )
    }
}