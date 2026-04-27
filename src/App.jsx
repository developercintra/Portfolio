import React, { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Formacao from './components/Formacao';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B1120]' : 'bg-[#FAFAFA]'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-[80px]">
        <Hero />
        <Formacao />
        <Sobre />
        <Experiencia />
        <Habilidades />
      </main>
      <Footer />
    </div>
  );
}

export default App;
