import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import resumeData from '../data/resume.json';

const Contact = () => {
    const { personalInfo } = resumeData;

    return (
        <section id="contact" className="section container contact-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="contact-content"
            >
                <p className="contact-overline">05. What's Next?</p>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-desc">
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href={`mailto:${personalInfo.email}`} className="btn-primary contact-btn">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
