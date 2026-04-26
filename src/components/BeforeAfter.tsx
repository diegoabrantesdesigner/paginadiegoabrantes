import { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './BeforeAfter.css';

const BEFORE_IMAGE = "/assets/antes_tablet.png";
const AFTER_IMAGE = "/assets/depois_tablet.png";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal<HTMLElement>();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      window.addEventListener('mouseup', handleWindowMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isDragging, handleMove]);


  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="antes-depois" ref={revealRef} className="before-after-section">
      <div className="container-max px-4">
        <div className={`section-header ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="section-title">O antes e o depois falam por si</h2>
          <p className="section-subtitle">
            Design genérico vs. Design de alta conversão. Veja a diferença que um projeto estratégico faz no seu negócio.
          </p>
        </div>

        <div className={`mockup-wrapper ${isRevealed ? 'revealed' : ''}`}>
          <div
            ref={containerRef}
            className="mockup-container"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Antes (Fundo) */}
            <div className="image-container before">
              <img
                src={BEFORE_IMAGE}
                alt="Antes"
                className="mockup-image"
                draggable={false}
              />
              <div className="tag tag-before">Antes</div>
            </div>

            {/* Depois (Camada Superior com Clip) */}
            <div
              className="image-container after"
              style={{
                clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`
              }}
            >
              <img
                src={AFTER_IMAGE}
                alt="Depois"
                className="mockup-image"
                draggable={false}
              />
              <div className="tag tag-after">Depois</div>
            </div>

            {/* Slider Handle */}
            <div
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={`handle-button ${isDragging ? 'dragging' : ''}`}>
                <span className="handle-icon">↔</span>
              </div>
            </div>
          </div>
          
          <div className="drag-helper">
            <span>Arraste para ver a diferença</span>
          </div>
        </div>
      </div>
    </section>
  );
}
