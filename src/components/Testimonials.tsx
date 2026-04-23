import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Play, CheckCircle } from 'lucide-react';
import ArrowButton from './ArrowButton';
import './Testimonials.css';

interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  youtubeId: string;
}

const testimonials: VideoTestimonial[] = [
  { id: 1, name: 'Gustavo', role: 'Loja de Dropshipping', youtubeId: 'Oporkj-F4pg' },
  { id: 2, name: 'Thiago', role: 'Loja de Dropshipping', youtubeId: 'fpVr1pknS88' },
  { id: 3, name: 'Bruno', role: 'Loja de Dropshipping', youtubeId: 'dYALwgQoaIw' },
  { id: 4, name: 'Filipe', role: 'Loja de Dropshipping', youtubeId: 'T1IF-6VxZS0' },
  { id: 5, name: 'Poliana', role: 'Loja de Dropshipping', youtubeId: 'HL6l_MXaSYE' },
  { id: 6, name: 'Ernane', role: 'Loja de Dropshipping', youtubeId: 'ACA7BBbrrYU' },
  { id: 7, name: 'Saulo', role: 'Loja de Dropshipping', youtubeId: 'l39xwrkl2KY' },
  { id: 8, name: 'Daniela', role: 'Loja de Dropshipping', youtubeId: '8Zwy_9gThPg' },
  { id: 9, name: 'Thiago', role: 'Loja de Dropshipping', youtubeId: 'k-myXBfqslc' },
  { id: 10, name: 'Ana', role: 'Loja de Dropshipping', youtubeId: 'kb6NH3faB3A' },
];

function VideoCard({ 
  testimonial, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  testimonial: VideoTestimonial;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.youtubeId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&modestbranding=1&rel=0`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || isPlaying) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Parallax effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setParallax({
      x: (x - centerX) / 20,
      y: (y - centerY) / 20
    });
  };

  return (
    <div className={`flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[300px] video-card-wrapper ${isHovered ? 'is-hovered' : ''}`}>
      <div 
        ref={cardRef}
        className={`video-card-premium aspect-[9/16] ${isHovered ? 'is-hovered' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          onMouseLeave();
          setParallax({ x: 0, y: 0 });
        }}
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <div className="video-spotlight" />
            
            {/* Thumbnail */}
            <img 
              src={thumbnailUrl} 
              alt={testimonial.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              style={{ 
                transform: isHovered ? `scale(1.1) translate(${parallax.x * -0.5}px, ${parallax.y * -0.5}px)` : 'scale(1)' 
              }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-1" />
            
            {/* Play Button */}
            <div 
              className="play-btn-wrapper"
              style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
            >
              <div className="play-btn-premium">
                <Play size={24} className="fill-current" />
              </div>
            </div>

            {/* Premium Info Overlay */}
            <div 
              className="video-info-overlay"
              style={{ transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5 + (isHovered ? 0 : 20)}px)` }}
            >
              <div className="verified-badge">
                <CheckCircle size={10} />
                <span>Resultado Real</span>
              </div>
              <h4 className="video-name">{testimonial.name}</h4>
              <p className="video-role">{testimonial.role}</p>
            </div>
          </>
        ) : (
          <iframe
            src={embedUrl}
            title={`${testimonial.name} Testimonial`}
            className="absolute inset-0 w-full h-full z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="clientes" ref={ref} className="bg-bg-dark section-padding overflow-hidden testimonials-container">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Experiências reais de clientes
          </h2>
          <p className="text-gray-mid text-base sm:text-lg mt-4">
            O padrão é o mesmo, independentemente do projeto.
          </p>
        </div>
      </div>

      <div className={`mt-12 sm:mt-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className={`flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8 pb-8 testimonials-list ${hoveredId !== null ? 'has-hovered' : ''}`}
          >
            <div className="flex-shrink-0 w-0 sm:w-[calc((100vw-1280px)/2)]" />
            {testimonials.map((t) => (
              <VideoCard 
                key={t.id} 
                testimonial={t} 
                isHovered={hoveredId === t.id}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
            ))}
            <div className="flex-shrink-0 w-0 sm:w-[calc((100vw-1280px)/2)]" />
          </div>

          <div className="container-max flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-white/60 hover:text-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-white/60 hover:text-white"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container-max">
        <div className={`text-center mt-10 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
          <ArrowButton
            href="https://www.instagram.com/stories/highlights/18050196478458339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VER MAIS DEPOIMENTOS
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}

