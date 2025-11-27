import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsExpertise from './components/SkillsExpertise';
import ScrollReveal from './components/ScrollReveal';
import './index.css';

// Lazy load components that are below the fold
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const appRef = useRef(null);

  // Mouse tracking for gradient orb effect across entire page
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        appRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="App" ref={appRef} style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsExpertise />
        </ScrollReveal>
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <ScrollReveal>
            <Experience />
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
