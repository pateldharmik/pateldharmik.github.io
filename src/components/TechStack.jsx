import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';
import resumeData from '../data/resume.json';

const TechStack = () => {
    const { skills } = resumeData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Featured tech stack - most important technologies
    const featuredTech = [
        { name: 'Java', category: 'Language' },
        { name: 'Spring Boot', category: 'Framework' },
        { name: 'React', category: 'Frontend' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Kubernetes', category: 'DevOps' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Jenkins', category: 'CI/CD' },
        { name: 'Microservices', category: 'Architecture' },
        { name: 'REST APIs', category: 'Backend' },
        { name: 'Git', category: 'Version Control' },
        { name: 'JUnit', category: 'Testing' }
    ];

    return (
        <section id="tech-stack" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title"><span>02.</span> Tech Stack</h2>
                <p className="tech-stack-intro">
                    Technologies and tools I work with regularly
                </p>
                <motion.div
                    className="tech-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {featuredTech.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="tech-card"
                            variants={item}
                            whileHover={{ y: -5 }}
                        >
                            <div className="tech-name">{tech.name}</div>
                            <div className="tech-category">{tech.category}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TechStack;
