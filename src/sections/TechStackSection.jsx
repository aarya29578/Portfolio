import { motion, useReducedMotion } from 'framer-motion';
import { techStackData } from '../data/skills';
import SectionHeader from '../components/SectionHeader';
import { Layout, Server, Database, Smartphone, Code2, Layers } from 'lucide-react';

const CATEGORY_ICONS = {
  Frontend: Layout,
  Backend: Server,
  'Databases and Services': Database,
  Mobile: Smartphone,
  Other: Code2,
};

export default function TechStackSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tech-stack" className="editorial-section">
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Technical Stack & Tools"
          title="Actual"
          italicWord="Technologies"
          titleEnd="& Frameworks"
          description="A direct, honest overview of the frameworks, languages, and tools I use to build production web applications, mobile apps, and backend services."
          split={true}
        />

        {/* Visual Tech Stack Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {techStackData.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.category] || Layers;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all var(--transition-smooth)',
                }}
                className="tech-stack-card"
              >
                <div>
                  {/* Category Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--border-hairline)',
                      paddingBottom: '0.85rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--accent-terracotta-subtle)',
                          color: 'var(--accent-terracotta)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          letterSpacing: '0.12em',
                          color: 'var(--accent-terracotta)',
                          fontWeight: 600,
                        }}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="eyebrow-muted">STACK</span>
                  </div>

                  {/* Category Title & Tagline */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: 'var(--text-ink)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {category.category}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {category.tagline}
                  </p>
                </div>

                {/* Skill Badges List — Clean, direct, NO percentage bars */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed var(--border-light)',
                  }}
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-ink)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.4rem 0.8rem',
                        transition: 'all var(--transition-fast)',
                      }}
                      className="tech-pill-item"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-stack-card:hover {
          border-color: var(--border-medium);
          box-shadow: var(--shadow-editorial);
          transform: translateY(-2px);
        }
        .tech-pill-item:hover {
          border-color: var(--accent-terracotta);
          color: var(--accent-terracotta);
          background-color: var(--accent-terracotta-subtle);
        }
      `}</style>
    </section>
  );
}
