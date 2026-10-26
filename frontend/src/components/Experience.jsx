import { Code2, GraduationCap } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { useLang } from "@/i18n";

export const Experience = () => {
  const { t } = useLang();
  const e = t.experiencia;

  return (
    <section
      id="experiencia"
      data-testid="experience-section"
      className="border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTag>{e.tag}</SectionTag>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            {e.titulo}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.12} data-testid="experience-entry">
            <div className="flex items-center gap-3">
              <Code2 size={18} className="text-accent-light" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                {e.expLabel}
              </h3>
            </div>
            <div className="mt-6 border-l-2 border-accent/40 pl-6">
              <p className="font-mono text-xs text-accent-light">{e.exp.periodo}</p>
              <h4 className="mt-3 font-display text-lg font-bold text-white md:text-xl">
                {e.exp.titulo}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {e.exp.desc}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} data-testid="education-entry">
            <div className="flex items-center gap-3">
              <GraduationCap size={18} className="text-accent-light" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                {e.eduLabel}
              </h3>
            </div>
            <div className="mt-6 border-l-2 border-accent/40 pl-6">
              <p className="font-mono text-xs text-accent-light">{e.edu.periodo}</p>
              <h4 className="mt-3 font-display text-lg font-bold text-white md:text-xl">
                {e.edu.titulo}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {e.edu.org}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
