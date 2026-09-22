import type { DocPage } from "../../types";

export const compactDoc: DocPage = {
  slug: "utilities/array/compact",

  category: "array",

  title: {
    en: "compact",
    fa: "compact",
  },

  description: {
    en: "Removes falsy values from an array and returns a new array containing only truthy values.",
    fa: "مقادیر falsy را از یک آرایه حذف می‌کند و یک آرایه جدید شامل فقط مقادیر truthy برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which falsy values should be removed.",
        fa: "آرایه‌ای که باید مقادیر falsy از آن حذف شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing only the truthy values from the input array.",
      fa: "یک آرایه جدید شامل فقط مقادیر truthy موجود در آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Remove falsy values from an array.",
        fa: "مقادیر falsy را از یک آرایه حذف می‌کند.",
      },

      language: "ts",

      code: `import { compact } from "@cyref/js";

const values = [0, 1, false, 2, "", 3, null, 4];

const result = compact(values);

console.log(result);
// [1, 2, 3, 4]`,
    },

    {
      title: {
        en: "Keep truthy values",
        fa: "حفظ مقادیر truthy",
      },

      description: {
        en: "Only truthy values are included in the returned array.",
        fa: "فقط مقادیر truthy در آرایه خروجی قرار می‌گیرند.",
      },

      language: "ts",

      code: `import { compact } from "@cyref/js";

const values = ["hello", "", "world", false, "CyrefJS"];

const result = compact(values);

console.log(result);
// ["hello", "world", "CyrefJS"]`,
    },

    {
      title: {
        en: "Empty result",
        fa: "نتیجه خالی",
      },

      description: {
        en: "If all values in the input array are falsy, the function returns an empty array.",
        fa: "اگر تمام مقادیر آرایه ورودی falsy باشند، تابع یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { compact } from "@cyref/js";

const values = [0, false, "", null, undefined];

const result = compact(values);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
