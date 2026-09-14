import type { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Renders a real photo when `src` is supplied; otherwise a labeled
 * placeholder so the client can see exactly which slot to fill in later.
 */
export default function ImagePlaceholder({ label, src, alt, className = '', style }: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
      />
    );
  }
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" opacity="0.5">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M21 15l-5.5-5.5-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
      <span className="img-placeholder-label">{label}</span>
    </div>
  );
}
