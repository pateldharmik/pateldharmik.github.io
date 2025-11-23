import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import resumeData from '../data/resume.json';

const Skills = () => {
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

    return (
        <section id="skills" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title"><span>04.</span> Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={index}
                            className="skill-category glass-panel"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h3>{category}</h3>
                            <ul>
                                {items.map((skill, i) => (
                                    <motion.li key={i} variants={item}>
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
