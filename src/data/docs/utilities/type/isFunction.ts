import type { DocPage } from "../../types";

export const isFunctionDoc: DocPage = {
  slug: "utilities/type/is-function",
  category: "type",
  title: {
    en: "isFunction",
    fa: "isFunction",
  },
  description: {
    en: "Checks whether a value is a function and provides a TypeScript type guard for function narrowing.",
    fa: "بررسی می‌کند که آیا یک مقدار تابع است و به‌عنوان type guard در TypeScript امکان محدود کردن نوع به تابع را فراهم می‌کند.",
  },
  icon: "FunctionSquare",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to check.",
        fa: "مقداری که باید بررسی شود.",
      },
    },
  ],
  returns: {
    type: "value is (...args: never[]) => unknown",
    description: {
      en: "Returns true when the value is a function; otherwise returns false. When true, TypeScript narrows the value to a callable function type.",
      fa: "اگر مقدار تابع باشد true و در غیر این صورت false برمی‌گرداند. در صورت true بودن، TypeScript نوع مقدار را به یک نوع تابع قابل فراخوانی محدود می‌کند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is a function.",
        fa: "بررسی اینکه یک مقدار تابع است یا خیر.",
      },
      language: "ts",
      code: `isFunction(() => {});
// true

isFunction("hello");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "The type guard narrows an unknown value to a callable function type.",
        fa: "این type guard مقدار unknown را به یک نوع تابع قابل فراخوانی محدود می‌کند.",
      },
      language: "ts",
      code: `const value: unknown = () => "hello";

if (isFunction(value)) {
  value();
  // value is narrowed to (...args: never[]) => unknown
}`,
    },
    {
      title: {
        en: "Named functions",
        fa: "توابع نام‌گذاری‌شده",
      },
      description: {
        en: "Regular named functions are recognized as functions.",
        fa: "توابع معمولی نام‌گذاری‌شده به‌عنوان تابع شناسایی می‌شوند.",
      },
      language: "ts",
      code: `function greet() {
  return "Hello";
}

isFunction(greet);
// true`,
    },
    {
      title: {
        en: "Async functions",
        fa: "توابع async",
      },
      description: {
        en: 'Async functions are also recognized because typeof returns "function".',
        fa: 'توابع async نیز شناسایی می‌شوند، زیرا typeof برای آن‌ها مقدار "function" برمی‌گرداند.',
      },
      language: "ts",
      code: `async function loadData() {
  return "data";
}

isFunction(loadData);
// true`,
    },
    {
      title: {
        en: "Classes",
        fa: "کلاس‌ها",
      },
      description: {
        en: "JavaScript classes are also reported as functions by typeof.",
        fa: "کلاس‌های JavaScript نیز توسط typeof به‌عنوان function شناسایی می‌شوند.",
      },
      language: "ts",
      code: `class User {}

isFunction(User);
// true`,
    },
    {
      title: {
        en: "Non-functions",
        fa: "مقادیر غیرتابعی",
      },
      description: {
        en: "Objects, strings, numbers, null, and undefined return false.",
        fa: "آبجکت‌ها، رشته‌ها، اعداد، null و undefined مقدار false برمی‌گردانند.",
      },
      language: "ts",
      code: `isFunction({});
// false

isFunction(42);
// false

isFunction(null);
// false

isFunction(undefined);
// false`,
    },
  ],
  sections: [
    {
      id: "implementation",
      title: {
        en: "Implementation",
        fa: "نحوه پیاده‌سازی",
      },
      content: {
        en: 'The function uses JavaScript\'s typeof operator and checks whether the result is exactly "function".',
        fa: 'این تابع از عملگر typeof در JavaScript استفاده می‌کند و بررسی می‌کند که نتیجه دقیقاً برابر با "function" باشد.',
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type guard",
      },
      content: {
        en: "The return type `value is (...args: never[]) => unknown` makes the function a TypeScript type guard. A successful check narrows the value to a callable function type.",
        fa: "نوع بازگشتی `value is (...args: never[]) => unknown` باعث می‌شود تابع یک TypeScript type guard باشد. در صورت موفق بودن بررسی، نوع مقدار به یک تابع قابل فراخوانی محدود می‌شود.",
      },
    },
    {
      id: "typeof-behavior",
      title: {
        en: "typeof behavior",
        fa: "رفتار typeof",
      },
      content: {
        en: "The check follows JavaScript's typeof semantics. This means callable values such as regular functions, arrow functions, async functions, and classes are reported as functions.",
        fa: "این بررسی از semantics مربوط به typeof در JavaScript پیروی می‌کند. بنابراین مقادیری مانند توابع معمولی، arrow functionها، توابع async و classها به‌عنوان function شناسایی می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
