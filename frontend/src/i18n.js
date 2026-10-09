import { createContext, useContext, useEffect, useState } from "react";

// Dicionário PT/EN — textos do site. Dados estruturais ficam em config/site.js.
export const dict = {
  pt: {
    nav: {
      links: [
        { id: "inicio", label: "Início" },
        { id: "sobre", label: "Sobre" },
        { id: "projetos", label: "Projetos" },
        { id: "tecnologias", label: "Tecnologias" },
        { id: "contato", label: "Contato" },
      ],
      cta: "Vamos conversar",
    },
    hero: {
      badge: "Disponível para novos projetos",
      papel: "Software Developer",
      frase:
        "Desenvolvo sistemas e produtos digitais transformando problemas reais em soluções simples, funcionais e escaláveis.",
      ctaProjetos: "Ver projetos",
      ctaContato: "Entrar em contato",
      scroll: "Scroll",
    },
    marquee: [
      "Sistemas reais",
      "Produtos digitais",
      "Soluções escaláveis",
      "Web & Mobile",
      "Do planejamento ao deploy",
      "Código limpo",
    ],
    sobre: {
      tag: "Sobre mim",
      titulo: "Do problema real ao produto funcionando.",
      p1: "Cursando Análise e Desenvolvimento de Sistemas, desenvolvo aplicações reais — da arquitetura ao deploy. Trabalho com desenvolvimento de software e produtos digitais, transformando necessidades em soluções funcionais, simples e escaláveis.",
      p2: "Estou sempre evoluindo tecnicamente, explorando ferramentas e práticas que tornem cada entrega melhor que a anterior.",
      indicadores: [
        { titulo: "Software Development", desc: "Arquiteturas robustas e escaláveis" },
        { titulo: "Product Building", desc: "Visão de produto da ideia ao deploy" },
        { titulo: "Web Applications", desc: "Interfaces rápidas e reativas com React e TypeScript" },
        { titulo: "Mobile Applications", desc: "Apps Android com Capacitor" },
      ],
    },
    projetos: {
      tag: "Portfólio",
      titulo: "Projetos",
      desc: "Produtos reais construídos de ponta a ponta — do planejamento ao deploy, web e mobile.",
      destaqueLabel: "Projeto em destaque",
      verProjeto: "Ver projeto",
      detalhes: "Detalhes",
      linkEmBreve: "Link em breve",
      funcTitle: "Principais funcionalidades",
      devFuncTitle: "Foco do desenvolvimento",
      techTBD: "Tecnologias a definir",
      countSuf: "/ produtos em destaque",
      items: {
        "vagas-tapajos": {
          subtitulo: "Plataforma Regional de Empregos",
          descricao:
            "Plataforma regional de empregos criada para conectar candidatos e empresas da região do Tapajós.",
          status: "Projeto ativo",
          dev: false,
          funcionalidades: [
            "Autenticação de candidatos e empresas",
            "Publicação e gerenciamento de vagas",
            "Candidaturas",
            "Favoritos",
            "Notificações",
            "Chat",
            "Aplicativo Android",
          ],
        },
        "tapajos-combat": {
          subtitulo: "Competições & Eventos de Combate",
          descricao:
            "Plataforma digital para organização de competições e eventos de esportes de combate, com foco em atletas, categorias, lutas e brackets.",
          status: "Em desenvolvimento",
          dev: true,
          funcionalidades: [
            "Organização de eventos",
            "Gestão de atletas",
            "Categorias de competição",
            "Lutas e brackets",
          ],
        },
      },
    },
    tech: {
      tag: "Stack",
      titulo: "Tecnologias",
      desc: "Ferramentas que uso para levar produtos do papel à produção.",
      cta: "Vamos conversar sobre seu projeto",
      cat: {
        coffee: "Backend & Core",
        braces: "Linguagem",
        filecode: "Tipagem forte",
        atom: "UI Library",
        server: "Runtime backend",
        database: "Database & Auth",
        gitbranch: "Versionamento",
        github: "Colaboração",
        zap: "Build tool",
        smartphone: "Mobile nativo",
        layers: "Cross-platform",
      },
    },
    processo: {
      tag: "Processo",
      titulo: "Forma de trabalhar",
      desc: "Um processo claro, do primeiro alinhamento às iterações que mantêm o produto vivo.",
      passos: [
        { n: "01", nome: "Entender", desc: "Mapear o problema, os objetivos e as necessidades reais de quem vai usar." },
        { n: "02", nome: "Planejar", desc: "Definir arquitetura, stack e modelo de dados antes de escrever código." },
        { n: "03", nome: "Construir", desc: "Desenvolver com código limpo, componentes reutilizáveis e performance." },
        { n: "04", nome: "Testar", desc: "Validar usabilidade, estabilidade e responsividade em cada entrega." },
        { n: "05", nome: "Evoluir", desc: "Iterar com feedback real, melhorando técnica e continuamente o produto." },
      ],
    },
    contato: {
      tag: "Contato",
      tituloA: "Tem uma ideia ou",
      tituloB: "oportunidade?",
      texto:
        "Estou aberto a projetos, oportunidades profissionais e boas conversas sobre tecnologia.",
      cta: "Vamos conversar",
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
        { id: "sobre", label: "About" },
        { id: "projetos", label: "Projects" },
        { id: "tecnologias", label: "Technologies" },
        { id: "contato", label: "Contact" },
      ],
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for new projects",
      papel: "Software Developer",
      frase:
        "I build systems and digital products, turning real problems into simple, functional and scalable solutions.",
      ctaProjetos: "View projects",
      ctaContato: "Get in touch",
      scroll: "Scroll",
    },
    marquee: [
      "Real systems",
      "Digital products",
      "Scalable solutions",
      "Web & Mobile",
      "From planning to deploy",
      "Clean code",
    ],
    sobre: {
      tag: "About me",
      titulo: "From real problem to working product.",
      p1: "Studying Systems Analysis and Development, I build real applications — from architecture to deploy. I work with software development and digital products, turning needs into functional, simple and scalable solutions.",
      p2: "I'm always evolving technically, exploring tools and practices that make every delivery better than the last.",
      indicadores: [
        { titulo: "Software Development", desc: "Robust, scalable architectures" },
        { titulo: "Product Building", desc: "Product vision from idea to deploy" },
        { titulo: "Web Applications", desc: "Fast, reactive interfaces with React and TypeScript" },
        { titulo: "Mobile Applications", desc: "Android apps with Capacitor" },
      ],
    },
    projetos: {
      tag: "Portfolio",
      titulo: "Projects",
      desc: "Real products built end to end — from planning to deploy, web and mobile.",
      destaqueLabel: "Featured project",
      verProjeto: "View project",
      detalhes: "Details",
      linkEmBreve: "Link coming soon",
      funcTitle: "Key features",
      devFuncTitle: "Development focus",
      techTBD: "Tech stack to be defined",
      countSuf: "/ featured products",
      items: {
        "vagas-tapajos": {
          subtitulo: "Regional Job Platform",
          descricao:
            "Regional job platform created to connect candidates and companies from the Tapajós region.",
          status: "Active project",
          dev: false,
          funcionalidades: [
            "Authentication for candidates and companies",
            "Job posting and management",
            "Applications",
            "Favorites",
            "Notifications",
            "Chat",
            "Android app",
          ],
        },
        "tapajos-combat": {
          subtitulo: "Combat Sports Competitions & Events",
          descricao:
            "Digital platform for organizing combat sports competitions and events, focused on athletes, categories, fights and brackets.",
          status: "In development",
          dev: true,
          funcionalidades: [
            "Event organization",
            "Athlete management",
            "Competition categories",
            "Fights and brackets",
          ],
        },
      },
    },
    tech: {
      tag: "Stack",
      titulo: "Technologies",
      desc: "Tools I use to take products from idea to production.",
      cta: "Let's talk about your project",
      cat: {
        coffee: "Backend & Core",
        braces: "Language",
        filecode: "Strong typing",
        atom: "UI Library",
        server: "Backend runtime",
        database: "Database & Auth",
        gitbranch: "Versioning",
        github: "Collaboration",
        zap: "Build tool",
        smartphone: "Native mobile",
        layers: "Cross-platform",
      },
    },
    processo: {
      tag: "Process",
      titulo: "How I work",
      desc: "A clear process, from the first alignment to the iterations that keep the product alive.",
      passos: [
        { n: "01", nome: "Understand", desc: "Mapping the problem, the goals and the real needs of the people who will use it." },
        { n: "02", nome: "Plan", desc: "Defining architecture, stack and data model before writing code." },
        { n: "03", nome: "Build", desc: "Developing with clean code, reusable components and performance." },
        { n: "04", nome: "Test", desc: "Validating usability, stability and responsiveness in every delivery." },
        { n: "05", nome: "Evolve", desc: "Iterating with real feedback, continuously improving the product." },
      ],
    },
    contato: {
      tag: "Contact",
      tituloA: "Have an idea or",
      tituloB: "opportunity?",
      texto:
        "I'm open to projects, professional opportunities and good conversations about technology.",
      cta: "Let's talk",
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
        ? "Kauã Moreira — Software Developer | Portfolio"
        : "Kauã Moreira — Software Developer | Portfólio";
    i18nRef.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export const LangToggle = ({ className = "" }) => {
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
          data-testid={`lang-toggle-${l}`}
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
