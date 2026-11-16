# Portfólio — Kauã Moreira

Portfólio pessoal com apresentação, projeto em destaque, tecnologias, experiência e formação, e contato.

**Site:** https://kauamoreira-dev.vercel.app

## O que tem

- Versões em português e inglês, com troca de idioma na própria página
- Projeto em destaque (Vagas Tapajós) com capturas de tela reais e estudo de caso em uma janela de detalhes
- Hero com grade de pontos em canvas que reage ao mouse e respeita a preferência de movimento reduzido
- Navegação com destaque da seção atual, rolagem suave e animações de entrada
- Currículo em PDF para download

## Stack

- React com Create React App (configurado via CRACO)
- Tailwind CSS e componentes baseados em Radix UI
- Framer Motion e Lenis (animações e rolagem suave)
- Vercel

## Como executar

O app fica em `frontend/` e usa Yarn.

```bash
cd frontend
yarn install
yarn start
```

| Comando      | Descrição                          |
| ------------ | ---------------------------------- |
| `yarn start` | Servidor de desenvolvimento        |
| `yarn build` | Build de produção em `build/`      |

## Estrutura

```
frontend/
  public/            index.html, imagens, currículo em PDF, robots.txt e sitemap.xml
  src/
    components/      seções da página (Hero, Projects, Tech, Experience, Contact, ...)
    components/ui/   componentes de interface baseados em Radix UI
    config/site.js   links, e-mail, projeto em destaque e grupos de tecnologias
    i18n.js          todos os textos em português e inglês
```

Para alterar textos, edite `frontend/src/i18n.js`. Links e dados do projeto em destaque ficam em
`frontend/src/config/site.js`.
