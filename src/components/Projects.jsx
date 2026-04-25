import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-[--color-border]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção de trabalhos recentes que demonstram minhas capacidades como FullStack e DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[--color-card] rounded-xl overflow-hidden border border-[--color-border] hover:-translate-y-2 hover:border-[--color-secondary] transition-transform duration-300 group flex flex-col h-full"
            >
              {/* Espaço para imagem do projeto futuramente */}
              <div className="h-48 bg-[#0A0A0A] w-full relative overflow-hidden flex flex-col justify-center items-center group-hover:bg-[#111]">
                <div className="absolute inset-0 bg-gradient-to-t from-[--color-card] to-transparent z-10"></div>
                <span className="text-gray-600 font-bold tracking-widest uppercase relative z-0">Project Thumbnail</span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-6 rounded-t-xl bg-[--color-card]">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[--color-accent] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0A0A0A] text-gray-300 text-xs rounded-full border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a href={project.githubUrl} className="text-sm font-medium text-white hover:text-[--color-primary] transition-colors border-b border-transparent hover:border-[--color-primary]">
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="text-sm font-medium text-white hover:text-[--color-secondary] transition-colors border-b border-transparent hover:border-[--color-secondary]">
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
