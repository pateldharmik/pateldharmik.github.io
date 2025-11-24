import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import './About.css';
import resumeData from '../data/resume.json';

const About = () => {
    const { skills } = resumeData;

    // Flatten all skills from the categorized object
    const allSkills = Object.values(skills).flat();

    const skillCategories = [
        {
            title: 'Frontend',
            icon: <FaCode />,
            skills: allSkills.filter(skill =>
                ['React', 'JavaScript', 'HTML', 'CSS', 'HTML5', 'CSS3', 'jQuery'].includes(skill)
            )
        },
        {
            title: 'Backend',
            icon: <FaServer />,
            skills: allSkills.filter(skill =>
                ['Java', 'Spring', 'Spring Boot', 'Node.js', 'Python', 'REST APIs', 'Microservices', 'Hibernate'].includes(skill)
            )
        },
        {
            title: 'Tools & Technologies',
            icon: <FaTools />,
            skills: allSkills.filter(skill =>
                ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MySQL', 'Jenkins', 'Kubernetes', 'Maven'].includes(skill)
            )
        }
    ];

    return (
        <section id="about" className="about container">
            <ScrollReveal>
                <div className="about-content">
                    <div className="about-text">
                        <h2>
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p>
                            I'm a passionate Full Stack Developer with expertise in building modern web applications.
                            I love turning complex problems into simple, beautiful, and intuitive solutions.
                        </p>
                        <p>
                            With a strong foundation in both frontend and backend technologies, I create
                            seamless user experiences backed by robust, scalable architectures.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div className="about-skills">
                        {skillCategories.map((category, index) => (
                            category.skills.length > 0 && (
                                <div key={index} className="skill-category glass-panel glass-panel-hover">
                                    <h3>
                                        {category.icon}
                                        {category.title}
                                    </h3>
                                    <div className="skill-tags">
                                        {category.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default About;
