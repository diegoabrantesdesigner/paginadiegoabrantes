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
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowCore = 'rgba(255, 255, 255, 0.8)';
  const glowColor = 'rgba(228, 244, 255, 0.35)';
  const glowColorStrong = 'rgba(228, 244, 255, 0.55)';

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-syne font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 overflow-visible group border border-white/10 ${className}`}
      style={{
        backgroundColor: '#1c1f21',
        color: '#E4F4FF',
        isolation: 'isolate'
      }}
    >
      {/* 1. Internal Glow Layer (The "Core" of the light) */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-300 rounded-xl overflow-hidden"
        style={{
          inset: 0,
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(90px 90px at ${mousePos.x}px ${mousePos.y}px, 
              ${glowCore} 0%, 
              rgba(255, 255, 255, 0.25) 45%, 
              transparent 70%),
            radial-gradient(140px 140px at ${mousePos.x}px ${mousePos.y}px, 
              ${glowColorStrong} 0%, 
              transparent 75%)
          `,
          mixBlendMode: 'screen',
          zIndex: 1
        }}
      />

      {/* 2. External Glow Leak (The light that goes OUTSIDE) */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500 rounded-xl"
        style={{
          inset: -12,
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(200px 200px at ${mousePos.x + 12}px ${mousePos.y + 12}px, 
              ${glowColor} 0%, 
              transparent 80%)
          `,
          filter: 'blur(25px)',
          zIndex: -1
        }}
      />

      {/* 3. Border Tracking Glow */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, rgba(228, 244, 255, 0.6), transparent 100%)`,
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

      {/* Static Background Base */}
      <div className="absolute inset-0 bg-[#1c1f21] rounded-xl -z-20" />
    </a>
  );
}
