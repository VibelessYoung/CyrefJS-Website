import type { DocPage } from "../types";

export const introductionDoc: DocPage = {
  slug: "getting-started/introduction",

  category: "getting-started",

  title: {
    en: "Introduction",
    fa: "معرفی",
  },

  description: {
    en: "An introduction to CyrefJS and its utility-first approach to JavaScript and TypeScript development.",
    fa: "آشنایی با CyrefJS و رویکرد utility-first آن برای توسعه JavaScript و TypeScript.",
  },

  sections: [
    {
      id: "what-is-cyrefjs",
      title: {
        en: "What is CyrefJS?",
        fa: "CyrefJS چیست؟",
      },
      content: {
        en: "CyrefJS is a JavaScript and TypeScript utility library designed to provide small, reusable helpers for common development tasks.",
        fa: "CyrefJS یک کتابخانه utility برای JavaScript و TypeScript است که helperهای کوچک و قابل استفاده مجدد را برای کارهای رایج توسعه ارائه می‌دهد.",
      },
    },
    {
      id: "why-cyrefjs",
      title: {
        en: "Why CyrefJS?",
        fa: "چرا CyrefJS؟",
      },
      content: {
        en: "The goal of CyrefJS is to keep utility functions simple, predictable, reusable, and easy to integrate into modern projects.",
        fa: "هدف CyrefJS ارائه توابع utility ساده، قابل پیش‌بینی، قابل استفاده مجدد و آسان برای استفاده در پروژه‌های مدرن است.",
      },
    },
  ],

  since: "1.38.0",
};
