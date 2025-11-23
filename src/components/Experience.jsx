import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import resumeData from '../data/resume.json';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <section id="experience" className="section experience">
            <h2 className="section-title"><span>03.</span> Where I've Worked</h2>
            <div className="experience-list">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        className="experience-card glass-panel"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="experience-header">
                            <h3 className="experience-role">{job.role}</h3>
                            <div className="experience-company-info">
                                <span className="experience-company">@ {job.company}</span>
                                {job.client && <span className="experience-client">for {job.client}</span>}
                            </div>
                        </div>
                        <div className="experience-meta">
                            <span className="experience-date">{job.period}</span>
                            <span className="experience-location">{job.location}</span>
                        </div>
                        <ul className="experience-details">
                            {job.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
