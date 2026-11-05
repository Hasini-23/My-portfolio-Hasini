import React from 'react';
import StarfieldBackground from './components/StarfieldBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CreativeLab from './components/CreativeLab';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-midnight)' }}>
      {/* Dynamic Cosmic Starfield Canvas */}
      <StarfieldBackground />

      {/* Ambient Gradient Glow Orbs */}
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreativeLab />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
