import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus, ArrowUp, MessageCircle } from 'lucide-react';

type TabKey = 'sites' | 'dropshipping';

interface FAQData {
  q: string;
  a: string;
}

const faqData: Record<TabKey, FAQData[]> = {
  sites: [
    { q: 'O site é feito do zero?', a: 'Sim, 100% personalizado. Nada de templates prontos ou layouts genéricos — cada projeto é criado exclusivamente para o seu negócio e identidade visual.' },
    { q: 'Quanto tempo leva para entregar?', a: 'Em média de 7 a 20 dias úteis, dependendo da complexidade do projeto e da agilidade no envio dos materiais (textos, imagens e informações do seu negócio).' },
    { q: 'Você faz a copy (textos) também?', a: 'Sim! Títulos, textos das seções e narrativa de vendas já estão inclusos. Você não precisa se preocupar em escrever nada.' },
    { q: 'Funciona para qualquer nicho?', a: 'Sim. Já desenvolvi sites para os mais variados segmentos. A estrutura e a estratégia são adaptadas ao seu mercado e ao seu público.' },
    { q: 'O site vai aparecer no Google?', a: 'Sim. Todo site que entrego vem com SEO básico configurado, aumentando suas chances de ser encontrado nas buscas.' },
    { q: 'Vou conseguir mexer no site sozinho depois?', a: 'Sim. Entrego o projeto com uma orientação básica de uso para que você consiga fazer atualizações simples sem depender de ninguém.' },
    { q: 'E se eu não gostar do resultado?', a: 'Trabalho com rodadas de revisão até chegar no resultado que você aprova. O projeto só é finalizado com a sua satisfação.' },
    { q: 'Preciso ter domínio e hospedagem?', a: 'Você pode trazer o seu ou contratar junto comigo — cuido de tudo para você.' },
    { q: 'Quais são as formas de pagamento?', a: 'Aceito PIX à vista e cartão de crédito em até 12x.' },
    { q: 'Terei suporte depois que o site for entregue?', a: 'Sim. O suporte não acaba na entrega — estou disponível para te ajudar no que precisar após o projeto ir ao ar.' },
    { q: 'E se eu precisar de algo fora do escopo contratado?', a: 'É só me chamar. Avalio a demanda e apresento uma proposta clara, sem cobranças surpresa.' },
    { q: 'Você desenvolve sites para outros países também?', a: 'Sim! Desenvolvo sites e páginas de vendas para qualquer lugar do mundo, com suporte a múltiplos idiomas, moedas e adaptações conforme o mercado do cliente.' },
    { q: 'Como funciona a contratação?', a: 'É tudo simples e 100% online! Você escolhe o modelo que melhor se encaixa no seu projeto e é direcionado para a minha área de clientes, onde o processo acontece de forma automatizada. Por lá, você se cadastra, preenche o briefing com as informações do projeto, assina o contrato digitalmente e efetua o pagamento — que já libera os bônus automaticamente. A partir daí, o desenvolvimento começa e você acompanha tudo em tempo real pela própria área de clientes, sem precisar ficar perguntando "como está o meu projeto?' }
  ],
  dropshipping: [
    { q: 'Você monta a loja de dropshipping completa?', a: 'Sim. Crio a loja do zero, com design profissional, produtos configurados e pronta para vender.' },
    { q: 'Qual a margem de lucro esperada?', a: 'Varia conforme o nicho e o produto, mas em geral gira entre 30% e 60%. Estruturo sua loja pensando em maximizar as conversões desde o início.' },
    { q: 'Você indica fornecedores?', a: 'Sim. Indico fornecedores confiáveis e ajudo na seleção de produtos com boa margem e demanda no mercado.' },
    { q: 'Preciso ter CNPJ para começar?', a: 'Não necessariamente. É possível começar como pessoa física, mas oriento sobre a melhor forma de estruturar o negócio conforme ele cresce.' },
    { q: 'Já posso vender assim que a loja for entregue?', a: 'Sim. A loja é entregue configurada e pronta para receber pedidos.' },
    { q: 'Preciso entender de tecnologia para gerenciar a loja?', a: 'Não. A plataforma é intuitiva e entrego com um guia prático para você gerenciar pedidos, produtos e estoque sem dificuldade.' },
    { q: 'Você integra com meios de pagamento e frete?', a: 'Sim. A loja já é entregue com gateway de pagamento e cálculo de frete configurados.' },
    { q: 'É possível escalar a loja depois?', a: 'Sim. Desenvolvo o projeto pensando no crescimento do seu negócio, com estrutura preparada para novos produtos, tráfego pago e integrações futuras.' },
    { q: 'Quais são as formas de pagamento?', a: 'Aceito PIX à vista e cartão de crédito em até 12x.' },
    { q: 'Terei suporte após a entrega da loja?', a: 'Sim. Acompanho você na fase inicial para garantir que tudo funcione corretamente e que se sinta seguro para operar.' },
    { q: 'Você cria lojas para vender fora do Brasil também?', a: 'Sim! Crio lojas para qualquer país, com configurações adaptadas ao mercado local — idioma, moeda, meios de pagamento e fornecedores internacionais.' },
    { q: 'Como funciona a contratação?', a: 'É tudo simples e 100% online! Você escolhe o modelo que melhor se encaixa no seu projeto e é direcionado para a minha área de clientes, onde o processo acontece de forma automatizada. Por lá, você se cadastra, preenche o briefing com as informações do projeto, assina o contrato digitalmente e efetua o pagamento — que já libera os bônus automaticamente. A partir daí, o desenvolvimento começa e você acompanha tudo em tempo real pela própria área de clientes, sem precisar ficar perguntando "como está o meu projeto?' }
  ]
};

function FAQItem({ item, isOpen, onClick }: { item: FAQData; isOpen: boolean; onClick: () => void }) {
  return (
    <div 
      className={`mb-4 rounded-2xl transition-all duration-500 border border-white/[0.03] overflow-hidden ${
        isOpen 
        ? 'bg-[#18242F] border-blue-500/30' 
        : 'bg-transparent border-transparent'
      }`}
      style={{
        boxShadow: isOpen ? '0 0 20px rgba(59,130,246,0.15)' : 'none'
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
            boxShadow: isOpen ? 'none' : '0 0 12px rgba(59,130,246,0.3)'
          }}
        >
          {isOpen ? <ArrowUp size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ 
          maxHeight: isOpen ? '400px' : '0px',
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
  const [activeTab, setActiveTab] = useState<TabKey>('sites');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const handleTabChange = (key: TabKey) => {
    setActiveTab(key);
    setOpenIndex(null);
  };

  return (
    <section id="faq" ref={ref} className="bg-bg-dark section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 lg:gap-20 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Left — CTA & Tabs */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Dúvidas <br /> Frequentes
            </h2>
            <p className="text-gray-mid text-base sm:text-lg mt-6 max-w-sm">
              Tire suas dúvidas sobre o processo e a entrega do seu novo projeto digital.
            </p>
            
            {/* Custom Tab Switcher */}
            <div className="flex flex-col gap-3 mt-10">
              <button
                onClick={() => handleTabChange('sites')}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === 'sites'
                    ? 'bg-blue-500/10 border-blue-500/40 text-white'
                    : 'bg-white/5 border-white/5 text-gray-mid hover:bg-white/[0.08]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === 'sites' ? 'bg-blue-400 scale-125' : 'bg-gray-mid'}`} />
                <span className="font-syne font-bold text-sm uppercase tracking-wider">Sites & Páginas</span>
              </button>
              
              <button
                onClick={() => handleTabChange('dropshipping')}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  activeTab === 'dropshipping'
                    ? 'bg-blue-500/10 border-blue-500/40 text-white'
                    : 'bg-white/5 border-white/5 text-gray-mid hover:bg-white/[0.08]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTab === 'dropshipping' ? 'bg-blue-400 scale-125' : 'bg-gray-mid'}`} />
                <span className="font-syne font-bold text-sm uppercase tracking-wider">Dropshipping</span>
              </button>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/message/ON37MF5FNKZVH1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-3 w-full justify-center sm:w-auto"
              >
                <MessageCircle size={20} />
                WHATSAPP DO DESIGNER
              </a>
            </div>
          </div>

          {/* Right — Questions with animation */}
          <div className="flex flex-col transition-all duration-500" key={activeTab}>
            {faqData[activeTab].map((item, i) => (
              <FAQItem
                key={`${activeTab}-${i}`}
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
