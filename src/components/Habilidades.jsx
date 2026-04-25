import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const categoryConfig = [
  { color: '#10B981', gradient: 'from-emerald-500 to-teal-400' },
  { color: '#F59E0B', gradient: 'from-amber-500 to-orange-400' },
  { color: '#A855F7', gradient: 'from-purple-500 to-violet-400' },
  { color: '#6366F1', gradient: 'from-indigo-500 to-blue-400' },
];

const categoryIcons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M20.66 15.67A10 10 0 0 1 8.33 3.34"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
];

const Habilidades = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="habilidades" className="bg-white dark:bg-[#0F172A] py-24 pb-32 transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-4 mt-8">

        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-bold text-[#111827] dark:text-white leading-tight">Habilidades</h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.habilidades.map((category, idx) => {
            const config = categoryConfig[idx] || categoryConfig[0];

            return (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden bg-[#FAFAFA] dark:bg-slate-800/60 border border-[#E5E7EB] dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${config.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${config.color}15`, color: config.color }}
                    >
                      {categoryIcons[idx]}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111827] dark:text-white">{category.title}</h3>
                      <span className="text-[11px] text-[#9CA3AF] dark:text-gray-500 font-medium">{category.items.length} itens</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {category.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-default group hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all duration-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: `${idx * 120 + sIdx * 40 + 200}ms` }}
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200"
                          style={{ backgroundColor: config.color }}
                        ></span>
                        <span className="text-[14px] text-[#374151] dark:text-gray-300 font-medium group-hover:translate-x-1 transition-transform duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Habilidades;
