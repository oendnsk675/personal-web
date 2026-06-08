'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import type {
  CSSProperties,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import { useRef } from 'react';

type GlassButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'dark' | 'white';
};

type CursorStyle = CSSProperties & {
  '--cursorX': string;
  '--cursorY': string;
};

export default function GlassButton({
  children,
  className,
  href,
  icon,
  onClick,
  variant = 'dark',
}: GlassButtonProps) {
  const elementRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const isWhite = variant === 'white';

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect || !elementRef.current) return;

    elementRef.current.style.setProperty(
      '--cursorX',
      `${event.clientX - rect.left}px`
    );
    elementRef.current.style.setProperty(
      '--cursorY',
      `${event.clientY - rect.top}px`
    );
  }

  const content = (
    <>
      <div className="pointer-events-none select-none isolate absolute inset-0 z-[-1] overflow-hidden rounded-[inherit] opacity-80 transition-opacity group-active:opacity-70">
        <div
          className="absolute left-0 top-0 h-[400%] w-[200%] opacity-70"
          style={{
            background: isWhite
              ? 'radial-gradient(rgba(0, 0, 0, 0.08), transparent 40%)'
              : 'radial-gradient(rgba(255, 255, 255, 0.08), transparent 40%)',
            transform:
              'translateX(calc(var(--cursorX) - 50%)) translateY(calc(var(--cursorY) - 50%)) scale(1.7) rotate(-45deg) translateZ(0)',
          }}
        />
      </div>
      <div className="composite-exclude pointer-events-none absolute inset-[-1px] overflow-hidden rounded-[inherit] p-px opacity-70 transition-opacity group-hover:opacity-100 group-active:opacity-80">
        <div
          className="h-[650px] w-[250px]"
          style={{
            background: isWhite
              ? '#f5f5f5 radial-gradient(ellipse at center center, rgba(0, 0, 0, 0.18), rgba(245, 245, 245, 1) 22%)'
              : '#242424 radial-gradient(ellipse at center center, rgba(255, 255, 255, 0.22), rgba(40, 40, 40, 1) 22%)',
            transform:
              'translate(calc(var(--cursorX) - 50%), calc(var(--cursorY) - 50%)) rotate(80deg)',
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span
          className={cn(
            'glass-icon relative z-10 flex size-6 items-center justify-center rounded-lg border backdrop-blur-sm',
            isWhite ? 'bg-black/5' : 'bg-white/5'
          )}
        >
          <span
            className={cn(
              'absolute inset-0 rounded-[inherit] bg-linear-to-br opacity-80',
              isWhite
                ? 'from-white/40 via-white/80 to-white/40'
                : 'from-neutral-900/70 via-neutral-600 to-neutral-900/70'
            )}
          />
          <span className="relative z-10 flex size-full items-center justify-center">
            {icon}
          </span>
        </span>
      )}
    </>
  );

  const classes = cn(
    'group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 text-sm font-medium backdrop-blur-sm transition-transform active:scale-[0.98] cursor-custom',
    isWhite
      ? 'bg-white/70 text-neutral-950 shadow-[0_8px_30px_rgb(255_255_255_/_0.12)]'
      : 'bg-neutral-950/20 text-neutral-50',
    className
  );
  const style: CursorStyle = { '--cursorX': '50%', '--cursorY': '50%' };

  if (href) {
    return (
      <Link
        ref={elementRef as Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        className={classes}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={elementRef as Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={classes}
      style={style}
    >
      {content}
    </button>
  );
}
