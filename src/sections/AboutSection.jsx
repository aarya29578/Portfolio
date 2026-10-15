import { motion, useReducedMotion } from 'framer-motion';

const CORE_TECHNOLOGIES = [
  'React',
  'JavaScript',
  'Node.js',
  'Flutter',
  'Dart',
  'Firebase',
  'MongoDB',
  'SQL',
];

export default function AboutSection() {
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="editorial-section"
      style={{
        backgroundColor: 'var(--bg-stone-subtle)',
        paddingTop: 'clamp(7rem, 12vw, 10.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
        position: 'relative',
      }}
    >
      <div className="editorial-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            maxWidth: '860px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          }}
        >
          {/* Small Label */}
          <motion.div variants={itemVariants}>
            <span className="eyebrow">About Me</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="headline-section"
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.35rem)',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Building digital experiences, from{' '}
            <span className="font-italic-serif text-terracotta">interface</span>{' '}
            to{' '}
            <span className="font-italic-serif text-terracotta">backend</span>.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="editorial-lead"
            style={{
              fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
              lineHeight: 1.75,
              color: 'var(--text-ink)',
              margin: 0,
            }}
          >
            I'm Aarya Parulekar, a Full Stack Developer working across web applications and mobile experiences. I build responsive React interfaces, develop Flutter applications, and connect them to backend services, REST APIs, and databases.
          </motion.p>

          {/* Core Technologies */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              paddingTop: '0.25rem',
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
              Core Technologies
            </span>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.55rem',
                alignItems: 'center',
              }}
            >
              {CORE_TECHNOLOGIES.map((tech) => (
                <div
                  key={tech}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    color: 'var(--text-ink)',
                    backgroundColor: '#FFFFFF',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-hairline)',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
                  }}
                  className="about-tech-tag"
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-terracotta)',
                    }}
                  />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small Closing Line */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: '0.5rem',
            }}
          >
            <div
              style={{
                paddingLeft: '1.25rem',
                borderLeft: '2px solid var(--accent-terracotta)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.025rem, 1.3vw, 1.2rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                "From thoughtful interfaces to functional applications, I enjoy turning ideas into working products."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-tech-tag:hover {
          border-color: var(--border-medium);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
