import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Compass } from 'lucide-react';
import Badge from './Badge';
import { GithubIcon } from './Icons';

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 3vw, 2.5rem)',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(41, 39, 32, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            backgroundColor: 'var(--bg-cream)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '820px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: 'var(--shadow-raised)',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            zIndex: 1001,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--accent-terracotta)',
                    letterSpacing: '0.1em',
                  }}
                >
                  PROJECT {project.number}
                </span>
                <span className="eyebrow-muted">{project.category}</span>
              </div>
              <h2
                id="case-study-title"
                className="headline-card"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', margin: 0 }}
              >
                {project.title}
              </h2>
              {project.subtitle && (
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    marginTop: '0.25rem',
                  }}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-stone-subtle)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-ink)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-ink)';
                e.currentTarget.style.color = 'var(--bg-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-stone-subtle)';
                e.currentTarget.style.color = 'var(--text-ink)';
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Project Overview */}
            {caseStudy.overview && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-terracotta)',
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Project Overview
                </span>
                <p className="text-editorial-body" style={{ fontSize: '1.025rem', lineHeight: 1.7 }}>
                  {caseStudy.overview}
                </p>
              </div>
            )}

            {/* Challenge & Solution Grid */}
            {(caseStudy.challenge || caseStudy.solution) && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {caseStudy.challenge && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                      <Compass size={16} color="var(--accent-terracotta)" />
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                        Key Challenge
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                      {caseStudy.challenge}
                    </p>
                  </div>
                )}

                {caseStudy.solution && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                      <Cpu size={16} color="var(--accent-terracotta)" />
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                        Engineered Solution
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                      {caseStudy.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Implementations List */}
            {caseStudy.highlights && caseStudy.highlights.length > 0 && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-subtle)',
                    display: 'block',
                    marginBottom: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  Technical Highlights & Workflows
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {caseStudy.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-hairline)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.9rem 1.1rem',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-terracotta)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <div>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-ink)', display: 'block' }}>
                          {hl.title}
                        </strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                          {hl.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
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
                Technologies & Tools
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Working Links Footer (Rendered only when real URLs available) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.88rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}

                {project.isConfigurable && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                    }}
                  >
                    * Real repository and demo URLs will be connected upon application release.
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-ghost"
                style={{ fontSize: '0.88rem' }}
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
