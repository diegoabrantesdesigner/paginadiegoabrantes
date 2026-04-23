import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ArrowButton from './ArrowButton';

export default function About() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section id="sobre" ref={ref} className="bg-bg-dark section-padding overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container-max relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          
          {/* Photo - First in HTML means first on Mobile */}
          <div className="lg:order-last relative group">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 transition-all duration-100 ease-out"
              style={{
                boxShadow: '0 0 30px rgba(74,144,226,0.3)',
              }}
            >
              <img 
                src="/assets/diego-about.jpg" 
                alt="Diego Abrantes" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
              
              {/* Hover Glow Overlay via CSS for performance */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{ boxShadow: 'inset 0 0 50px rgba(74,144,226,0.5)' }} />
            </div>
            
            {/* Decorative accents around photo */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Text - Second in HTML means second on Mobile, first on Desktop due to lg:order-last on the photo */}
          <div className="lg:order-first">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Especialista em Conversão</span>
            </div>
            
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Quem sou eu?
            </h2>

            <div className="space-y-6 mt-8">
              <p className="text-gray-mid text-base sm:text-lg leading-relaxed">
                Eu sou <span className="text-white font-semibold">Diego Abrantes</span>, e nos últimos anos transformei dezenas de ideias em negócios digitais lucrativos. Não faço sites bonitos só para enfeitar portfolio. Faço sites que vendem, convertem e geram resultado real.
              </p>
              
              <p className="text-gray-mid text-base sm:text-lg leading-relaxed">
                Trabalho com e-commerce e dropshipping há tempo suficiente para saber exatamente o que funciona (e o que é só enrolação). Cada pixel, cada botão, cada linha de copy que coloco no seu site tem um propósito: fazer seu cliente clicar em <span className="text-white italic">"comprar"</span>.
              </p>

              <p className="text-gray-mid text-base sm:text-lg leading-relaxed">
                Atendo clientes em diversos países e o feedback é sempre o mesmo: mais vendas, mais autoridade, mais liberdade. Se você quer um site profissional feito por alguém que entende de design E de negócio, você está no lugar certo.
              </p>
            </div>

            <div className="mt-10">
              <ArrowButton
                href="https://www.instagram.com/diegoabrantes_designer"
                target="_blank"
                rel="noopener noreferrer"
              >
                ME SIGA NO INSTAGRAM
              </ArrowButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
