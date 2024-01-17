import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import SocialMediaLinks from '../SocialMediaLinks';

function Header() {
    const socialMediaLinks = SocialMediaLinks();

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
                        {socialMediaLinks.map((media, index) => (
                            <a href={media.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <Button className="social-media-header-icons" style={{ backgroundColor: media.color }}>
                                    <FontAwesomeIcon icon={media.icon} style={{ color: 'white', height: '1.8em' }} />
                                </Button>
                            </a>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
