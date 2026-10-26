import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLang } from "@/i18n";
import { handleEmptyLink } from "@/lib/links";
import { HeroCanvas } from "@/components/HeroCanvas";

const ease = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

const FadeIn = ({ children, delay = 0, y = 18 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 620], [0, reduce ? 0 : 90]);
  const opacity = useTransform(scrollY, [0, 560], [1, reduce ? 1 : 0.2]);

  const socials = [
    { id: "github", url: siteConfig.social.github, Icone: Github, label: "GitHub" },
    { id: "linkedin", url: siteConfig.social.linkedin, Icone: Linkedin, label: "LinkedIn" },
    { id: "instagram", url: siteConfig.social.instagram, Icone: Instagram, label: "Instagram" },
  ].filter((s) => s.url);

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0%,#0B0E17_78%)]"
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:px-10 lg:pt-36"
      >
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink/60 py-1.5 pl-3 pr-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">
              {t.hero.badge}
            </span>
          </div>
        </FadeIn>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight">
          <MaskedLine delay={0.25}>
            <span className="text-[clamp(3.4rem,11vw,8.5rem)] text-white">Kauã</span>
          </MaskedLine>
          <MaskedLine delay={0.38}>
            <span className="text-outline text-[clamp(3.4rem,11vw,8.5rem)]">
              Moreira<span className="text-accent-light [-webkit-text-stroke:0]">.</span>
            </span>
          </MaskedLine>
        </h1>

        <FadeIn delay={0.55}>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-light md:text-sm">
            {t.hero.papel}
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.14em] text-slate-400 md:text-sm" data-testid="hero-stack-line">
            {siteConfig.stack}
          </p>
        </FadeIn>

        <FadeIn delay={0.68}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {t.hero.frase}
          </p>
        </FadeIn>

        <FadeIn delay={0.82}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projetos"
              data-testid="hero-cta-projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light md:text-base"
            >
              {t.hero.ctaProjetos}
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>
            <motion.a
              href={siteConfig.resume[lang]}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/5 md:text-base"
            >
              {t.hero.ctaResume}
              <Download size={16} />
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.95}>
          <div className="mt-12 flex items-center gap-5">
            <span className="h-px w-10 bg-line" aria-hidden="true" />
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`hero-social-${s.id}`}
                aria-label={`${s.label} de Kauã Moreira`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-200 hover:text-accent-light"
              >
                <s.Icone size={16} /> {s.label}
              </a>
            ))}
            {!siteConfig.social.github && (
              <a
                href="#"
                onClick={handleEmptyLink}
                data-testid="hero-social-github"
                aria-label="GitHub de Kauã Moreira (link não configurado)"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-200 hover:text-accent-light"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>
        </FadeIn>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
          {t.hero.scroll}
        </span>
        <div className="h-12 w-px overflow-hidden bg-line">
          <motion.div
            className="h-1/2 w-full bg-accent-light"
            animate={reduce ? {} : { y: [-24, 48] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
