import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

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
  'Hoje cedo', 'Há poucas horas', 'Ontem à tarde', 'Recentemente', 'Há 4 horas', 
  'Há 7 horas', 'Esta manhã', 'Finalizado ontem', 'Há 2 horas', 'Recentemente'
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
    
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Esconde após 10 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
  };

  useEffect(() => {
    const initialTimer = setTimeout(generateNotification, 25000);

    const interval = setInterval(() => {
      if (!isVisible) {
        generateNotification();
      }
    }, Math.floor(Math.random() * 90000) + 60000); // Entre 1min e 2.5min

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
      <div className="bg-[#1c1f21]/95 backdrop-blur-xl border border-white/10 p-4 pr-12 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[340px] relative">
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
          <CheckCircle2 className="w-6 h-6 text-blue-400" />
        </div>
        
        <div className="flex flex-col min-w-0 pr-2">
          <p className="text-[11px] font-bold text-white leading-tight">
            <span className="text-blue-400">{notification.name}</span> de {notification.city}
          </p>
          <p className="text-[10px] text-white/60 mt-0.5 truncate">
            Projeto contratado: <span className="text-white/90 font-semibold">{notification.plan}</span>
          </p>
          
          <div className="flex items-center gap-3 mt-1.5">
            <p className="text-[9px] text-white/30 uppercase tracking-widest font-black">
              {notification.time}
            </p>
            <a 
              href="#planos" 
              onClick={() => setIsVisible(false)}
              className="text-[9px] font-bold text-blue-400 hover:text-white uppercase tracking-wider underline underline-offset-2 transition-colors"
            >
              Ver Planos
            </a>
          </div>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/10 hover:text-white transition-colors p-1"
        >
          <svg className="w-3.2 h-3.2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="absolute -inset-1 bg-blue-500/5 blur-xl rounded-2xl -z-10" />
    </div>
  );
}
