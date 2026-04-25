import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillCategory = ({ title, skills }) => (
  <div className="bg-[--color-card] p-6 rounded-xl border border-[--color-border] hover:border-[--color-primary] transition-colors">
    <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
          </div>
          <div className="w-full bg-[#0A0A0A] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[--color-primary] to-[--color-secondary] h-2 rounded-full" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative border-t border-[--color-border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Essas são as principais tecnologias que utilizo no meu dia a dia para construir soluções completas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Front-end" skills={portfolioData.skills.frontend} />
          <SkillCategory title="Back-end" skills={portfolioData.skills.backend} />
          <SkillCategory title="DevOps & Cloud" skills={portfolioData.skills.devops} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
