import { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { target: 360, prefix: '', suffix: '+', label: 'PROJETOS', sublabel: 'para clientes em diversos países' },
  { target: 6, prefix: '', suffix: '+', label: 'DÍGITOS', sublabel: 'em faturamento dos clientes' },
  { target: 5, prefix: '', suffix: '+', label: 'ANOS', sublabel: 'no mercado' },
];

function AnimatedCounter({ target, prefix, suffix, label, sublabel }: {
  target: number; prefix: string; suffix: string; label: string; sublabel: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [hasStarted, target]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl text-white">
        {prefix}{count}<span className="text-blue-400">{suffix}</span>
      </div>
      <p className="font-syne font-bold text-lg sm:text-xl lg:text-2xl text-blue-400 mt-2 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-gray-mid text-xs sm:text-sm mt-1 uppercase tracking-wider">
        {sublabel}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-bg-dark mt-0 sm:-mt-24 pb-20 overflow-hidden z-20">
      <div className={`container-max relative z-10 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
