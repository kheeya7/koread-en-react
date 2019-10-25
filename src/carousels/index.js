import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

export default class CarouselsView extends React.PureComponent {

    render() {
        return (
            <Container>
                <Carousel className="col-7">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/1013/525/480"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/325/525/480"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/1027/525/480"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </Container>
        )
    }
}