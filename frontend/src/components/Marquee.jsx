import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Sistemas reais",
  "Produtos digitais",
  "Soluções escaláveis",
  "Web & Mobile",
  "Do planejamento ao deploy",
  "Código limpo",
];

export const Marquee = () => {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      data-testid="marquee"
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line py-6 md:py-8"
    >
      <motion.div
        className="flex w-max items-center whitespace-nowrap"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-6 font-display text-2xl font-bold uppercase tracking-tight md:px-10 md:text-4xl ${
                i % 2 === 0 ? "text-white/90" : "text-outline"
              }`}
            >
              {t}
            </span>
            <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
