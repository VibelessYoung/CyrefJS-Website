import type { DocPage } from "../../types";

export const takeRightDoc: DocPage = {
  slug: "utilities/array/take-right",

  category: "array",

  title: {
    en: "takeRight",
    fa: "takeRight",
  },

  description: {
    en: "Returns a new array containing the last n elements of the input array.",
    fa: "یک آرایه جدید شامل n عنصر آخر آرایه ورودی برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which elements should be taken.",
        fa: "آرایه‌ای که باید عناصر انتهایی آن دریافت شوند.",
      },
    },
    {
      name: "n",
      type: "number",
      required: true,
      description: {
        en: "The number of elements to take from the end of the array.",
        fa: "تعداد عناصری که باید از انتهای آرایه گرفته شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing the last n elements of the input array.",
      fa: "یک آرایه جدید شامل n عنصر آخر آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Take the last three elements from an array.",
        fa: "سه عنصر آخر یک آرایه را دریافت می‌کند.",
      },

      language: "ts",

      code: `import { takeRight } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

const result = takeRight(numbers, 3);

console.log(result);
// [3, 4, 5]`,
    },

    {
      title: {
        en: "Taking more than the array length",
        fa: "گرفتن بیشتر از طول آرایه",
      },

      description: {
        en: "If n is greater than or equal to the array length, a copy of the entire array is returned.",
        fa: "اگر n بزرگ‌تر یا مساوی طول آرایه باشد، یک کپی از کل آرایه برگردانده می‌شود.",
      },

      language: "ts",

      code: `import { takeRight } from "@cyref/js";

const numbers = [1, 2, 3];

const result = takeRight(numbers, 10);

console.log(result);
// [1, 2, 3]`,
    },

    {
      title: {
        en: "Zero or negative n",
        fa: "مقدار صفر یا منفی برای n",
      },

      description: {
        en: "When n is zero or negative, the function returns an empty array.",
        fa: "وقتی n صفر یا منفی باشد، تابع یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { takeRight } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

console.log(takeRight(numbers, 0));
// []

console.log(takeRight(numbers, -2));
// []`,
    },

    {
      title: {
        en: "Taking all elements",
        fa: "گرفتن تمام عناصر",
      },

      description: {
        en: "When n equals the array length, all elements are returned in a new array.",
        fa: "وقتی n برابر با طول آرایه باشد، تمام عناصر در یک آرایه جدید برگردانده می‌شوند.",
      },

      language: "ts",

      code: `import { takeRight } from "@cyref/js";

const numbers = [1, 2, 3];

const result = takeRight(numbers, numbers.length);

console.log(result);
// [1, 2, 3]`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "Taking elements from an empty array returns an empty array.",
        fa: "گرفتن عناصر از یک آرایه خالی، یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { takeRight } from "@cyref/js";

const result = takeRight([], 3);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
