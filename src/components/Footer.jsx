import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { fullName, email, phone, location, linkedin } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0b1221] text-[#E2E8F0] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 font-light">

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{fullName}</h3>
            <p className="text-[14px] text-gray-400 leading-relaxed pr-8">
              Desenvolvedor Full Stack apaixonado por construir produtos reais.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-[14px] text-gray-400">
              <li><a href="#formacao" className="hover:text-white transition-colors">Formação</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#experiencia" className="hover:text-white transition-colors">Experiência</a></li>
              <li><a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-[14px] text-gray-400">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {phone}
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {location}
              </li>
              <li className="flex items-center space-x-6">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500">
          <p>© {currentYear} {fullName}. Todos os direitos reservados.</p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center hover:text-white transition-colors group cursor-pointer">
            <svg className="w-3 h-3 mr-2 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            Voltar ao topo
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
