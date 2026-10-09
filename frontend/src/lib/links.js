import { toast } from "sonner";
import { i18nRef, dict } from "@/i18n";

// Link ainda sem URL configurada em src/config/site.js
export const handleEmptyLink = (e) => {
  e.preventDefault();
  const t = dict[i18nRef.lang].toast;
  toast.info(t.titulo, { description: t.desc });
};
