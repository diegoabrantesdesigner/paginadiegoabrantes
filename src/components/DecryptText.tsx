import { useState, useEffect, useCallback } from 'react';

interface DecryptTextProps {
  text: string;
  delay?: number;
  trigger?: boolean;
  resolveSpeed?: number;
}

const CHARS = '█▓▒░@#$%&!?';

export default function DecryptText({ 
  text, 
  delay = 0, 
  trigger = false, 
  resolveSpeed = 50 
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  const startAnimation = useCallback(() => {
    let currentIteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < currentIteration) {
              return char;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      currentIteration += 1 / 3; // Resolve slowly

      if (currentIteration >= maxIterations) {
        setDisplayText(text);
        setIsResolved(true);
        clearInterval(interval);
      }
    }, resolveSpeed);

    return () => clearInterval(interval);
  }, [text, resolveSpeed]);

  useEffect(() => {
    if (trigger && !isResolved) {
      const timeout = setTimeout(startAnimation, delay);
      return () => clearTimeout(timeout);
    }
  }, [trigger, delay, startAnimation, isResolved]);

  return <span>{displayText || (trigger ? '' : '')}</span>;
}
