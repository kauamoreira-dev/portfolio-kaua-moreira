import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-bold text-white">
            {siteConfig.nome}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
            {siteConfig.papel}
          </p>
        </div>

        <p className="font-mono text-xs text-slate-500" data-testid="footer-year">
          © {ano} {siteConfig.nome}
        </p>

        <a
          href="#inicio"
          data-testid="footer-back-to-top"
          aria-label="Voltar ao topo"
          className="group rounded-full border border-line p-3 text-slate-400 transition-[border-color,color] duration-200 hover:border-accent-light/50 hover:text-accent-light"
        >
          <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
};
