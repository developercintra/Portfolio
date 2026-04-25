import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experiencia = () => {
  return (
    <section id="experiencia" className="bg-[#FAFAFA] dark:bg-[#0B1120] py-24 pb-32 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#111827] dark:text-white">Experiência Profissional</h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>
        </div>

        <div className="max-w-[700px] mx-auto">
          {portfolioData.experiencia.map((xp) => (
            <div key={xp.id} className="w-full mb-16 last:mb-0">

              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-soft w-full border border-[#E5E7EB] dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h3 className="font-bold text-[#111827] dark:text-white text-[20px] leading-tight mb-2 sm:mb-0">
                    {xp.role}
                  </h3>
                  <span className="inline-block px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-[#6366F1] dark:text-[#818CF8] text-[12px] font-bold rounded whitespace-nowrap">
                    {xp.period}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-[#6366F1] dark:text-[#818CF8] text-[16px] font-bold">
                    {xp.company}
                  </p>
                  <p className="text-[13px] text-[#374151] dark:text-gray-300 font-medium mt-1">
                    {xp.location}
                  </p>
                </div>

                <p className="text-[14px] text-[#6B7280] dark:text-gray-400 leading-relaxed mb-6 font-light">
                  {xp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {xp.tags.map((tag, idx) => (
                    <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-[#6366F1] dark:text-[#818CF8] px-3 py-1 rounded text-[12px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experiencia;
