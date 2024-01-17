import { faWhatsapp, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Function to display social media links
const SocialMediaLinks = () => {
    // Array containing the social media links
    const socialMediaLinks = [
        { icon: faWhatsapp, color: '#25D366', link: 'https://wa.me/56952116072' },
        { icon: faInstagram, color: '#E1306C', link: 'https://www.instagram.com/llavero.aguja/' },
        { icon: faTwitter, color: '#1DA1F2', link: 'https://twitter.com' },
        { icon: faTiktok, color: '#69C9D0', link: 'https://tiktok.com' },
    ];

    // Return the social media links array
    return socialMediaLinks;
}

export default SocialMediaLinks;
