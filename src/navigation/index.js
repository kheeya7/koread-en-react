import React from 'react'
import { Navbar, Form, Container, Nav, FormControl, Button } from 'react-bootstrap'

export default class NavView extends React.PureComponent {

    render() {
        return (
            <Container>
                <Navbar className="bg-light ">
                    <Navbar.Brand href="#home">Korea Depart</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#home">Rank 100</Nav.Link>
                        <Nav.Link href="#features">Event</Nav.Link>
                        <Nav.Link href="#pricing">Review</Nav.Link>
                        <Nav.Link href="#pricing">Q/A</Nav.Link>
                    </Nav>
                </Navbar>
                <Nav className="justify-content-start" activeKey="/home">
                    <Nav.Item className="col">
                        <Nav.Link eventKey="link-1">TV ON AIR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col">
                        <Nav.Link eventKey="link-2">COSMETIC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col">
                        <Nav.Link eventKey="link-3">FOOD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col">
                        <Nav.Link eventKey="link-4">STATIONARY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col">
                        <Nav.Link eventKey="link-4">CERT's FOOD</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        )
    }
}