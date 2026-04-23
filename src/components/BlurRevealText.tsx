import { ReactNode } from 'react';

interface BlurRevealTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
  isRevealed?: boolean;
}

export default function BlurRevealText({ text, className = "", delayOffset = 0, isRevealed = false }: BlurRevealTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="blur-reveal-word"
          style={{
            animationDelay: isRevealed ? `${delayOffset + index * 0.08}s` : '0s',
            marginRight: '0.25em'
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
