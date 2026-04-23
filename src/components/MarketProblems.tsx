import { useScrollReveal } from '../hooks/useScrollReveal';
import ArrowButton from './ArrowButton';
import DecryptText from './DecryptText';

const problems = [
  'SEM ESTRUTURA',
  'SEM HIERARQUIA',
  'SEM FOCO',
  'SEM EMOÇÃO',
  'SEM CREDIBILIDADE',
];

export default function MarketProblems() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark section-padding">
      <div className="container-max text-center">
        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            A verdade é dura:
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            A maior parte dos sites do mercado parecem feitos às pressas.
          </p>
        </div>

        <div className={`flex flex-col items-center gap-3 sm:gap-4 mt-12 sm:mt-16 ${isRevealed ? 'revealed' : ''}`}>
          {problems.map((problem, i) => (
            <div
              key={problem}
              className="font-syne font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#98A7AF] transition-colors duration-500 cursor-default tracking-wider"
            >
              <DecryptText 
                text={problem} 
                trigger={isRevealed} 
                delay={i * 200}
                resolveSpeed={50}
              />
            </div>
          ))}
        </div>

        <div className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '1200ms' }}>
          <p className="text-gray-mid text-base sm:text-lg mt-12 max-w-2xl mx-auto leading-relaxed">
            E você sabe o que acontece quando o cliente sente isso?{' '}
            <span className="text-white font-semibold">Ele fecha a aba. E leva o dinheiro junto.</span>
          </p>

          <div className="mt-10">
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
      </div>
    </section>
  );
}
