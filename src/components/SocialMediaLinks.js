import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faWhatsapp, faInstagram,  faTiktok } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLink = ({ icon, color, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <Button className="social-media-header-icons" style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} style={{ color: 'white', height: '1.8em' }} />
        </Button>
    </a>
);

const SocialMediaLinks = () => {
    // Array containing the social media links
    const socialMediaLinks = [
        { icon: faWhatsapp, color: '#25D366', link: 'https://wa.me/56952116072' },
        { icon: faInstagram, color: '#E1306C', link: 'https://www.instagram.com/llavero.aguja/' },
        { icon: faTiktok, color: '#69C9D0', link: 'https://www.tiktok.com/@llaveroaguja' },
    ];

    return (
        <>
            {socialMediaLinks.map((media, index) => (
                <SocialMediaLink key={index} {...media} />
            ))}
        </>
    );
};

export default SocialMediaLinks;
