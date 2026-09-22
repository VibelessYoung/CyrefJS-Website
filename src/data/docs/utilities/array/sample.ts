import type { DocPage } from "../../types";

export const sampleDoc: DocPage = {
  slug: "utilities/array/sample",

  category: "array",

  title: {
    en: "sample",
    fa: "sample",
  },

  description: {
    en: "Returns a randomly selected element from an array.",
    fa: "یک عنصر را به‌صورت تصادفی از یک آرایه انتخاب و برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which a random element should be selected.",
        fa: "آرایه‌ای که باید یک عنصر تصادفی از آن انتخاب شود.",
      },
    },
  ],

  returns: {
    type: "T | undefined",
    description: {
      en: "A randomly selected element from the array, or undefined if the array is empty.",
      fa: "یک عنصر تصادفی از آرایه، یا در صورت خالی بودن آرایه undefined.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Select a random element from an array of numbers.",
        fa: "یک عنصر تصادفی را از آرایه‌ای از اعداد انتخاب می‌کند.",
      },

      language: "ts",

      code: `import { sample } from "@cyref/js";

const numbers = [10, 20, 30, 40, 50];

const result = sample(numbers);

console.log(result);
// One of: 10, 20, 30, 40, 50`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "The function can randomly select an element from an array of strings.",
        fa: "تابع می‌تواند یک عنصر را به‌صورت تصادفی از آرایه‌ای از رشته‌ها انتخاب کند.",
      },

      language: "ts",

      code: `import { sample } from "@cyref/js";

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
];

const result = sample(languages);

console.log(result);
// One of: "JavaScript", "TypeScript", "Python"`,
    },

    {
      title: {
        en: "With objects",
        fa: "با آبجکت‌ها",
      },

      description: {
        en: "The function returns a randomly selected object from the array.",
        fa: "تابع یک آبجکت را به‌صورت تصادفی از آرایه برمی‌گرداند.",
      },

      language: "ts",

      code: `import { sample } from "@cyref/js";

const users = [
  { id: 1, name: "Amir" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Reza" },
];

const result = sample(users);

console.log(result);
// One of the objects from the users array`,
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

      code: `import { sample } from "@cyref/js";

const result = sample([]);

console.log(result);
// undefined`,
    },
  ],

  since: "1.38.0",
};
