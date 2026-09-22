import type { DocPage } from "../types";

export const installationDoc: DocPage = {
  slug: "getting-started/installation",

  category: "getting-started",

  title: {
    en: "Installation",
    fa: "نصب",
  },

  description: {
    en: "Install CyrefJS in your JavaScript or TypeScript project using your preferred package manager.",
    fa: "CyrefJS را با package manager موردنظر خود در پروژه JavaScript یا TypeScript نصب کنید.",
  },

  examples: [
    {
      title: {
        en: "npm",
        fa: "npm",
      },
      language: "bash",
      code: "npm install @cyref/js",
    },
    {
      title: {
        en: "pnpm",
        fa: "pnpm",
      },
      language: "bash",
      code: "pnpm add @cyref/js",
    },
    {
      title: {
        en: "yarn",
        fa: "yarn",
      },
      language: "bash",
      code: "yarn add @cyref/js",
    },
  ],

  since: "1.38.0",
};
