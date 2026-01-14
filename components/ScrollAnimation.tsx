"use client";
import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, {
        // Use a 0 value to trigger as soon as any pixel is visible
        threshold: 0,
        rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before bottom
    });

    const currentElement = domRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ minHeight: '1px' }} // Ensure element has height
    >
      {children}
    </div>
  );
}


