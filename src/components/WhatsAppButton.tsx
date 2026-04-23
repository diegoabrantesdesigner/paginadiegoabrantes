import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 2 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    // Hide tooltip after 7 seconds (5 seconds visible)
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Encoded message for the link
  const message = encodeURIComponent("Olá Diego! Vim pelo site e quero criar meu projeto com você.");
  const whatsappUrl = `https://wa.me/message/ON37MF5FNKZVH1?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip Message */}
      <div 
        className={`bg-white text-gray-900 px-4 py-2 rounded-2xl shadow-2xl text-sm font-medium transition-all duration-500 transform origin-right ${
          showTooltip ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75'
        }`}
        style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }}
      >
        Dúvidas? Fale direto comigo!
        {/* Arrow for the tooltip */}
        <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45" />
      </div>

      {/* The Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative overflow-hidden"
        aria-label="Fale pelo WhatsApp"
      >
        {/* WhatsApp Official Logo SVG */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Pulse Effect Rings */}
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping pointer-events-none" />
      </a>
    </div>
  );
}
