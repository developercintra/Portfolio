import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Sobre = () => {
  return (
    <section id="sobre" className="bg-white dark:bg-[#0F172A] py-24 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 mt-8">

        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-bold text-[#111827] dark:text-white leading-tight">Sobre Mim</h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="flex-shrink-0">
            <div className="w-[220px] h-[220px] rounded-full overflow-hidden shadow-lg bg-[#E5E7EB] dark:bg-slate-700 flex items-center justify-center">
              <span className="text-[#9CA3AF] dark:text-gray-500 text-sm font-medium">Imagem</span>
            </div>
          </div>

          <div className="space-y-4 text-[17px] text-[#4B5563] dark:text-gray-300 leading-relaxed">
            <p>{portfolioData.sobre.description1}</p>
            <p>{portfolioData.sobre.description2}</p>
            <p>{portfolioData.sobre.description3}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sobre;
