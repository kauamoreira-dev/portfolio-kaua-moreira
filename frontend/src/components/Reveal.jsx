import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  y = 26,
  duration = 0.75,
  className = "",
  as = "div",
  ...rest
}) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const SectionTag = ({ children }) => (
  <Reveal
    as="p"
    className="font-mono text-xs uppercase tracking-[0.25em] text-accent-light"
  >
    {children}
  </Reveal>
);
