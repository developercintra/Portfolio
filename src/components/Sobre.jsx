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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {portfolioData.sobre.cards.map((card) => (
            <div key={card.id} className="bg-[#FAFAFA] dark:bg-slate-800 border border-[#E5E7EB] dark:border-slate-700 rounded-xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>

              <div>
                <h3 className="text-[17px] font-bold text-[#111827] dark:text-white mb-1 leading-tight">{card.title}</h3>
                <p className="text-[14px] text-[#6B7280] dark:text-gray-400 font-light leading-snug">
                  {card.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sobre;
