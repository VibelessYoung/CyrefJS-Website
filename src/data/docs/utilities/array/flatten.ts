import type { DocPage } from "../../types";

export const flattenDoc: DocPage = {
  slug: "utilities/array/flatten",

  category: "array",

  title: {
    en: "flatten",
    fa: "flatten",
  },

  description: {
    en: "Combines the elements of nested arrays into a single array.",
    fa: "عناصر آرایه‌های تو در تو را با هم ترکیب می‌کند و یک آرایه واحد برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[][]",
      required: true,
      description: {
        en: "The array containing nested arrays to flatten.",
        fa: "آرایه‌ای شامل آرایه‌های تو در تو که باید به یک آرایه تبدیل شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing all elements from the nested arrays.",
      fa: "یک آرایه جدید شامل تمام عناصر موجود در آرایه‌های تو در تو.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Combine multiple nested arrays into a single array.",
        fa: "چند آرایه تو در تو را به یک آرایه واحد تبدیل می‌کند.",
      },

      language: "ts",

      code: `import { flatten } from "@cyref/js";

const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const result = flatten(numbers);

console.log(result);
// [1, 2, 3, 4, 5, 6]`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "Flatten an array containing nested arrays of strings.",
        fa: "آرایه‌ای شامل آرایه‌های تو در تو از رشته‌ها را به یک آرایه تبدیل می‌کند.",
      },

      language: "ts",

      code: `import { flatten } from "@cyref/js";

const languages = [
  ["JavaScript", "TypeScript"],
  ["Python", "Go"],
];

const result = flatten(languages);

console.log(result);
// ["JavaScript", "TypeScript", "Python", "Go"]`,
    },

    {
      title: {
        en: "Empty nested arrays",
        fa: "آرایه‌های تو در توی خالی",
      },

      description: {
        en: "Empty nested arrays do not add any elements to the result.",
        fa: "آرایه‌های تو در توی خالی هیچ عنصری به نتیجه اضافه نمی‌کنند.",
      },

      language: "ts",

      code: `import { flatten } from "@cyref/js";

const values = [
  [],
  [1, 2],
  [],
  [3],
];

const result = flatten(values);

console.log(result);
// [1, 2, 3]`,
    },
  ],

  since: "1.38.0",
};
