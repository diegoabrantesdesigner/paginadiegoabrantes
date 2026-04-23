/**
 * Partners/logos carousel strip. Infinite auto-scroll.
 * Place partner logo images in /public/partners/ (e.g., partner-1.png, partner-2.png)
 */
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Partner {
  name: string;
  logo: string; // path in /public/partners/
}

// Placeholder partners — replace with real logos later
const partners: Partner[] = [
  { name: 'Bagy', logo: '/partners/Bagy.svg' },
  { name: 'Correios', logo: '/partners/Correios.svg' },
  { name: 'GoDaddy', logo: '/partners/GoDaddy.svg' },
  { name: 'HostGator', logo: '/partners/HostGator.svg' },
  { name: 'Hostinger', logo: '/partners/Hostinger.svg' },
  { name: 'Locaweb', logo: '/partners/Locaweb.svg' },
  { name: 'Melhor Envio', logo: '/partners/Melhor envio.svg' },
  { name: 'Mercado Pago', logo: '/partners/Mercado pago.svg' },
  { name: 'Nuvemshop', logo: '/partners/Nuvemshop.svg' },
  { name: 'Shopify', logo: '/partners/Shopify.svg' },
  { name: 'Yampi', logo: '/partners/Yampi.svg' },
  { name: 'Zoho', logo: '/partners/Zoho.svg' },
];

const repeated = [...partners, ...partners, ...partners];

export default function PartnersStrip() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-bg-dark border-y border-white/[0.04] py-12 sm:py-16 overflow-hidden">
      <div className="container-max">
        <div className={`text-center scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <p className="text-gray-mid text-xs sm:text-sm uppercase tracking-[0.15em] font-medium">
            Empresas parceiras
          </p>
        </div>
      </div>

      <div className={`mt-8 sm:mt-10 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
        <div className="relative overflow-hidden">
          <div
            className="flex items-center gap-12 sm:gap-16 lg:gap-20"
            style={{
              animation: 'marquee-scroll 20s linear infinite',
              width: 'max-content',
            }}
          >
            {repeated.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[120px] sm:w-[140px] h-[50px] sm:h-[60px] flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  // Placeholder text-based logo
                  <div className="border border-white/10 rounded-lg px-4 py-2 text-white/20 text-xs font-medium tracking-wider whitespace-nowrap">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
