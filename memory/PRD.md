# PRD — Portfólio Kauã Moreira

## Problema original
Criar um portfólio pessoal premium, moderno e altamente profissional para o desenvolvedor Kauã Moreira, causando ótima primeira impressão em recrutadores, empresas e clientes — mostrando que Kauã já desenvolve sistemas e produtos digitais reais, e não é apenas estudante.

## Decisões do usuário (via ask_human)
- Cor de destaque: **azul elétrico** (#2563EB / #3B82F6, com ciano #00D2FF pontual)
- Foto pessoal: **sim** — usar a foto enviada (limpamos os textos do carrossel via edição de imagem; resultado em `frontend/public/images/kaua-portrait.jpeg`)

## Arquitetura
- Frontend React (CRA) único, sem rotas, sem backend, sem auth (conforme briefing)
- Framer Motion (reveals, tilt 3D, parallax) + Lenis (smooth scroll com `anchors: true`)
- Canvas dot-grid no hero reagindo ao mouse (desktop, respeita prefers-reduced-motion)
- Config central: `frontend/src/config/site.js` (links sociais, e-mail, URLs dos projetos — vazios de propósito, sem URLs inventadas)
- Cursor customizado (pointer fine apenas), navbar flutuante com shrink + scroll-spy, marquee editorial, seção Projetos com título sticky, modal "Detalhes" (Radix Dialog), grid de tecnologias com hairline borders, processo com linha que se desenha no scroll, contato com glow radial, footer com ano automático
- SEO (skill farm-seo-setup): title/description pt-BR, OG, Twitter card, JSON-LD Person (sem fatos inventados), robots.txt com grupo de AI crawlers, llms.txt, favicon SVG "K" original (também no navbar). Sem canonical/og:url/sitemap — aguardando domínio de produção (omitidos por segurança, não fake)

## Personas
- Recrutador técnico: quer stack, projetos reais e contato rápido
- Empresa/cliente potencial: quer ver produto entregue de ponta a ponta
- Par de rede/conversa: quer canais diretos (LinkedIn, GitHub, e-mail)

## Requisitos core (todos implementados — 2026-10-09)
1. Navbar minimalista flutuante (Início/Sobre/Projetos/Tecnologias/Contato + CTA "Vamos conversar")
2. Hero kinetic: reveal mascarado linha a linha, canvas interativo, badge "Disponível", CTAs, GitHub/LinkedIn
3. Marquee editorial lento
4. Sobre: foto tratada (spotlight + parallax sutil), bio objetiva, 4 indicadores
5. Projetos (seção principal): layout editorial alternado para 2 projetos — Vagas Tapajós (destaque, screenshots reais web + app Android) e Tapajós Combat (Em desenvolvimento, placeholder de screenshot); "Ver projeto" (toast quando vazio) e "Detalhes" (modal)
6. Tecnologias: grid interativo de 11 techs + célula CTA (sem barras de %)
7. Forma de trabalhar: Entender → Planejar → Construir → Testar → Evoluir
8. Contato: título forte, texto, CTA, LinkedIn/GitHub/E-mail configuráveis
9. Footer simples com ano automático
10. Mobile-first sem efeitos de hover, menu mobile full-screen, `data-testid` em todos os interativos
11. prefers-reduced-motion respeitado em Lenis, canvas, marquee, reveals

## Verificação
- webpack compiled successfully; sem erros de console
- Screenshots desktop 1440 (hero, sobre, projetos, tech, processo, contato, modal, toast) e mobile 390 (hero, menu, projetos)
- overflow-x: false em ambas as larguras; 1 h1; robots/llms/favicon servem como arquivo real
- NÃO verificado ao vivo (site deployado): SEO tags e análise só valem no preview até o Deploy

## Backlog
- P0: preencher links reais (GitHub, LinkedIn, e-mail, URLs dos projetos) em `src/config/site.js`
- P1: screenshot real do Tapajós Combat + tecnologias confirmadas do Combat; og:image 1200×630 + canonical/sitemap quando houver domínio próprio
- P2: versão EN/PT, download de CV em PDF
