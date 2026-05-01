import React, { useRef, useState, useEffect } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-syne font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group border border-white/10 ${className}`}
      style={{
        backgroundColor: '#1c1f21',
        color: '#E4F4FF',
      }}
    >
      {/* The "Huly" Glow Effect */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(228, 244, 255, 0.15), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
          inset: -1,
          zIndex: 1
        }}
      />

      {/* Border Glow tracking */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(228, 244, 255, 0.4), transparent 100%)`,
          opacity: isHovered ? 1 : 0,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Static background highlight */}
      <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-300" />
    </a>
  );
}
