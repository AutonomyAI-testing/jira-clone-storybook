import { useState, useEffect, useRef } from "react";

export const useTypewriter = (text: string, speed: number = 50): string => {
  const [displayText, setDisplayText] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef<number>(0);

  useEffect(() => {
    // Reset animation when text changes
    setDisplayText("");
    currentIndexRef.current = 0;

    const animateText = () => {
      if (currentIndexRef.current < text.length) {
        setDisplayText(text.slice(0, currentIndexRef.current + 1));
        currentIndexRef.current += 1;
        timeoutRef.current = setTimeout(animateText, speed);
      }
    };

    // Start animation
    timeoutRef.current = setTimeout(animateText, speed);

    // Cleanup timeout on unmount or text change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return displayText;
};
