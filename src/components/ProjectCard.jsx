import { useState } from 'react';
import { ExternalLink, FileCheck, Smartphone, ShieldCheck, Eye, Laptop, Code2 } from 'lucide-react';
import Badge from './Badge';
import { GithubIcon } from './Icons';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

// Project 01: Jenisha — Government Document Portal Large Preview
function JenishaPreview() {
  return (
    <div
      style={{
        backgroundColor: '#272520',
        color: '#F4EFE6',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(1rem, 2.5vw, 1.75rem)',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(244, 239, 230, 0.12)',
        fontFamily: 'var(--font-sans)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Top Application Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(244, 239, 230, 0.12)',
          paddingBottom: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-terracotta)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'var(--font-serif)',
            }}
          >
            J
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F4EFE6', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Jenisha Document Portal</span>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'rgba(215, 106, 66, 0.25)',
                  color: 'var(--accent-terracotta)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '3px',
                }}
              >
                GOV WORKFLOW
              </span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#B5AE9F', fontFamily: 'var(--font-mono)' }}>
              auth.gov.portal / multi-tier verification
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(52, 199, 89, 0.15)',
            border: '1px solid rgba(52, 199, 89, 0.3)',
            borderRadius: '9999px',
            padding: '0.25rem 0.65rem',
            fontSize: '0.7rem',
            color: '#70D78A',
            fontWeight: 600,
          }}
        >
          <ShieldCheck size={13} />
          <span>Secure Session</span>
        </div>
      </div>

      {/* Workflow Step Tracker */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          margin: '1rem 0',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(52, 199, 89, 0.3)',
            borderRadius: '6px',
            padding: '0.65rem 0.75rem',
          }}
        >
          <div style={{ fontSize: '0.65rem', color: '#70D78A', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Step 1 • Completed
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F4EFE6', marginTop: '2px' }}>
            Digital Form Entry
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(215, 106, 66, 0.12)',
            border: '1px solid var(--accent-terracotta)',
            borderRadius: '6px',
            padding: '0.65rem 0.75rem',
          }}
        >
          <div style={{ fontSize: '0.65rem', color: 'var(--accent-terracotta)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Step 2 • Active
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F4EFE6', marginTop: '2px' }}>
            Image / PDF Upload
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '6px',
            padding: '0.65rem 0.75rem',
          }}
        >
          <div style={{ fontSize: '0.65rem', color: '#8F897D', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Step 3 • Pending
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#B5AE9F', marginTop: '2px' }}>
            Admin Approval
          </div>
        </div>
      </div>

      {/* Main Form & Upload Center Simulation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '0.85rem',
          marginBottom: '1rem',
        }}
      >
        {/* Document Upload Pipeline Card */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '6px',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.7rem', color: '#9E978B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Upload Pipeline
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent-terracotta)', fontFamily: 'var(--font-mono)' }}>
              2 Files Verified
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '0.5rem 0.65rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={14} color="#70D78A" />
              <span>Identity_Proof.pdf</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', color: '#8F897D', fontSize: '0.68rem' }}>1.4 MB</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '0.5rem 0.65rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={14} color="#70D78A" />
              <span>Biometric_Scan.jpg</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', color: '#8F897D', fontSize: '0.68rem' }}>840 KB</span>
          </div>
        </div>

        {/* Administrative Workflow Review Card */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '6px',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.7rem', color: '#9E978B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Admin Approval Stage
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-terracotta)',
                  boxShadow: '0 0 6px var(--accent-terracotta)',
                }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F4EFE6' }}>
                Officer Verification In-Progress
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#9AA7B0', marginTop: '0.35rem', lineHeight: 1.4 }}>
              Automated Firestore listeners trigger notifications upon administrative signature approval.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              marginTop: '0.25rem',
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: 'rgba(215, 106, 66, 0.2)',
                border: '1px solid var(--accent-terracotta)',
                color: 'var(--accent-terracotta)',
                fontSize: '0.7rem',
                textAlign: 'center',
                padding: '0.3rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
              }}
            >
              APPROVE DOC
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#B5AE9F',
                fontSize: '0.7rem',
                textAlign: 'center',
                padding: '0.3rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              AUDIT TRAIL
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Specification Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          borderTop: '1px solid rgba(244, 239, 230, 0.1)',
          paddingTop: '0.75rem',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: '#8F897D',
        }}
      >
        <span>FLUTTER & DART ENGINE</span>
        <span style={{ color: 'var(--accent-terracotta)' }}>FIREBASE AUTH • FIRESTORE • TS / PHP</span>
      </div>
    </div>
  );
}

// Project 02: Shama Interiors & Furnitures Large Preview with Desktop & Mobile Mockups
function ShamaPreview() {
  return (
    <div
      style={{
        backgroundColor: '#EBE4D5',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(1rem, 2.5vw, 1.75rem)',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(41, 39, 32, 0.14)',
        fontFamily: 'var(--font-sans)',
        boxShadow: 'var(--shadow-subtle)',
      }}
    >
      {/* Mockup Showcase Container: Desktop Browser + Layered Mobile Device */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
          alignItems: 'center',
          position: 'relative',
        }}
        className="shama-dual-mockup-grid"
      >
        {/* Desktop Browser Mockup */}
        <div
          style={{
            backgroundColor: '#FAF7F2',
            borderRadius: '8px',
            border: '1px solid rgba(41, 39, 32, 0.12)',
            boxShadow: '0 8px 24px -4px rgba(41, 39, 32, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Browser Chrome Header */}
          <div
            style={{
              backgroundColor: '#ECE5D8',
              padding: '0.5rem 0.85rem',
              borderBottom: '1px solid rgba(41, 39, 32, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97768' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E3B95B' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6CBF84' }} />
            </div>

            <div
              style={{
                backgroundColor: '#FAF7F2',
                borderRadius: '4px',
                padding: '0.15rem 0.85rem',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: '#6E665B',
                border: '1px solid rgba(41, 39, 32, 0.08)',
              }}
            >
              https://shamainteriors.store
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#7A7264', fontSize: '0.65rem' }}>
              <Laptop size={12} />
              <span>Desktop View</span>
            </div>
          </div>

          {/* Storefront Desktop Content */}
          <div style={{ padding: '0.85rem 1rem' }}>
            {/* Storefront Nav */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(41, 39, 32, 0.08)',
                paddingBottom: '0.6rem',
                marginBottom: '0.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#292720',
                  }}
                >
                  SHAMA
                </span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', marginLeft: '0.35rem', color: '#7A7264', textTransform: 'uppercase' }}>
                  Interiors
                </span>
              </div>

              {/* Product Categorisation Bar */}
              <div style={{ display: 'flex', gap: '0.6rem', fontSize: '0.7rem', color: '#5C564C', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-terracotta)', borderBottom: '1.5px solid var(--accent-terracotta)', paddingBottom: '2px' }}>
                  Living
                </span>
                <span>Bespoke</span>
                <span>Dining</span>
                <span>Studio</span>
              </div>
            </div>

            {/* Featured Product Banner */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr',
                gap: '0.85rem',
                backgroundColor: '#F3EDE1',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid rgba(41, 39, 32, 0.06)',
                alignItems: 'center',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--accent-terracotta)',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                  }}
                >
                  New Season Collection
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#292720',
                    margin: '0.2rem 0',
                    lineHeight: 1.2,
                  }}
                >
                  Artisanal Oak Armchair
                </h4>
                <p style={{ fontSize: '0.7rem', color: '#6E665B', margin: 0, lineHeight: 1.35 }}>
                  Sustainable solid timber, natural finish and textured linen upholstery.
                </p>
              </div>

              {/* Graphic Woodwork Geometry */}
              <div
                style={{
                  backgroundColor: '#E4DC shatter',
                  background: 'linear-gradient(135deg, #E6DDD0 0%, #D8CDBC 100%)',
                  borderRadius: '6px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(41, 39, 32, 0.08)',
                  position: 'relative',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#292720" strokeWidth="2.5">
                  <path d="M25 80 L25 45 Q25 25 50 25 Q75 25 75 45 L75 80" />
                  <path d="M20 55 L80 55" strokeWidth="3" />
                  <path d="M28 55 L28 85" strokeWidth="3" />
                  <path d="M72 55 L72 85" strokeWidth="3" />
                  <circle cx="50" cy="40" r="10" stroke="var(--accent-terracotta)" strokeWidth="1.8" />
                </svg>
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '6px',
                    fontSize: '0.58rem',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: '#292720',
                    color: '#F4EFE6',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '2px',
                  }}
                >
                  TAILWIND
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup Preview Layer */}
        <div
          style={{
            backgroundColor: '#292720',
            borderRadius: '16px',
            padding: '0.6rem',
            boxShadow: '0 12px 28px -4px rgba(41, 39, 32, 0.18)',
            border: '2px solid #3F3B32',
            maxWidth: '280px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Mobile Screen */}
          <div
            style={{
              backgroundColor: '#FAF7F2',
              borderRadius: '10px',
              padding: '0.65rem 0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {/* Mobile Notch & Status Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.58rem', color: '#6E665B', fontFamily: 'var(--font-mono)' }}>
              <span>9:41</span>
              <div style={{ width: '40px', height: '4px', backgroundColor: '#292720', borderRadius: '4px' }} />
              <span>5G 100%</span>
            </div>

            {/* Mobile Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(41, 39, 32, 0.08)', paddingBottom: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Smartphone size={12} color="var(--accent-terracotta)" />
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.78rem', fontWeight: 700 }}>
                  Shama Mobile
                </span>
              </div>
              <span style={{ fontSize: '0.6rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>
                4 Categories
              </span>
            </div>

            {/* Mobile Product Card */}
            <div
              style={{
                backgroundColor: '#F3EDE1',
                padding: '0.5rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#292720' }}>Bespoke Dining Table</div>
                <div style={{ fontSize: '0.6rem', color: '#7A7264' }}>Solid Teak Wood • Made to Order</div>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--accent-terracotta)',
                  color: '#FFFFFF',
                  fontSize: '0.58rem',
                  padding: '0.2rem 0.45rem',
                  borderRadius: '3px',
                  fontWeight: 600,
                }}
              >
                View
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Specs Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          borderTop: '1px solid rgba(41, 39, 32, 0.1)',
          paddingTop: '0.75rem',
          marginTop: '0.85rem',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: '#6E665B',
        }}
      >
        <span>REACT • TAILWIND CSS</span>
        <span style={{ color: 'var(--accent-terracotta)', fontWeight: 600 }}>
          RESPONSIVE DESKTOP & MOBILE • VERCEL
        </span>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .shama-dual-mockup-grid {
            grid-template-columns: 1.3fr 0.9fr;
          }
        }
      `}</style>
    </div>
  );
}

// Project 03: Configurable Mobile Application Slot (No fake features, screenshots, or results)
function ConfigurableMobilePreview() {
  return (
    <div
      style={{
        backgroundColor: '#23282D',
        color: '#F4EFE6',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(1rem, 2.5vw, 1.75rem)',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(244, 239, 230, 0.12)',
        fontFamily: 'var(--font-sans)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Top Configurable Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(244, 239, 230, 0.12)',
          paddingBottom: '0.85rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#3F5E78',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
            }}
          >
            <Smartphone size={17} />
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F4EFE6' }}>
              Flutter Mobile Application
            </div>
            <div style={{ fontSize: '0.7rem', color: '#8BA0B0', fontFamily: 'var(--font-mono)' }}>
              cross-platform mobile architecture
            </div>
          </div>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            backgroundColor: 'rgba(63, 94, 120, 0.25)',
            border: '1px solid rgba(63, 94, 120, 0.5)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            color: '#B0CFE5',
            fontWeight: 600,
          }}
        >
          CONFIGURABLE ENTRY
        </span>
      </div>

      {/* Blueprint Device Canvas */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1.25rem 0',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '320px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px dashed rgba(244, 239, 230, 0.2)',
            borderRadius: '16px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            position: 'relative',
          }}
        >
          {/* Blueprint phone top notch indicator */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50px', height: '4px', backgroundColor: 'rgba(244, 239, 230, 0.2)', borderRadius: '4px' }} />
          </div>

          {/* Blueprint Layer 1: App Header */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '6px',
              padding: '0.65rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={14} color="#8BA0B0" />
              <span style={{ fontSize: '0.78rem', color: '#F4EFE6', fontFamily: 'var(--font-mono)' }}>
                Flutter Widget Tree
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: '#8BA0B0', fontFamily: 'var(--font-mono)' }}>Dart</span>
          </div>

          {/* Blueprint Layer 2: State Management & Service */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '6px',
              padding: '0.65rem 0.85rem',
            }}
          >
            <div style={{ fontSize: '0.68rem', color: '#8BA0B0', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              State Management Layer
            </div>
            <div style={{ fontSize: '0.78rem', color: '#DCD4C7', marginTop: '0.2rem' }}>
              Configurable Provider / GetX Controller
            </div>
          </div>

          {/* Blueprint Layer 3: Feature Placeholder Slot */}
          <div
            style={{
              backgroundColor: 'rgba(215, 106, 66, 0.08)',
              border: '1px dashed var(--accent-terracotta)',
              borderRadius: '6px',
              padding: '0.75rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-terracotta)', fontWeight: 600, display: 'block' }}>
              Project Slot Ready
            </span>
            <span style={{ fontSize: '0.68rem', color: '#B5AE9F', display: 'block', marginTop: '0.2rem' }}>
              Add real Flutter app title, details & links in projects.js
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Specification Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          borderTop: '1px solid rgba(244, 239, 230, 0.1)',
          paddingTop: '0.75rem',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: '#8BA0B0',
        }}
      >
        <span>FLUTTER • DART</span>
        <span style={{ color: '#B0CFE5' }}>CUSTOM APPLICATION SLOT</span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <>
      <article
        id={project.id}
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
          transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth)',
          position: 'relative',
        }}
        className="project-case-card"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
          className={`project-grid-inner ${isReversed ? 'layout-reversed' : 'layout-normal'}`}
        >
          {/* Column: Project Content & Information */}
          <div
            className="project-info-column"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              order: isReversed ? 2 : 1,
            }}
          >
            {/* Meta Header Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '0.85rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--accent-terracotta)',
                  letterSpacing: '0.08em',
                }}
              >
                PROJECT {project.number}
              </span>
              <span className="eyebrow-muted">{project.category}</span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="headline-card">{project.title}</h3>
              {project.subtitle && (
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                  }}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Concise Description */}
            <p className="text-editorial-body">{project.description}</p>

            {/* Key Architectural Features Bullet Points */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  display: 'block',
                  marginBottom: '0.65rem',
                }}
              >
                Key Implementations
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-terracotta)',
                        marginTop: '7px',
                        flexShrink: 0,
                      }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Tags */}
            <div style={{ marginTop: '0.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  display: 'block',
                  marginBottom: '0.55rem',
                }}
              >
                Technologies
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Actions: Case Study View, Live Demo & GitHub (rendered ONLY when real URLs configured) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginTop: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-hairline)',
              }}
            >
              {/* Primary Case Study View Action */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                aria-label={`Open detailed case study for ${project.title}`}
              >
                <Eye size={15} />
                <span>View Case Study</span>
              </button>

              {/* Live Demo: Rendered ONLY when real URL is present */}
              {project.links?.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              ) : null}

              {/* GitHub: Rendered ONLY when real URL is present */}
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.35rem' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Column: Visual Case Study Preview */}
          <div
            className="project-preview-container"
            onClick={() => setModalOpen(true)}
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)',
              transition: 'transform var(--transition-smooth)',
              order: isReversed ? 1 : 2,
              cursor: 'pointer',
            }}
            title="Click to view full case study"
          >
            {project.previewType === 'portal' && <JenishaPreview />}
            {project.previewType === 'storefront' && <ShamaPreview />}
            {project.previewType === 'configurable-mobile' && <ConfigurableMobilePreview />}
          </div>
        </div>

        <style>{`
          @media (min-width: 960px) {
            .project-grid-inner.layout-normal {
              grid-template-columns: 1.1fr 1.2fr;
            }
            .project-grid-inner.layout-reversed {
              grid-template-columns: 1.2fr 1.1fr;
            }
          }
          .project-case-card:hover {
            border-color: var(--border-medium);
            box-shadow: var(--shadow-editorial);
          }
          .project-case-card:hover .project-preview-container {
            transform: scale(1.015);
          }
        `}</style>
      </article>

      {/* Case Study Modal Dialog */}
      <ProjectCaseStudyModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
