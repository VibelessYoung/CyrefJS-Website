import type { DocPage } from "../../types";

export const isNilDoc: DocPage = {
  slug: "utilities/type/is-nil",
  category: "type",
  title: {
    en: "isNil",
    fa: "isNil",
  },
  description: {
    en: "Checks whether a value is null or undefined and provides a TypeScript type guard for nullish values.",
    fa: "بررسی می‌کند که آیا یک مقدار null یا undefined است و به‌عنوان type guard در TypeScript امکان محدود کردن نوع به null | undefined را فراهم می‌کند.",
  },
  icon: "CircleHelp",
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
    type: "value is null | undefined",
    description: {
      en: "Returns true when the value is null or undefined; otherwise returns false.",
      fa: "اگر مقدار null یا undefined باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check for nullish values.",
        fa: "بررسی مقادیر nullish.",
      },
      language: "ts",
      code: `isNil(null);
// true

isNil(undefined);
// true

isNil("hello");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "The type guard narrows the checked value to null | undefined when the condition succeeds.",
        fa: "این type guard در صورت برقرار بودن شرط، نوع مقدار بررسی‌شده را به null | undefined محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | null | undefined = null;

if (isNil(value)) {
  // value is narrowed to null | undefined
}`,
    },
    {
      title: {
        en: "Falsy values",
        fa: "مقادیر falsy",
      },
      description: {
        en: "Other falsy values such as false, 0, and an empty string are not considered nil.",
        fa: "سایر مقادیر falsy مانند false، صفر و رشته خالی nil محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isNil(false);
// false

isNil(0);
// false

isNil("");
// false`,
    },
    {
      title: {
        en: "Objects and arrays",
        fa: "آبجکت‌ها و آرایه‌ها",
      },
      description: {
        en: "Objects and arrays are not considered nil values.",
        fa: "آبجکت‌ها و آرایه‌ها nil محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isNil({});
// false

isNil([]);
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
        en: "The function explicitly compares the value with null and undefined using strict equality.",
        fa: "این تابع مقدار را با استفاده از strict equality به‌صورت مستقیم با null و undefined مقایسه می‌کند.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type guard",
      },
      content: {
        en: "The return type `value is null | undefined` makes the function a TypeScript type guard for nullish values.",
        fa: "نوع بازگشتی `value is null | undefined` باعث می‌شود تابع یک TypeScript type guard برای مقادیر nullish باشد.",
      },
    },
    {
      id: "nullish-values",
      title: {
        en: "Nullish values",
        fa: "مقادیر Nullish",
      },
      content: {
        en: "Only null and undefined return true. Other falsy values such as false, 0, and an empty string return false.",
        fa: "فقط null و undefined مقدار true برمی‌گردانند. سایر مقادیر falsy مانند false، صفر و رشته خالی مقدار false برمی‌گردانند.",
      },
    },
  ],
  since: "1.38.0",
};
