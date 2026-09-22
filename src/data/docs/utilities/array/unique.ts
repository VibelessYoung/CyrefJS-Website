import type { DocPage } from "../../types";

export const uniqueDoc: DocPage = {
  slug: "utilities/array/unique",

  category: "array",

  title: {
    en: "unique",
    fa: "unique",
  },

  description: {
    en: "Returns a new array containing only the unique elements from the input array.",
    fa: "یک آرایه جدید شامل عناصر یکتای آرایه ورودی برمی‌گرداند و عناصر تکراری را حذف می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array whose duplicate elements should be removed.",
        fa: "آرایه‌ای که عناصر تکراری آن باید حذف شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing only unique elements from the input array.",
      fa: "یک آرایه جدید شامل فقط عناصر یکتای آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Remove duplicate numbers from an array.",
        fa: "اعداد تکراری را از یک آرایه حذف می‌کند.",
      },

      language: "ts",

      code: `import { unique } from "@cyref/js";

const numbers = [1, 2, 2, 3, 3, 4, 5, 5];

const result = unique(numbers);

console.log(result);
// [1, 2, 3, 4, 5]`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "Duplicate string values are removed while the first occurrence of each value is preserved.",
        fa: "مقادیر رشته‌ای تکراری حذف می‌شوند و اولین occurrence هر مقدار حفظ می‌شود.",
      },

      language: "ts",

      code: `import { unique } from "@cyref/js";

const languages = [
  "JavaScript",
  "TypeScript",
  "JavaScript",
  "Python",
  "TypeScript",
];

const result = unique(languages);

console.log(result);
// ["JavaScript", "TypeScript", "Python"]`,
    },

    {
      title: {
        en: "Already unique",
        fa: "آرایه بدون تکرار",
      },

      description: {
        en: "An array containing only unique elements produces an equivalent new array.",
        fa: "آرایه‌ای که عناصر تکراری ندارد، یک آرایه جدید با همان عناصر تولید می‌کند.",
      },

      language: "ts",

      code: `import { unique } from "@cyref/js";

const numbers = [1, 2, 3, 4];

const result = unique(numbers);

console.log(result);
// [1, 2, 3, 4]`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty array returns a new empty array.",
        fa: "یک آرایه خالی، یک آرایه خالی جدید برمی‌گرداند.",
      },

      language: "ts",

      code: `import { unique } from "@cyref/js";

const result = unique([]);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
