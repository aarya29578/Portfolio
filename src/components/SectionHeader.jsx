export default function SectionHeader({
  eyebrow,
  title,
  italicWord,
  titleEnd,
  description,
  split = false,
  className = '',
  align = 'left',
}) {
  return (
    <div
      className={`section-header-block ${split ? 'with-split' : ''} ${className}`}
      style={{ textAlign: align }}
    >
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="headline-section" style={{ marginTop: '0.65rem' }}>
          {title}
          {italicWord && (
            <>
              {' '}
              <em className="font-italic-serif text-terracotta">{italicWord}</em>
            </>
          )}
          {titleEnd && ` ${titleEnd}`}
        </h2>
      </div>

      {description && (
        <p className="editorial-lead" style={{ maxWidth: '640px' }}>
          {description}
        </p>
      )}
    </div>
  );
}
