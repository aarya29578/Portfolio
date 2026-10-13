import { motion, useReducedMotion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="editorial-section">
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Featured Portfolio"
          title="Featured"
          italicWord="Projects"
          titleEnd="& Systems"
          description="The core focus of my work: government document platforms, responsive e-commerce storefronts, and cross-platform mobile architectures engineered with modern production stacks."
          split={true}
        />

        {/* Project Case Cards Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
