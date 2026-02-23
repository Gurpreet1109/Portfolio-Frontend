import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)', margin: '0 32px' }} />
        <Skills />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', margin: '0 32px' }} />
        <Projects />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.2), transparent)', margin: '0 32px' }} />
        <Education />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)', margin: '0 32px' }} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
