import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-[--color-border] bg-gradient-to-b from-[#0A0A0A] to-[#111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Vamos Trabalhar <span className="text-gradient">Juntos?</span>
        </h2>
        
        <p className="text-gray-400 mb-10 text-lg">
          Atualmente estou aberto a novas oportunidades. Seja para um convite de trabalho, um freela ou apenas para dar um "Oi", sinta-se à vontade para me contatar.
        </p>
        
        <a 
          href={`mailto:${portfolioData.personal.email}`}
          className="inline-block px-8 py-4 rounded-md bg-gradient-to-r from-[--color-primary] to-[--color-secondary] text-white font-bold hover:scale-105 transition-transform"
        >
          Diga Olá
        </a>
        
      </div>
    </section>
  );
};

export default Contact;
