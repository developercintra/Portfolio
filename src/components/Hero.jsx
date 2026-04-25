import React from 'react';
import { portfolioData } from '../data/portfolioData';
import fotoGabriel from '../assets/fotoGabriel.jpeg';

const Hero = () => {
  const { fullName, role, descriptionHero, email, phone, location, status, linkedin } = portfolioData.personal;

  return (
    <section className="bg-[#FAFAFA] dark:bg-[#0B1120] min-h-[calc(100vh-80px)] flex items-center py-12 md:py-0 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          <div className="md:col-span-5 flex justify-center mt-10 md:mt-0">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg">
              <img
                src={fotoGabriel}
                alt="Gabriel Cintra"
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <h1 className="text-[2.2rem] sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3.1rem] font-bold text-[#111827] dark:text-white leading-tight tracking-tight whitespace-nowrap">
              {fullName}
            </h1>
            <h2 className="text-[1.25rem] md:text-[1.35rem] font-medium text-[#6366F1] dark:text-[#818CF8] mt-2 tracking-wide">
              {role}
            </h2>

            <p className="mt-6 text-[1.10rem] text-[#6B7280] dark:text-gray-300 leading-relaxed max-w-2xl font-light">
              {descriptionHero}
            </p>

            <div className="mt-8 space-y-3 text-[15px] text-[#6B7280] dark:text-gray-300">
              <div className="flex items-center">
                <div className="w-5 flex justify-center text-[#6366F1] dark:text-[#818CF8] opacity-80 mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
              </div>

              <div className="flex items-center">
                <div className="w-5 flex justify-center text-[#6366F1] dark:text-[#818CF8] opacity-80 mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>{phone}</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 flex justify-center text-[#6366F1] dark:text-[#818CF8] opacity-80 mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>{location} - <span className="text-emerald-500 font-bold">{status}</span></span>
              </div>

              <div className="flex items-center space-x-6 pt-2">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#0077b5] font-bold hover:underline tracking-wide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#111827] dark:text-white font-medium hover:underline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
