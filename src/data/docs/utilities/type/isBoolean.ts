import type { DocPage } from "../../types";

export const isBooleanDoc: DocPage = {
  slug: "utilities/type/is-boolean",
  category: "type",
  title: {
    en: "isBoolean",
    fa: "isBoolean",
  },
  description: {
    en: "Checks whether a value is a boolean and provides a TypeScript type guard for boolean narrowing.",
    fa: "بررسی می‌کند که آیا یک مقدار از نوع boolean است و به‌عنوان type guard در TypeScript امکان محدود کردن نوع به boolean را فراهم می‌کند.",
  },
  icon: "CircleCheck",
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
    type: "value is boolean",
    description: {
      en: "Returns true when the value is a boolean; otherwise returns false. When true, TypeScript narrows the value to boolean.",
      fa: "اگر مقدار از نوع boolean باشد true و در غیر این صورت false برمی‌گرداند. در صورت true بودن، TypeScript نوع مقدار را به boolean محدود می‌کند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is a boolean.",
        fa: "بررسی اینکه یک مقدار از نوع boolean است یا خیر.",
      },
      language: "ts",
      code: `isBoolean(true);
// true

isBoolean(false);
// true

isBoolean("true");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "The type guard narrows an unknown value to boolean inside the conditional block.",
        fa: "این type guard مقدار unknown را داخل بلوک شرط به boolean محدود می‌کند.",
      },
      language: "ts",
      code: `const value: unknown = true;

if (isBoolean(value)) {
  value.valueOf();
  // value is narrowed to boolean
}`,
    },
    {
      title: {
        en: "Other primitive values",
        fa: "سایر مقادیر primitive",
      },
      description: {
        en: "Numbers, strings, null, undefined, and objects are not considered booleans.",
        fa: "اعداد، رشته‌ها، null، undefined و آبجکت‌ها boolean محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isBoolean(1);
// false

isBoolean("false");
// false

isBoolean(null);
// false

isBoolean(undefined);
// false

isBoolean({});
// false`,
    },
    {
      title: {
        en: "Boolean objects",
        fa: "Boolean Object",
      },
      description: {
        en: 'A Boolean object is not considered a boolean primitive because typeof returns "object".',
        fa: 'یک Boolean Object به‌عنوان boolean primitive در نظر گرفته نمی‌شود، چون typeof برای آن مقدار "object" برمی‌گرداند.',
      },
      language: "ts",
      code: `isBoolean(new Boolean(true));
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
        en: 'The function uses JavaScript\'s typeof operator and checks whether the result is exactly "boolean".',
        fa: 'این تابع با استفاده از عملگر typeof در JavaScript بررسی می‌کند که نتیجه دقیقاً برابر با "boolean" باشد.',
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type guard",
      },
      content: {
        en: "The return type `value is boolean` makes the function a TypeScript type guard. When the function returns true, TypeScript can narrow the checked value to boolean.",
        fa: "نوع بازگشتی `value is boolean` باعث می‌شود تابع یک TypeScript type guard باشد. زمانی که تابع true برمی‌گرداند، TypeScript می‌تواند نوع مقدار بررسی‌شده را به boolean محدود کند.",
      },
    },
    {
      id: "primitive-only",
      title: {
        en: "Boolean primitive",
        fa: "Boolean primitive",
      },
      content: {
        en: "The function recognizes only the boolean primitive values true and false. Boolean wrapper objects are not recognized as boolean values.",
        fa: "این تابع فقط مقادیر primitive یعنی true و false را شناسایی می‌کند. آبجکت‌های wrapper از نوع Boolean به‌عنوان boolean شناسایی نمی‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
