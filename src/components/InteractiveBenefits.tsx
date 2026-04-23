import React, { useState, useRef, useEffect } from 'react';
import { Shield, Gem, Zap, TrendingUp, Award, Star } from 'lucide-react';
import './InteractiveBenefits.css';

const benefitsData = [
  {
    icon: Shield,
    title: 'Mais confiança imediata',
    text: 'Seu cliente bate o olho e já sente que está em um site profissional e seguro.',
  },
  {
    icon: Gem,
    title: 'Percepção de valor maior',
    text: 'O mesmo produto passa a parecer mais caro — e as pessoas aceitam pagar mais.',
  },
  {
    icon: Zap,
    title: 'Menos objeções',
    text: 'Um design forte elimina dúvidas antes mesmo do cliente pensar nelas.',
  },
  {
    icon: TrendingUp,
    title: 'Mais conversão',
    text: 'Cada detalhe visual guia o usuário até a compra de forma natural.',
  },
  {
    icon: Award,
    title: 'Autoridade de marca',
    text: 'Você deixa de parecer iniciante e começa a competir com players grandes.',
  },
  {
    icon: Star,
    title: 'Experiência memorável',
    text: 'Seu site não é só visto — ele é lembrado.',
  },
];

const BenefitCard = ({ icon: Icon, title, text, index, hoveredIndex, setHoveredIndex }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });

    // Parallax effect: move content slightly away from mouse
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) / 15;
    const moveY = (y - centerY) / 15;
    setParallax({ x: moveX, y: moveY });

    // Set CSS variables for spotlight
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setParallax({ x: 0, y: 0 });
  };

  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;

  return (
    <div 
      className={`benefit-card-container ${isHovered ? 'is-hovered' : ''} ${isAnyHovered && !isHovered ? 'is-dimmed' : ''}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={() => setHoveredIndex(index === hoveredIndex ? null : index)}
    >
      <div ref={cardRef} className={`benefit-card ${isHovered ? 'is-hovered' : ''}`}>
        <div className="card-spotlight"></div>
        
        <div className="icon-wrapper" style={{ transform: `translate(${parallax.x * 0.8}px, ${parallax.y * 0.8}px)` }}>
          <div className="icon-bg-glow"></div>
          <div className="icon-circle">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        </div>

        <div className="card-content" style={{ transform: `translate(${parallax.x * 0.4}px, ${parallax.y * 0.4}px)` }}>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default function InteractiveBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`interactive-grid ${hoveredIndex !== null ? 'has-hovered' : ''}`}>
      {benefitsData.map((benefit, index) => (
        <BenefitCard
          key={index}
          index={index}
          {...benefit}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}
