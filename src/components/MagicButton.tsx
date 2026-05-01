import React, { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface MagicButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export default function MagicButton({ children, href, onClick, className = '' }: MagicButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <style>{`
        .glow-btn-huly {
          --x: 50%;
          --y: 50%;
          --glow-core: rgba(255, 255, 255, 0.9);
          --glow-color: rgba(228, 244, 255, 0.4);
          --glow-color-strong: rgba(228, 244, 255, 0.7);
          
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          appearance: none;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          padding: 18px 40px;
          font-weight: 800;
          border-radius: 9999px;
          cursor: pointer;
          letter-spacing: .5px;
          transition: transform .2s ease, border-color .2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, .05), 0 8px 24px rgba(0, 0, 0, .08);
          isolation: isolate;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 11px;
        }

        .glow-btn-huly:hover {
          transform: translateY(-2px);
          border-color: #d1d5db;
        }

        .glow-btn-huly::before,
        .glow-btn-huly::after {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity .3s ease;
          will-change: background;
          z-index: -1;
        }

        .glow-btn-huly::before {
          background:
            radial-gradient(100px 100px at var(--x) var(--y),
              var(--glow-core) 0%,
              rgba(255, 255, 255, 0.4) 45%,
              transparent 75%),
            radial-gradient(160px 160px at var(--x) var(--y),
              var(--glow-color-strong) 0%,
              transparent 80%);
          mix-blend-mode: screen;
        }

        .glow-btn-huly::after {
          inset: -12px;
          border-radius: inherit;
          background:
            radial-gradient(220px 220px at var(--x) var(--y),
              var(--glow-color) 0%,
              transparent 85%);
          filter: blur(25px);
          z-index: -2;
        }

        .glow-btn-huly:hover::before,
        .glow-btn-huly:hover::after {
          opacity: 1;
        }
      `}</style>

      <a
        ref={buttonRef}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        className={`glow-btn-huly ${className}`}
        style={{
          '--x': `${mousePos.x}px`,
          '--y': `${mousePos.y}px`,
        } as React.CSSProperties}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ChevronRight size={18} className="transition-transform duration-300" />
        </span>
      </a>
    </>
  );
}
