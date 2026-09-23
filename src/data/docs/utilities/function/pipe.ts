import type { DocPage } from "../../types";

export const pipeDoc: DocPage = {
  slug: "utilities/function/pipe",
  category: "function",

  title: {
    en: "pipe",
    fa: "pipe",
  },

  description: {
    en: "Creates a function that passes a value through a sequence of functions from left to right.",
    fa: "تابعی ایجاد می‌کند که یک مقدار را به‌ترتیب از چند تابع، از چپ به راست، عبور می‌دهد.",
  },

  parameters: [
    {
      name: "functions",
      type: "Array<(value: T) => T>",
      required: false,
      description: {
        en: "Functions to execute sequentially from left to right. Each function receives the result of the previous function.",
        fa: "توابعی که به‌ترتیب از چپ به راست اجرا می‌شوند. هر تابع نتیجه تابع قبلی را دریافت می‌کند.",
      },
    },
  ],

  returns: {
    type: "(value: T) => T",
    description: {
      en: "Returns a function that passes its input through all provided functions in order.",
      fa: "تابعی را برمی‌گرداند که مقدار ورودی را به‌ترتیب از تمام توابع داده‌شده عبور می‌دهد.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Functions are executed from left to right.",
        fa: "توابع از چپ به راست اجرا می‌شوند.",
      },
      language: "ts",
      code: `const addTen = (value: number) => value + 10;
const double = (value: number) => value * 2;

const transform = pipe(addTen, double);

console.log(transform(5));
// 30`,
    },

    {
      title: {
        en: "Execution order",
        fa: "ترتیب اجرا",
      },
      description: {
        en: "The result of each function becomes the input of the next function.",
        fa: "نتیجه هر تابع به‌عنوان ورودی تابع بعدی استفاده می‌شود.",
      },
      language: "ts",
      code: `const addTen = (value: number) => value + 10;
const multiplyByTwo = (value: number) => value * 2;
const subtractFive = (value: number) => value - 5;

const transform = pipe(
  addTen,
  multiplyByTwo,
  subtractFive,
);

console.log(transform(5));
// 25

// 5 -> 15 -> 30 -> 25`,
    },

    {
      title: {
        en: "String transformations",
        fa: "تغییر رشته",
      },
      description: {
        en: "pipe can be used to chain multiple string transformations.",
        fa: "می‌توان از pipe برای زنجیره کردن چند تغییر روی رشته استفاده کرد.",
      },
      language: "ts",
      code: `const trim = (value: string) => value.trim();
const toLowerCase = (value: string) => value.toLowerCase();
const addPrefix = (value: string) => \`user:\${value}\`;

const normalize = pipe(
  trim,
  toLowerCase,
  addPrefix,
);

console.log(normalize("  AMIR  "));
// user:amir`,
    },

    {
      title: {
        en: "Multiple functions",
        fa: "چند تابع",
      },
      description: {
        en: "Any number of compatible functions can be passed to pipe.",
        fa: "می‌توان هر تعداد تابع سازگار را به pipe ارسال کرد.",
      },
      language: "ts",
      code: `const increment = (value: number) => value + 1;
const double = (value: number) => value * 2;
const square = (value: number) => value * value;

const transform = pipe(
  increment,
  double,
  square,
);

console.log(transform(2));
// 36`,
    },

    {
      title: {
        en: "Without functions",
        fa: "بدون تابع",
      },
      description: {
        en: "When no functions are provided, the returned function returns the original value unchanged.",
        fa: "اگر هیچ تابعی داده نشود، تابع برگشتی همان مقدار ورودی را بدون تغییر برمی‌گرداند.",
      },
      language: "ts",
      code: `const identity = pipe<number>();

console.log(identity(42));
// 42`,
    },

    {
      title: {
        en: "Single function",
        fa: "یک تابع",
      },
      description: {
        en: "A single function can also be passed and is applied directly to the input.",
        fa: "می‌توان تنها یک تابع را نیز ارسال کرد تا مستقیماً روی ورودی اجرا شود.",
      },
      language: "ts",
      code: `const double = (value: number) => value * 2;

const transform = pipe(double);

console.log(transform(5));
// 10`,
    },
  ],

  since: "1.38.0",
};
