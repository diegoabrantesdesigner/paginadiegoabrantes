import { ArrowRight } from 'lucide-react';

/**
 * Primary CTA button with animated arrow circle on hover.
 * The arrow slides in from left on hover and slides out on leave.
 */
interface ArrowButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'primary-dark' | 'ghost';
  className?: string;
}

export default function ArrowButton({
  children,
  href,
  onClick,
  target,
  rel,
  variant = 'primary',
  className = 'w-full sm:w-auto sm:min-w-[320px]',
}: ArrowButtonProps) {
  const baseClass = variant === 'primary'
    ? 'btn-primary'
    : variant === 'primary-dark'
    ? 'btn-primary-dark'
    : 'btn-ghost';

  const arrowBg = variant === 'primary'
    ? 'bg-black/15'
    : 'bg-white/10';

  const arrowColor = variant === 'primary'
    ? 'text-black'
    : 'text-white';

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`${baseClass} group gap-3 pr-3.5 ${className}`}
    >
      <span>{children}</span>
      <span className={`
        inline-flex items-center justify-center
        w-8 h-8 rounded-full ${arrowBg}
        transition-all duration-400 ease-out
        translate-x-0 opacity-0 scale-75
        group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100
        -ml-2 group-hover:ml-0
      `}>
        <ArrowRight size={14} className={`${arrowColor} transition-transform duration-300 group-hover:translate-x-0.5`} />
      </span>
    </a>
  );
}
