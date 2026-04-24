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

const features = [
  'Carregamento ultra rápido',
  'Experiência fluida em qualquer dispositivo',
  'Estrutura otimizada para conversão',
];

const MetricCircle = ({ label, value, delay, isRevealed }: { label: string; value: number; delay: number; isRevealed: boolean }) => {
  const [count, setCount] = useState(0);
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  
  // Progress is calculated based on the animated count
  const offset = circumference - (count / 100) * circumference;

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function for smoother count
          const easeOutQuad = (t: number) => t * (2 - t);
          const currentCount = Math.floor(easeOutQuad(progress) * end);
          
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isRevealed, value, delay]);

  return (
    <div 
      className={`metric-item ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="circle-container">
        <div className="circle-bg"></div>
        <svg className="svg-circle" viewBox="0 0 140 140">
          <circle
            className="progress-ring__bg"
            cx="70"
            cy="70"
            r={radius}
          />
          <circle
            className="progress-ring__circle"
            cx="70"
            cy="70"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={isRevealed ? offset : circumference}
          />
        </svg>
        <span className="metric-number">{count}</span>
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
            Velocidade que não só impressiona — <span>converte</span>.
          </h2>
          <p className="performance-subtitle">
            Sites rápidos geram mais retenção, mais confiança e mais vendas.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCircle
              key={index}
              label={metric.label}
              value={metric.value}
              delay={metric.delay}
              isRevealed={isRevealed}
            />
          ))}
        </div>

        <div className={`performance-features ${isRevealed ? 'revealed' : ''}`}>
          {features.map((feature, index) => (
            <div key={index} className="feature-tag">
              <Check className="check-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <p className={`google-tag ${isRevealed ? 'revealed' : ''}`}>
          “Testado com ferramentas do Google”
        </p>
      </div>
    </section>
  );
}
