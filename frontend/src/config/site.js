// ============================================================
// CONFIGURAÇÃO DO SITE — links e dados estruturais.
// Textos (PT/EN) ficam em src/i18n.js.
// ============================================================

export const siteConfig = {
  nome: "Kauã Moreira",
  papel: "Frontend Developer",
  stack: "React • JavaScript • TypeScript",
  email: "kauacirinom@icloud.com",

  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/kauamoreira-dev/",
    instagram: "https://instagram.com/kaua.mcirino",
  },

  whatsapp: "https://wa.me/5569984299960",

  // Currículo — páginas estáticas otimizadas para impressão em PDF.
  resume: { pt: "/curriculo.html", en: "/resume.html" },
};

export const projetoDestaque = {
  id: "vagas-tapajos",
  titulo: "Vagas Tapajós",
  url: "https://vagastapajos.com.br",
  tech: ["React", "Vite", "JavaScript / TypeScript", "Supabase"],
  imagens: {
    web: "/images/vagas-login.png",
    appHome: "/images/vagas-home.png",
    appChat: "/images/vagas-chat.png",
  },
};

export const techGroups = [
  { id: "frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { id: "backend", items: ["Supabase", "REST APIs"] },
  { id: "tools", items: ["Git", "GitHub", "Vite", "Vercel"] },
];
