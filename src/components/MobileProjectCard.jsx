import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Badge from './Badge';
import { GooglePlayIcon } from './Icons';
import MobileAppGallery from './MobileAppGallery';

export default function MobileProjectCard({ project, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="mobile-project-case-card"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(1.75rem, 4vw, 3.5rem)',
        boxShadow: 'var(--shadow-subtle)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
      }}
    >
      {/* Background Subtle Warm Accent Glow */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-terracotta-glow) 0%, transparent 70%)',
          top: isReversed ? '-60px' : 'auto',
          bottom: isReversed ? 'auto' : '-60px',
          left: isReversed ? 'auto' : '-60px',
          right: isReversed ? '-60px' : 'auto',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      />

      <div
        className={`mobile-project-grid ${isReversed ? 'grid-reversed' : 'grid-standard'}`}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Editorial Information Column */}
        <div
          className="mobile-project-info-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.35rem',
            order: isReversed ? 2 : 1,
          }}
        >
          {/* Metadata Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--accent-terracotta)',
                  letterSpacing: '0.12em',
                }}
              >
                PROJECT {project.number}
              </span>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--border-medium)',
                }}
              />
              <span className="eyebrow-muted" style={{ fontSize: '0.72rem' }}>
                GOOGLE PLAY
              </span>
            </div>

            <span className="eyebrow-muted" style={{ fontSize: '0.72rem' }}>
              {project.category}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2
              className="headline-section"
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                lineHeight: 1.15,
                color: 'var(--text-ink)',
                margin: 0,
              }}
            >
              {project.title}
            </h2>
            {project.tagline && (
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  color: 'var(--accent-terracotta)',
                  marginTop: '0.45rem',
                  marginBottom: 0,
                  letterSpacing: '0.01em',
                }}
              >
                {project.tagline}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p
            className="editorial-lead"
            style={{
              fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
              lineHeight: 1.68,
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            {project.description}
          </p>

          {/* Key Architectural & Implementation Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div
              style={{
                backgroundColor: 'rgba(244, 239, 230, 0.45)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                padding: '1.15rem 1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  display: 'block',
                  marginBottom: '0.65rem',
                  fontWeight: 600,
                }}
              >
                Key Implementations & Features
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem',
                }}
              >
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--accent-terracotta)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                }}
              >
                Technologies & Architecture
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          )}

          {/* Primary Action Button: View on Google Play ↗ */}
          <div
            style={{
              paddingTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary btn-google-play"
              style={{
                fontSize: '0.925rem',
                padding: '0.85rem 1.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
              aria-label={`View ${project.title} on Google Play Store (opens in a new tab)`}
            >
              <GooglePlayIcon size={18} />
              <span>View on Google Play ↗</span>
            </a>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-subtle)',
              }}
            >
              Official Android Listing
            </span>
          </div>
        </div>

        {/* Visual Mockup & Screenshots Gallery Column */}
        <div
          className="mobile-project-visual-col"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: isReversed ? 1 : 2,
            width: '100%',
          }}
        >
          <MobileAppGallery
            project={project}
            initialIndex={project.primaryScreenshotIndex || 0}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .mobile-project-grid.grid-standard {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
          .mobile-project-grid.grid-reversed {
            grid-template-columns: 0.95fr 1.15fr !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-project-info-col {
            order: 1 !important;
          }
          .mobile-project-visual-col {
            order: 2 !important;
          }
        }
        .mobile-project-case-card {
          transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
        }
        .mobile-project-case-card:hover {
          border-color: var(--border-medium);
          box-shadow: var(--shadow-editorial);
        }
        .btn-google-play {
          position: relative;
          overflow: hidden;
        }
        .btn-google-play:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(215, 106, 66, 0.35);
        }
      `}</style>
    </motion.article>
  );
}
