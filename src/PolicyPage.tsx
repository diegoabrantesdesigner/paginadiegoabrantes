import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowButton from './components/ArrowButton';

interface PolicyPageProps {
  title: string;
  content: React.ReactNode;
}

export default function PolicyPage({ title, content }: PolicyPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4">
      <div className="container-max max-w-4xl">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-mid hover:text-white transition-colors mb-8 flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Voltar para o início
        </button>

        <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-12">
          {title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none text-gray-mid leading-relaxed space-y-6">
          {content}
        </div>

        <div className="mt-16 pt-10 border-top border-gray-800/30">
          <ArrowButton 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            VOLTAR AO INÍCIO
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}
