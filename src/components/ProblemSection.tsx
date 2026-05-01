import { useScrollReveal } from '../hooks/useScrollReveal';
import MagicButton from './MagicButton';

export default function ProblemSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding mt-24 sm:mt-0">
      <div className={`container-max text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
        <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
          A verdade é dura:
        </h2>

        <p className="text-gray-mid text-base sm:text-lg lg:text-xl leading-relaxed mt-6 sm:mt-8 max-w-3xl mx-auto">
          Você pode ter o melhor produto ou serviço do mundo… mas se seu site não passa autoridade,
          as pessoas simplesmente não acreditam em você. E quando elas não acreditam…{' '}
          <span className="text-white font-semibold">elas não compram.</span>
        </p>

        <div className="mt-10 sm:mt-12">
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
