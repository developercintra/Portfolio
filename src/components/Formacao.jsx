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

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 flex-wrap">
          {portfolioData.formacao.map((item) => (
            <div key={item.id} className="flex flex-col items-center w-full lg:w-[280px]">

              <span className="text-[10px] text-[#6366F1] dark:text-[#818CF8] font-bold tracking-widest uppercase mb-4 text-center h-4">
                {item.tag}
              </span>

              <div className="w-[100px] h-[100px] rounded-full bg-white dark:bg-slate-800 border-[3px] border-[#6366F1] dark:border-[#818CF8] flex items-center justify-center shadow-lg mb-6 overflow-hidden transition-colors">
                {item.logo ? (
                  <img src={item.logo} alt="Logo Instituição" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-bold text-[#6B7280] dark:text-gray-400">LOGO</span>
                )}
              </div>

              <div className="bg-white dark:bg-slate-800 border border-[#E5E7EB] dark:border-slate-700 rounded-xl p-6 shadow-soft w-full flex-grow text-left transition-colors hover:-translate-y-1 hover:shadow-md duration-300">
                <h3 className="font-bold text-[#111827] dark:text-white text-[15px] mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#6366F1] dark:text-[#818CF8] text-[13px] font-medium mb-4">
                  {item.institution}
                </p>
                <div className="bg-[#F3F4F6] dark:bg-slate-700 rounded text-[11px] text-[#111827] dark:text-gray-200 inline-block px-2 py-0.5 mb-4">
                  {item.period}
                </div>
                <p className="text-[12px] text-[#374151] dark:text-gray-300 mb-2 font-medium">
                  {item.focus}
                </p>
                <p className="text-[12px] text-[#6B7280] dark:text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Formacao;
