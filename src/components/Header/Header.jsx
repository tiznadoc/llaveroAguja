import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import SocialMediaLinks from '../SocialMediaLinks';

function Header() {
    return (
        <header>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="#home">
                    <img
                        className="brand-image"
                        src={require(`../images/nobg-logosiosi2.png`)}
                        alt="Llavero Aguja logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between">
                    <Nav className="ml-auto">
                        <Nav.Link className="header-links" href="#home">Home</Nav.Link>
                        <Nav.Link className="header-links" href="#about">About</Nav.Link>
                        <Nav.Link className="header-links" href="#catalog">Catalog</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <SocialMediaLinks />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;