import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Sobre = () => {
  return (
    <section id="sobre" className="bg-white dark:bg-[#0F172A] py-24 transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-4 mt-8">

        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-bold text-[#111827] dark:text-white leading-tight">Sobre Mim</h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>
        </div>

        <div className="space-y-6 text-[15px] text-[#6B7280] dark:text-gray-300 font-light leading-relaxed mb-16 text-center max-w-4xl mx-auto">
          <p>{portfolioData.sobre.description1}</p>
          <p>{portfolioData.sobre.description2}</p>
          <p>{portfolioData.sobre.description3}</p>
        </div>



      </div>
    </section>
  );
};

export default Sobre;
