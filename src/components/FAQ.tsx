import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus, ArrowUp, MessageCircle } from 'lucide-react';

const faqItems = [
  { q: 'Tem suporte pós venda?', a: 'Sim, após cada entrega o time fica à disposição.' },
  { q: 'Quanto tempo leva para entregar?', a: 'De 5 a 15 dias dependendo da complexidade.' },
  { q: 'A página é feita do zero?', a: 'Sim. Nada de copiar template e mudar cor.' },
  { q: 'E se eu não gostar?', a: 'Eu ajusto. Não largo o projeto até chegar no nível certo.' },
  { q: 'Funciona em qualquer nicho?', a: 'Sim. A estrutura se adapta ao seu mercado.' },
  { q: 'Você faz copy completa também?', a: 'Sim. Títulos, seções e narrativa base inclusos.' },
  { q: 'Posso parcelar?', a: 'Sim. Até 12x com 6x sem juros ou à vista no Pix.' },
  { q: 'Eu vou ter suporte depois?', a: 'Sim. Suporte próximo durante e após a entrega.' },
  { q: 'E se eu precisar de algo fora do escopo?', a: 'Me chama. Tudo claro, direto e sem surpresas.' },
  { q: 'Qual a margem de lucro dos produtos?', a: 'Varia de 30 a 60% dependendo do produto.' },
  { q: 'Quais nichos vocês trabalham?', a: 'Casa e Cozinha, Acessórios, Eletrônicos, Infantil e Pets.' },
];

function FAQItem({ item, isOpen, onClick }: { item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div 
      className={`mb-4 rounded-2xl transition-all duration-500 border border-white/[0.03] overflow-hidden ${
        isOpen 
        ? 'bg-[#18242F] border-blue-500/30' 
        : 'bg-transparent border-transparent'
      }`}
      style={{
        boxShadow: isOpen ? '0 0 20px rgba(74,144,226,0.4)' : 'none'
      }}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-5 sm:p-6 text-left group"
      >
        <span className={`font-syne font-semibold text-base sm:text-lg transition-colors duration-300 pr-4 ${
          isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
        }`}>
          {item.q}
        </span>
        <div 
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-blue-500 text-white' : 'bg-white/5 text-blue-400'
          }`}
          style={{
            boxShadow: isOpen ? 'none' : '0 0 12px rgba(74,144,226,0.6)'
          }}
        >
          {isOpen ? <ArrowUp size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ 
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div 
          className="px-5 pb-6 sm:px-6 sm:pb-8 transition-all duration-500"
          style={{
            filter: isOpen ? 'blur(0px)' : 'blur(8px)',
            transform: isOpen ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <p className="text-gray-mid text-sm sm:text-base leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="bg-bg-dark section-padding">
      <div className="container-max">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Left — CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Dúvidas <br /> Frequentes
            </h2>
            <p className="text-gray-mid text-base sm:text-lg mt-6 max-w-sm">
              Tire suas principais dúvidas sobre o processo e a entrega.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/message/ON37MF5FNKZVH1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-3"
              >
                <MessageCircle size={20} />
                FALE COMIGO NO WHATSAPP
              </a>
            </div>
          </div>

          {/* Right — Questions */}
          <div className="flex flex-col">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
