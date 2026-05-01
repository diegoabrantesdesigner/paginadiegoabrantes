import { useScrollReveal } from '../hooks/useScrollReveal';
import MagicButton from './MagicButton';
import {
  Target,
  Shield,
  Clock,
  Gem,
  Palette,
  HeadphonesIcon,
  Layers,
  Smartphone,
} from 'lucide-react';

const items = [
  { icon: Target, text: 'Estrutura de conversão testada e validada' },
  { icon: Shield, text: 'Elementos de autoridade e credibilidade' },
  { icon: Clock, text: 'Entrega no prazo combinado' },
  { icon: Gem, text: 'Páginas ou lojas premium, construída do zero' },
  { icon: Palette, text: 'Design profissional com padrão de marca' },
  { icon: HeadphonesIcon, text: 'Suporte de verdade durante todo o processo' },
  { icon: Layers, text: 'Hierarquia visual que guia a leitura' },
  { icon: Smartphone, text: 'Versão mobile refinada e veloz' },
];

export default function WhatYouGet() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            O que você recebe
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Tudo o que seu site precisa para ser grande, sólida e impossível de ignorar.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16 stagger-children ${isRevealed ? 'revealed' : ''}`}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="scroll-reveal-child flex items-center gap-4 bg-white/[0.04] rounded-xl p-5 sm:p-6 border border-white/[0.08] hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <p className="text-white text-sm sm:text-base font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '700ms' }}>
          <MagicButton 
            href="#planos" 
            onClick={(e) => { e.preventDefault(); document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            CONTRATAR AGORA
          </MagicButton>
        </div>
      </div>
    </section>
  );
}
