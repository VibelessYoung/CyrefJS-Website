import type { DocPage } from "../../types";

export const negateDoc: DocPage = {
  slug: "utilities/function/negate",
  category: "function",

  title: {
    en: "negate",
    fa: "negate",
  },

  description: {
    en: "Creates a function that returns the boolean opposite of the result returned by the given function.",
    fa: "تابعی ایجاد می‌کند که نتیجه بولی تابع داده‌شده را معکوس می‌کند.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => boolean",
      required: true,
      description: {
        en: "The function whose boolean result should be negated.",
        fa: "تابعی که نتیجه بولی آن باید معکوس شود.",
      },
    },
  ],

  returns: {
    type: "(...args: TArgs) => boolean",
    description: {
      en: "Returns a new function that returns the opposite boolean value of the original function's result.",
      fa: "تابع جدیدی را برمی‌گرداند که مقدار بولی مخالف نتیجه تابع اصلی را برمی‌گرداند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "The returned function reverses the boolean result.",
        fa: "تابع جدید نتیجه بولی را معکوس می‌کند.",
      },
      language: "ts",
      code: `const isEven = (value: number) => value % 2 === 0;

const isOdd = negate(isEven);

console.log(isOdd(3));
// true

console.log(isOdd(4));
// false`,
    },

    {
      title: {
        en: "Negating a string predicate",
        fa: "معکوس کردن یک شرط برای رشته",
      },
      description: {
        en: "A predicate that checks whether a string is empty can be negated to check whether it is not empty.",
        fa: "می‌توان شرط بررسی خالی بودن رشته را معکوس کرد تا پر بودن آن بررسی شود.",
      },
      language: "ts",
      code: `const isEmpty = (value: string) => value.length === 0;

const isNotEmpty = negate(isEmpty);

console.log(isNotEmpty("CyrefJS"));
// true

console.log(isNotEmpty(""));
// false`,
    },

    {
      title: {
        en: "Passing multiple arguments",
        fa: "ارسال چند آرگومان",
      },
      description: {
        en: "All arguments are forwarded to the original function before its result is negated.",
        fa: "تمام آرگومان‌ها قبل از معکوس شدن نتیجه، به تابع اصلی ارسال می‌شوند.",
      },
      language: "ts",
      code: `const isGreater = (a: number, b: number) => a > b;

const isNotGreater = negate(isGreater);

console.log(isNotGreater(5, 3));
// false

console.log(isNotGreater(2, 4));
// true`,
    },

    {
      title: {
        en: "Using with filter",
        fa: "استفاده با filter",
      },
      description: {
        en: "The negated predicate can be used to select values that do not satisfy the original condition.",
        fa: "می‌توان از شرط معکوس‌شده برای انتخاب مقادیری استفاده کرد که شرط اصلی را برقرار نمی‌کنند.",
      },
      language: "ts",
      code: `const isEven = (value: number) => value % 2 === 0;

const isOdd = negate(isEven);

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter(isOdd);

console.log(result);
// [1, 3, 5]`,
    },

    {
      title: {
        en: "Original function remains unchanged",
        fa: "تابع اصلی بدون تغییر باقی می‌ماند",
      },
      description: {
        en: "negate creates a new function and does not modify the original function.",
        fa: "تابع negate یک تابع جدید ایجاد می‌کند و تابع اصلی را تغییر نمی‌دهد.",
      },
      language: "ts",
      code: `const isPositive = (value: number) => value > 0;

const isNotPositive = negate(isPositive);

console.log(isPositive(5));
// true

console.log(isNotPositive(5));
// false`,
    },
  ],

  since: "1.38.0",
};
