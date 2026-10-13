export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  target,
  rel,
  className = '',
  ariaLabel,
  download,
  ...props
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn btn-primary';
      case 'secondary':
        return 'btn btn-secondary';
      case 'dark':
        return 'btn btn-dark';
      case 'ghost':
        return 'btn btn-ghost';
      case 'link':
        return 'btn-link-editorial';
      default:
        return 'btn btn-primary';
    }
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} strokeWidth={2} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} strokeWidth={2} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={`${getVariantClass()} ${className}`}
        target={target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel || (isExternal && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        download={download}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${getVariantClass()} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
