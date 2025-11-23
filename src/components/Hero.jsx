import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import resumeData from '../data/resume.json';

const Hero = () => {
    const { personalInfo } = resumeData;
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const heroRef = useRef(null);

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

    // Mouse tracking for gradient orb effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                heroRef.current.style.setProperty('--mouse-x', `${x}px`);
                heroRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section className="hero container" ref={heroRef} style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}>
            <div className="hero-content">
                <p className="hero-intro">Hi, my name is</p>
                <h1 className="hero-name">{personalInfo.name}</h1>
                <h2 className="hero-title">
                    <span className="typing-text">{text}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="hero-desc">
                    {personalInfo.summary}
                </p>
                <div className="hero-btn">
                    <a href="#contact" className="btn-primary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
