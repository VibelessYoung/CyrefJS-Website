import type { DocPage } from "../../types";

export const shuffleDoc: DocPage = {
  slug: "utilities/array/shuffle",

  category: "array",

  title: {
    en: "shuffle",
    fa: "shuffle",
  },

  description: {
    en: "Returns a new array with the elements randomly reordered without modifying the original array.",
    fa: "یک آرایه جدید با ترتیب تصادفی عناصر برمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array whose elements should be randomly reordered.",
        fa: "آرایه‌ای که عناصر آن باید به‌صورت تصادفی مرتب شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing the same elements in a randomized order.",
      fa: "یک آرایه جدید شامل همان عناصر با ترتیبی تصادفی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Randomly reorder the elements of an array.",
        fa: "ترتیب عناصر یک آرایه را به‌صورت تصادفی تغییر می‌دهد.",
      },

      language: "ts",

      code: `import { shuffle } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

const result = shuffle(numbers);

console.log(result);
// Example: [3, 1, 5, 2, 4]`,
    },

    {
      title: {
        en: "Original array remains unchanged",
        fa: "آرایه اصلی بدون تغییر باقی می‌ماند",
      },

      description: {
        en: "The function creates a copy before shuffling, so the original array is not modified.",
        fa: "تابع قبل از shuffle کردن یک کپی ایجاد می‌کند، بنابراین آرایه اصلی تغییر نمی‌کند.",
      },

      language: "ts",

      code: `import { shuffle } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

const result = shuffle(numbers);

console.log(numbers);
// [1, 2, 3, 4, 5]

console.log(result);
// Randomized order`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "The function can randomly reorder arrays containing strings.",
        fa: "این تابع می‌تواند ترتیب آرایه‌های شامل رشته‌ها را به‌صورت تصادفی تغییر دهد.",
      },

      language: "ts",

      code: `import { shuffle } from "@cyref/js";

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Go",
];

const result = shuffle(languages);

console.log(result);
// Example: ["Go", "JavaScript", "Python", "TypeScript"]`,
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

      code: `import { shuffle } from "@cyref/js";

const result = shuffle([]);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
