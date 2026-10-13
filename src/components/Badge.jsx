export default function Badge({ label, variant = 'default', icon: Icon, className = '' }) {
  const variantClass =
    variant === 'accent'
      ? 'tag-accent'
      : variant === 'dark'
      ? 'tag-dark'
      : '';

  return (
    <span className={`editorial-tag ${variantClass} ${className}`}>
      {Icon && <Icon size={12} strokeWidth={2} />}
      <span>{label}</span>
    </span>
  );
}
