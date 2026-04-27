import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Formacao = () => {
  return (
    <section id="formacao" className="bg-[#EEF2FF] dark:bg-[#1E293B] py-24 pb-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#111827] dark:text-white">Formação Acadêmica</h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {portfolioData.formacao.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white dark:bg-[#151E32] rounded-2xl p-7 border border-gray-200 dark:border-slate-700/50 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-in-up"
            >
              {/* Top Row: Logo and Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-2.5 border border-gray-100 dark:border-slate-700/50 shadow-sm flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt="Logo Instituição" 
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <span className="text-[10px] font-bold text-gray-400">LOGO</span>
                  )}
                </div>
                <span className="text-[9px] text-[#6366F1] dark:text-[#818CF8] font-bold tracking-widest uppercase bg-[#6366F1]/10 dark:bg-[#6366F1]/20 px-2.5 py-1 rounded-full border border-[#6366F1]/20">
                  {item.tag}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <h3 className="font-bold text-[#111827] dark:text-white text-[17px] mb-1 leading-tight group-hover:text-[#6366F1] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#6366F1] dark:text-[#818CF8] text-[13px] font-semibold mb-4">
                  {item.institution}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-gray-100 dark:border-slate-700/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#6366F1] dark:text-[#818CF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] text-[#4B5563] dark:text-gray-300 font-medium">{item.period}</span>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] dark:bg-slate-800/80 rounded px-2.5 py-1 mb-4 inline-block border border-gray-200 dark:border-slate-700">
                  <p className="text-[11px] text-[#374151] dark:text-gray-300 font-bold uppercase tracking-tight">
                    {item.focus}
                  </p>
                </div>

                <p className="text-[13px] text-[#6B7280] dark:text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Formacao;
