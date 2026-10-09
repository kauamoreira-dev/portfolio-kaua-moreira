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
import { useLang } from "@/i18n";
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

// Mockup real do app + cartão com o logotipo da marca.
const CombatShowcase = ({ imagens }) => (
  <div className="relative lg:pl-24" data-testid="project-media-tapajos-combat">
    <Reveal y={30}>
      <div className="overflow-hidden rounded-xl border border-line bg-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <img
          src={imagens.mockup}
          alt="Mockup do aplicativo Tapajós Combat — eventos, atletas e academias"
          width={1092}
          height={1440}
          loading="lazy"
          className="w-full"
        />
      </div>
    </Reveal>
    <Reveal y={20} delay={0.12} className="mt-5 lg:mt-0 lg:absolute lg:-left-2 lg:top-12 lg:w-[38%]">
      <img
        src={imagens.logo}
        alt="Logotipo do Tapajós Combat"
        width={1600}
        height={800}
        loading="lazy"
        className="w-full rounded-lg border border-line shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:-rotate-3"
      />
    </Reveal>
  </div>
);

const StatusBadge = ({ text, testid }) => {
  const dev = text.dev;
  return (
    <span
      data-testid={testid}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${
        dev ? "border-amber-400/30 text-amber-200/90" : "border-accent-light/30 text-accent-light"
      }`}
    >
      {dev && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />}
      {text.status}
    </span>
  );
};

const ProjectRow = ({ p, i, flip }) => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const text = t.projetos.items[p.id];
  const labels = t.projetos;

  const projectLink = (className) =>
    p.url ? (
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        data-testid={`project-link-${p.id}`}
        className={className}
      >
        {labels.verProjeto}
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    ) : (
      <a
        href="#"
        onClick={handleEmptyLink}
        data-testid={`project-link-${p.id}`}
        aria-label={`${labels.verProjeto} — ${text.subtitulo} (link não configurado)`}
        className={className}
      >
        {labels.verProjeto}
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    );

  return (
    <article
      data-testid={`project-card-${p.id}`}
      className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        {p.id === "vagas-tapajos" ? (
          <VagasShowcase imagens={p.imagens} />
        ) : (
          <CombatShowcase imagens={p.imagens} />
        )}
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
            {p.destaque && (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {labels.destaqueLabel}
              </span>
            )}
            <StatusBadge text={text} testid={`project-status-${p.id}`} />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h3
            className={`mt-5 font-display font-extrabold tracking-tight text-white ${
              p.destaque ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
            }`}
          >
            {p.id === "vagas-tapajos" ? "Vagas Tapajós" : "Tapajós Combat"}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-light">
            {text.subtitulo}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 md:text-base">
            {text.descricao}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {text.dev ? labels.devFuncTitle : labels.funcTitle}
          </h4>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {text.funcionalidades.map((f) => (
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
              {p.tech.map((tech) => (
                <li
                  key={tech}
                  data-testid={`project-tech-${p.id}-${tech.toLowerCase().replace(/\./g, "")}`}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300 transition-[border-color,color] duration-200 hover:border-accent-light/60 hover:text-accent-light"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {projectLink(
              "group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
            )}
            <button
              type="button"
              data-testid={`project-details-button-${p.id}`}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
            >
              {labels.detalhes}
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
              {p.id === "vagas-tapajos" ? "Vagas Tapajós" : "Tapajós Combat"}
            </DialogTitle>
            <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-light">
              {text.subtitulo} — {text.status}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-slate-400">{text.descricao}</p>
          <ul className="space-y-2.5">
            {text.funcionalidades.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            {p.tech.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="font-mono text-[11px] text-slate-500">{labels.techTBD}</span>
            )}
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-dialog-link-${p.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:underline"
              >
                {labels.verProjeto} <ArrowUpRight size={15} />
              </a>
            ) : (
              <a
                href="#"
                onClick={handleEmptyLink}
                data-testid={`project-dialog-link-${p.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500"
              >
                {labels.linkEmBreve}
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
};

export const Projects = () => {
  const { t } = useLang();
  const labels = t.projetos;

  return (
    <section
      id="projetos"
      data-testid="projects-section"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>{labels.tag}</SectionTag>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
                {labels.titulo}
                <span className="text-accent-light">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
              {labels.desc}
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
            {labels.countSuf}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
