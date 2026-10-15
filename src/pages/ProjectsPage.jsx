import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { GithubIcon } from '../components/Icons';

export default function ProjectsPage({ onBackHome }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div
      className="projects-page-root"
      style={{
        paddingTop: 'clamp(7rem, 12vw, 10.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        minHeight: '75vh',
      }}
    >
      <div className="editorial-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back to Home Action */}
          <motion.div variants={itemVariants} style={{ marginBottom: '2.25rem' }}>
            <button
              type="button"
              onClick={onBackHome}
              className="btn-link-editorial"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-terracotta)',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                padding: '0.4rem 0',
              }}
              aria-label="Back to Home"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
          </motion.div>

          {/* Header Block */}
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <motion.div variants={itemVariants}>
              <span className="eyebrow" style={{ marginBottom: '0.85rem' }}>
                PORTFOLIO / SELECTED WORK
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="headline-hero"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: 1.1,
                marginTop: '0.65rem',
                marginBottom: '1.25rem',
                color: 'var(--text-ink)',
              }}
            >
              Things I've built.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="editorial-lead"
              style={{
                fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              Web applications, mobile experiences, and digital solutions — all in one place.
            </motion.p>
          </div>

          {/* Projects Content: Grid if populated, else clean Empty State */}
          {projects.length > 0 ? (
            <motion.div
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-subtle)',
                    gap: '1.25rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: 'var(--text-ink)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: 'var(--accent-terracotta)',
                          marginBottom: '0.85rem',
                        }}
                      >
                        {project.subtitle}
                      </div>
                    )}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {project.technologies && project.technologies.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <span key={tech} className="editorial-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.links && (
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--border-hairline)',
                      }}
                    >
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-secondary"
                          style={{
                            fontSize: '0.82rem',
                            padding: '0.45rem 1rem',
                          }}
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-primary"
                          style={{
                            fontSize: '0.82rem',
                            padding: '0.45rem 1rem',
                          }}
                        >
                          <ExternalLink size={14} />
                          <span>Live Preview</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px dashed var(--border-medium)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(3rem, 6vw, 4.5rem) 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                maxWidth: '680px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-terracotta-subtle)',
                  border: '1px solid var(--accent-terracotta-border)',
                  color: 'var(--accent-terracotta)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={24} />
              </div>

              <h2
                className="headline-card"
                style={{
                  fontSize: 'clamp(1.45rem, 2.4vw, 1.85rem)',
                  color: 'var(--text-ink)',
                  margin: 0,
                }}
              >
                Projects are being organised. Check back soon.
              </h2>

              <p
                style={{
                  maxWidth: '520px',
                  fontSize: '0.96rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  margin: '0 0 0.5rem 0',
                }}
              >
                Selected production web applications, cross-platform mobile apps, and technical case studies are currently being curated for display.
              </p>

              <button
                type="button"
                onClick={onBackHome}
                className="btn btn-secondary"
                style={{ fontSize: '0.875rem', padding: '0.65rem 1.45rem' }}
              >
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
