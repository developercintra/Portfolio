import imgCruzeiro from '../assets/universidadecruzeirodosul_logo.jpg';
import imgSenac from '../assets/logo_senac_default.png';
import imgSenai from '../assets/senaiLogo.svg';

export const portfolioData = {
  personal: {
    nameHeader: "Gabriel Cintra",
    fullName: "Gabriel Cintra Campos Antonio",
    role: "Desenvolvedor Full Stack | Junior",
    email: "gabrielcintracantonio@gmail.com",
    phone: "+55 (11) 97859-8513",
    location: "São Paulo, SP, Brasil",
    status: "Disponível para mudança",
    github: "https://github.com/developercintra",
    linkedin: "https://www.linkedin.com/in/gabriel-cintra-developer/",
    descriptionHero: "Construo aplicações web do zero até o deploy em produção. 8 meses de experiência real com Node.js, React, Docker e VPS Linux — incluindo sistemas de alto tráfego e integração com APIs de pagamento."
  },
  formacao: [
    {
      id: 1,
      tag: "GRADUAÇÃO",
      logo: imgCruzeiro,
      title: "Ciências da Computação",
      institution: "Universidade Cruzeiro do Sul",
      period: "Fev. 2025 - Dez. 2029",
      focus: "Bacharelado | Noturno | Cursando",
      description: "Formação em computação com foco em desenvolvimento de software, arquitetura de sistemas e fundamentos de ciência da computação."
    },
    {
      id: 2,
      tag: "TÉCNICO",
      logo: imgSenac,
      title: "Desenvolvimento Web",
      institution: "Senac São Miguel",
      period: "2024 - 2025",
      focus: "Curso Técnico",
      description: "Formação técnica em desenvolvimento web com foco em tecnologias front-end e back-end para construção de aplicações modernas."
    },
    {
      id: 3,
      tag: "CERTIFICAÇÃO",
      logo: imgSenai,
      title: "Programação Python",
      institution: "SENAI Guarulhos",
      period: "2024",
      focus: "Curso de Qualificação",
      description: "Capacitação em programação Python com aplicações práticas em automação e desenvolvimento de scripts."
    }
  ],
  sobre: {
    description1: "Sou desenvolvedor Full Stack com experiência real em produção — não só em projetos pessoais. Já trabalhei com sistemas de alto tráfego, integrei APIs de pagamento, autenticação e webhooks, e faço deploy em servidores VPS Linux via SSH.",
    description2: "Uso Node.js, React e Docker no dia a dia, e estudo Ciências da Computação na Cruzeiro do Sul para solidificar a base teórica por trás do que já pratico.",
    description3: "Estou buscando uma equipe onde possa crescer tecnicamente e contribuir de verdade — não só executar tarefas."
  },
  experiencia: [
    {
      id: 1,
      role: "Desenvolvedor Full Stack",
      period: "08 meses",
      company: "Empresa de tecnologia · São Paulo, SP",
      location: "São Paulo, SP",
      description: "Desenvolvimento e manutenção de aplicações web de alto tráfego. Integração de APIs REST, incluindo pagamentos, autenticação e webhooks. Criação de novas funcionalidades, correção de bugs e refatorações de código. Conteinerização de aplicações com Docker e deploy em VPS Linux via SSH. Atuação seguindo metodologias ágeis (Scrum e Kanban).",
      tags: ["Node.js", "React", "Docker", "APIs REST", "PHP/Laravel", "MySQL"]
    }
  ],
  habilidades: [
    {
      title: "Frontend",
      colorClass: "text-[#6366f1] border-[#6366f1] bg-[#6366f1]/10 hover:bg-[#6366f1]/20",
      items: ["React", "Vue", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      colorClass: "text-[#10b981] border-[#10b981] bg-[#10b981]/10 hover:bg-[#10b981]/20",
      items: ["Node.js", "Laravel", "APIs REST", "Express"]
    },
    {
      title: "Banco de Dados",
      colorClass: "text-[#f59e0b] border-[#f59e0b] bg-[#f59e0b]/10 hover:bg-[#f59e0b]/20",
      items: ["MySQL", "SQL", "MongoDB"]
    },
    {
      title: "DevOps & Ferramentas",
      colorClass: "text-[#ec4899] border-[#ec4899] bg-[#ec4899]/10 hover:bg-[#ec4899]/20",
      items: ["Docker", "VPS", "Linux", "SSH", "Git", "Postman", "Insomnia"]
    },
    {
      title: "Metodologias",
      colorClass: "text-[#a855f7] border-[#a855f7] bg-[#a855f7]/10 hover:bg-[#a855f7]/20",
      items: ["Scrum", "Kanban", "Clean Code"]
    },
    {
      title: "Idiomas",
      colorClass: "text-[#06b6d4] border-[#06b6d4] bg-[#06b6d4]/10 hover:bg-[#06b6d4]/20",
      items: ["Português (Nativo)", "Espanhol (Avançado)"]
    }
  ],
};
