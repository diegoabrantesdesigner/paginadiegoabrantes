import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/ON37MF5FNKZVH1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-whatsapp hover:scale-110 group"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-white group-hover:scale-110 transition-transform" />
    </a>
  );
}
