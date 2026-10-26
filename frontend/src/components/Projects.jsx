import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionTag } from "@/components/Reveal";
import { projetoDestaque } from "@/config/site";
import { useLang } from "@/i18n";

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
const Showcase = ({ imagens }) => (
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

export const Projects = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const labels = t.projeto;
  const p = projetoDestaque;
  const caseData = labels.case;

  return (
    <section
      id="projetos"
      data-testid="projects-section"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTag>{labels.tag}</SectionTag>

        <div className="mt-8 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Showcase imagens={p.imagens} />
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <span
                data-testid="project-status-vagas-tapajos"
                className="inline-flex items-center gap-2 rounded-full border border-accent-light/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-light"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {labels.status}
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                {p.titulo}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-light">
                {labels.subtitulo}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-sm leading-relaxed text-slate-400 md:text-base">
                {labels.descricao}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <li
                    key={tech}
                    data-testid={`project-tech-${p.id}-${tech.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300 transition-[border-color,color] duration-200 hover:border-accent-light/60 hover:text-accent-light"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {labels.featuresTitle}
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {labels.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent-light" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="project-link-vagas-tapajos"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
                >
                  {labels.verProjeto}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
                <button
                  type="button"
                  data-testid="project-case-study-button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
                >
                  <BookOpen size={15} />
                  {labels.caseStudy}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          data-testid="case-study-dialog"
          data-lenis-prevent
          className="max-h-[85vh] max-w-4xl overflow-y-auto border-line bg-ink-card text-slate-100"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-3xl font-extrabold tracking-tight text-white">
              {caseData.titulo}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.contextoTitulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                {caseData.contexto}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.problemaTitulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                {caseData.problema}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.solucaoTitulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                {caseData.solucao}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.participacaoTitulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                {caseData.participacao}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {labels.featuresTitle}
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {labels.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.stackTitulo}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {caseData.stack.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                {caseData.galeriaTitulo}
              </h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-line bg-ink-soft">
                <FrameBar label="Vagas Tapajós — Web" />
                <img
                  src={p.imagens.web}
                  alt={caseData.galeria[0]}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <img
                  src={p.imagens.appHome}
                  alt={caseData.galeria[1]}
                  loading="lazy"
                  className="w-full rounded-lg border border-line"
                />
                <img
                  src={p.imagens.appChat}
                  alt={caseData.galeria[2]}
                  loading="lazy"
                  className="w-full rounded-lg border border-line"
                />
              </div>
            </div>

            <div className="border-t border-line pt-5">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-testid="case-study-link"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
              >
                {labels.verProjeto} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
