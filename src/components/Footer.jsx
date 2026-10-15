import { ArrowUp } from 'lucide-react';

export default function Footer({ currentPath = '/', onNavigate }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (currentPath !== '/' && onNavigate) {
      onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFooterNav = (e, href) => {
    e.preventDefault();
    if (currentPath !== '/') {
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-cream)',
        borderTop: '1px solid var(--border-light)',
        padding: '2.5rem 0',
      }}
    >
      <div
        className="editorial-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Wordmark & Minimal Note */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-ink)',
              letterSpacing: '-0.02em',
              display: 'inline-block',
            }}
          >
            aarya<span style={{ color: 'var(--accent-terracotta)' }}>.</span>
          </a>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', margin: 0 }}>
            © {currentYear} Aarya Parulekar. Full Stack & Flutter Developer.
          </p>
        </div>

        {/* Footer Navigation */}
        <nav
          aria-label="Footer Navigation"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.75rem',
            fontSize: '0.86rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
          }}
        >
          <a
            href="#work"
            onClick={(e) => handleFooterNav(e, '#work')}
            style={{ transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleFooterNav(e, '#about')}
            style={{ transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            About
          </a>
          <a
            href="#tech-stack"
            onClick={(e) => handleFooterNav(e, '#tech-stack')}
            style={{ transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            onClick={(e) => handleFooterNav(e, '#contact')}
            style={{ transition: 'color var(--transition-fast)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Contact
          </a>
        </nav>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            padding: '0.5rem 0.95rem',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'transparent',
            transition: 'all var(--transition-fast)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--text-ink)';
            e.currentTarget.style.color = 'var(--text-ink)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-light)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
