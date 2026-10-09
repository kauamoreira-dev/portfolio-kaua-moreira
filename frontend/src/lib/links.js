import { toast } from "sonner";

// Link ainda sem URL configurada em src/config/site.js
export const handleEmptyLink = (e) => {
  e.preventDefault();
  toast.info("Link ainda não configurado", {
    description: "Edite src/config/site.js e cole a URL desejada.",
  });
};
