'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export function ScrollStackItem({ children, itemClassName = '' }: ScrollStackItemProps) {
  return (
    <div className={`scroll-stack-item sticky top-20 rounded-3xl p-8 lg:p-12 ${itemClassName}`}>
      {children}
    </div>
  );
}

export default function ScrollStack({ children, className = '' }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.scroll-stack-item');
    
    items.forEach((item, index) => {
      const isLast = index === items.length - 1;
      
      if (!isLast) {
        gsap.to(item, {
          scale: 0.95,
          opacity: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 100px',
            end: 'bottom 100px',
            scrub: 1,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={containerRef} className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
}