
import { motion } from 'framer-motion';
import './TechStack.css';


const TechStack = () => {
    // const { skills } = resumeData; // skills not used here

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

    // Featured tech stack - highlighting architecture & methodologies (non-duplicate with Skills section)
    const featuredTech = [
        { name: 'Microservices Architecture', category: 'Architecture' },
        { name: 'Event-Driven Design', category: 'Architecture' },
        { name: 'RESTful API Design', category: 'Backend' },
        { name: 'CI/CD Pipelines', category: 'DevOps' },
        { name: 'Containerization', category: 'DevOps' },
        { name: 'Cloud Infrastructure', category: 'Cloud' },
        { name: 'Agile/Scrum', category: 'Methodology' },
        { name: 'Test-Driven Development', category: 'Practice' },
        { name: 'Database Optimization', category: 'Performance' },
        { name: 'Security & RBAC', category: 'Security' },
        { name: 'Distributed Systems', category: 'Architecture' },
        { name: 'API Gateway Pattern', category: 'Architecture' }
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
