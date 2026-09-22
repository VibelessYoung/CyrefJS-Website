import type { DocPage } from "../../types";

export const dropDoc: DocPage = {
  slug: "utilities/array/drop",

  category: "array",

  title: {
    en: "drop",
    fa: "drop",
  },

  description: {
    en: "Returns a new array with the first n elements removed.",
    fa: "یک آرایه جدید برمی‌گرداند که n عنصر اول آن حذف شده‌اند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which elements should be removed.",
        fa: "آرایه‌ای که عناصر آن باید حذف شوند.",
      },
    },

    {
      name: "n",
      type: "number",
      required: true,
      description: {
        en: "The number of elements to remove from the beginning of the array.",
        fa: "تعداد عناصری که باید از ابتدای آرایه حذف شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing the elements after the first n elements.",
      fa: "یک آرایه جدید شامل عناصری که بعد از n عنصر اول قرار دارند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Remove the first two elements from an array.",
        fa: "دو عنصر اول یک آرایه را حذف می‌کند.",
      },

      language: "ts",

      code: `import { drop } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

const result = drop(numbers, 2);

console.log(result);
// [3, 4, 5]`,
    },

    {
      title: {
        en: "Drop more elements than the array contains",
        fa: "حذف بیشتر از تعداد عناصر آرایه",
      },

      description: {
        en: "If n is greater than or equal to the array length, an empty array is returned.",
        fa: "اگر n بزرگ‌تر یا مساوی طول آرایه باشد، یک آرایه خالی برگردانده می‌شود.",
      },

      language: "ts",

      code: `import { drop } from "@cyref/js";

const numbers = [1, 2, 3];

const result = drop(numbers, 5);

console.log(result);
// []`,
    },

    {
      title: {
        en: "Zero or negative n",
        fa: "مقدار صفر یا منفی برای n",
      },

      description: {
        en: "If n is less than or equal to 0, the function returns a copy of the original array.",
        fa: "اگر n کوچک‌تر یا مساوی صفر باشد، تابع یک کپی از آرایه اصلی را برمی‌گرداند.",
      },

      language: "ts",

      code: `import { drop } from "@cyref/js";

const numbers = [1, 2, 3];

const result = drop(numbers, 0);

console.log(result);
// [1, 2, 3]`,
    },

    {
      title: {
        en: "Drop all elements",
        fa: "حذف تمام عناصر",
      },

      description: {
        en: "When n equals the array length, the function returns an empty array.",
        fa: "وقتی n برابر با طول آرایه باشد، تابع یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { drop } from "@cyref/js";

const numbers = [1, 2, 3];

const result = drop(numbers, 3);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
