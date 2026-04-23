import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'CLIENTES', href: '#clientes' },
  { label: 'PLANOS', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer
  const [isHovered, setIsHovered] = useState(false); // Desktop pill expansion
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const AvailabilityBadge = ({ className = "" }: { className?: string }) => (

    <div className={`flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 flex-shrink-0 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-[10px] text-gray-mid font-bold uppercase tracking-wider">Vagas disponíveis</span>
    </div>
  );

  return (
    <>
      {/* --- DESKTOP PILL MENU --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative flex items-center h-16 transition-all duration-500 
            bg-[#101213]/85 backdrop-blur-lg border border-white/10 
            overflow-hidden shadow-2xl group
          `}
          style={{ 
            width: isHovered ? '850px' : '160px',
            borderRadius: '16px',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="flex items-center w-full h-full px-6 relative justify-between">
            {/* Logo Container */}
            <div 
              className={`transition-all duration-400 flex items-center shrink-0`}
              style={{
                position: isHovered ? 'relative' : 'absolute',
                left: isHovered ? '0' : '50%',
                transform: isHovered ? 'none' : 'translateX(-50%)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img src="/logo.png" alt="Logo" className="h-10 sm:h-12 w-auto" />
              </Link>
            </div>

            {/* Nav Links (Centered between Logo and Badge) */}
            <div 
              className={`flex-1 flex justify-center items-center gap-8 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-100 delay-200' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-gray-mid hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Badge Container */}
            <div className={`transition-all duration-300 shrink-0 ${isHovered ? 'opacity-100 scale-100 delay-300' : 'opacity-0 scale-75 pointer-events-none absolute right-6'}`}>
              <AvailabilityBadge />
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVBAR (Full Width Style) --- */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center h-16 border-b border-white/5"
        style={{ background: 'rgba(16,18,19,0.85)', backdropFilter: 'blur(10px)' }}
      >
        <div className="relative w-full h-full flex items-center px-4">
          {/* Logo Absolute Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="absolute right-2 text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-bg-dark z-[60] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-12 gap-8">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white text-2xl font-syne font-bold uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            
            {/* Badge after FAQ link */}
            <AvailabilityBadge className="!bg-white/[0.03] !border-white/[0.08] mt-2" />
          </div>

          <a
            href="#planos"
            onClick={(e) => { e.preventDefault(); handleNavClick('#planos'); }}
            className="btn-primary mt-auto text-center"
          >
            CONTRATAR AGORA
          </a>
        </div>
      </div>
    </>
  );
}
