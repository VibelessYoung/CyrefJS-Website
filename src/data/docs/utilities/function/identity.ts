import type { DocPage } from "../../types";

export const identityDoc: DocPage = {
  slug: "utilities/function/identity",
  category: "function",

  title: {
    en: "identity",
    fa: "identity",
  },

  description: {
    en: "Returns the given value unchanged.",
    fa: "مقدار داده‌شده را بدون هیچ تغییری برمی‌گرداند.",
  },

  parameters: [
    {
      name: "value",
      type: "T",
      required: true,
      description: {
        en: "The value to return.",
        fa: "مقداری که باید برگردانده شود.",
      },
    },
  ],

  returns: {
    type: "T",
    description: {
      en: "Returns the exact value passed to the function.",
      fa: "دقیقاً همان مقداری را که به تابع داده شده برمی‌گرداند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Returns the provided number unchanged.",
        fa: "عدد داده‌شده را بدون تغییر برمی‌گرداند.",
      },
      language: "ts",
      code: `const result = identity(42);

console.log(result);
// 42`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },
      description: {
        en: "The function preserves the string value and its type.",
        fa: "تابع مقدار رشته و نوع آن را حفظ می‌کند.",
      },
      language: "ts",
      code: `const result = identity("Hello");

console.log(result);
// "Hello"`,
    },

    {
      title: {
        en: "With objects",
        fa: "با آبجکت‌ها",
      },
      description: {
        en: "Objects are returned as the same value passed to the function.",
        fa: "آبجکت همان مقداری که به تابع داده شده برگردانده می‌شود.",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 20,
};

const result = identity(user);

console.log(result);
// { name: "Amir", age: 20 }`,
    },

    {
      title: {
        en: "Generic type inference",
        fa: "تشخیص خودکار نوع Generic",
      },
      description: {
        en: "TypeScript automatically infers T from the provided value.",
        fa: "TypeScript نوع T را به‌صورت خودکار از مقدار داده‌شده تشخیص می‌دهد.",
      },
      language: "ts",
      code: `const numberValue = identity(123);
// T is inferred as number

const stringValue = identity("CyrefJS");
// T is inferred as string

const booleanValue = identity(true);
// T is inferred as boolean`,
    },

    {
      title: {
        en: "Explicit generic type",
        fa: "تعیین صریح نوع Generic",
      },
      description: {
        en: "You can explicitly provide the generic type when needed.",
        fa: "در صورت نیاز می‌توانید نوع Generic را به‌صورت صریح مشخص کنید.",
      },
      language: "ts",
      code: `const result = identity<number>(42);

console.log(result);
// 42`,
    },
  ],

  since: "1.38.0",
};
