/**
 * Animated marquee strip below the Hero.
 * Scrolls "DROPSHIPPING · PÁGINAS DE VENDAS · ECOMMERCE" continuously.
 */
export default function MarqueeStrip() {
  const items = [
    'DROPSHIPPING', 'PÁGINAS DE VENDAS', 'ECOMMERCE',
    'SITES INSTITUCIONAIS', 'BRANDING', 'DESIGN PREMIUM',
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-bg-dark border-y border-white/[0.06] overflow-hidden py-4 sm:py-5">
      <div
        className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
        style={{
          animation: 'marquee-scroll 25s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated.map((text, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-12">
            <span className="font-syne font-bold text-sm sm:text-base lg:text-lg tracking-[0.15em] text-white/20 hover:text-white/50 transition-colors duration-300">
              {text}
            </span>
            <span className="text-blue-500/40 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
