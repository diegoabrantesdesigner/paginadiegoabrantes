import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ArrowButton from './ArrowButton';
import { Search, Palette, Code2, Rocket, HeadphonesIcon, BarChart3 } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Análise estratégica',
    text: 'Entendo seu mercado, público, concorrência e objetivos.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Design premium',
    text: 'Layouts exclusivos com foco em conversão e autoridade.',
    icon: Palette,
  },
  {
    num: '03',
    title: 'Desenvolvimento',
    text: 'Código limpo, rápido e otimizado para alta performance.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Lançamento',
    text: 'Publicação completa com configurações e otimizações.',
    icon: Rocket,
  },
  {
    num: '05',
    title: 'Suporte contínuo',
    text: 'Acompanhamento após entrega com ajustes e melhorias.',
    icon: HeadphonesIcon,
  },
  {
    num: '06',
    title: 'Resultados reais',
    text: 'Métricas, conversões e crescimento mensurável.',
    icon: BarChart3,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Do conceito ao resultado
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            O processo de criação é dividido em 06 pilares fundamentais.
          </p>
          <p className="text-blue-400/60 text-xs sm:text-sm mt-2">
            Passe o mouse ou toque em cada número
          </p>
        </div>

        {/* Number selector row */}
        <div className={`flex justify-center items-center gap-2 sm:gap-4 mt-10 sm:mt-14 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          {steps.map((step, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              onClick={() => setActiveStep(i)}
              className={`
                relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl
                flex items-center justify-center
                font-syne font-bold text-lg sm:text-xl lg:text-2xl
                transition-all duration-500 cursor-pointer
                ${activeStep === i
                  ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white scale-110 shadow-xl shadow-blue-500/30'
                  : 'bg-white/[0.05] border border-white/[0.08] text-white/30 hover:text-white/60 hover:bg-white/[0.08] hover:border-white/[0.15]'
                }
              `}
            >
              {step.num}
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div className={`mt-10 sm:mt-12 max-w-3xl mx-auto scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;

            return (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
                }`}
              >
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-blue-400" />
                  </div>
                  <h3 className="font-syne font-bold text-xl sm:text-2xl lg:text-3xl text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '800ms' }}>
          <ArrowButton
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CONTRATAR AGORA
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
