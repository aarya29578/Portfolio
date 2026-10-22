import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import ScreenshotLightbox from './ScreenshotLightbox';

export default function MobileAppGallery({
  project,
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screenshots = project.screenshots || [];
  const currentScreenshot = screenshots[currentIndex] || screenshots[0];

  const handleNext = () => {
    if (screenshots.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    if (screenshots.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <div
        className="mobile-gallery-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          width: '100%',
        }}
      >
        {/* Smartphone Mockup Frame */}
        <div
          className="smartphone-mockup-frame"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: '#1E1D19',
            borderRadius: '40px',
            padding: '12px',
            border: '3px solid #2F2C24',
            boxShadow:
              '0 22px 50px -12px rgba(41, 39, 32, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            userSelect: 'none',
          }}
        >
          {/* Top Notch / Dynamic Island Bar */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '4px',
              paddingBottom: '8px',
              zIndex: 10,
            }}
          >
            {/* Speaker bar & camera pill */}
            <div
              style={{
                width: '76px',
                height: '14px',
                backgroundColor: '#0F0E0C',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0 8px',
              }}
            >
              {/* Speaker slit */}
              <div
                style={{
                  width: '32px',
                  height: '3px',
                  backgroundColor: '#2A2720',
                  borderRadius: '2px',
                }}
              />
              {/* Camera lens */}
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  backgroundColor: '#1C2833',
                  borderRadius: '50%',
                  border: '1px solid #34495E',
                }}
              />
            </div>
          </div>

          {/* Interactive Screen Bezel & Display */}
          <div
            className="smartphone-screen-container"
            onClick={() => setIsLightboxOpen(true)}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '9 / 19.5',
              maxHeight: '580px',
              backgroundColor: '#0D0C0A',
              borderRadius: '28px',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
            title="Click to view full resolution screenshot"
          >
            {/* Screen Content: Animated Screenshot Display */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentScreenshot.id}
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </AnimatePresence>

            {/* Hover Indicator Overlay */}
            <div
              className="screen-hover-badge"
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(26, 24, 20, 0.88)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                color: '#F4EFE6',
                border: '1px solid rgba(244, 239, 230, 0.2)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.35rem 0.75rem',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                pointerEvents: 'none',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
              }}
            >
              <Maximize2 size={12} color="var(--accent-terracotta)" />
              <span>Tap to enlarge</span>
            </div>

            {/* Next / Prev Quick Arrows on Phone (visible on hover) */}
            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="phone-nav-btn phone-nav-prev"
                  aria-label="Previous screenshot"
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(26, 24, 20, 0.78)',
                    color: '#F4EFE6',
                    border: '1px solid rgba(244, 239, 230, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 5,
                    backdropFilter: 'blur(4px)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="phone-nav-btn phone-nav-next"
                  aria-label="Next screenshot"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(26, 24, 20, 0.78)',
                    color: '#F4EFE6',
                    border: '1px solid rgba(244, 239, 230, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 5,
                    backdropFilter: 'blur(4px)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
              paddingBottom: '2px',
            }}
          >
            <div
              style={{
                width: '110px',
                height: '4px',
                backgroundColor: 'rgba(244, 239, 230, 0.35)',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.65rem',
            width: '100%',
            maxWidth: '360px',
          }}
        >
          {/* Active Screen Info Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0 0.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Smartphone size={13} color="var(--accent-terracotta)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--text-ink)',
                }}
              >
                Screen {currentIndex + 1} of {screenshots.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-terracotta)',
                fontWeight: 600,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0.2rem 0',
              }}
              title="Expand gallery view"
            >
              <span>Full View</span>
              <Maximize2 size={12} />
            </button>
          </div>

          {/* Thumbnails Row */}
          <div
            className="gallery-thumbnails-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              width: '100%',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {screenshots.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`gallery-thumb-btn ${isActive ? 'active' : ''}`}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={isActive}
                  style={{
                    position: 'relative',
                    width: '54px',
                    height: '84px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#1E1D19',
                    border: isActive
                      ? '2px solid var(--accent-terracotta)'
                      : '1px solid var(--border-medium)',
                    boxShadow: isActive
                      ? '0 0 0 2px var(--accent-terracotta-border), var(--shadow-subtle)'
                      : 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all var(--transition-fast)',
                    opacity: isActive ? 1 : 0.65,
                    transform: isActive ? 'translateY(-2px)' : 'none',
                  }}
                  title={item.title}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '5px',
                    }}
                  />
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '3px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-terracotta)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Screen Caption */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              lineHeight: 1.45,
              padding: '0 0.5rem',
              minHeight: '2.4rem',
            }}
          >
            <strong style={{ color: 'var(--text-ink)', fontWeight: 600 }}>
              {currentScreenshot.title}:
            </strong>{' '}
            {currentScreenshot.caption}
          </div>
        </div>
      </div>

      <style>{`
        .phone-nav-btn {
          opacity: 0.7;
        }
        .smartphone-screen-container:hover .phone-nav-btn {
          opacity: 1;
        }
        .phone-nav-btn:hover {
          background-color: var(--accent-terracotta) !important;
          border-color: var(--accent-terracotta) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
        .gallery-thumb-btn:hover {
          opacity: 1 !important;
          border-color: var(--accent-terracotta);
          transform: translateY(-2px);
        }
      `}</style>

      {/* High-Resolution Screenshot Lightbox Modal */}
      <ScreenshotLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        screenshots={screenshots}
        currentIndex={currentIndex}
        onSelectIndex={(idx) => setCurrentIndex(idx)}
        projectTitle={project.title}
        playStoreUrl={project.playStoreUrl}
      />
    </>
  );
}
