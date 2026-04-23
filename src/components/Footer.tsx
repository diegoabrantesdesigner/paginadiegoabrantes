import { Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const legalLinks = [
    { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
    { name: 'Política de Reembolso', path: '/politica-de-reembolso' },
    { name: 'Termos de Uso', path: '/termos-de-uso' }
  ];


  return (
    <footer className="bg-bg-dark border-t border-white/5">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="hover:opacity-80 transition-opacity inline-block">
              <img src="/logo.png" alt="Diego Abrantes — Web Designer" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Informações */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-4">
              Informações
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-mid hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Redes Sociais */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-4">
              Redes Sociais
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/diegoabrantes_designer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-mid hover:text-white text-sm transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/diegoabrantesdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-mid hover:text-white text-sm transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zM15.97 13.5h5.245c-.09-1.775-1.176-2.577-2.522-2.577-1.473 0-2.435.858-2.723 2.577zM9.089 20H1V4h8.089c3.24 0 5.045 1.697 5.045 4.297 0 1.622-.856 2.885-2.328 3.497 1.752.56 2.732 2.017 2.732 3.857 0 2.897-2.131 4.349-5.449 4.349zM4.5 11.5h4.089C10.272 11.5 11 10.493 11 9.297 11 7.944 10.174 7.25 8.589 7.25H4.5v4.25zM4.5 17h4.589C11.027 17 11.5 15.875 11.5 14.89c0-1.376-.803-2.14-2.411-2.14H4.5V17z"/></svg>
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/diegoabrantesdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-mid hover:text-white text-sm transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-mid text-sm">
                <Phone size={16} />
                (21) 97228-6402
              </li>
              <li>
                <a
                  href="mailto:comercial@diegoabrantes.com.br"
                  className="flex items-center gap-2 text-gray-mid hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail size={16} />
                  comercial@diegoabrantes.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-mid text-sm">
                <Clock size={16} />
                Seg à Sex: 09h às 20h
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-dark text-xs text-center">
            Copyright © 2026 Diego Abrantes — CNPJ: 61.814.267/0001-07. Todos os direitos reservados.
          </p>
          <p className="text-gray-dark/50 text-[10px] text-center mt-2 max-w-xl mx-auto">
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, esse site NÃO é endossado pelo Facebook de qualquer forma.
          </p>
        </div>
      </div>
    </footer>
  );
}
