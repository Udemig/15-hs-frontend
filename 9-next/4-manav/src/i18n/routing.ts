import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Desteklenen diller
  locales: ["tr", "en", "de"],

  // Tercih algılanamazsa kullanılacak varsayılan dil
  defaultLocale: "tr",
});
