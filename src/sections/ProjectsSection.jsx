import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Smartphone, Laptop } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsSection({ onExploreProjects }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="editorial-section">
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Projects &"
          italicWord="Possibilities"
          description="A curated look into the digital products, web platforms, and mobile applications I design and engineer."
          split={true}
        />

        {/* Single Full-Width Premium Project Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="single-project-showcase-card"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-subtle)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              alignItems: 'center',
            }}
            className="showcase-card-grid"
          >
            {/* Left Content Column */}
            <div
              style={{
                padding: 'clamp(2rem, 5vw, 3.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.25rem',
              }}
            >
              {/* Small Label */}
              <div>
                <span className="eyebrow">MY WORK</span>
              </div>

              {/* Title */}
              <h3
                className="headline-section"
                style={{
                  fontSize: 'clamp(2rem, 3.4vw, 2.85rem)',
                  lineHeight: 1.15,
                  color: 'var(--text-ink)',
                  margin: 0,
                }}
              >
                Projects & Experiments
              </h3>

              {/* Description */}
              <p
                className="editorial-lead"
                style={{
                  fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  margin: 0,
                  maxWidth: '520px',
                }}
              >
                A collection of web applications, mobile experiences, and digital
                solutions I've built. Explore my work and the ideas behind it.
              </p>

              {/* Focus Pillars / Feature Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingTop: '0.25rem',
                }}
              >
                {['Web Applications', 'Mobile Experiences', 'Backend Services'].map((pillar) => (
                  <span
                    key={pillar}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--text-subtle)',
                      backgroundColor: 'var(--bg-stone-subtle)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-hairline)',
                    }}
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              {/* Primary Action Button */}
              <div style={{ paddingTop: '0.75rem' }}>
                <button
                  type="button"
                  onClick={onExploreProjects}
                  className="btn btn-primary"
                  style={{
                    fontSize: '0.95rem',
                    padding: '0.85rem 1.85rem',
                  }}
                  aria-label="Explore Projects and Experiments"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={18} className="cta-arrow-icon" />
                </button>
              </div>
            </div>

            {/* Right Visual Preview Column: Web & Mobile Application Mockups */}
            <div
              style={{
                backgroundColor: 'var(--bg-stone-subtle)',
                borderLeft: '1px solid var(--border-light)',
                padding: 'clamp(2rem, 4vw, 3.25rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '360px',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="showcase-visual-column"
            >
              {/* Background Glow / Warm Accent */}
              <div
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--accent-terracotta-glow) 0%, transparent 70%)',
                  top: '20%',
                  right: '15%',
                  pointerEvents: 'none',
                }}
              />

              {/* Composition: Browser Mockup + Floating Mobile Mockup */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '440px',
                }}
                className="showcase-composition"
              >
                {/* 1. Web Application Window */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-subtle)',
                    overflow: 'hidden',
                    width: '88%',
                    transition: 'transform var(--transition-smooth)',
                  }}
                  className="web-mockup-frame"
                >
                  {/* Top Window Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.85rem',
                      borderBottom: '1px solid var(--border-hairline)',
                      backgroundColor: 'rgba(244, 239, 230, 0.5)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-terracotta)',
                        }}
                      />
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: '#DCD4C7',
                        }}
                      />
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: '#BDB5A7',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-subtle)',
                        backgroundColor: '#FFFFFF',
                        padding: '0.15rem 0.6rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <Laptop size={11} color="var(--accent-terracotta)" />
                      <span>aarya.dev/work</span>
                    </div>
                  </div>

                  {/* Web Content Wireframe */}
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                        style={{
                          width: '40%',
                          height: '10px',
                          backgroundColor: 'var(--text-ink)',
                          borderRadius: '2px',
                        }}
                      />
                      <div
                        style={{
                          width: '20%',
                          height: '14px',
                          backgroundColor: 'var(--accent-terracotta)',
                          borderRadius: 'var(--radius-pill)',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: '75%',
                        height: '6px',
                        backgroundColor: 'var(--border-light)',
                        borderRadius: '2px',
                      }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <div
                        style={{
                          height: '48px',
                          backgroundColor: 'var(--bg-card)',
                          borderRadius: '4px',
                          border: '1px solid var(--border-hairline)',
                          padding: '0.4rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '60%', height: '5px', backgroundColor: 'var(--text-ink)', borderRadius: '2px' }} />
                        <div style={{ width: '40%', height: '4px', backgroundColor: 'var(--border-medium)', borderRadius: '2px' }} />
                      </div>
                      <div
                        style={{
                          height: '48px',
                          backgroundColor: 'var(--bg-card)',
                          borderRadius: '4px',
                          border: '1px solid var(--border-hairline)',
                          padding: '0.4rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '55%', height: '5px', backgroundColor: 'var(--text-ink)', borderRadius: '2px' }} />
                        <div style={{ width: '35%', height: '4px', backgroundColor: 'var(--border-medium)', borderRadius: '2px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Floating Mobile Device Mockup */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    right: '0',
                    width: '135px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1.5px solid var(--border-medium)',
                    boxShadow: 'var(--shadow-raised)',
                    overflow: 'hidden',
                    padding: '0.55rem 0.5rem 0.85rem 0.5rem',
                    transition: 'transform var(--transition-smooth)',
                  }}
                  className="mobile-mockup-frame"
                >
                  {/* Phone Speaker Notch */}
                  <div
                    style={{
                      width: '26px',
                      height: '3.5px',
                      backgroundColor: 'var(--border-medium)',
                      borderRadius: '2px',
                      margin: '0 auto 0.45rem auto',
                    }}
                  />

                  {/* App Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.45rem',
                      paddingBottom: '0.35rem',
                      borderBottom: '1px solid var(--border-hairline)',
                    }}
                  >
                    <Smartphone size={11} color="var(--accent-terracotta)" />
                    <span style={{ fontSize: '0.58rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)' }}>
                      Flutter
                    </span>
                  </div>

                  {/* Mobile Screen Elements */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ width: '70%', height: '6px', backgroundColor: 'var(--text-ink)', borderRadius: '2px' }} />
                    <div style={{ width: '90%', height: '4px', backgroundColor: 'var(--border-light)', borderRadius: '2px' }} />
                    <div
                      style={{
                        height: '28px',
                        backgroundColor: 'var(--accent-terracotta-subtle)',
                        border: '1px solid var(--accent-terracotta-border)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0.2rem',
                      }}
                    >
                      <span style={{ fontSize: '0.58rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                        Active UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .showcase-card-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
        @media (max-width: 919px) {
          .showcase-visual-column {
            border-left: none !important;
            border-top: 1px solid var(--border-light) !important;
          }
        }
        .single-project-showcase-card {
          transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
        }
        .single-project-showcase-card:hover {
          border-color: var(--border-medium);
          box-shadow: var(--shadow-editorial);
        }
        .single-project-showcase-card:hover .cta-arrow-icon {
          transform: translateX(4px);
        }
        .single-project-showcase-card:hover .web-mockup-frame {
          transform: translateY(-2px);
        }
        .single-project-showcase-card:hover .mobile-mockup-frame {
          transform: translateY(-4px) scale(1.02);
        }
        .cta-arrow-icon {
          transition: transform var(--transition-fast);
        }
      `}</style>
    </section>
  );
}
