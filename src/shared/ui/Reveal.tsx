import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode, CSSProperties } from 'react';

type Variant = 'fade-up' | 'slide-left' | 'slide-right' | 'card-bounce';

interface RevealProps {
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  delay = 0,
  className = '',
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
