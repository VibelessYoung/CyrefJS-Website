import type { DocPage } from "../../types";

export const unzipDoc: DocPage = {
  slug: "utilities/array/unzip",

  category: "array",

  title: {
    en: "unzip",
    fa: "unzip",
  },

  description: {
    en: "Separates an array of pairs into two arrays containing the first and second values respectively.",
    fa: "یک آرایه از جفت‌ها را به دو آرایه جداگانه شامل مقادیر اول و دوم هر جفت تبدیل می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "[T, U][]",
      required: true,
      description: {
        en: "An array of two-element tuples to separate into two arrays.",
        fa: "آرایه‌ای از tupleهای دوتایی که باید به دو آرایه جداگانه تقسیم شوند.",
      },
    },
  ],

  returns: {
    type: "[T[], U[]]",
    description: {
      en: "A tuple containing two arrays: the first contains all first values, and the second contains all second values.",
      fa: "یک tuple شامل دو آرایه؛ آرایه اول شامل تمام مقادیر اول و آرایه دوم شامل تمام مقادیر دوم هر جفت است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Separate pairs of numbers into two arrays.",
        fa: "جفت‌های عددی را به دو آرایه جداگانه تقسیم می‌کند.",
      },

      language: "ts",

      code: `import { unzip } from "@cyref/js";

const pairs: [number, number][] = [
  [1, 10],
  [2, 20],
  [3, 30],
];

const result = unzip(pairs);

console.log(result);
// [
//   [1, 2, 3],
//   [10, 20, 30],
// ]`,
    },

    {
      title: {
        en: "With different types",
        fa: "با نوع‌های متفاوت",
      },

      description: {
        en: "The two values in each pair can have different types.",
        fa: "دو مقدار موجود در هر جفت می‌توانند typeهای متفاوتی داشته باشند.",
      },

      language: "ts",

      code: `import { unzip } from "@cyref/js";

const pairs: [string, number][] = [
  ["Amir", 20],
  ["Sara", 25],
  ["Reza", 30],
];

const result = unzip(pairs);

console.log(result);
// [
//   ["Amir", "Sara", "Reza"],
//   [20, 25, 30],
// ]`,
    },

    {
      title: {
        en: "With objects",
        fa: "با آبجکت‌ها",
      },

      description: {
        en: "Tuple values can also contain objects.",
        fa: "مقادیر tuple می‌توانند شامل آبجکت نیز باشند.",
      },

      language: "ts",

      code: `import { unzip } from "@cyref/js";

const pairs: [string, { active: boolean }][] = [
  ["Amir", { active: true }],
  ["Sara", { active: false }],
];

const result = unzip(pairs);

console.log(result);
// [
//   ["Amir", "Sara"],
//   [
//     { active: true },
//     { active: false },
//   ],
// ]`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty array produces two empty arrays.",
        fa: "یک آرایه خالی، دو آرایه خالی ایجاد می‌کند.",
      },

      language: "ts",

      code: `import { unzip } from "@cyref/js";

const result = unzip([]);

console.log(result);
// [[], []]`,
    },
  ],

  since: "1.38.0",
};
