import type { DocPage } from "../../types";

export const firstDoc: DocPage = {
  slug: "utilities/array/first",

  category: "array",

  title: {
    en: "first",
    fa: "first",
  },

  description: {
    en: "Returns the first element of an array.",
    fa: "اولین عنصر یک آرایه را برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which to retrieve the first element.",
        fa: "آرایه‌ای که باید اولین عنصر آن دریافت شود.",
      },
    },
  ],

  returns: {
    type: "T | undefined",
    description: {
      en: "The first element of the array, or undefined if the array is empty.",
      fa: "اولین عنصر آرایه را برمی‌گرداند و اگر آرایه خالی باشد، undefined برمی‌گرداند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Get the first element from an array.",
        fa: "اولین عنصر یک آرایه را دریافت می‌کند.",
      },

      language: "ts",

      code: `import { first } from "@cyref/js";

const numbers = [10, 20, 30, 40];

const result = first(numbers);

console.log(result);
// 10`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "Get the first string from an array.",
        fa: "اولین رشته را از یک آرایه دریافت می‌کند.",
      },

      language: "ts",

      code: `import { first } from "@cyref/js";

const languages = ["JavaScript", "TypeScript", "Python"];

const result = first(languages);

console.log(result);
// "JavaScript"`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "If the array is empty, the function returns undefined.",
        fa: "اگر آرایه خالی باشد، تابع undefined برمی‌گرداند.",
      },

      language: "ts",

      code: `import { first } from "@cyref/js";

const values: number[] = [];

const result = first(values);

console.log(result);
// undefined`,
    },
  ],

  since: "1.38.0",
};
