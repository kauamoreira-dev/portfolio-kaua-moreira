import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionTag } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { handleEmptyLink } from "@/lib/links";

const canais = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icone: Linkedin,
    url: siteConfig.social.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    icone: Github,
    url: siteConfig.social.github,
  },
  {
    id: "email",
    label: "E-mail",
    icone: Mail,
    url: siteConfig.email ? `mailto:${siteConfig.email}` : "",
  },
];

export const Contact = () => (
  <section
    id="contato"
    data-testid="contact-section"
    className="relative overflow-hidden border-t border-line py-28 md:py-40"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.13] blur-[130px]"
    />

    <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
      <Reveal className="flex justify-center">
        <SectionTag>Contato</SectionTag>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Tem uma ideia ou{" "}
          <span className="text-accent-light">oportunidade?</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
          Estou aberto a projetos, oportunidades profissionais e boas conversas
          sobre tecnologia.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <motion.a
          href={siteConfig.email ? `mailto:${siteConfig.email}` : "#"}
          onClick={siteConfig.email ? undefined : handleEmptyLink}
          data-testid="contact-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 text-base font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-accent-light hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
        >
          Vamos conversar
          <ArrowUpRight size={18} />
        </motion.a>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {canais.map((c) => (
            <a
              key={c.id}
              href={c.url || "#"}
              onClick={c.url ? undefined : handleEmptyLink}
              target={c.url && !c.url.startsWith("mailto:") ? "_blank" : undefined}
              rel="noreferrer"
              data-testid={`contact-link-${c.id}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-300 transition-[border-color,color,background-color] duration-200 hover:border-accent-light/50 hover:bg-accent/[0.07] hover:text-accent-light"
            >
              <c.icone size={15} />
              {c.label}
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
