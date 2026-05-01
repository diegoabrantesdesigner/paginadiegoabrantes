import { useScrollReveal } from '../hooks/useScrollReveal';
import MagicButton from './MagicButton';
import BlurRevealText from './BlurRevealText';

export default function CtaFinal() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className={`container-max text-center relative z-10 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
        <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight max-w-4xl mx-auto">
          <BlurRevealText 
            text="Se sua marca merece respeito, credibilidade e uma apresentação capaz de vender,"
            isRevealed={isRevealed}
          />{' '}
          <span style={{ color: '#E4F4FF' }}>
            <BlurRevealText 
              text="chegou a hora de fazer isso acontecer."
              isRevealed={isRevealed}
              delayOffset={3.5 * 0.08 + 0.5} // Start after first part
            />
          </span>
        </h2>

        <p className="text-gray-mid text-base sm:text-lg lg:text-xl leading-relaxed mt-6 sm:mt-8 max-w-2xl mx-auto">
          <BlurRevealText 
            text="Seu site não vai só apresentar o que você vende. Ele vai mostrar quem você é. E isso muda tudo."
            isRevealed={isRevealed}
            delayOffset={1.2} // Start after heading
          />
        </p>

        <div className="mt-10 sm:mt-12">
          <MagicButton 
            href="#planos" 
            onClick={(e) => { e.preventDefault(); document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            QUERO UM SITE DE ALTA PERFORMANCE
          </MagicButton>
        </div>
      </div>
    </section>
  );
}
