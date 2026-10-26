import { createContext, useContext, useEffect, useState } from "react";

// Dicionário PT/EN — textos do site. Dados estruturais ficam em config/site.js.
export const dict = {
  pt: {
    nav: {
      links: [
        { id: "inicio", label: "Início" },
        { id: "projetos", label: "Projeto" },
        { id: "sobre", label: "Sobre" },
        { id: "stack", label: "Stack" },
        { id: "experiencia", label: "Experiência" },
        { id: "contato", label: "Contato" },
      ],
      cta: "Vamos conversar",
    },
    hero: {
      badge: "Disponível para oportunidades remotas · Brasil / Mundo",
      papel: "Frontend Developer",
      frase:
        "Desenvolvo interfaces e aplicações web modernas, focando em resolver problemas reais através de tecnologia.",
      ctaProjetos: "Ver projeto",
      ctaResume: "Baixar currículo",
      scroll: "Scroll",
    },
    projeto: {
      tag: "Projeto em destaque",
      status: "Projeto ativo",
      subtitulo: "Plataforma Regional de Empregos",
      descricao:
        "Plataforma web desenvolvida para conectar candidatos e empresas e facilitar a divulgação e busca por oportunidades.",
      verProjeto: "Ver projeto",
      caseStudy: "Case Study",
      featuresTitle: "Principais funcionalidades",
      features: [
        "Autenticação de candidatos e empresas",
        "Perfil de candidato e empresa",
        "Publicação de vagas",
        "Candidaturas",
        "Integração com banco de dados",
        "Interface responsiva",
        "Experiência mobile",
        "Integração com Supabase",
      ],
      case: {
        titulo: "Case Study — Vagas Tapajós",
        contextoTitulo: "Contexto",
        contexto:
          "A Vagas Tapajós é uma plataforma web criada para conectar candidatos e empresas da região do Tapajós, centralizando a divulgação e a busca por oportunidades em um só lugar.",
        desafioTitulo: "O desafio",
        desafio:
          "Criar uma experiência simples para dois públicos — quem busca uma vaga e quem quer contratar — mantendo a plataforma rápida, organizada e fácil de usar no computador e no celular.",
        buildTitulo: "O que foi construído",
        stackTitulo: "Stack & decisões",
        stack: [
          "React + Vite — base para interfaces rápidas e um projeto bem modularizado",
          "JavaScript / TypeScript — produtividade com mais segurança nas mudanças de código",
          "Supabase — autenticação e banco de dados integrados ao front-end",
          "Design responsivo — a mesma experiência funciona na web e no celular",
        ],
        galeriaTitulo: "Galeria",
        galeria: [
          "Área do candidato na web",
          "Lista de vagas no aplicativo",
          "Chat entre candidato e empresa",
        ],
      },
    },
    sobre: {
      tag: "Sobre mim",
      titulo: "Interfaces modernas para problemas reais.",
      p1: "Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor front-end focado principalmente em React, JavaScript e TypeScript.",
      p2: "Tenho experiência prática construindo interfaces, sistemas web e aplicações para projetos acadêmicos, autorais e problemas reais.",
      p3: "Estou buscando oportunidades de estágio ou desenvolvimento front-end júnior, onde possa trabalhar com produtos reais, aprender com outros desenvolvedores e evoluir tecnicamente.",
    },
    tech: {
      tag: "Stack",
      titulo: "Tech Stack",
      desc: "Tecnologias que fazem parte do meu dia a dia de desenvolvimento.",
      grupos: { frontend: "Frontend", backend: "Backend / Data", tools: "Tools" },
    },
    experiencia: {
      tag: "Trajetória",
      titulo: "Experiência & Formação",
      expLabel: "Experiência",
      exp: {
        titulo: "Frontend Development & Personal Projects",
        periodo: "2025 – Presente",
        desc: "Desenvolvimento de interfaces, aplicações web e sistemas utilizando React, JavaScript, TypeScript, Supabase, APIs e Git.",
      },
      eduLabel: "Formação",
      edu: {
        titulo: "Análise e Desenvolvimento de Sistemas",
        org: "UNAMA – Universidade da Amazônia",
        periodo: "Cursando o 4º semestre",
      },
    },
    contato: {
      tag: "Contato",
      titulo: "Vamos trabalhar juntos.",
      texto:
        "Estou aberto a estágios, oportunidades júnior em front-end, projetos e boas conversas sobre tecnologia.",
      cta: "Vamos trabalhar juntos",
      canais: { linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram", whatsapp: "WhatsApp", email: "E-mail" },
    },
    toast: {
      titulo: "Link ainda não configurado",
      desc: "Edite src/config/site.js e cole a URL desejada.",
    },
  },
  en: {
    nav: {
      links: [
        { id: "inicio", label: "Home" },
        { id: "projetos", label: "Project" },
        { id: "sobre", label: "About" },
        { id: "stack", label: "Stack" },
        { id: "experiencia", label: "Experience" },
        { id: "contato", label: "Contact" },
      ],
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for Remote Opportunities · Brazil / Worldwide",
      papel: "Frontend Developer",
      frase:
        "I build modern web interfaces and applications, focused on solving real problems through technology.",
      ctaProjetos: "View Project",
      ctaResume: "Download Resume",
      scroll: "Scroll",
    },
    projeto: {
      tag: "Featured Project",
      status: "Active project",
      subtitulo: "Regional Job Platform",
      descricao:
        "Web platform built to connect candidates and companies, making it easier to post and find job opportunities.",
      verProjeto: "View Project",
      caseStudy: "Case Study",
      featuresTitle: "Key features",
      features: [
        "Authentication for candidates and companies",
        "Candidate and company profiles",
        "Job posting",
        "Applications",
        "Database integration",
        "Responsive interface",
        "Mobile experience",
        "Supabase integration",
      ],
      case: {
        titulo: "Case Study — Vagas Tapajós",
        contextoTitulo: "Context",
        contexto:
          "Vagas Tapajós is a web platform created to connect candidates and companies in the Tapajós region, bringing job posting and job search together in one place.",
        desafioTitulo: "The challenge",
        desafio:
          "Designing a simple experience for two audiences — people looking for a job and companies hiring — while keeping the platform fast, organized and easy to use on desktop and mobile.",
        buildTitulo: "What was built",
        stackTitulo: "Stack & decisions",
        stack: [
          "React + Vite — a foundation for fast interfaces and a well-structured project",
          "JavaScript / TypeScript — productivity with safer code changes",
          "Supabase — authentication and database integrated with the front-end",
          "Responsive design — the same experience works on the web and on mobile",
        ],
        galeriaTitulo: "Gallery",
        galeria: [
          "Candidate area on the web",
          "Job list in the app",
          "Chat between candidate and company",
        ],
      },
    },
    sobre: {
      tag: "About me",
      titulo: "Modern interfaces for real problems.",
      p1: "I'm a Systems Analysis and Development student and a front-end developer focused mainly on React, JavaScript and TypeScript.",
      p2: "I have hands-on experience building interfaces, web systems and applications for academic projects, personal projects and real problems.",
      p3: "I'm looking for internship or junior front-end opportunities where I can work on real products, learn from other developers and keep growing technically.",
    },
    tech: {
      tag: "Stack",
      titulo: "Tech Stack",
      desc: "Technologies that are part of my day-to-day development.",
      grupos: { frontend: "Frontend", backend: "Backend / Data", tools: "Tools" },
    },
    experiencia: {
      tag: "Background",
      titulo: "Experience & Education",
      expLabel: "Experience",
      exp: {
        titulo: "Frontend Development & Personal Projects",
        periodo: "2025 – Present",
        desc: "Building interfaces, web applications and systems with React, JavaScript, TypeScript, Supabase, APIs and Git.",
      },
      eduLabel: "Education",
      edu: {
        titulo: "Systems Analysis and Development",
        org: "UNAMA – Universidade da Amazônia",
        periodo: "Currently in the 4th semester",
      },
    },
    contato: {
      tag: "Contact",
      titulo: "Let's work together.",
      texto:
        "I'm open to internships, junior front-end opportunities, projects and good conversations about technology.",
      cta: "Let's work together",
      canais: { linkedin: "LinkedIn", github: "GitHub", instagram: "Instagram", whatsapp: "WhatsApp", email: "Email" },
    },
    toast: {
      titulo: "Link not set up yet",
      desc: "Edit src/config/site.js and paste the desired URL.",
    },
  },
};

export const i18nRef = { lang: "pt" };

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("km-lang");
    return saved === "en" || saved === "pt" ? saved : "pt";
  });

  useEffect(() => {
    localStorage.setItem("km-lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.title =
      lang === "en"
        ? "Kauã Moreira | Frontend Developer · React & TypeScript"
        : "Kauã Moreira | Frontend Developer · React & TypeScript";
    i18nRef.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const LangToggle = ({ className = "", testPrefix = "lang-toggle" }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full border border-line p-0.5 font-mono text-[10px] ${className}`}
      role="group"
      aria-label="Language / Idioma"
    >
      {["pt", "en"].map((l) => (
        <button
          key={l}
          type="button"
          data-testid={`${testPrefix}-${l}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors duration-200 ${
            lang === l ? "bg-accent text-white" : "text-slate-400 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
