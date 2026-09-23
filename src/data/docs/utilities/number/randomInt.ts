import type { DocPage } from "../../types";

export const randomIntDoc: DocPage = {
  slug: "utilities/number/random-int",
  category: "number",
  title: {
    en: "randomInt",
    fa: "randomInt",
  },
  description: {
    en: "Returns a random integer between the specified minimum and maximum values, inclusive.",
    fa: "یک عدد صحیح تصادفی بین حداقل و حداکثر مشخص‌شده، به‌صورت شامل هر دو انتها، برمی‌گرداند.",
  },
  parameters: [
    {
      name: "min",
      type: "number",
      required: true,
      description: {
        en: "The minimum integer that can be returned.",
        fa: "حداقل عدد صحیحی که می‌تواند برگردانده شود.",
      },
    },
    {
      name: "max",
      type: "number",
      required: true,
      description: {
        en: "The maximum integer that can be returned.",
        fa: "حداکثر عدد صحیحی که می‌تواند برگردانده شود.",
      },
    },
  ],
  returns: {
    type: "number",
    description: {
      en: "Returns a random integer in the inclusive range from min to max.",
      fa: "یک عدد صحیح تصادفی در بازه شامل min تا max را برمی‌گرداند.",
    },
  },
  throws: [
    {
      en: "Throws a RangeError if min or max is not an integer.",
      fa: "اگر min یا max عدد صحیح نباشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if min is greater than max.",
      fa: "اگر min بزرگ‌تر از max باشد، یک RangeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Generates a random integer between 1 and 10, including both endpoints.",
        fa: "یک عدد صحیح تصادفی بین 1 و 10 تولید می‌کند و هر دو مقدار ابتدا و انتها را شامل می‌شود.",
      },
      language: "ts",
      code: `const result = randomInt(1, 10);

console.log(result);
// Random integer from 1 to 10`,
    },
    {
      title: {
        en: "Single value",
        fa: "یک مقدار",
      },
      description: {
        en: "When min and max are equal, the only possible result is that value.",
        fa: "وقتی min و max برابر باشند، تنها نتیجه ممکن همان مقدار است.",
      },
      language: "ts",
      code: `console.log(randomInt(5, 5));
// 5`,
    },
    {
      title: {
        en: "Negative range",
        fa: "بازه منفی",
      },
      description: {
        en: "Negative integers can be used as the range boundaries.",
        fa: "اعداد صحیح منفی نیز می‌توانند به‌عنوان محدوده استفاده شوند.",
      },
      language: "ts",
      code: `const result = randomInt(-10, -1);

console.log(result);
// Random integer from -10 to -1`,
    },
    {
      title: {
        en: "Range crossing zero",
        fa: "بازه شامل صفر",
      },
      description: {
        en: "The range can contain both negative and positive integers.",
        fa: "بازه می‌تواند شامل اعداد صحیح منفی و مثبت باشد.",
      },
      language: "ts",
      code: `const result = randomInt(-5, 5);

console.log(result);
// Random integer from -5 to 5`,
    },
    {
      title: {
        en: "Large range",
        fa: "بازه بزرگ",
      },
      description: {
        en: "The function can generate integers from a larger inclusive range.",
        fa: "تابع می‌تواند از یک بازه بزرگ‌تر و شامل هر دو انتها عدد صحیح تولید کند.",
      },
      language: "ts",
      code: `const result = randomInt(100, 1000);

console.log(result);
// Random integer from 100 to 1000`,
    },
    {
      title: {
        en: "Non-integer bounds",
        fa: "محدوده غیرصحیح",
      },
      description: {
        en: "Both min and max must be integers.",
        fa: "هر دو مقدار min و max باید عدد صحیح باشند.",
      },
      language: "ts",
      code: `randomInt(1.5, 10);
// RangeError: randomInt: min and max must be integers`,
    },
    {
      title: {
        en: "Invalid range",
        fa: "بازه نامعتبر",
      },
      description: {
        en: "The minimum value cannot be greater than the maximum value.",
        fa: "مقدار حداقل نمی‌تواند بزرگ‌تر از مقدار حداکثر باشد.",
      },
      language: "ts",
      code: `randomInt(10, 1);
// RangeError: randomInt: min must be less than or equal to max`,
    },
    {
      title: {
        en: "Inclusive endpoints",
        fa: "شامل ابتدا و انتها",
      },
      description: {
        en: "Both min and max are valid possible results.",
        fa: "هر دو مقدار min و max می‌توانند نتیجه تابع باشند.",
      },
      language: "ts",
      code: `const result = randomInt(1, 3);

// Possible results:
// 1
// 2
// 3`,
    },
  ],
  since: "1.38.0",
};
