import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionTag } from "@/components/Reveal";
import { projetos } from "@/config/site";
import { handleEmptyLink } from "@/lib/links";

const FrameBar = ({ label }) => (
  <div className="flex items-center gap-1.5 border-b border-line bg-ink-card px-4 py-2.5">
    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
    <span className="ml-3 rounded-full bg-white/5 px-3 py-0.5 font-mono text-[10px] text-slate-400">
      {label}
    </span>
  </div>
);

// Composição editorial — web em frame de browser + telas do app sobrepostas.
const VagasShowcase = ({ imagens }) => (
  <div className="relative lg:pr-28" data-testid="project-media-vagas-tapajos">
    <Reveal y={30}>
      <div className="overflow-hidden rounded-xl border border-line bg-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <FrameBar label="Vagas Tapajós — Web" />
        <img
          src={imagens.web}
          alt="Área do candidato do Vagas Tapajós no navegador"
          width={920}
          height={1002}
          loading="lazy"
          className="w-full"
        />
      </div>
    </Reveal>
    <div className="mt-5 grid grid-cols-2 gap-4 lg:mt-0 lg:block lg:absolute lg:-right-2 lg:top-1/2 lg:w-[30%] lg:-translate-y-1/2 lg:space-y-8">
      <Reveal y={30} delay={0.1}>
        <img
          src={imagens.appHome}
          alt="Aplicativo Android do Vagas Tapajós — lista de vagas"
          width={752}
          height={921}
          loading="lazy"
          className="w-full rounded-lg border border-line shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:rotate-2"
        />
      </Reveal>
      <Reveal y={30} delay={0.18}>
        <img
          src={imagens.appChat}
          alt="Chat entre candidato e empresa no aplicativo do Vagas Tapajós"
          width={723}
          height={902}
          loading="lazy"
          className="w-full rounded-lg border border-line shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:-rotate-2"
        />
      </Reveal>
    </div>
  </div>
);

// Placeholder temático (brackets de competição) até o screenshot real existir.
const CombatPlaceholder = () => (
  <div
    data-testid="project-media-tapajos-combat"
    className="relative flex min-h-[340px] flex-col justify-center overflow-hidden rounded-xl border border-line bg-gradient-to-br from-ink-soft to-ink-raise p-8 lg:h-[520px]"
  >
    <div className="flex items-stretch justify-between gap-6 opacity-70">
      <div className="flex w-1/4 flex-col justify-between gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-10 rounded-md border border-white/10 bg-white/[0.04]" />
        ))}
      </div>
      <div className="flex w-1/4 flex-col justify-around">
        {[0, 1].map((i) => (
          <div key={i} className="h-10 rounded-md border border-accent/25 bg-accent/[0.08]" />
        ))}
      </div>
      <div className="flex w-1/4 items-center">
        <div className="h-12 w-full rounded-md border border-accent/40 bg-accent/[0.12]" />
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <div className="h-16 w-16 rotate-45 rounded-lg border border-accent-light/50 bg-accent/[0.15]" />
      </div>
    </div>
    <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
      Screenshot em breve
    </span>
  </div>
);

const StatusBadge = ({ p }) => {
  const dev = p.status === "Em desenvolvimento";
  return (
    <span
      data-testid={`project-status-${p.id}`}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
        dev ? "border-amber-400/30 text-amber-200/90" : "border-accent-light/30 text-accent-light"
      }`}
    >
      {dev && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />}
      {p.status}
    </span>
  );
};

const ProjectRow = ({ p, i, flip }) => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const dev = p.status === "Em desenvolvimento";

  return (
    <article
      data-testid={`project-card-${p.id}`}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        {p.id === "vagas-tapajos" ? (
          <VagasShowcase imagens={p.imagens} />
        ) : (
          <Reveal y={30}>
            <CombatPlaceholder />
          </Reveal>
        )}
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
            {p.destaque && (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Projeto em destaque
              </span>
            )}
            <StatusBadge p={p} />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h3
            className={`mt-5 font-display font-extrabold tracking-tight text-white ${
              p.destaque ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
            }`}
          >
            {p.titulo}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-light">
            {p.subtitulo}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 md:text-base">
            {p.descricao}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {dev ? "Foco do desenvolvimento" : "Principais funcionalidades"}
          </h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {p.funcionalidades.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                <Check size={15} className="mt-0.5 shrink-0 text-accent-light" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        {p.tech.length > 0 && (
          <Reveal delay={0.2}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  data-testid={`project-tech-${p.id}-${t.toLowerCase().replace(/\./g, "")}`}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300 transition-[border-color,color] duration-200 hover:border-accent-light/60 hover:text-accent-light"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-link-${p.id}`}
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
              >
                Ver projeto
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <a
                href="#"
                onClick={handleEmptyLink}
                data-testid={`project-link-${p.id}`}
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
              >
                Ver projeto
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <button
              type="button"
              data-testid={`project-details-button-${p.id}`}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
            >
              Detalhes
            </button>
          </div>
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-testid={`project-dialog-${p.id}`}
          className="max-w-lg border-line bg-ink-card text-slate-100"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-white">
              {p.titulo}
            </DialogTitle>
            <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-light">
              {p.subtitulo} — {p.status}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-slate-400">{p.descricao}</p>
          <ul className="space-y-2.5">
            {p.funcionalidades.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            {p.tech.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="font-mono text-[11px] text-slate-500">
                Tecnologias a definir
              </span>
            )}
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-dialog-link-${p.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:underline"
              >
                Ver projeto <ArrowUpRight size={15} />
              </a>
            ) : (
              <a
                href="#"
                onClick={handleEmptyLink}
                data-testid={`project-dialog-link-${p.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500"
              >
                Link em breve
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export const Projects = () => (
  <section
    id="projetos"
    data-testid="projects-section"
    className="relative border-t border-line py-24 md:py-32"
  >
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionTag>Portfólio</SectionTag>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
              Projetos<span className="text-accent-light">.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
            Produtos reais construídos de ponta a ponta — do planejamento ao
            deploy, web e mobile.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 space-y-24 md:space-y-32 lg:mt-28 lg:space-y-40">
        {projetos.map((p, i) => (
          <ProjectRow key={p.id} p={p} i={i} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 font-mono text-sm text-slate-500">
          <span className="text-2xl font-semibold text-accent-light">
            0{projetos.length}
          </span>{" "}
          / produtos em destaque
        </p>
      </Reveal>
    </div>
  </section>
);
