import type { DocPage } from "../../types";

export const curryDoc: DocPage = {
  slug: "utilities/function/curry",

  category: "function",

  title: {
    en: "curry",
    fa: "curry",
  },

  description: {
    en: "Transforms a function into a curried function that can receive its arguments across multiple calls.",
    fa: "یک تابع را به یک تابع curried تبدیل می‌کند که می‌تواند آرگومان‌های خود را در چند فراخوانی دریافت کند.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => TResult",
      required: true,
      description: {
        en: "The function to curry. Its declared parameter count is used to determine when all required arguments have been collected.",
        fa: "تابعی که باید curry شود. تعداد پارامترهای تعریف‌شده آن برای تعیین زمان کامل شدن آرگومان‌ها استفاده می‌شود.",
      },
    },
  ],

  returns: {
    type: "(...args: Partial<TArgs>) => unknown",
    description: {
      en: "A curried function that collects arguments across multiple calls and invokes the original function once enough arguments have been provided.",
      fa: "یک تابع curried که آرگومان‌ها را در چند فراخوانی جمع می‌کند و زمانی که تعداد کافی آرگومان دریافت شد، تابع اصلی را اجرا می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Provide the arguments across multiple function calls.",
        fa: "آرگومان‌ها را در چند فراخوانی مختلف به تابع بدهید.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const add = (a: number, b: number) => a + b;

const curriedAdd = curry(add);

const result = curriedAdd(5)(10);

console.log(result);
// 15`,
    },

    {
      title: {
        en: "Multiple arguments at once",
        fa: "چند آرگومان به صورت همزمان",
      },
      description: {
        en: "Arguments can also be provided together in a single call.",
        fa: "آرگومان‌ها را می‌توان در یک فراخوانی نیز به‌صورت همزمان ارسال کرد.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const multiply = (a: number, b: number) => a * b;

const curriedMultiply = curry(multiply);

const result = curriedMultiply(4, 5);

console.log(result);
// 20`,
    },

    {
      title: {
        en: "Three arguments",
        fa: "سه آرگومان",
      },
      description: {
        en: "A function with three parameters can collect its arguments over multiple calls.",
        fa: "تابعی با سه پارامتر می‌تواند آرگومان‌های خود را در چند فراخوانی دریافت کند.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const sum = (a: number, b: number, c: number) => a + b + c;

const curriedSum = curry(sum);

const result = curriedSum(1)(2)(3);

console.log(result);
// 6`,
    },

    {
      title: {
        en: "Mixed argument groups",
        fa: "گروه‌های ترکیبی آرگومان",
      },
      description: {
        en: "Arguments can be supplied in different group sizes across calls.",
        fa: "آرگومان‌ها را می‌توان در هر فراخوانی با تعداد متفاوتی ارسال کرد.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const calculate = (
  a: number,
  b: number,
  c: number,
) => a + b * c;

const curriedCalculate = curry(calculate);

const result = curriedCalculate(2, 3)(4);

console.log(result);
// 14`,
    },

    {
      title: {
        en: "Reusable partially applied function",
        fa: "تابع قابل استفاده مجدد با آرگومان‌های جزئی",
      },
      description: {
        en: "The returned function can be stored and completed later with the remaining arguments.",
        fa: "می‌توان تابع برگشتی را ذخیره کرد و بعداً با آرگومان‌های باقی‌مانده آن را کامل کرد.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const multiply = (a: number, b: number) => a * b;

const curriedMultiply = curry(multiply);

const multiplyByTen = curriedMultiply(10);

const result = multiplyByTen(5);

console.log(result);
// 50`,
    },

    {
      title: {
        en: "Collecting arguments",
        fa: "جمع‌آوری آرگومان‌ها",
      },
      description: {
        en: "The function keeps collecting arguments until their total count reaches the original function's length.",
        fa: "تابع آرگومان‌ها را جمع‌آوری می‌کند تا تعداد آن‌ها به تعداد پارامترهای تابع اصلی برسد.",
      },
      language: "ts",
      code: `import { curry } from "@cyref/js";

const formatName = (
  firstName: string,
  lastName: string,
  title: string,
) => \`\${title} \${firstName} \${lastName}\`;

const curriedFormatName = curry(formatName);

const withName = curriedFormatName("John", "Doe");

const result = withName("Dr.");

console.log(result);
// "Dr. John Doe"`,
    },
  ],

  since: "1.38.0",
};
