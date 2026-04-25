import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-[--color-border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] rounded-full mb-8"></div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              {portfolioData.about.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-[--color-card] rounded-lg border border-[--color-border]">
                <h3 className="text-[--color-accent] font-bold text-xl mb-1">+3</h3>
                <p className="text-sm text-gray-500">Anos Experiência</p>
              </div>
              <div className="p-4 bg-[--color-card] rounded-lg border border-[--color-border]">
                <h3 className="text-[--color-accent] font-bold text-xl mb-1">+20</h3>
                <p className="text-sm text-gray-500">Projetos Feitos</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
