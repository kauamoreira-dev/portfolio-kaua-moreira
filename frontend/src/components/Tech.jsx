import { AppWindow, Database, Wrench } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { techGroups } from "@/config/site";
import { useLang } from "@/i18n";

const groupIcons = { frontend: AppWindow, backend: Database, tools: Wrench };

export const Tech = () => {
  const { t } = useLang();

  return (
    <section
      id="stack"
      data-testid="tech-section"
      className="border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>{t.tech.tag}</SectionTag>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                {t.tech.titulo}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
              {t.tech.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {techGroups.map((g, gi) => {
            const Icone = groupIcons[g.id] || Wrench;
            return (
              <Reveal
                key={g.id}
                delay={0.1 + gi * 0.08}
                data-testid={`tech-group-${g.id}`}
                className="bg-ink p-7 transition-colors duration-300 hover:bg-ink-raise md:p-8"
              >
                <div className="flex items-center gap-3">
                  <Icone size={18} className="text-accent-light" />
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {t.tech.grupos[g.id]}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      data-testid={`tech-item-${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="group/item flex items-center gap-3 text-sm text-slate-200 transition-colors duration-200 hover:text-accent-light md:text-base"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rotate-45 bg-slate-600 transition-colors duration-200 group-hover/item:bg-accent-light"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
