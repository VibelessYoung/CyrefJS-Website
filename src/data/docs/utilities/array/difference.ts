import type { DocPage } from "../../types";

export const differenceDoc: DocPage = {
  slug: "utilities/array/difference",

  category: "array",

  title: {
    en: "difference",
    fa: "difference",
  },

  description: {
    en: "Returns a new array containing the elements from the first array that are not included in the second array.",
    fa: "یک آرایه جدید شامل عناصری از آرایه اول برمی‌گرداند که در آرایه دوم وجود ندارند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array whose elements are checked against the values array.",
        fa: "آرایه‌ای که عناصر آن با آرایه values مقایسه می‌شوند.",
      },
    },

    {
      name: "values",
      type: "T[]",
      required: true,
      description: {
        en: "The array of values to exclude from the result.",
        fa: "آرایه‌ای از مقادیری که باید از نتیجه حذف شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing elements from the first array that are not included in the values array.",
      fa: "یک آرایه جدید شامل عناصری از آرایه اول که در آرایه values وجود ندارند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Find the elements that exist in the first array but not in the second array.",
        fa: "عناصری را پیدا می‌کند که در آرایه اول وجود دارند اما در آرایه دوم نیستند.",
      },

      language: "ts",

      code: `import { difference } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];
const excluded = [2, 4];

const result = difference(numbers, excluded);

console.log(result);
// [1, 3, 5]`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "The utility can also compare arrays of strings.",
        fa: "این utility می‌تواند آرایه‌هایی از رشته‌ها را نیز با یکدیگر مقایسه کند.",
      },

      language: "ts",

      code: `import { difference } from "@cyref/js";

const languages = ["JavaScript", "TypeScript", "Python"];
const excluded = ["Python"];

const result = difference(languages, excluded);

console.log(result);
// ["JavaScript", "TypeScript"]`,
    },

    {
      title: {
        en: "No matching values",
        fa: "بدون مقدار مشترک",
      },

      description: {
        en: "If none of the elements from the first array are included in the second array, all elements are returned.",
        fa: "اگر هیچ‌کدام از عناصر آرایه اول در آرایه دوم وجود نداشته باشند، تمام عناصر آرایه اول برگردانده می‌شوند.",
      },

      language: "ts",

      code: `import { difference } from "@cyref/js";

const numbers = [1, 2, 3];
const excluded = [4, 5, 6];

const result = difference(numbers, excluded);

console.log(result);
// [1, 2, 3]`,
    },
  ],

  since: "1.38.0",
};
