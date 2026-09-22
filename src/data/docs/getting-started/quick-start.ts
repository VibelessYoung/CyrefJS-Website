import type { DocPage } from "../types";

export const quickStartDoc: DocPage = {
  slug: "getting-started/quick-start",

  category: "getting-started",

  title: {
    en: "Quick Start",
    fa: "شروع سریع",
  },

  description: {
    en: "Learn the basic workflow for importing and using CyrefJS utilities in your project.",
    fa: "با روش پایه import و استفاده از utilityهای CyrefJS در پروژه آشنا شوید.",
  },

  examples: [
    {
      title: {
        en: "Import a utility",
        fa: "Import کردن یک utility",
      },
      language: "ts",
      code: `import { chunk } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5, 6];

const result = chunk(numbers, 2);

console.log(result);`,
    },
  ],

  since: "1.38.0",
};
