// ============================================================
// CONFIGURAÇÃO DO SITE — edite este arquivo para adicionar seus links.
// Tudo que estiver entre aspas vazias ("") é um campo configurável.
// ============================================================

export const siteConfig = {
  nome: "Kauã Moreira",
  papel: "Software Developer",
  frase:
    "Desenvolvo sistemas e produtos digitais transformando problemas reais em soluções simples, funcionais e escaláveis.",

  // Cole seu e-mail entre as aspas. Ex.: "kaua@email.com"
  email: "",

  // Cole seus links entre as aspas. Ex.: "https://github.com/seuusuario"
  social: {
    github: "",
    linkedin: "",
  },
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
    destaques: [
      "Autenticação de candidatos e empresas",
      "Publicação e busca de vagas",
      "Candidaturas e favoritos",
      "Notificações e chat integrado",
      "Aplicativo Android via Capacitor",
    ],
    tech: ["React", "TypeScript", "Supabase", "Capacitor", "Vite"],
    url: "",
  },
  {
    id: "norte-gestao",
    titulo: "Norte Gestão",
    subtitulo: "Sistema de Gestão & Dashboard",
    descricao:
      "Sistema de gestão com dashboard moderno desenvolvido para centralizar informações e tornar operações mais organizadas e eficientes.",
    destaques: [
      "Dashboard moderno e centralizado",
      "Informações da operação em um só lugar",
      "Processos mais organizados e eficientes",
    ],
    tech: ["React", "TypeScript", "Supabase"],
    url: "",
  },
  {
    id: "vitrinezap",
    titulo: "VitrineZap",
    subtitulo: "Catálogo Digital para WhatsApp",
    descricao:
      "Catálogo digital focado em vendas pelo WhatsApp, permitindo visualizar produtos, adicionar itens ao carrinho e gerar pedidos de forma simples.",
    destaques: [
      "Catálogo digital de produtos",
      "Carrinho de itens",
      "Pedidos gerados direto para o WhatsApp",
    ],
    tech: ["React", "TypeScript", "Vite"],
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
