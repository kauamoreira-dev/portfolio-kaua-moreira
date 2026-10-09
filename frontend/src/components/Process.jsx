import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal, SectionTag } from "@/components/Reveal";
import { useLang } from "@/i18n";

export const Process = () => {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.45"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section
      id="processo"
      data-testid="process-section"
      className="border-t border-line py-24 md:py-32"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>{t.processo.tag}</SectionTag>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                {t.processo.titulo}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
              {t.processo.desc}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-3 hidden h-px bg-line lg:block"
          >
            <motion.div
              className="h-full origin-left bg-accent-light"
              style={{ scaleX: reduce ? 1 : scaleX }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {t.processo.passos.map((p, i) => (
              <Reveal
                as="li"
                key={p.n}
                delay={0.1 + i * 0.09}
                data-testid={`process-step-${p.n}`}
                className="group relative border-l border-line pl-6 lg:border-l-0 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full border border-accent-light/60 bg-ink transition-colors duration-300 group-hover:bg-accent-light lg:static lg:mb-6 lg:block"
                />
                <p className="font-mono text-xs text-accent-light">{p.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-white md:text-xl">
                  {p.nome}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
