import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";
import './header.css';


function Header(props) {
    return (
        <header>
            <Navbar expand="lg">
                <Container className="navbar">
                    <Navbar.Brand href="#home">
                        <img
                        className="brand-image"
                        src={require(`../images/nobg-logosiosi2.png`)}
                        alt="Llavero Aguja logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggle" />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;