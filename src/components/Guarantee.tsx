import { useScrollReveal } from '../hooks/useScrollReveal';
import { Zap } from 'lucide-react';
import './GuaranteeBadge.css';
import MagicButton from './MagicButton';

export default function Guarantee() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding border-t border-white/5">
      <div className={`container-max text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
        <div className="max-w-2xl mx-auto">
          
          {/* Concentric Guarantee Badge */}
          <div className="guarantee-badge-container">
            <div className="badge-outer">
              <svg viewBox="0 0 200 200" className="badge-text-svg">
                <path
                  id="badgePath"
                  d="M 100, 100 m -79, 0 a 79,79 0 1,1 158,0 a 79,79 0 1,1 -158,0"
                  fill="transparent"
                />
                <text fontSize="11" fontWeight="700" letterSpacing="2.2">
                  <textPath xlinkHref="#badgePath" startOffset="0">
                    GARANTIA INCONDICIONAL • 15 DIAS • GARANTIA INCONDICIONAL • 15 DIAS •
                  </textPath>
                </text>
              </svg>
              
              <div className="badge-inner">
                <Zap size={56} className="zap-icon" fill="white" />
              </div>
            </div>
          </div>

          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mt-8">
            Garantia Blindada
          </h2>

          <p className="text-gray-mid text-[0.95rem] sm:text-lg leading-relaxed mt-6">
            Depois que sua página estiver no ar, você tem{' '}
            <span className="text-white font-semibold">15 dias completos</span> para pedir qualquer
            ajuste fino: trocar textos, alinhar elementos, melhorar detalhes visuais, lapidar a copy
            e deixar tudo perfeitamente alinhado com sua marca.
          </p>

          <p className="text-gray-mid text-sm mt-6">
            <a
              href="https://www.instagram.com/diegoabrantes_designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              @diegoabrantes_designer
            </a>
          </p>

          <div className="mt-12 flex justify-center">
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
