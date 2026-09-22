import type { DocPage } from "../../types";

export const flattenDeepDoc: DocPage = {
  slug: "utilities/array/flatten-deep",

  category: "array",

  title: {
    en: "flattenDeep",
    fa: "flattenDeep",
  },

  description: {
    en: "Recursively flattens nested arrays of any depth into a single array.",
    fa: "آرایه‌های تو در تو را در هر عمقی به‌صورت بازگشتی به یک آرایه واحد تبدیل می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "unknown[]",
      required: true,
      description: {
        en: "The array containing values and potentially nested arrays to flatten.",
        fa: "آرایه‌ای شامل مقادیر و آرایه‌های تو در تو که باید flatten شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing all non-array values from the input array.",
      fa: "یک آرایه جدید شامل تمام مقادیر غیرآرایه‌ای موجود در آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Flatten nested arrays into a single array.",
        fa: "آرایه‌های تو در تو را به یک آرایه واحد تبدیل می‌کند.",
      },

      language: "ts",

      code: `import { flattenDeep } from "@cyref/js";

const values = [1, [2, 3], [4, [5, 6]]];

const result = flattenDeep<number>(values);

console.log(result);
// [1, 2, 3, 4, 5, 6]`,
    },

    {
      title: {
        en: "Multiple levels of nesting",
        fa: "چند سطح تو در تو",
      },

      description: {
        en: "The function recursively flattens arrays regardless of their nesting depth.",
        fa: "تابع بدون توجه به عمق تو در تو بودن آرایه‌ها، آن‌ها را به‌صورت بازگشتی flatten می‌کند.",
      },

      language: "ts",

      code: `import { flattenDeep } from "@cyref/js";

const values = [
  1,
  [2, [3, [4, [5]]]],
];

const result = flattenDeep<number>(values);

console.log(result);
// [1, 2, 3, 4, 5]`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "Nested arrays containing strings are recursively flattened into a single array.",
        fa: "آرایه‌های تو در تو شامل رشته‌ها را به‌صورت بازگشتی به یک آرایه واحد تبدیل می‌کند.",
      },

      language: "ts",

      code: `import { flattenDeep } from "@cyref/js";

const values = [
  ["JavaScript", ["TypeScript"]],
  [["Python", "Go"]],
];

const result = flattenDeep<string>(values);

console.log(result);
// ["JavaScript", "TypeScript", "Python", "Go"]`,
    },

    {
      title: {
        en: "Empty arrays",
        fa: "آرایه‌های خالی",
      },

      description: {
        en: "Empty arrays are ignored and do not add elements to the result.",
        fa: "آرایه‌های خالی نادیده گرفته می‌شوند و عنصری به نتیجه اضافه نمی‌کنند.",
      },

      language: "ts",

      code: `import { flattenDeep } from "@cyref/js";

const values = [
  [],
  [1, [2]],
  [],
  [[3]],
];

const result = flattenDeep<number>(values);

console.log(result);
// [1, 2, 3]`,
    },
  ],

  since: "1.38.0",
};
