import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';
import MagicButton from './MagicButton';

const portfolioItems = [
  { id: 1, label: 'Victore — Grife de Luxo', alt: 'Web Design Premium para Victore - E-commerce de Moda e Grife de Luxo', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/victore.png' },
  { id: 2, label: 'Nobre & Co. — E-commerce Moda Feminina', alt: 'Criação de Loja Virtual Nobre & Co - E-commerce de Moda Feminina e Acessórios', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/nobre-co.png' },
  { id: 3, label: 'Tendeli — Dropshipping Internacional', alt: 'Desenvolvimento de Loja de Dropshipping Internacional Tendeli - Design de Conversão', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/tendeli.png' },
  { id: 4, label: 'The King — Dropshipping Nacional', alt: 'Loja Profissional de Dropshipping Nacional The King - E-commerce de Alto Padrão', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/the-king.png' },
  { id: 5, label: 'Bull Strong — Suplementos', alt: 'Landing Page para Bull Strong Suplementos - Design de Alta Performance', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/bull-strong.png' },
  { id: 6, label: 'Brillamía — Dropshipping Internacional', alt: 'E-commerce Brillamía - Loja de Dropshipping Internacional de Jóias e Acessórios', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/brillamia.png' },
  { id: 7, label: 'TM House Store — Dropshipping com Mascote', alt: 'Loja TM House Store - Dropshipping com Mascote e Identidade Visual Única', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/tm-house.png' },
  { id: 8, label: 'Baseborn — E-commerce de Sneakers', alt: 'Web Design para Baseborn - E-commerce de Sneakers e Calçados de Colecionador', color: '', url: 'https://www.behance.net/diegoabrantesdesign', image: '/assets/portfolio/baseborn.png' },
];

// Duplicate items for infinite scroll effect
const infiniteItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

export default function Portfolio() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="portfolio" ref={ref} className="bg-bg-dark section-padding overflow-hidden">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            Toda marca séria precisa de uma{' '}
            <span style={{ color: '#E4F4FF' }}>apresentação forte</span>
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            A sua não pode ficar para depois. Alto padrão não é luxo — é posicionamento.
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        className={`mt-12 sm:mt-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: '200ms' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-6"
            style={{
              animation: `infinite-scroll 30s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'max-content',
            }}
          >
            {infiniteItems.map((item, i) => (
              <a
                key={`${item.id}-${i}`}
                href={item.url}
                target={item.url !== '#' ? '_blank' : undefined}
                rel={item.url !== '#' ? 'noopener noreferrer' : undefined}
                className="group relative flex-shrink-0 w-[240px] sm:w-[320px] lg:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background — image or gradient placeholder */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80`} />
                )}

                {/* Mockup overlay */}
                {!item.image && (
                  <div className="absolute inset-4 sm:inset-6 border border-white/20 rounded-lg flex flex-col p-3 sm:p-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                    </div>
                    <div className="w-2/3 h-2 bg-white/15 rounded mt-2" />
                    <div className="w-1/2 h-2 bg-white/10 rounded" />
                    <div className="flex-1 bg-white/5 rounded mt-2" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col items-center justify-center">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center px-4">
                    <p className="text-white font-syne font-bold text-sm sm:text-base">{item.label}</p>
                    <div className="flex items-center justify-center gap-1.5 mt-2 text-blue-300 text-xs font-medium">
                      <span>Ver projeto</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </div>

                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-max">
        <div className={`text-center mt-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <MagicButton
            href="https://www.behance.net/diegoabrantesdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            VER PORTFÓLIO
          </MagicButton>
        </div>
      </div>
    </section>
  );
}
