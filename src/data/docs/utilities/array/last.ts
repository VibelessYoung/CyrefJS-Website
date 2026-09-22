import type { DocPage } from "../../types";

export const lastDoc: DocPage = {
  slug: "utilities/array/last",

  category: "array",

  title: {
    en: "last",
    fa: "last",
  },

  description: {
    en: "Returns the last element of an array.",
    fa: "آخرین عنصر یک آرایه را برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which to retrieve the last element.",
        fa: "آرایه‌ای که باید آخرین عنصر آن دریافت شود.",
      },
    },
  ],

  returns: {
    type: "T | undefined",
    description: {
      en: "The last element of the array, or undefined if the array is empty.",
      fa: "آخرین عنصر آرایه، یا در صورتی که آرایه خالی باشد undefined.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Get the last element from an array of numbers.",
        fa: "آخرین عنصر را از یک آرایه از اعداد دریافت می‌کند.",
      },

      language: "ts",

      code: `import { last } from "@cyref/js";

const numbers = [10, 20, 30, 40];

const result = last(numbers);

console.log(result);
// 40`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "The function works with arrays containing strings.",
        fa: "این تابع با آرایه‌های شامل رشته‌ها نیز کار می‌کند.",
      },

      language: "ts",

      code: `import { last } from "@cyref/js";

const languages = ["JavaScript", "TypeScript", "Python"];

const result = last(languages);

console.log(result);
// "Python"`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty array returns undefined.",
        fa: "برای یک آرایه خالی، مقدار undefined برگردانده می‌شود.",
      },

      language: "ts",

      code: `import { last } from "@cyref/js";

const result = last([]);

console.log(result);
// undefined`,
    },
  ],

  since: "1.38.0",
};
