import { useEffect, useRef, useState } from 'react';
import './PerformancePremium.css';

const metrics = [
  { label: 'Desempenho', value: 97 },
  { label: 'Acessibilidade', value: 93 },
  { label: 'Práticas recomendadas', value: 96 },
  { label: 'SEO', value: 100 },
];

const ScoreCircle = ({ label, value }: { label: string; value: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const circumference = 283;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1000; // 1 second as per CSS transition
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
    }
  }, [isVisible, value]);

  const offset = circumference - (circumference * count) / 100;

  return (
    <div className="score" ref={containerRef}>
      <svg>
        <circle className="bg" cx="50" cy="50" r="45"></circle>
        <circle 
          className="progress" 
          cx="50" 
          cy="50" 
          r="45"
          style={{ strokeDashoffset: isVisible ? offset : circumference }}
        ></circle>
      </svg>
      <div className="number">{count}</div>
      <span>{label}</span>
    </div>
  );
};

export default function PerformancePremium() {
  return (
    <section className="performance-premium">
      <div className="performance-grid">
        {metrics.map((metric, index) => (
          <ScoreCircle key={index} label={metric.label} value={metric.value} />
        ))}
      </div>
    </section>
  );
}
