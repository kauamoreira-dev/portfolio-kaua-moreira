// ============================================================
// CONFIGURAÇÃO DO SITE — edite este arquivo para adicionar seus links.
// Tudo que estiver entre aspas vazias ("") é um campo configurável.
// ============================================================

export const siteConfig = {
  nome: "Kauã Moreira",
  papel: "Software Developer",
  frase:
    "Desenvolvo sistemas e produtos digitais transformando problemas reais em soluções simples, funcionais e escaláveis.",

  email: "kauacirinom@icloud.com",

  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/kauamoreira-dev/",
    instagram: "https://instagram.com/kaua.mcirino",
  },

  whatsapp: "https://wa.me/5569984299960",
};

// Links dos projetos — cole as URLs quando estiverem prontos ("Ver projeto").
// Ex.: url: "https://github.com/seuusuario/vagas-tapajos"
export const projetos = [
  {
    id: "vagas-tapajos",
    titulo: "Vagas Tapajós",
    subtitulo: "Plataforma Regional de Empregos",
    descricao:
      "Plataforma regional de empregos conectando candidatos e empresas, com autenticação, vagas, candidaturas, favoritos, notificações, chat e aplicativo Android.",
    status: "Web & Android",
    destaque: true,
    funcionalidades: [
      "Autenticação de candidatos e empresas",
      "Publicação e busca de vagas",
      "Candidaturas e favoritos",
      "Notificações e chat integrado",
      "Aplicativo Android via Capacitor",
    ],
    tech: ["React", "TypeScript", "Supabase", "Capacitor", "Vite"],
    imagens: {
      web: "/images/vagas-login.png",
      appHome: "/images/vagas-home.png",
      appChat: "/images/vagas-chat.png",
    },
    url: "https://vagastapajos.com.br",
  },
  {
    id: "tapajos-combat",
    titulo: "Tapajós Combat",
    subtitulo: "Competições & Eventos de Combate",
    descricao:
      "Plataforma digital voltada para competições e eventos de esportes de combate, com foco na organização de eventos, atletas, categorias, lutas e brackets.",
    status: "Em desenvolvimento",
    destaque: false,
    funcionalidades: [
      "Organização de eventos",
      "Gestão de atletas",
      "Categorias de competição",
      "Lutas e brackets",
    ],
    // Preencha as tecnologias quando confirmadas. Ex.: ["React", "TypeScript"]
    tech: ["React", "TypeScript", "Vite", "Supabase"],
    imagens: {
      mockup: "/images/combat-mockup.jpeg",
      logo: "/images/combat-logo.jpeg",
    },
    url: "",
  },
];

export const tecnologias = [
  { nome: "Java", categoria: "Backend & Core", icone: "coffee" },
  { nome: "JavaScript", categoria: "Linguagem", icone: "braces" },
  { nome: "TypeScript", categoria: "Tipagem forte", icone: "filecode" },
  { nome: "React", categoria: "UI Library", icone: "atom" },
  { nome: "Node.js", categoria: "Runtime backend", icone: "server" },
  { nome: "Supabase", categoria: "Database & Auth", icone: "database" },
  { nome: "Git", categoria: "Versionamento", icone: "gitbranch" },
  { nome: "GitHub", categoria: "Colaboração", icone: "github" },
  { nome: "Vite", categoria: "Build tool", icone: "zap" },
  { nome: "Android", categoria: "Mobile nativo", icone: "smartphone" },
  { nome: "Capacitor", categoria: "Cross-platform", icone: "layers" },
];
