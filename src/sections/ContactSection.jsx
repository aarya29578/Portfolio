import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const email = personalInfo?.contact?.email || 'aryaparulekar647@gmail.com';
  const mailtoHref = 'mailto:aryaparulekar647@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse)',
        paddingTop: 'clamp(5rem, 9vw, 8.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle editorial watermark lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: 'var(--container-max)',
          height: '100%',
          borderLeft: '1px solid var(--border-inverse)',
          borderRight: '1px solid var(--border-inverse)',
          pointerEvents: 'none',
        }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--accent-terracotta)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-terracotta)',
              }}
            />
            <span>Initiate Contact</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.6rem)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: 'var(--text-inverse)',
              marginBottom: '1.5rem',
            }}
          >
            Let's build something{' '}
            <span
              className="font-italic-serif"
              style={{ color: 'var(--accent-terracotta)' }}
            >
              meaningful
            </span>
            .
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              color: 'var(--text-inverse-muted)',
              lineHeight: 1.65,
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
            }}
          >
            Interested in working together or discussing a development opportunity? I'd love to hear from you.
          </p>

          {/* Main Direct Email Action Box */}
          <div
            style={{
              backgroundColor: 'var(--bg-dark-surface)',
              border: '1px solid var(--border-inverse)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              marginBottom: '2.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
              <a
                href={mailtoHref}
                aria-label={`Send email to ${email}`}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--accent-terracotta)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  textDecoration: 'none',
                  transition: 'background-color var(--transition-fast), transform var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-terracotta-hover)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-terracotta)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Mail size={22} />
              </a>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-inverse-muted)',
                    display: 'block',
                  }}
                >
                  Direct Email Dispatch
                </span>
                <a
                  href={mailtoHref}
                  className="contact-email-link"
                  aria-label={`Send email to ${email}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    fontWeight: 700,
                    color: 'var(--text-inverse)',
                    transition: 'color var(--transition-fast)',
                    display: 'inline-block',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse)')}
                  onFocus={(e) => (e.currentTarget.style.color = 'var(--accent-terracotta)')}
                  onBlur={(e) => (e.currentTarget.style.color = 'var(--text-inverse)')}
                >
                  {email}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '320px', justifyContent: 'flex-end' }}>
              <a
                href={mailtoHref}
                className="btn btn-primary"
                aria-label={`Compose email to ${email}`}
                style={{ flex: 1, padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
              >
                <span>Compose Email</span>
                <Send size={15} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? 'Email address copied to clipboard' : 'Copy email address to clipboard'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-inverse)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: copied ? '#70D78A' : 'var(--text-inverse)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* External Social & Code Profiles */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-inverse)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: 'var(--text-inverse)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-terracotta)';
                e.currentTarget.style.backgroundColor = 'rgba(215, 106, 66, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-inverse)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <GithubIcon size={17} />
              <span>GitHub / aarya29578</span>
              <ArrowUpRight size={14} color="var(--accent-terracotta)" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-inverse)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: 'var(--text-inverse)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-terracotta)';
                e.currentTarget.style.backgroundColor = 'rgba(215, 106, 66, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-inverse)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={14} color="var(--accent-terracotta)" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
