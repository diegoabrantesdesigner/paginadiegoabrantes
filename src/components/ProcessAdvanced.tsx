import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MagicButton from './MagicButton';
import { Search, Target, Layout, Palette, Code2, Rocket } from 'lucide-react';
import './ProcessAdvanced.css';

const steps = [
  {
    num: '01',
    title: 'Análise estratégica',
    text: 'Entendo profundamente seu mercado, concorrência e público para identificar onde está o dinheiro.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Definição de posicionamento',
    text: 'Estruturamos sua oferta para parecer premium e se destacar da concorrência.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Estrutura de conversão',
    text: 'Planejamos cada seção do site com foco total em vender, não só em estética.',
    icon: Layout,
  },
  {
    num: '04',
    title: 'Design de alto impacto',
    text: 'Criamos um visual moderno e profissional que aumenta a percepção de valor.',
    icon: Palette,
  },
  {
    num: '05',
    title: 'Desenvolvimento e otimização',
    text: 'Construímos um site rápido, responsivo e pronto para converter.',
    icon: Code2,
  },
  {
    num: '06',
    title: 'Entrega e ajustes finais',
    text: 'Refinamos cada detalhe para garantir máxima performance.',
    icon: Rocket,
  },
];

export default function ProcessAdvanced() {
  const [activeStep, setActiveStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: revealRef, isRevealed } = useScrollReveal<HTMLElement>();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const startTrigger = viewportHeight * 0.7;
      
      const sectionHeight = rect.height;
      const scrollPos = -rect.top + startTrigger;
      const totalScrollable = sectionHeight;
      
      let progress = (scrollPos / totalScrollable) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setLineHeight(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-48% 0px -48% 0px',
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveStep(index);
        }
      });
    }, observerOptions);

    const stepElements = document.querySelectorAll('.timeline-item');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="processo" 
      ref={(el) => {
        sectionRef.current = el;
        if (revealRef) (revealRef as any).current = el;
      }}
      className="process-timeline-container pb-20"
    >
      <div className="container-max mb-16 sm:mb-24">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Do conceito ao resultado
          </h2>
          <p className="text-gray-mid text-base sm:text-xl mt-4 max-w-2xl mx-auto">
            Uma jornada estratégica focada em transformar sua presença digital.
          </p>
        </div>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line-base">
          <div 
            className="timeline-line-fill" 
            style={{ height: `${lineHeight}%` }}
          />
        </div>

        <div className="timeline-items">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            
            return (
              <div 
                key={i} 
                className={`timeline-item ${isEven ? 'item-right' : 'item-left'} ${activeStep === i ? 'is-active' : ''} ${activeStep > i ? 'is-completed' : ''}`}
                data-index={i}
              >
                <div className="timeline-dot">
                  <div className="dot-inner" />
                </div>

                <div className="timeline-content-card">
                  <div className="step-card-glass">
                    <div className="card-header">
                      <div className="step-icon-circle">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <span className="step-number-tag">Etapa {step.num}</span>
                    </div>
                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-text">{step.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="timeline-cta">
        <div className="impact-phrase">
          <p className="impact-text-italic">
            "A diferença entre um site bonito e um site que vende <br className="hidden sm:block" /> está nos detalhes que você acabou de ver."
          </p>
        </div>

        <div className="cta-container">
          <MagicButton
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            QUERO UM SITE DE ALTA PERFORMANCE
          </MagicButton>
          
          <div className="social-proof-block">
            <div className="avatar-group">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="avatar-circle">
                  <img 
                    src={`/assets/clientes/cliente${i}.png`} 
                    alt={`Cliente ${i}`} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://i.pravatar.cc/100?img=${i + 10}`;
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="social-proof-text">Clientes reais. Resultados reais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
