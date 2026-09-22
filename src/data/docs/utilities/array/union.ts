import type { DocPage } from "../../types";

export const unionDoc: DocPage = {
  slug: "utilities/array/union",

  category: "array",

  title: {
    en: "union",
    fa: "union",
  },

  description: {
    en: "Combines two arrays into a new array containing only unique elements.",
    fa: "دو آرایه را با هم ترکیب می‌کند و یک آرایه جدید شامل عناصر یکتا برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The first array whose elements should be included in the result.",
        fa: "آرایه اول که عناصر آن باید در نتیجه قرار بگیرند.",
      },
    },
    {
      name: "values",
      type: "T[]",
      required: true,
      description: {
        en: "The second array whose elements should be combined with the first array.",
        fa: "آرایه دوم که عناصر آن باید با آرایه اول ترکیب شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing the unique elements from both input arrays.",
      fa: "یک آرایه جدید شامل عناصر یکتای هر دو آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Combine two arrays and remove duplicate values.",
        fa: "دو آرایه را ترکیب کرده و مقادیر تکراری را حذف می‌کند.",
      },

      language: "ts",

      code: `import { union } from "@cyref/js";

const array = [1, 2, 3];
const values = [3, 4, 5];

const result = union(array, values);

console.log(result);
// [1, 2, 3, 4, 5]`,
    },

    {
      title: {
        en: "Duplicate values",
        fa: "مقادیر تکراری",
      },

      description: {
        en: "Duplicate values are removed from the combined result.",
        fa: "مقادیر تکراری از نتیجه ترکیب‌شده حذف می‌شوند.",
      },

      language: "ts",

      code: `import { union } from "@cyref/js";

const array = [1, 2, 2, 3];
const values = [2, 3, 3, 4];

const result = union(array, values);

console.log(result);
// [1, 2, 3, 4]`,
    },

    {
      title: {
        en: "Strings",
        fa: "رشته‌ها",
      },

      description: {
        en: "The function can combine arrays of strings while removing duplicate values.",
        fa: "این تابع می‌تواند آرایه‌های رشته‌ای را با حذف مقادیر تکراری ترکیب کند.",
      },

      language: "ts",

      code: `import { union } from "@cyref/js";

const array = ["JavaScript", "TypeScript"];
const values = ["TypeScript", "Python"];

const result = union(array, values);

console.log(result);
// ["JavaScript", "TypeScript", "Python"]`,
    },

    {
      title: {
        en: "Empty arrays",
        fa: "آرایه‌های خالی",
      },

      description: {
        en: "Empty arrays are handled naturally when combining the values.",
        fa: "آرایه‌های خالی نیز هنگام ترکیب مقادیر به‌صورت طبیعی مدیریت می‌شوند.",
      },

      language: "ts",

      code: `import { union } from "@cyref/js";

const result = union([], [1, 2, 3]);

console.log(result);
// [1, 2, 3]`,
    },

    {
      title: {
        en: "Both arrays empty",
        fa: "هر دو آرایه خالی",
      },

      description: {
        en: "When both input arrays are empty, the function returns an empty array.",
        fa: "وقتی هر دو آرایه ورودی خالی باشند، تابع یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { union } from "@cyref/js";

const result = union([], []);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
