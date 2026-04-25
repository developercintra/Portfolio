import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-[#0B1120]/60 backdrop-blur-xl border-b border-gray-200/30 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-lg leading-none shadow-md">
              GC
            </div>
            <span className="text-[#111827] dark:text-white font-bold text-lg tracking-tight">
              {portfolioData.personal.nameHeader}
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['formacao', 'sobre', 'experiencia', 'habilidades', 'contato'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-[13px] text-[#6B7280] dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] font-medium tracking-wide transition-colors uppercase"
              >
                {section === 'formacao' ? 'Formação' :
                 section === 'experiencia' ? 'Experiência' :
                 section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-[#6B7280] dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors p-2 rounded-full cursor-pointer focus:outline-none"
            >
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
