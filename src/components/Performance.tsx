import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Performance.css';

const metrics = [
  { label: 'Desempenho', value: 97, delay: 0 },
  { label: 'Acessibilidade', value: 93, delay: 100 },
  { label: 'Práticas recomendadas', value: 96, delay: 200 },
  { label: 'SEO', value: 100, delay: 300 },
];

const MetricCard = ({ label, value, delay, isRevealed }: { label: string; value: number; delay: number; isRevealed: boolean }) => {
  const [count, setCount] = useState(0);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    if (isRevealed) {
      const timeout = setTimeout(() => {
        let start = 0;
        const duration = 2000;
        const frames = 60;
        const increment = value / frames;
        const intervalTime = duration / frames;
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, intervalTime);
        
        return () => clearInterval(timer);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isRevealed, value, delay]);

  const offset = circumference - (count / 100) * circumference;

  return (
    <div 
      className={`metric-card ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="circle-wrapper">
        <div className="circle">
          <svg className="svg-overlay" viewBox="0 0 120 120">
            <circle 
              className="circle-bg-track" 
              cx="60" 
              cy="60" 
              r={radius} 
            />
            <circle 
              className="circle-progress" 
              cx="60" 
              cy="60" 
              r={radius} 
              style={{ strokeDashoffset: isRevealed ? offset : circumference }}
            />
          </svg>
          <span className="metric-number">{count}</span>
        </div>
      </div>
      <span className="metric-label">{label}</span>
    </div>
  );
};

export default function Performance() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="performance" ref={ref} className="performance-section">
      <div className="performance-container">
        <div className={`performance-header ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="performance-title">
            Velocidade que não só impressiona — converte.
          </h2>
          <p className="performance-subtitle">
            Sites rápidos geram mais retenção, mais confiança e mais vendas.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index} 
              label={metric.label} 
              value={metric.value} 
              delay={metric.delay}
              isRevealed={isRevealed} 
            />
          ))}
        </div>

        <div className={`performance-footer ${isRevealed ? 'revealed' : ''}`}>
          <div className="feature-list">
            <div className="feature-item">
              <Check size={20} />
              <span>Carregamento ultra rápido</span>
            </div>
            <div className="feature-item">
              <Check size={20} />
              <span>Experiência fluida em qualquer dispositivo</span>
            </div>
            <div className="feature-item">
              <Check size={20} />
              <span>Estrutura otimizada para conversão</span>
            </div>
          </div>
          <p className="google-note">“Testado com ferramentas do Google”</p>
        </div>
      </div>
    </section>
  );
}
