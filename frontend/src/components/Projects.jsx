import { useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
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

// Composição abstrata — área reservada para screenshots reais do projeto.
const ProjectVisual = ({ id }) => {
  if (id === "vagas-tapajos")
    return (
      <div className="space-y-2.5">
        {[80, 62, 71].map((w, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <div className="h-8 w-8 rounded-md bg-accent/25" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 rounded-full bg-white/20" style={{ width: `${w}%` }} />
              <div className="h-1.5 w-2/5 rounded-full bg-white/10" />
            </div>
            <div className="h-4 w-10 rounded-full bg-accent/30" />
          </div>
        ))}
      </div>
    );
  if (id === "norte-gestao")
    return (
      <div className="grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
            <div className="mt-2 h-3 w-1/2 rounded-full bg-accent/35" />
          </div>
        ))}
        <div className="col-span-3 flex h-20 items-end gap-2 rounded-lg border border-white/5 bg-white/[0.03] p-3">
          {[35, 55, 42, 70, 58, 82, 64, 90, 74].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-accent/50 to-accent-cyan/30" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="space-y-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
          <div className="aspect-square rounded-md bg-gradient-to-br from-white/10 to-white/[0.03]" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
          <div className="h-1.5 w-2/5 rounded-full bg-emerald-400/40" />
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({ projeto, index }) => {
  const reduce = useReducedMotion();
  const fine = useMemo(
    () => window.matchMedia("(pointer: fine)").matches,
    []
  );
  const interactive = fine && !reduce;

  const rx = useSpring(0, { stiffness: 160, damping: 20 });
  const ry = useSpring(0, { stiffness: 160, damping: 20 });
  const px = useSpring(0, { stiffness: 160, damping: 20 });
  const py = useSpring(0, { stiffness: 160, damping: 20 });
  const [detailsOpen, setDetailsOpen] = useState(false);

  const onMouseMove = (e) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-ny * 5);
    ry.set(nx * 7);
    px.set(nx * -14);
    py.set(ny * -10);
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
    px.set(0);
    py.set(0);
  };

  const projectLink = (label, testid, className) =>
    projeto.url ? (
      <a
        href={projeto.url}
        target="_blank"
        rel="noreferrer"
        data-testid={testid}
        className={className}
      >
        {label}
      </a>
    ) : (
      <a
        href="#"
        onClick={handleEmptyLink}
        data-testid={testid}
        aria-label={`${label} — ${projeto.titulo} (link não configurado)`}
        className={className}
      >
        {label}
      </a>
    );

  return (
    <>
      <Reveal>
        <motion.article
          data-testid={`project-card-${projeto.id}`}
          data-cursor-hover
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            rotateX: interactive ? rx : 0,
            rotateY: interactive ? ry : 0,
            transformPerspective: 1000,
          }}
          className="group relative overflow-hidden rounded-2xl border border-line bg-ink-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_20px_70px_rgba(37,99,235,0.14)]"
        >
          {/* Brilho que segue o cursor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(560px circle at var(--mx, 50%) var(--my, 50%), rgba(59,130,246,0.13), transparent 45%)",
            }}
          />

          {/* Área visual */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-soft to-ink-raise p-5 md:p-7">
            <motion.div
              style={{ x: interactive ? px : 0, y: interactive ? py : 0 }}
              className="h-full w-full"
            >
              <ProjectVisual id={projeto.id} />
            </motion.div>
            <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
              Screenshot em breve
            </span>
            <span className="absolute left-4 top-4 font-mono text-[11px] text-slate-500">
              0{index + 1}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                {projeto.titulo}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-light">
                {projeto.subtitulo}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
              {projeto.descricao}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {projeto.tech.map((t) => (
                <li
                  key={t}
                  data-testid={`project-tech-${projeto.id}-${t.toLowerCase().replace(/\./g, "")}`}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300 transition-[border-color,color] duration-200 hover:border-accent-light/60 hover:text-accent-light"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {projectLink(
                <span className="inline-flex items-center gap-1.5">
                  Ver projeto
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>,
                `project-link-${projeto.id}`,
                "inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light underline-offset-4 hover:underline"
              )}
              <button
                type="button"
                data-testid={`project-details-button-${projeto.id}`}
                onClick={() => setDetailsOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-white/30 hover:bg-white/5"
              >
                Detalhes
              </button>
            </div>
          </div>
        </motion.article>
      </Reveal>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent
          data-testid={`project-dialog-${projeto.id}`}
          className="max-w-lg border-line bg-ink-card text-slate-100"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-white">
              {projeto.titulo}
            </DialogTitle>
            <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-light">
              {projeto.subtitulo}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-slate-400">{projeto.descricao}</p>
          <ul className="space-y-2.5">
            {projeto.destaques.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-light" />
                {d}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <ul className="flex flex-wrap gap-2">
              {projeto.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            {projeto.url ? (
              <a
                href={projeto.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-dialog-link-${projeto.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:underline"
              >
                Ver projeto <ArrowUpRight size={15} />
              </a>
            ) : (
              <a
                href="#"
                onClick={handleEmptyLink}
                data-testid={`project-dialog-link-${projeto.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500"
              >
                Link em breve
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const Projects = () => (
  <section
    id="projetos"
    data-testid="projects-section"
    className="relative border-t border-line py-24 md:py-32"
  >
    <div className="mx-auto grid max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
      {/* Título sticky */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionTag>Portfólio</SectionTag>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Projetos<span className="text-accent-light">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
            Produtos reais construídos de ponta a ponta — do planejamento ao deploy,
            web e mobile.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-10 font-mono text-sm text-slate-500">
            <span className="text-2xl font-semibold text-accent-light">0{projetos.length}</span>{" "}
            / produtos em destaque
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-10">
        {projetos.map((p, i) => (
          <ProjectCard key={p.id} projeto={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
