import { useEffect } from 'react';

/**
 * useScrollReveal hook
 * Automatically observes elements matching selector and adds 'revealed' class
 * when scrolled into viewport or on page load.
 */
export const useScrollReveal = (selector = '.reveal-slide-up', activePage = 'home') => {
  useEffect(() => {
    // Immediately reveal elements in viewport, and observe rest
    const timer = setTimeout(() => {
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '50px 0px 50px 0px',
        threshold: 0.01
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or near viewport, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 50);

    return () => clearTimeout(timer);
  }, [selector, activePage]);
};

export default useScrollReveal;
