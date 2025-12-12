import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
import resumeData from '../data/resume.json';

const Footer = () => {
    const { personalInfo } = resumeData;
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: `https://${personalInfo.linkedin}`,
            icon: <FaLinkedin />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/pateldharmik',
            icon: <FaGithub />
        },
        {
            name: 'Email',
            url: `mailto:${personalInfo.email}`,
            icon: <FaEnvelope />
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-social">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="social-link"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <div className="footer-text">
                    <p>Built by {personalInfo.name.split(' ')[0]}</p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>

            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;
