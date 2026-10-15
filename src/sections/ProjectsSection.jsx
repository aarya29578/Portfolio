import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Code2,
  BriefcaseBusiness,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalProjects, freelanceProjects } from '../data/projects';
import { personalInfo } from '../data/personal';
import { GithubIcon } from '../components/Icons';

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState(null); // 'personal' | 'freelance' | null

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const sectionElement = document.getElementById('work');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    const sectionElement = document.getElementById('work');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeProjects =
    selectedCategory === 'personal' ? personalProjects : freelanceProjects;

  return (
    <section id="work" className="editorial-section">
      <div className="editorial-container">
        <AnimatePresence mode="wait">
          {selectedCategory === null ? (
            /* =================================================================
               1. Category Selection View
               ================================================================= */
            <motion.div
              key="category-selection-view"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Section Header */}
              <SectionHeader
                eyebrow="SELECTED WORK"
                title="Projects &"
                italicWord="Possibilities"
                description="Explore the things I build independently and the digital experiences I create for clients."
                split={true}
              />

              {/* Two Large Side-by-Side Category Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                  gap: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                }}
                className="category-cards-grid"
              >
                {/* -------------------------------------------------------------
                    Option 1: Personal Projects Card
                    ------------------------------------------------------------- */}
                <motion.div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectCategory('personal')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectCategory('personal');
                    }
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="project-category-card"
                  aria-label="Explore Personal Projects: Ideas built with curiosity"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-subtle)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    {/* Top Meta: Icon + Eyebrow */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--accent-terracotta-subtle)',
                          color: 'var(--accent-terracotta)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--accent-terracotta-border)',
                        }}
                      >
                        <Code2 size={24} />
                      </div>
                      <span className="eyebrow-muted">INDEPENDENT</span>
                    </div>

                    {/* Titles */}
                    <h3
                      className="headline-card"
                      style={{
                        fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                        marginBottom: '0.4rem',
                        color: 'var(--text-ink)',
                      }}
                    >
                      Personal Projects
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: 'var(--accent-terracotta)',
                        marginBottom: '1rem',
                      }}
                    >
                      Ideas built with curiosity.
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.96rem',
                        lineHeight: 1.65,
                        color: 'var(--text-muted)',
                        marginBottom: '1.75rem',
                      }}
                    >
                      Explore my independent projects, experiments, and applications
                      built to solve problems and explore new technologies.
                    </p>

                    {/* Editorial Code Visual */}
                    <div
                      style={{
                        backgroundColor: '#272520',
                        color: '#F4EFE6',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.15rem 1.25rem',
                        marginBottom: '1.75rem',
                        border: '1px solid rgba(244, 239, 230, 0.1)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {/* Window Header */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid rgba(244, 239, 230, 0.12)',
                          paddingBottom: '0.6rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--accent-terracotta)',
                            }}
                          />
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#878074',
                            }}
                          />
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#DCD4C7',
                            }}
                          />
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#878074' }}>
                          experiments.ts
                        </span>
                      </div>

                      {/* Code Content */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                        <div>
                          <span style={{ color: '#878074', marginRight: '0.75rem' }}>01</span>
                          <span style={{ color: 'var(--accent-terracotta)' }}>const</span>{' '}
                          <span style={{ color: '#F4EFE6' }}>independentWork</span> = &#123;
                        </div>
                        <div>
                          <span style={{ color: '#878074', marginRight: '0.75rem' }}>02</span>
                          &nbsp;&nbsp;origin:{' '}
                          <span style={{ color: '#E8DFC8' }}>"Curiosity & Problem Solving"</span>,
                        </div>
                        <div>
                          <span style={{ color: '#878074', marginRight: '0.75rem' }}>03</span>
                          &nbsp;&nbsp;stack:[{' '}
                          <span style={{ color: '#D76A42' }}>"React"</span>,{' '}
                          <span style={{ color: '#D76A42' }}>"Flutter"</span>,{' '}
                          <span style={{ color: '#D76A42' }}>"Node"</span> ],
                        </div>
                        <div>
                          <span style={{ color: '#878074', marginRight: '0.75rem' }}>04</span>
                          &#125;;
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.94rem',
                      color: 'var(--accent-terracotta)',
                    }}
                  >
                    <span>Explore Personal Projects</span>
                    <span className="card-cta-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </motion.div>

                {/* -------------------------------------------------------------
                    Option 2: Freelancing Projects Card
                    ------------------------------------------------------------- */}
                <motion.div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectCategory('freelance')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectCategory('freelance');
                    }
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="project-category-card"
                  aria-label="Explore Freelancing Projects: Ideas built for real needs"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-subtle)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    {/* Top Meta: Icon + Eyebrow */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--accent-terracotta-subtle)',
                          color: 'var(--accent-terracotta)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--accent-terracotta-border)',
                        }}
                      >
                        <BriefcaseBusiness size={24} />
                      </div>
                      <span className="eyebrow-muted">CLIENT WORK</span>
                    </div>

                    {/* Titles */}
                    <h3
                      className="headline-card"
                      style={{
                        fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                        marginBottom: '0.4rem',
                        color: 'var(--text-ink)',
                      }}
                    >
                      Freelancing Projects
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: 'var(--accent-terracotta)',
                        marginBottom: '1rem',
                      }}
                    >
                      Ideas built for real needs.
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.96rem',
                        lineHeight: 1.65,
                        color: 'var(--text-muted)',
                        marginBottom: '1.75rem',
                      }}
                    >
                      Discover websites, applications, and digital solutions
                      developed for clients and real-world requirements.
                    </p>

                    {/* Editorial Client Website Mockup Visual */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.15rem 1.25rem',
                        marginBottom: '1.75rem',
                        border: '1px solid var(--border-light)',
                        boxShadow: 'var(--shadow-subtle)',
                      }}
                    >
                      {/* Browser Mockup Top Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          borderBottom: '1px solid var(--border-hairline)',
                          paddingBottom: '0.65rem',
                          marginBottom: '0.85rem',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '5px' }}>
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--border-medium)',
                            }}
                          />
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--border-medium)',
                            }}
                          />
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--border-medium)',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            flex: 1,
                            backgroundColor: 'var(--bg-stone-subtle)',
                            borderRadius: 'var(--radius-pill)',
                            padding: '0.2rem 0.65rem',
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span>client-platform.web</span>
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: '#34C759',
                            }}
                          />
                        </div>
                      </div>

                      {/* Miniature Layout Mockup */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div
                            style={{
                              height: '10px',
                              width: '45%',
                              backgroundColor: 'var(--text-ink)',
                              borderRadius: '2px',
                            }}
                          />
                          <div
                            style={{
                              height: '16px',
                              width: '28%',
                              backgroundColor: 'var(--accent-terracotta)',
                              borderRadius: 'var(--radius-pill)',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            height: '6px',
                            width: '85%',
                            backgroundColor: 'var(--border-light)',
                            borderRadius: '2px',
                          }}
                        />
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                          <div
                            style={{
                              flex: 1,
                              height: '24px',
                              backgroundColor: 'var(--bg-stone-subtle)',
                              borderRadius: '4px',
                              border: '1px solid var(--border-hairline)',
                            }}
                          />
                          <div
                            style={{
                              flex: 1,
                              height: '24px',
                              backgroundColor: 'var(--bg-stone-subtle)',
                              borderRadius: '4px',
                              border: '1px solid var(--border-hairline)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.94rem',
                      color: 'var(--accent-terracotta)',
                    }}
                  >
                    <span>Explore Freelancing Projects</span>
                    <span className="card-cta-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* =================================================================
               2. Dedicated Category View (Personal or Freelance)
               ================================================================= */
            <motion.div
              key={`category-view-${selectedCategory}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Back Action Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <button
                  type="button"
                  onClick={handleBackToCategories}
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
                  aria-label="Back to all project categories"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Projects</span>
                </button>
              </div>

              {/* Category Header */}
              <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                <span className="eyebrow" style={{ marginBottom: '0.65rem' }}>
                  {selectedCategory === 'personal'
                    ? 'INDEPENDENT EXPLORATION'
                    : 'CLIENT DELIVERABLES'}
                </span>
                <h2
                  className="headline-section"
                  style={{
                    fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                    lineHeight: 1.15,
                    marginBottom: '0.5rem',
                    color: 'var(--text-ink)',
                  }}
                >
                  {selectedCategory === 'personal'
                    ? 'Personal Projects'
                    : 'Freelancing Projects'}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.15rem',
                    color: 'var(--accent-terracotta)',
                    marginBottom: '1rem',
                  }}
                >
                  {selectedCategory === 'personal'
                    ? 'Ideas built with curiosity.'
                    : 'Ideas built for real needs.'}
                </p>
                <p
                  className="editorial-lead"
                  style={{ maxWidth: '680px', margin: 0 }}
                >
                  {selectedCategory === 'personal'
                    ? 'Explore my independent projects, experiments, and applications built to solve problems and explore new technologies.'
                    : 'Discover websites, applications, and digital solutions developed for clients and real-world requirements.'}
                </p>
              </div>

              {/* Projects List or Tasteful Empty State */}
              {activeProjects.length > 0 ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                  }}
                >
                  {activeProjects.map((project) => (
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
                </div>
              ) : (
                /* -------------------------------------------------------------
                   Tasteful Warm Editorial Empty State
                   ------------------------------------------------------------- */
                <div
                  style={{
                    backgroundColor: 'var(--bg-stone-subtle)',
                    border: '1px dashed var(--border-medium)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'clamp(3rem, 6vw, 4.5rem) 2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
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

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-terracotta)',
                      fontWeight: 600,
                    }}
                  >
                    STATUS: IN PREPARATION
                  </span>

                  <h3
                    className="headline-card"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
                      color: 'var(--text-ink)',
                      margin: 0,
                    }}
                  >
                    New projects are on the way.
                  </h3>

                  <p
                    style={{
                      maxWidth: '540px',
                      fontSize: '0.96rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65,
                      margin: '0 0 1rem 0',
                    }}
                  >
                    {selectedCategory === 'personal'
                      ? 'I am currently packaging and documenting independent experiments, open-source repositories, and applications. Check back soon for detailed project walkthroughs.'
                      : 'Selected commercial client solutions, responsive web applications, and mobile deployments are currently being documented. In the meantime, feel free to get in touch.'}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.85rem',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleBackToCategories}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Categories</span>
                    </button>

                    {selectedCategory === 'personal' ? (
                      <a
                        href={personalInfo.contact.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-primary"
                        style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                      >
                        <GithubIcon size={16} />
                        <span>View GitHub Profile</span>
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          const contactEl = document.getElementById('contact');
                          if (contactEl) {
                            contactEl.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          }
                        }}
                        className="btn btn-primary"
                        style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                      >
                        <BriefcaseBusiness size={16} />
                        <span>Get in Touch for Projects</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .project-category-card {
          transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
        }
        .project-category-card:hover {
          border-color: var(--accent-terracotta);
          box-shadow: var(--shadow-editorial);
        }
        .project-category-card:hover .card-cta-arrow {
          transform: translateX(4px);
          transition: transform var(--transition-fast);
        }
        .project-category-card:focus-visible {
          outline: 2px solid var(--accent-terracotta);
          outline-offset: 4px;
        }
        .card-cta-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform var(--transition-fast);
        }
      `}</style>
    </section>
  );
}
