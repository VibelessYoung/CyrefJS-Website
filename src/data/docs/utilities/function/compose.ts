import type { DocPage } from "../../types";

export const composeDoc: DocPage = {
  slug: "utilities/function/compose",

  category: "function",

  title: {
    en: "compose",
    fa: "compose",
  },

  description: {
    en: "Combines multiple functions into a single function that executes them from right to left.",
    fa: "چند تابع را در یک تابع واحد ترکیب می‌کند و آن‌ها را از راست به چپ اجرا می‌کند.",
  },

  parameters: [
    {
      name: "functions",
      type: "Array<(value: T) => T>",
      required: true,
      description: {
        en: "The functions to compose. Each function receives the result of the next function in the sequence.",
        fa: "توابعی که باید ترکیب شوند. هر تابع نتیجه تابع بعدی در زنجیره را دریافت می‌کند.",
      },
    },
  ],

  returns: {
    type: "(value: T) => T",
    description: {
      en: "A new function that applies the provided functions from right to left.",
      fa: "یک تابع جدید که توابع داده‌شده را از راست به چپ روی مقدار ورودی اعمال می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Compose multiple functions and execute them from right to left.",
        fa: "چند تابع را ترکیب کرده و آن‌ها را از راست به چپ اجرا می‌کند.",
      },
      language: "ts",
      code: `import { compose } from "@cyref/js";

const double = (value: number) => value * 2;
const addTen = (value: number) => value + 10;

const transform = compose(double, addTen);

const result = transform(5);

console.log(result);
// 30`,
    },

    {
      title: {
        en: "Multiple functions",
        fa: "چند تابع",
      },
      description: {
        en: "Multiple functions can be composed into a single transformation pipeline.",
        fa: "چند تابع را می‌توان در یک زنجیره تبدیل واحد ترکیب کرد.",
      },
      language: "ts",
      code: `import { compose } from "@cyref/js";

const double = (value: number) => value * 2;
const addFive = (value: number) => value + 5;
const square = (value: number) => value * value;

const transform = compose(double, addFive, square);

const result = transform(3);

console.log(result);
// 23`,
    },

    {
      title: {
        en: "Execution order",
        fa: "ترتیب اجرا",
      },
      description: {
        en: "Functions are executed from right to left. The rightmost function receives the original value first.",
        fa: "توابع از راست به چپ اجرا می‌شوند. ابتدا تابع سمت راست مقدار اصلی را دریافت می‌کند.",
      },
      language: "ts",
      code: `import { compose } from "@cyref/js";

const addTwo = (value: number) => value + 2;
const multiplyByThree = (value: number) => value * 3;

const transform = compose(addTwo, multiplyByThree);

const result = transform(4);

// multiplyByThree(4) -> 12
// addTwo(12) -> 14

console.log(result);
// 14`,
    },

    {
      title: {
        en: "String transformations",
        fa: "تبدیل رشته‌ها",
      },
      description: {
        en: "compose can be used to build reusable string transformation pipelines.",
        fa: "می‌توان از compose برای ساخت زنجیره‌های قابل استفاده مجدد جهت تبدیل رشته‌ها استفاده کرد.",
      },
      language: "ts",
      code: `import { compose } from "@cyref/js";

const trim = (value: string) => value.trim();
const toUpperCase = (value: string) => value.toUpperCase();
const addPrefix = (value: string) => \`Result: \${value}\`;

const transform = compose(
  addPrefix,
  toUpperCase,
  trim,
);

const result = transform("  hello world  ");

console.log(result);
// "Result: HELLO WORLD"`,
    },

    {
      title: {
        en: "Single function",
        fa: "یک تابع",
      },
      description: {
        en: "compose can also be used with a single function.",
        fa: "تابع compose می‌تواند فقط با یک تابع نیز استفاده شود.",
      },
      language: "ts",
      code: `import { compose } from "@cyref/js";

const double = (value: number) => value * 2;

const transform = compose(double);

console.log(transform(5));
// 10`,
    },
  ],

  since: "1.38.0",
};
