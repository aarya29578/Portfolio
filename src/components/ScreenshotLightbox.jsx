import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GooglePlayIcon } from './Icons';

export default function ScreenshotLightbox({
  isOpen,
  onClose,
  screenshots = [],
  currentIndex = 0,
  onSelectIndex,
  projectTitle = '',
  playStoreUrl = '',
}) {
  const currentScreenshot = screenshots[currentIndex] || screenshots[0];

  const handleNext = useCallback(() => {
    if (screenshots.length <= 1) return;
    const nextIdx = (currentIndex + 1) % screenshots.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, screenshots.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    if (screenshots.length <= 1) return;
    const prevIdx = (currentIndex - 1 + screenshots.length) % screenshots.length;
    onSelectIndex(prevIdx);
  }, [currentIndex, screenshots.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentScreenshot) return null;

  return (
    <AnimatePresence>
      <div
        className="screenshot-lightbox-root"
        role="dialog"
        aria-modal="true"
        aria-label={`${projectTitle} screenshot viewer`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(0.75rem, 2vw, 1.5rem)',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(26, 24, 20, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        />

        {/* Modal Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '92vw',
            maxHeight: '94vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1E1C18',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(244, 239, 230, 0.18)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.65)',
            overflow: 'hidden',
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1.25rem',
              borderBottom: '1px solid rgba(244, 239, 230, 0.1)',
              backgroundColor: '#181613',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-terracotta)',
                  fontWeight: 600,
                  backgroundColor: 'rgba(215, 106, 66, 0.16)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-pill)',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentIndex + 1} / {screenshots.length}
              </span>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    color: '#F4EFE6',
                    fontWeight: 600,
                  }}
                >
                  {projectTitle}
                </span>
                <span style={{ color: '#8E877A', margin: '0 0.5rem' }}>—</span>
                <span style={{ fontSize: '0.86rem', color: '#BDB5A7' }}>
                  {currentScreenshot.title}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
              {playStoreUrl && (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-play-lightbox"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    backgroundColor: 'rgba(244, 239, 230, 0.08)',
                    color: '#F4EFE6',
                    border: '1px solid rgba(244, 239, 230, 0.2)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  title="Open application in Google Play Store"
                >
                  <GooglePlayIcon size={14} />
                  <span>View on Google Play ↗</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close screenshot preview"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244, 239, 230, 0.1)',
                  color: '#F4EFE6',
                  border: '1px solid rgba(244, 239, 230, 0.15)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Visual Display Area */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(0.75rem, 2vw, 1.75rem)',
              backgroundColor: '#12110E',
              overflow: 'hidden',
              minHeight: '280px',
            }}
          >
            {/* Previous Navigation Button */}
            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(30, 28, 24, 0.85)',
                  color: '#F4EFE6',
                  border: '1px solid rgba(244, 239, 230, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Screenshot Frame (preserves aspect ratio without cropping) */}
            <div
              style={{
                maxHeight: '68vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.img
                key={currentScreenshot.id}
                src={currentScreenshot.src}
                alt={currentScreenshot.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(244, 239, 230, 0.1)',
                }}
              />
            </div>

            {/* Next Navigation Button */}
            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(30, 28, 24, 0.85)',
                  color: '#F4EFE6',
                  border: '1px solid rgba(244, 239, 230, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnail Selector */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: '#181613',
              borderTop: '1px solid rgba(244, 239, 230, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}
          >
            {/* Caption */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#DCD4C7',
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {currentScreenshot.caption || currentScreenshot.alt}
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#8E877A',
                  whiteSpace: 'nowrap',
                }}
              >
                Use ← / → keys to browse
              </span>
            </div>

            {/* Thumbnail Strip */}
            {screenshots.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  paddingTop: '0.25rem',
                }}
              >
                {screenshots.map((s, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => onSelectIndex(idx)}
                      style={{
                        position: 'relative',
                        width: '56px',
                        height: '70px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        border: isActive
                          ? '2px solid var(--accent-terracotta)'
                          : '1px solid rgba(244, 239, 230, 0.2)',
                        opacity: isActive ? 1 : 0.6,
                        cursor: 'pointer',
                        padding: 0,
                        backgroundColor: '#12110E',
                        flexShrink: 0,
                        transition: 'all var(--transition-fast)',
                      }}
                      title={s.title}
                    >
                      <img
                        src={s.src}
                        alt={s.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
