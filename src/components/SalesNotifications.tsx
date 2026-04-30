import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  city: string;
  plan: string;
  time: string;
}

const names = [
  'João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Júlia', 'Gabriel', 'Camila', 'Mateus', 'Letícia',
  'Guilherme', 'Beatriz', 'Vinícius', 'Mariana', 'Felipe', 'Carolina', 'Gustavo', 'Isadora',
  'Bruno', 'Fernanda', 'Thiago', 'Amanda', 'Ricardo', 'Patrícia', 'André', 'Juliana',
  'Eduardo', 'Larissa', 'Diego', 'Vanessa', 'Marcos', 'Aline', 'Rafael', 'Roberta', 'Marcelo'
];

const cities = [
  'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR', 'Florianópolis, SC',
  'Porto Alegre, RS', 'Salvador, BA', 'Recife, PE', 'Fortaleza, CE', 'Brasília, DF',
  'Goiânia, GO', 'Manaus, AM', 'Belém, PA', 'Vitória, ES', 'Natal, RN', 'Maceió, AL',
  'João Pessoa, PB', 'Aracaju, SE', 'Teresina, PI', 'São Luís, MA', 'Campo Grande, MS',
  'Cuiabá, MT', 'Porto Velho, RO', 'Rio Branco, AC', 'Boa Vista, RR', 'Macapá, AP', 'Palmas, TO'
];

const plans = [
  'Plano Premium (Loja)',
  'Plano Enterprise (Loja)',
  'Plano Branding (Loja)',
  'Página de Vendas (LP)',
  'Site Institucional'
];

const timeRanges = [
  'há 24 minutos', 'há 42 minutos', 'há 1 hora', 'há 2 horas', 'há 3 horas', 
  'há 5 horas', 'há 8 horas', 'há 12 horas', 'há 15 horas', 'há 20 horas', 'ontem'
];

export default function SalesNotifications() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const generateNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    const randomTime = timeRanges[Math.floor(Math.random() * timeRanges.length)];

    setNotification({
      id: Date.now(),
      name: randomName,
      city: randomCity,
      plan: randomPlan,
      time: randomTime
    });
    
    // Pequeno delay para garantir que a animação de entrada seja limpa
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Esconde após 8 segundos (mais tempo para ler)
    setTimeout(() => {
      setIsVisible(false);
    }, 8000);
  };

  useEffect(() => {
    // Primeira notificação após 20 segundos (não assustar logo de cara)
    const initialTimer = setTimeout(generateNotification, 20000);

    // Intervalo muito mais longo entre notificações (entre 60 e 120 segundos)
    const interval = setInterval(() => {
      if (!isVisible) {
        generateNotification();
      }
    }, Math.floor(Math.random() * 60000) + 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!notification) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-[9999] transition-all duration-1000 ease-in-out transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'
    }`}>
      <div className="bg-[#1c1f21]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[320px]">
        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/30 shadow-inner">
          <ShoppingBag className="w-6 h-6 text-blue-400" />
        </div>
        
        <div className="flex flex-col min-w-0">
          <p className="text-[11px] font-bold text-white leading-tight">
            <span className="text-blue-400">{notification.name}</span> de {notification.city}
          </p>
          <p className="text-[10px] text-white/60 mt-0.5 truncate">
            Acaba de adquirir: <span className="text-white/90 font-semibold">{notification.plan}</span>
          </p>
          <p className="text-[9px] text-white/30 mt-1 uppercase tracking-widest font-black">
            {notification.time}
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/10 hover:text-white transition-colors p-1"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Decorative glow - more subtle */}
      <div className="absolute -inset-1 bg-blue-500/5 blur-xl rounded-2xl -z-10 animate-pulse" />
    </div>
  );
}
