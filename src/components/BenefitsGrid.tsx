import { useScrollReveal } from '../hooks/useScrollReveal';
import MagicButton from './MagicButton';
import InteractiveBenefits from './InteractiveBenefits';

export default function BenefitsGrid() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section id="beneficios" ref={ref} className="bg-bg-dark section-padding overflow-hidden">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight max-w-4xl mx-auto">
            O que muda quando seu site deixa de parecer "mais um" e começa a parecer{' '}
            <span style={{ color: '#E4F4FF' }}>marca grande:</span>
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            A mudança não é estética. É percepção. E percepção decide tudo.
          </p>
        </div>

        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          <InteractiveBenefits />
        </div>

        <div className={`text-center mt-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <MagicButton
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CONTRATAR AGORA
          </MagicButton>
        </div>
      </div>
    </section>
  );
}
