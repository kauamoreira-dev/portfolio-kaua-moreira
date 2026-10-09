import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/i18n";

export const Marquee = () => {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const row = [...t.marquee, ...t.marquee];

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
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span
              className={`px-6 font-display text-2xl font-bold uppercase tracking-tight md:px-10 md:text-4xl ${
                i % 2 === 0 ? "text-white/90" : "text-outline"
              }`}
            >
              {item}
            </span>
            <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
