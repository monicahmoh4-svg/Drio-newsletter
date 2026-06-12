import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Scroll-reveal via IntersectionObserver
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));

    // Progress bar
    const bar = document.getElementById('progress-bar');
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (bar) bar.style.width = scrolled + '%';

      // Back to top visibility
      const btn = document.getElementById('back-to-top');
      if (btn) {
        if (h.scrollTop > 600) btn.classList.add('visible');
        else btn.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div id="progress-bar" className="progress-bar" style={{ width: 0 }} />
      <Component {...pageProps} />
      <button
        id="back-to-top"
        className="back-to-top"
        onClick={scrollTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
