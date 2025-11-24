import { motion } from 'framer-motion';
import './SkillsExpertise.css';
import resumeData from '../data/resume.json';

const SkillsExpertise = () => {
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

    // Core technologies - pulled from resume data (most important ones)
    const coreTech = [
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
        <section id="skills-expertise" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title"><span>02.</span> Skills & Expertise</h2>

                {/* Core Technologies Section */}
                <div className="core-tech-section">
                    <h3 className="subsection-title">Core Technologies</h3>
                    <p className="subsection-intro">
                        Technologies and tools I work with regularly
                    </p>
                    <motion.div
                        className="tech-grid"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {coreTech.map((tech, index) => (
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
                </div>

                {/* All Skills Section */}
                <div className="all-skills-section">
                    <h3 className="subsection-title">Complete Skill Set</h3>
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
                                <h4>{category}</h4>
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
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsExpertise;
