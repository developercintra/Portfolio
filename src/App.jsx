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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="font-sans min-h-screen transition-colors duration-300">
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
