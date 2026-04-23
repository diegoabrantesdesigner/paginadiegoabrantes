import { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// CAMINHOS DAS IMAGENS
const BEFORE_IMAGE = "/assets/antes.png";
const AFTER_IMAGE = "/assets/depois.png";

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
    <section id="antes-depois" ref={revealRef} className="bg-bg-dark py-20 overflow-hidden">
      <div className="container-max px-4">
        <div className={`text-center mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            O antes e o depois falam por si
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Design genérico vs. Design de alta conversão. Veja a diferença que um projeto estratégico faz no seu negócio.
          </p>
        </div>

        <div
          ref={containerRef}
          className={`relative max-w-5xl mx-auto aspect-[16/9] bg-[#101213] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none scroll-reveal delay-200 ${isRevealed ? 'revealed' : ''}`}
          onMouseDown={(e) => {
            e.preventDefault(); // Impede o comportamento de arrastar imagem do navegador
            setIsDragging(true);
            handleMove(e.clientX); // Permite "grudar" na posição do clique inicial
          }}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* Antes (Fundo) */}
          <img
            src={BEFORE_IMAGE}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10 z-20 select-none">
            Antes
          </div>

          {/* Depois (Camada Superior com Clip) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
              WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <img
              src={AFTER_IMAGE}
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20 z-20 select-none">
              Depois
            </div>
          </div>

          {/* Barra Divisora Arrastável */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-bg-dark transition-transform duration-200 ${isDragging ? 'scale-125' : 'scale-100'}`}>
              <span className="text-black font-bold text-lg select-none">↔</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

