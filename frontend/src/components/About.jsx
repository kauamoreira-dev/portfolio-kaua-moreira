import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { Reveal, SectionTag } from "@/components/Reveal";
import { useLang } from "@/i18n";

export const About = () => {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 60, damping: 18 });
  const y = useSpring(0, { stiffness: 60, damping: 18 });

  const onMouseMove = (e) => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 10);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="sobre" data-testid="about-section" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-3xl border border-accent/15"
          />
          <div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            data-cursor-hover
            className="group relative overflow-hidden rounded-2xl border border-line bg-ink-card"
          >
            <motion.img
              src="/images/kaua-portrait.jpeg"
              alt="Kauã Moreira, desenvolvedor front-end, em seu ambiente de trabalho"
              width={848}
              height={1264}
              loading="lazy"
              style={{ x, y }}
              className="h-full w-full scale-[1.06] object-cover transition-[filter] duration-500 group-hover:brightness-110"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgba(59,130,246,0.22),transparent_55%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent"
            />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300">
              Kauã Moreira — {t.hero.papel}
            </p>
          </div>
        </Reveal>

        <div>
          <SectionTag>{t.sobre.tag}</SectionTag>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              {t.sobre.titulo}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-slate-400 md:text-lg">
              {t.sobre.p1}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
              {t.sobre.p2}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
              {t.sobre.p3}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
