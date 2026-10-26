import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LangToggle, useLang } from "@/i18n";

const Mark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="rgba(37,99,235,0.12)" />
    <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" fill="none" stroke="rgba(255,255,255,0.14)" />
    <path d="M23 15v34" stroke="#F8FAFC" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M45 15 27.5 32 45 49" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="47.5" cy="47.5" r="3.5" fill="#00D2FF" />
  </svg>
);

export const Navbar = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = t.nav.links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [t]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[60] flex justify-center px-4 pt-4"
      >
        <div
          data-testid="navbar"
          className={`flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border px-5 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
            scrolled
              ? "border-line bg-ink/85 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-transparent bg-transparent py-4"
          }`}
        >
          <a
            href="#inicio"
            data-testid="nav-logo-link"
            className="flex items-center gap-2.5"
            aria-label="Kauã Moreira — voltar ao início"
          >
            <Mark className="h-8 w-8" />
            <span className="font-display text-sm font-bold tracking-wide md:text-base">
              Kauã Moreira
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {t.nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-testid={`nav-link-${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  active === l.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent-light transition-all duration-300 ${
                    active === l.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangToggle className="hidden md:flex" />
            <motion.a
              href="#contato"
              data-testid="nav-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="hidden rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-accent-light md:inline-block"
            >
              {t.nav.cta}
            </motion.a>
            <button
              type="button"
              data-testid="nav-mobile-menu-button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="rounded-full border border-line p-2.5 text-slate-200 md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            data-testid="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/98 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mark className="h-8 w-8" />
                <span className="font-display text-base font-bold">Kauã Moreira</span>
              </div>
              <button
                type="button"
                data-testid="nav-mobile-close-button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="rounded-full border border-line p-2.5 text-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1" aria-label="Menu móvel">
              {t.nav.links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                  className="flex items-baseline gap-4 border-b border-line py-3.5 font-display text-2xl font-bold text-white"
                >
                  <span className="font-mono text-xs text-accent-light">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex items-center justify-between gap-4 pt-6">
              <LangToggle testPrefix="nav-lang-toggle" />
              <motion.a
                href="#contato"
                data-testid="nav-mobile-cta-button"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex-1 rounded-full bg-accent py-4 text-center text-sm font-semibold text-white"
              >
                {t.nav.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
