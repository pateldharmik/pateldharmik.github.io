import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './Hero.css';
import resumeData from '../data/resume.json';

const Hero = () => {
    const { personalInfo } = resumeData;
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const roles = [personalInfo.role, "Full Stack Developer", "Java Expert", "Cloud Enthusiast"];

        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, personalInfo.role, typingSpeed]);

    return (
        <section id="main-content" className="hero container">
            <ParticleBackground />
            <div className="hero-content">
                <p className="hero-intro">Hi, my name is</p>
                <h1 className="hero-name">{personalInfo.name}</h1>
                <h2 className="hero-title">
                    I am a <span className="typing-text" aria-live="polite" aria-atomic="true">{text}</span>
                    <span className="cursor" aria-hidden="true">|</span>
                </h2>
                <p className="hero-desc">
                    Based in {personalInfo.location}. I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>
                <div className="hero-btn">
                    <a href="#contact" className="btn-primary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
