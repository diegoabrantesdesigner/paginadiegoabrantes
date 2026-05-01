import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown, Bot, Megaphone, Wrench, Code, Calculator, Brain, Palette, LayoutTemplate } from 'lucide-react';
import MagicButton from './MagicButton';

type TabKey = 'dropshipping' | 'vendas';

interface Plan {
  name: string;
  recommended?: boolean;
  description: string;
  priceOld: string;
  priceInstallment: string;
  pricePix: string;
  link: string;
  items: string[];
  bonus?: string[];
}

const tabs: { key: TabKey; label: string }[] = [
  { key: 'dropshipping', label: 'Lojas de Dropshipping' },
  { key: 'vendas', label: 'Páginas de Vendas & Sites' },
];

const plans: Record<TabKey, Plan[]> = {
  dropshipping: [
    {
      name: 'PLANO PREMIUM',
      description: 'Ideal para validar o negócio na fase inicial com um site profissional.',
      priceOld: 'R$697,90',
      priceInstallment: '12x de R$50,67',
      pricePix: 'R$497,90 no Pix',
      link: 'https://cliente.diegoabrantes.com.br',
      items: [
        'Tema Padrão', 'Identidade Visual Completa', 'Logo + Favicon', '2 Banners Desktop',
        '2 Banners Mobile', '5 categorias', '6 produtos por coleção', 'Mockup Exclusivo',
        'Políticas e termos', 'E-mail profissional', 'Blindagem da loja', 'Checkout seguro',
        'Suporte horário comercial',
      ],
    },
    {
      name: 'PLANO ENTERPRISE',
      recommended: true,
      description: 'Ideal para criar uma marca forte com estrutura profissional que transmite confiança.',
      priceOld: 'R$1.597,90',
      priceInstallment: '12x de R$132,07',
      pricePix: 'R$1.297,90 no Pix',
      link: 'https://cliente.diegoabrantes.com.br',
      items: [
        'Tema exclusivo', 'Identidade visual única', 'Logo + favicon', '4 Variações da logo',
        '4 Banners desktop', '4 Banners mobile', '6 Banners informativos', '8 Coleções',
        '10 produtos por coleção', 'Produtos padronizados', '10 páginas de oferta',
        'Página de rastreio', '300 feedbacks para produtos', '20 feedbacks na página inicial',
        'Mockup exclusivo', 'Vídeo institucional', 'Políticas e termos', 'E-mail profissional',
        'Botão WhatsApp exclusivo', 'Domínio grátis', 'SEO avançado', 'Posicionamento estratégico',
        'Blindagem da loja', 'Checkout seguro', 'Suporte 24h', 'Grupo exclusivo',
        'Pixel Meta e Google', 'Códigos exclusivos', 'Acesso a atualizações',
      ],
      bonus: [
        'Instagram da loja', '9 posts feed', '5 destaques', '5 stories',
        '2.000 seguidores', '1.500 curtidas',
      ],
    },
    {
      name: 'PLANO BRANDING',
      description: 'Ideal para quem quer crescer no digital com estrutura sólida e escalável.',
      priceOld: 'R$997,90',
      priceInstallment: '12x de R$81,19',
      pricePix: 'R$797,90 no Pix',
      link: 'https://cliente.diegoabrantes.com.br',
      items: [
        'Tema Profissional', 'Identidade Visual', 'Logo + Favicon', '3 Banners desktop',
        '3 Banners mobile', '6 Coleções', '7 produtos por coleção', '2 Páginas de Oferta',
        'Página de rastreio', '100 feedbacks produtos', '10 feedbacks inicial', 'Mockup da marca',
        'Políticas e termos', 'E-mail profissional', 'Domínio grátis', 'SEO',
        'Blindagem', 'Checkout seguro', 'Suporte 24h',
      ],
      bonus: [
        'Instagram da loja', '6 posts', '5 destaques', '1.000 seguidores', '500 curtidas',
      ],
    },
  ],
  vendas: [
    {
      name: 'PÁGINA DE VENDAS',
      description: 'Ideal para vender um produto ou serviço específico.',
      priceOld: 'R$1.997,90',
      priceInstallment: '12x de R$152,42',
      pricePix: 'R$1.497,90 no Pix',
      link: 'https://cliente.diegoabrantes.com.br',
      items: [
        'Página ONE-PAGE', 'Copywriting focado em conversão', 'Design responsivo',
        'Integração WhatsApp', 'Domínio grátis 1 ano', 'Hero com CTA', 'Problema→Solução',
        'Prova social', 'Benefícios + Garantias', 'FAQ + CTA final', 'SEO on-page',
        'Pixels', 'Entrega 7 dias úteis', '2 rodadas de revisão', 'Suporte 7 dias',
      ],
    },
    {
      name: 'SITE INSTITUCIONAL',
      description: 'Ideal para empresas que precisam de autoridade e presença profissional.',
      priceOld: 'R$4.997,90',
      priceInstallment: '12x de R$305,06',
      pricePix: 'R$2.997,90 no Pix',
      link: 'https://cliente.diegoabrantes.com.br',
      items: [
        'Site 5 a 7 páginas', 'Wireframe + layout personalizado', 'Design moderno responsivo',
        'Copywriting persuasivo', 'Formulário + WhatsApp', 'Pixels', 'Chat', 'SEO básico',
        'Domínio e hospedagem grátis 1 ano', 'Performance otimizada', 'Blog inicial',
        'Página de captura', 'Entrega 10-15 dias úteis', '3 rodadas de revisão',
        'Manual de uso + treinamento', 'Suporte 15 dias',
      ],
    },
  ],
};

const bonusItems = [
  {
    icon: Bot,
    title: 'ChatBot de Atendimento',
    text: 'Automatize o primeiro contato com seus clientes e nunca perca uma venda por falta de resposta.',
    oldPrice: 'R$297,00',
  },
  {
    icon: Megaphone,
    title: 'Curso Google ADS',
    text: 'Aprenda a criar campanhas que geram tráfego qualificado e impulsionam suas vendas.',
    oldPrice: 'R$497,00',
  },
  {
    icon: Wrench,
    title: '30 Dias de Manutenção',
    text: 'Suporte técnico completo durante o primeiro mês para garantir que tudo funcione perfeitamente.',
    oldPrice: 'R$197,00',
  },
  {
    icon: Code,
    title: 'Códigos Exclusivos Shopify',
    text: 'Funcionalidades personalizadas que tornam sua loja única e otimizada para conversão.',
    oldPrice: 'R$397,00',
  },
  {
    icon: Calculator,
    title: 'Calculadora Inteligente',
    text: 'Exclusivo para lojistas: calculadora completa para precificação, taxas, margem de lucro e projeção de vendas.',
    oldPrice: 'R$197,00',
    exclusive: true,
  },
  {
    icon: Brain,
    title: 'Prompts Inteligentes',
    text: 'Comandos prontos para IA que criam copy, anúncios e estratégias em segundos.',
    oldPrice: 'R$147,00',
  },
  {
    icon: Palette,
    title: 'Pack Artes Editáveis - Canva',
    text: 'Centenas de modelos prontos e profissionais para suas redes sociais e anúncios.',
    oldPrice: 'R$247,00',
  },
  {
    icon: LayoutTemplate,
    title: 'Pack Páginas de Produtos',
    text: 'Templates de alta conversão para você replicar nas suas ofertas e escalar.',
    oldPrice: 'R$397,00',
  },
];

function PlanCard({ plan, allOpen, onToggle }: { plan: Plan; allOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`relative border-2 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
      plan.recommended
        ? 'bg-gradient-to-br from-blue-500/[0.08] to-cyan-500/[0.04] hover:from-blue-500/[0.14] hover:to-cyan-500/[0.08] shadow-xl shadow-blue-500/15'
        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
    }`} style={plan.recommended ? { borderColor: '#E4F4FF' } : undefined}>
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full" style={{ background: '#E4F4FF', color: '#101213' }}>
            Recomendado
          </span>
        </div>
      )}

      <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mt-1">{plan.name}</h3>
      <p className="text-gray-mid text-sm mt-2 leading-relaxed">{plan.description}</p>

      {/* Pricing */}
      <div className="mt-6">
        <p className="text-gray-mid text-sm line-through">{plan.priceOld}</p>
        <p className="font-syne font-bold text-2xl sm:text-3xl text-white mt-1">{plan.priceInstallment}</p>
        <p className="text-blue-400 text-sm mt-1">ou {plan.pricePix}</p>
      </div>

      {/* Accordion toggle */}
      <button
        onClick={onToggle}
        className="flex items-center justify-center gap-2 text-gray-mid hover:text-white text-sm mt-6 py-2 transition-colors"
      >
        Ver detalhes
        <ChevronDown size={16} className={`transition-transform duration-300 ${allOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`accordion-content ${allOpen ? 'open' : ''}`}>
        <ul className="space-y-2 pt-2 pb-4">
          {plan.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-mid">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        {plan.bonus && (
          <div className="border-t border-white/10 pt-4 mt-2">
            <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">Bônus</p>
            <ul className="space-y-2">
              {plan.bonus.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-mid">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">★</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-6 space-y-4">
        <MagicButton
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          SELECIONAR PLANO
        </MagicButton>
        <a
          href="https://wa.me/message/ON37MF5FNKZVH1"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm text-gray-mid hover:text-white transition-colors"
        >
          Ficou com dúvidas? Fale comigo
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabKey>('dropshipping');
  const [allDetailsOpen, setAllDetailsOpen] = useState(false);
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const handleToggleAll = () => {
    setAllDetailsOpen(!allDetailsOpen);
  };

  const handleTabChange = (key: TabKey) => {
    setActiveTab(key);
    setAllDetailsOpen(false);
  };

  return (
    <section id="planos" ref={ref} className="bg-bg-dark pt-4 sm:pt-6 pb-20 sm:pb-32 overflow-hidden">
      <div className="container-max px-6 sm:px-4">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Nossos Planos
          </h2>
        </div>

        {/* Premium Pill Toggle */}
        <div className={`flex justify-center mt-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative flex bg-white/[0.03] p-1 rounded-full border border-white/10 w-full max-w-[500px]">
            {/* Sliding Background */}
            <div 
              className="absolute top-1 bottom-1 left-1 bg-white/[0.07] rounded-full transition-all duration-500 ease-out z-0"
              style={{ 
                width: 'calc(50% - 4px)',
                transform: `translateX(${activeTab === 'dropshipping' ? '0%' : '100%'})`
              }}
            />
            
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative z-10 flex-1 px-2 sm:px-4 py-3 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab.key ? 'text-white' : 'text-gray-mid hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-12 sm:mt-16 tab-fade-enter" key={activeTab}>
          <div className={`grid gap-8 ${
            plans[activeTab].length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {plans[activeTab].map((plan, i) => (
              <PlanCard
                key={`${activeTab}-${i}`}
                plan={plan}
                allOpen={allDetailsOpen}
                onToggle={handleToggleAll}
              />
            ))}
          </div>
        </div>

        {/* Bonus */}
        <div className={`mt-20 sm:mt-24 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="font-syne font-bold text-xl sm:text-2xl text-white text-center uppercase tracking-widest">
            Bônus Exclusivos
          </h3>
          <p className="text-gray-mid text-sm text-center mt-3 max-w-lg mx-auto">
            Inclusos gratuitamente em todos os planos Enterprise e Branding.
          </p>

          {/* Desktop & Mobile: Interactive Glass Grid with Individual Scroll Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-7xl mx-auto">
            {bonusItems.map((item, i) => (
              <BonusCard key={i} item={item} index={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <MagicButton href="#planos" onClick={(e) => { e.preventDefault(); document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' }); }}>
              CONTRATAR AGORA
            </MagicButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusCard({ item, index }: { item: any; index: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ 
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px' 
  });
  const isExclusive = 'exclusive' in item && item.exclusive;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`group relative bg-white/[0.02] border rounded-2xl p-6 transition-all duration-1000 flex flex-col items-center text-center ${
        isExclusive ? 'border-emerald-500/20' : 'border-white/[0.06]'
      }`}
      style={{ 
        transform: isRevealed ? 'translateY(0)' : 'translateY(30px)',
        opacity: isRevealed ? 1 : 0,
        transitionDelay: `${(index % 4) * 100}ms`
      }}
    >
      {/* The Glass Overlay (Blur) - Fades out automatically on scroll reveal */}
      <div 
        className={`absolute inset-0 z-10 transition-all duration-1000 ease-in-out pointer-events-none rounded-2xl ${
          isRevealed ? 'backdrop-blur-0 bg-transparent' : 'backdrop-blur-xl bg-bg-dark/20'
        }`}
        style={{ transitionDelay: `${(index % 4) * 100 + 200}ms` }}
      />

      {isExclusive && (
        <span className="absolute -top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-20 shadow-lg shadow-emerald-500/20">
          Exclusivo
        </span>
      )}

      {/* Icon & Title */}
      <div className="relative z-20 transition-all duration-700 text-center flex flex-col items-center">
        <div className="mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border transition-all duration-700 ${
            isRevealed ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/10'
          }`}>
            <Icon size={28} className={`transition-colors duration-700 ${isRevealed ? 'text-blue-400' : 'text-white/20'}`} />
          </div>
        </div>

        <h4 className={`font-syne font-bold text-sm transition-all duration-700 uppercase tracking-widest px-2 ${
          isRevealed ? 'text-white' : 'text-white/20'
        }`}>
          {item.title}
        </h4>
      </div>

      {/* Content - Revealed with delay */}
      <div className={`relative z-20 transition-all duration-1000 mt-4 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${(index % 4) * 100 + 400}ms` }}
      >
        <p className="text-gray-mid text-xs leading-relaxed max-w-[200px] mx-auto">
          {item.text}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-white/20 text-[10px] line-through">de {item.oldPrice}</span>
          <span className="text-emerald-400 font-black text-xs uppercase tracking-tighter">Grátis para você</span>
        </div>
      </div>

      {/* Static Glow when revealed */}
      <div className={`absolute -inset-[1px] bg-gradient-to-br from-blue-500/10 via-white/5 to-blue-500/10 rounded-2xl transition-opacity duration-1000 -z-10 ${
        isRevealed ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}
