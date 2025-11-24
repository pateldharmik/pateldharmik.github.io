import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import './About.css';
import resumeData from '../data/resume.json';

const About = () => {
    const { skills } = resumeData;

    // Flatten all skills from the categorized object
    const allSkills = Object.values(skills).flat();

    const focusAreas = [
        {
            title: 'Full Stack Development',
            icon: <FaCode />,
            description: 'Building end-to-end web applications with modern frameworks and best practices'
        },
        {
            title: 'Cloud & DevOps',
            icon: <FaServer />,
            description: 'Designing scalable microservices and automating deployment pipelines'
        },
        {
            title: 'Problem Solving',
            icon: <FaTools />,
            description: 'Optimizing performance, ensuring security, and delivering reliable solutions'
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
                            When I'm not coding, you'll find me exploring new technologies and
                            sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div className="about-skills">
                        {focusAreas.map((area, index) => (
                            <div key={index} className="skill-category glass-panel glass-panel-hover">
                                <h3>
                                    {area.icon}
                                    {area.title}
                                </h3>
                                <p className="focus-description">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default About;
