'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  strokeWidth?: number;
  fillDelay?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  strokeWidth = 2,
  fillDelay = 0.5 
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Set initial styles
    gsap.set(element, {
      opacity: 0,
      scale: 0.8
    });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate in
    tl.to(element, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={textRef}
      className={`relative ${className}`}
      style={{
        WebkitTextStroke: `${strokeWidth}px currentColor`,
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 0 transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute inset-0 z-0"
        style={{
          WebkitTextStroke: 'none',
          WebkitTextFillColor: 'currentColor',
          clipPath: 'inset(100% 0 0 0)',
          animation: `fillText 2s ease-in-out ${fillDelay}s forwards`
        }}
      >
        {text}
      </span>
      
      <style jsx>{`
        @keyframes fillText {
          to {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </div>
  );
}