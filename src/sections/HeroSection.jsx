import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Terminal, Layers, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/personal';
import Button from '../components/Button';

export default function HeroSection() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="editorial-section"
        style={{
          paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          position: 'relative',
        }}
      >
        <div className="editorial-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
            className="hero-grid-layout"
          >
            {/* Left Column: Editorial Headline & Introduction */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Top Eyebrow / Status */}
              <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="eyebrow">Aarya Parulekar — Portfolio</span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-subtle)',
                    paddingLeft: '0.75rem',
                    borderLeft: '1px solid var(--border-light)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#34C759',
                      display: 'inline-block',
                      boxShadow: '0 0 0 2px rgba(52, 199, 89, 0.25)',
                    }}
                  />
                  <span>Available for opportunities</span>
                </div>
              </motion.div>

              {/* Oversized Editorial Headline */}
              <motion.h1
                variants={itemVariants}
                className="headline-hero"
              >
                I build digital experiences that{' '}
                <span className="font-italic-serif text-terracotta">
                  turn ideas
                </span>{' '}
                into reality.
              </motion.h1>

              {/* Personal Introduction */}
              <motion.p
                variants={itemVariants}
                className="editorial-lead"
                style={{ maxWidth: '580px' }}
              >
                {personalInfo.bioIntro}
              </motion.p>

              {/* Professional Focus Pillars */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  paddingTop: '0.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-subtle)',
                    fontWeight: 600,
                  }}
                >
                  Core Engineering Focus
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                  }}
                >
                  {personalInfo.focusAreas.map((focus) => (
                    <div
                      key={focus}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: 'var(--text-ink)',
                        backgroundColor: 'var(--bg-stone-subtle)',
                        padding: '0.45rem 0.9rem',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-hairline)',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-terracotta)',
                        }}
                      />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Two Prominent Action Buttons */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '0.75rem',
                }}
              >
                <Button
                  variant="primary"
                  href="#work"
                  icon={ArrowDownRight}
                  iconPosition="right"
                >
                  Explore My Work
                </Button>

                <Button
                  variant="secondary"
                  href="#contact"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Editorial Visual Composition */}
            <motion.div
              variants={itemVariants}
              style={{ position: 'relative' }}
              className="hero-visual-wrapper"
            >
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  boxShadow: 'var(--shadow-editorial)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle background editorial lines */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '180px',
                    height: '180px',
                    borderLeft: '1px dashed var(--border-light)',
                    borderBottom: '1px dashed var(--border-light)',
                    pointerEvents: 'none',
                    opacity: 0.6,
                  }}
                />

                {/* Composition Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-hairline)',
                    paddingBottom: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-terracotta)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      ap
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--text-ink)',
                          display: 'block',
                          lineHeight: 1.2,
                        }}
                      >
                        Aarya Parulekar
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: 'var(--text-subtle)',
                        }}
                      >
                        ARCH. / ENGINEERING
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-terracotta)',
                      backgroundColor: 'var(--accent-terracotta-subtle)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-xs)',
                      fontWeight: 600,
                    }}
                  >
                    EDITION 2026
                  </span>
                </div>

                {/* Layered Architectural Showcase */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Visual Spec Card 1: Flutter Mobile */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          backgroundColor: '#EBF4FA',
                          color: '#2962FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-ink)' }}>
                          Cross-Platform Mobile
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          Flutter, Dart, Provider & GetX state
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-subtle)',
                      }}
                    >
                      IOS & ANDROID
                    </span>
                  </div>

                  {/* Visual Spec Card 2: Modern Web & React */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--accent-terracotta-subtle)',
                          color: 'var(--accent-terracotta)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Layers size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-ink)' }}>
                          Responsive Web Engineering
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          React.js, Tailwind CSS, Modern UI
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-subtle)',
                      }}
                    >
                      VERCEL / EDGE
                    </span>
                  </div>

                  {/* Visual Spec Card 3: Backend & Data */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          backgroundColor: '#F3EFE6',
                          color: '#655A4C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Terminal size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-ink)' }}>
                          APIs & Distributed Data
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          Node.js, Express, Firebase Firestore, SQL
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-subtle)',
                      }}
                    >
                      REST / REALTIME
                    </span>
                  </div>
                </div>

                {/* Composition Footer Quote / Detail */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>STUDIO: MUMBAI, IN</span>
                  <span style={{ color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                    2026 ROADMAP
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style>{`
        @media (min-width: 992px) {
          .hero-grid-layout {
            grid-template-columns: 1.25fr 1fr;
          }
        }
      `}</style>
      </section>
  );
}
