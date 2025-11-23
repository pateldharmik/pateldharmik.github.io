
import { motion } from 'framer-motion';
import './About.css';
import resumeData from '../data/resume.json';

const About = () => {
    const { personalInfo, skills } = resumeData;
    const summaryParagraphs = personalInfo.summary.split('\n\n');

    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title"><span>01.</span> About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        {summaryParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className="skills-list">
                            {skills.Languages.slice(0, 4).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                            {skills.Frameworks.slice(0, 4).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-img">
                        <div className="img-wrapper">
                            {/* Placeholder for profile image if user adds one later */}
                            <div className="img-placeholder">DP</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
