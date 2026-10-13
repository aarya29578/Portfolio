import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Layout, Smartphone, Server, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      icon: Layout,
      title: "Web Applications",
      description:
        "Building responsive, high-performance web interfaces with React and Tailwind CSS that feel natural across every screen.",
    },
    {
      icon: Smartphone,
      title: "Mobile Experiences",
      description:
        "Developing cross-platform applications with Flutter and Dart, combining fluid touch interactions with dependable state management.",
    },
    {
      icon: Server,
      title: "Backend Integrations",
      description:
        "Connecting frontend interfaces to robust Node.js and Express REST services, real-time Firebase databases, and structured SQL data models.",
    },
  ];

  return (
    <section id="about" className="editorial-section" style={{ backgroundColor: 'var(--bg-stone-subtle)' }}>
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Personal Background & Philosophy"
          title="Turning ideas into"
          italicWord="working products"
          titleEnd="with pragmatic engineering"
          description="A short reflection on how I approach problem solving, cross-platform architecture, and turning concepts into real-world applications."
          split={true}
        />

        {/* Editorial Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
          className="about-grid-inner"
        >
          {/* Left Column: Short, Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Editorial Lead Callout */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderLeft: '4px solid var(--accent-terracotta)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <Sparkles size={16} color="var(--accent-terracotta)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-terracotta)',
                    fontWeight: 600,
                  }}
                >
                  Core Mission
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                  lineHeight: 1.45,
                  color: 'var(--text-ink)',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                "I build web applications, mobile experiences and backend integrations that connect thoughtful interfaces with reliable functionality."
              </p>
            </div>

            {/* Problem Solving Approach */}
            <p className="text-editorial-body" style={{ fontSize: '1.025rem', lineHeight: 1.75 }}>
              My approach to software is simple: understand the core problem first, then build clean, reliable solutions that turn ideas into working products. I don't treat the web, mobile, and backend as isolated disciplines—I enjoy seeing how every layer works together to deliver a coherent experience.
            </p>

            <p className="text-editorial-body" style={{ fontSize: '1.025rem', lineHeight: 1.75 }}>
              Whether creating a citizen document verification portal, crafting an artisanal e-commerce storefront, or architecting a Flutter mobile app, I focus on readable code, reusable components, and dependable data flows.
            </p>

            {/* Focus checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem',
                paddingTop: '0.5rem',
              }}
            >
              {[
                "Pragmatic problem solving",
                "Clean code & modular structure",
                "Responsive across all viewports",
                "Reliable backend data flows",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-ink)',
                    fontWeight: 500,
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-terracotta)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Three Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-subtle)',
                fontWeight: 600,
                marginBottom: '0.25rem',
              }}
            >
              What I Build
            </div>

            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.35rem 1.5rem',
                    transition: 'all var(--transition-fast)',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                  className="about-principle-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.45rem' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--accent-terracotta-subtle)',
                        color: 'var(--accent-terracotta)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-ink)', margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0, paddingLeft: '2.85rem' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid-inner {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        .about-principle-card:hover {
          border-color: var(--border-medium);
          box-shadow: var(--shadow-editorial);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
