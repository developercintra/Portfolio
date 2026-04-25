import imgCruzeiro from '../assets/universidadecruzeirodosul_logo.jpg';

export const portfolioData = {
  personal: {
    nameHeader: "Gabriel Cintra",
    fullName: "Gabriel Cintra Campos Antonio",
    role: "Desenvolvedor FullStack | DevOps",
    email: "gabrielcintracantonio@gmail.com",
    phone: "+55 (11) 97859-8513",
    location: "São Paulo, SP, Brasil",
    status: "Disponível para mudança",
    github: "https://github.com/developercintra",
    linkedin: "https://www.linkedin.com/in/gabriel-cintra-developer/",
    descriptionHero: "Desenvolvedor com forte motivação para gerar impacto real. Possuo experiência na construção de aplicações escaláveis, gestão de infraestrutura em nuvem e modelagem de arquiteturas de software, com foco em integrar áreas e estruturar processos eficientes que impulsionem o crescimento sustentável da organização. Além disso, tenho interesse em áreas complementares ao desenvolvimento, como melhoria contínua, inovação e arquitetura de soluções."
  },
  formacao: [
    {
      id: 1,
      tag: "GRADUAÇÃO ACADÊMICA",
      logo: imgCruzeiro,
      title: "Bacharel em Ciência da Computação",
      institution: "Universidade Cruzeiro do Sul",
      period: "Fev. 2025 - Dez. 2029",
      focus: "Formação em andamento 2 periodo",
      description: "Formação em computação com foco em desenvolvimento de software e arquitetura de sistemas."
    },
    {
      id: 2,
      tag: "PROGRAMA DE ESTUDOS",
      title: "Certificação Cloud Architecture",
      institution: "AWS Academy",
      period: "Fev. 2023 - Jan. 2024",
      focus: "Foco: Cloud Computing e DevOps",
      description: "Programa focado em design de soluções em nuvem de alta disponibilidade, segurança e otimização de custos."
    },
    {
      id: 3,
      tag: "ENSINO MÉDIO TÉCNICO",
      title: "Técnico em Informática",
      institution: "Escola Técnica",
      period: "Fev. 2013 - Dez. 2016",
      focus: "Formação técnica de base.",
      description: "Formação técnica em informática com aplicações práticas no desenvolvimento de sistemas desktop e redes de computadores."
    }
  ],
  sobre: {
    description1: "Sou um desenvolvedor apaixonado por gerar impacto real por onde passo. Como Engenheiro de Software e DevOps, vivenciei diversos desafios na área de tecnologia, experiência que ampliou minha visão analítica, minha capacidade de atuar em ambientes complexos e minha adaptação rápida a novas stacks.",
    description2: "Atuo com sistemas web e arquitetura em nuvem no setor de tecnologia e construí uma trajetória sólida na otimização de fluxos automatizados, atuando também na aproximação entre áreas de operações e desenvolvimento. Essa vivência integrada me proporcionou uma visão holística dos processos e do ciclo de vida dos produtos, além de reforçar minha busca constante por performance e valor percebido.",
    description3: "Busco a oportunidade para conectar áreas, reduzir fricções e estruturar processos eficientes que impulsionem a escalabilidade da empresa. Vejo na área de engenharia a oportunidade ideal de unir estratégia, dados e colaboração para entregar experiências consistentes e gerar resultados escaláveis.",
    cards: [
      { id: 1, title: "Multicultural", desc: "Vivência e trabalho com equipes globais, ampliando minha visão e capacidade de adaptação" },
      { id: 2, title: "Inovação", desc: "Desenvolvedor desde cedo, sempre buscando soluções criativas, modernas e escaláveis" },
      { id: 3, title: "Impacto", desc: "Foco em gerar impacto real e valor percebido em cada projeto entregue para os usuários" },
      { id: 4, title: "Visão Holística", desc: "Compreensão completa do ciclo de desenvolvimento, infraestrutura até ciclo de negócios" }
    ]
  },
  experiencia: [
    {
      id: 1,
      role: "Desenvolvedor FullStack & DevOps",
      period: "Agosto de 2025 - Abril de 2026",
      company: "Sua Empresa Principal",
      location: "São Paulo, SP",
      description: "Responsável por desenvolver aplicações escaláveis utilizando as melhores práticas do mercado de tech atual. Atuação central no desenvolvimento end-to-end de soluções web e integração com arquiteturas cloud, criando pipelines automatizados de CI/CD para melhorar o ciclo de entrega de valor e eficiência nas operações da empresa. Alinhamento direto com diversas áreas de negócio para mapear processos e convertê-los em código.",
      tags: ["Node.js", "React", "Docker", "CI/CD", "Arquitetura"]
    }
  ],
  habilidades: [
    {
      title: "Soft Skills",
      colorClass: "text-[#22c55e] border-[#22c55e] bg-[#22c55e]/10 hover:bg-[#22c55e]/20",
      items: ["Comunicação", "Resolução de Problemas", "Adaptação", "Gestão de Tempo", "Trabalho em Equipe", "Pensamento Sistêmico", "Aprendizado Rápido", "Liderança"]
    },
    {
      title: "Habilidades Técnicas",
      colorClass: "text-[#f59e0b] border-[#f59e0b] bg-[#f59e0b]/10 hover:bg-[#f59e0b]/20",
      items: ["React / Next.js", "Node.js / Python", "Docker / CI/CD", "PostgreSQL / MongoDB", "Arquitetura de Software", "Linux / Bash", "React", "API REST", "Node.js"]
    },
    {
      title: "Idiomas",
      colorClass: "text-[#a855f7] border-[#a855f7] bg-[#a855f7]/10 hover:bg-[#a855f7]/20",
      items: ["Português (Nativo)", "Inglês (Básico)", "Espanhol (Intermediário)"]
    },
    {
      title: "Conhecimentos",
      colorClass: "text-[#3b82f6] border-[#3b82f6] bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20",
      items: ["Scrum", "Kanban", "Clean Code", "Versionamento (Git)"]
    }
  ],
};
