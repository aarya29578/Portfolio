import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, Sparkles, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';
import MobileProjectCard from '../components/MobileProjectCard';

export default function ProjectsPage({ onBackHome }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
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
        minHeight: '85vh',
      }}
    >
      <div className="editorial-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back to Home Action Button */}
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

          {/* Editorial Header Block */}
          <div style={{ maxWidth: '840px', marginBottom: 'clamp(3rem, 6vw, 4.75rem)' }}>
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '0.85rem',
              }}
            >
              <span className="eyebrow">PORTFOLIO / SELECTED WORK</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-subtle)',
                  backgroundColor: 'var(--bg-stone-subtle)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-hairline)',
                }}
              >
                <Smartphone size={11} color="var(--accent-terracotta)" />
                <span>Production Mobile Applications</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="headline-hero"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                lineHeight: 1.1,
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
                color: 'var(--text-ink)',
              }}
            >
              Featured Mobile Applications.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="editorial-lead"
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.68,
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: '720px',
              }}
            >
              Production mobile products engineered with Flutter, Dart, and cloud architectures — 
              built for real citizen services and cultural contemplation, available on the Google Play Store.
            </motion.p>
          </div>

          {/* Projects Showcases Section */}
          {projects.length > 0 ? (
            <div className="projects-showcase-list">
              {projects.map((project, index) => (
                <MobileProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
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
                Selected production web applications and cross-platform mobile apps are currently being curated for display.
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

          {/* Bottom Return to Home Navigation Bar */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-light)',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  color: 'var(--text-ink)',
                  margin: '0 0 0.25rem 0',
                }}
              >
                Interested in working together?
              </p>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                Explore skills, background, or get in touch on the homepage.
              </p>
            </div>

            <button
              type="button"
              onClick={onBackHome}
              className="btn btn-secondary"
              style={{
                fontSize: '0.88rem',
                padding: '0.65rem 1.45rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              aria-label="Return to portfolio home page"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
