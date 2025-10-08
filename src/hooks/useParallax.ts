import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook to add parallax scroll reveal effect to elements
 * Adds 'is-visible' class when element enters viewport
 * 
 * @param options - Intersection Observer options
 * @returns ref to attach to the element you want to animate
 * 
 * @example
 * const imageRef = useParallax();
 * return <img ref={imageRef} className="parallax-image" src="..." />
 */
export function useParallax<T extends HTMLElement>(
  options: UseParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return elementRef;
}
