import {
  Atom,
  ArrowUpRight,
  Braces,
  Coffee,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { tecnologias } from "@/config/site";

const icones = {
  coffee: Coffee,
  braces: Braces,
  filecode: FileCode2,
  atom: Atom,
  server: Server,
  database: Database,
  gitbranch: GitBranch,
  github: Github,
  zap: Zap,
  smartphone: Smartphone,
  layers: Layers,
};

export const Tech = () => (
  <section
    id="tecnologias"
    data-testid="tech-section"
    className="border-t border-line py-24 md:py-32"
  >
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionTag>Stack</SectionTag>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Tecnologias
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
            Ferramentas que uso para levar produtos do papel à produção.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {tecnologias.map((t, i) => {
            const Icone = icones[t.icone] || Atom;
            return (
              <div
                key={t.nome}
                data-testid={`tech-item-${t.nome.toLowerCase().replace(/\./g, "")}`}
                data-cursor-hover
                className="group relative bg-ink p-6 transition-colors duration-300 hover:bg-ink-raise md:p-7"
              >
                <span className="absolute right-4 top-4 font-mono text-[10px] text-slate-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icone
                  size={20}
                  className="text-slate-500 transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:text-accent-light"
                />
                <h3 className="mt-5 text-sm font-semibold text-white md:text-base">
                  {t.nome}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                  {t.categoria}
                </p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-light transition-[width] duration-300 group-hover:w-full" />
              </div>
            );
          })}

          {/* CTA final do grid */}
          <a
            href="#contato"
            data-testid="tech-cta"
            className="group flex min-h-[120px] flex-col justify-between bg-accent/[0.06] p-6 transition-colors duration-300 hover:bg-accent md:p-7"
          >
            <ArrowUpRight
              size={20}
              className="text-accent-light transition-colors duration-300 group-hover:text-white"
            />
            <span className="mt-6 text-sm font-semibold text-white">
              Vamos conversar sobre seu projeto
            </span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
