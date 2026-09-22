import type { DocPage } from "../../types";

export const takeDoc: DocPage = {
  slug: "utilities/array/take",

  category: "array",

  title: {
    en: "take",
    fa: "take",
  },

  description: {
    en: "Returns a new array containing the first n elements of the input array.",
    fa: "یک آرایه جدید شامل n عنصر اول آرایه ورودی برمی‌گرداند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array from which elements should be taken.",
        fa: "آرایه‌ای که باید عناصر ابتدایی آن دریافت شوند.",
      },
    },
    {
      name: "n",
      type: "number",
      required: true,
      description: {
        en: "The number of elements to take from the beginning of the array.",
        fa: "تعداد عناصری که باید از ابتدای آرایه گرفته شوند.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing the first n elements of the input array.",
      fa: "یک آرایه جدید شامل n عنصر اول آرایه ورودی.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Take the first three elements from an array.",
        fa: "سه عنصر اول یک آرایه را دریافت می‌کند.",
      },

      language: "ts",

      code: `import { take } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

const result = take(numbers, 3);

console.log(result);
// [1, 2, 3]`,
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

      code: `import { take } from "@cyref/js";

const numbers = [1, 2, 3];

const result = take(numbers, 10);

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

      code: `import { take } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5];

console.log(take(numbers, 0));
// []

console.log(take(numbers, -2));
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

      code: `import { take } from "@cyref/js";

const numbers = [1, 2, 3];

const result = take(numbers, numbers.length);

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

      code: `import { take } from "@cyref/js";

const result = take([], 3);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
