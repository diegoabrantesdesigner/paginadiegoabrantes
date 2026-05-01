import { useEffect, useState } from 'react';
import MagicButton from './MagicButton';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" key="hero-final-v14" className="relative bg-bg-dark overflow-hidden min-h-[700px] sm:min-h-[850px] lg:min-h-[1000px] pt-0">
      {/* Desktop Hero Banner — Visible on tablets and up */}
      <img 
        src="https://res.cloudinary.com/diegoabrantes/image/upload/v1776811102/Banner_Site_Principal_ld0etk.png" 
        alt="Diego Abrantes Banner Desktop" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto z-0 hidden sm:block"
      />

      {/* Mobile Hero Banner — Optimized for small screens */}
      <img 
        src="https://res.cloudinary.com/diegoabrantes/image/upload/v1776818482/Novo_Banner_Página_Mobile_ao6a8f.png" 
        alt="Diego Abrantes Banner Mobile" 
        className="absolute top-6 -bottom-[5px] left-1/2 -translate-x-1/2 w-full h-auto z-0 block sm:hidden scale-[1.05] translate-y-[4px]"
      />
      
      {/* Desktop Gradient — Smoother transition for horizontal banner */}
      <div 
        className="absolute bottom-0 left-0 w-full h-full z-[5] hidden sm:block" 
        style={{ background: 'linear-gradient(to bottom, transparent 40%, #101213 100%)' }}
      />

      {/* Mobile Gradient — Aggressive coverage for vertical banner */}
      <div 
        className="absolute bottom-0 left-0 w-full h-full z-[5] block sm:hidden" 
        style={{ background: 'linear-gradient(to bottom, transparent 25%, #101213 70%)' }}
      />

      <div className="absolute -bottom-4 sm:bottom-0 left-0 w-full z-10 pb-10 sm:pb-40 flex flex-col items-center text-center px-4">
        <div className="w-full max-w-[780px]">
          <h1
            className={`font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] transition-all duration-700 delay-[200ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ color: '#98A7AF' }}
          >
            Enquanto o mercado promete demais, eu entrego{' '}
            <span style={{ color: '#E4F4FF' }}>autoridade</span> de verdade.{' '}
            <span style={{ color: '#E4F4FF' }}>
              Seu site será impossível de ser ignorado
            </span>
          </h1>
          <p
            className={`text-gray-mid leading-relaxed mt-6 max-w-2xl mx-auto transition-all duration-700 delay-[400ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ fontSize: '1.125rem' }}
          >
            Eu desenvolvo sites que fazem exatamente isso — com design de alto padrão, narrativa clara e estratégia pensada para converter do início ao fim.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 delay-[600ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <MagicButton 
              href="#planos" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              CONTRATAR AGORA
            </MagicButton>
          </div>
        </div>
      </div>
    </section>
  );
}
