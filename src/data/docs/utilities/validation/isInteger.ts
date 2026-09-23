import type { DocPage } from "../../types";

export const isIntegerDoc: DocPage = {
  slug: "utilities/validation/is-integer",
  category: "validation",
  title: {
    en: "isInteger",
    fa: "isInteger",
  },
  description: {
    en: "Checks whether a value is an integer number.",
    fa: "بررسی می‌کند که آیا یک مقدار یک عدد صحیح است یا نه.",
  },
  icon: "Hash",
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
    type: "boolean",
    description: {
      en: "Returns true when the value is an integer number; otherwise returns false.",
      fa: "اگر مقدار یک عدد صحیح باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Integer values",
        fa: "مقادیر صحیح",
      },
      description: {
        en: "Returns true for positive, negative, and zero integer values.",
        fa: "برای اعداد صحیح مثبت، منفی و صفر true برمی‌گرداند.",
      },
      language: "ts",
      code: `isInteger(42);
// true

isInteger(-10);
// true

isInteger(0);
// true`,
    },
    {
      title: {
        en: "Decimal values",
        fa: "اعداد اعشاری",
      },
      description: {
        en: "Decimal numbers are not considered integers.",
        fa: "اعداد اعشاری عدد صحیح محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isInteger(4.5);
// false

isInteger(-2.75);
// false`,
    },
    {
      title: {
        en: "Non-number values",
        fa: "مقادیر غیرعددی",
      },
      description: {
        en: "Strings, booleans, null, and other non-number values return false.",
        fa: "رشته‌ها، boolean، null و سایر مقادیر غیرعددی false برمی‌گردانند.",
      },
      language: "ts",
      code: `isInteger("42");
// false

isInteger(true);
// false

isInteger(null);
// false`,
    },
    {
      title: {
        en: "Special numbers",
        fa: "اعداد خاص",
      },
      description: {
        en: "NaN and Infinity are not integers.",
        fa: "NaN و Infinity عدد صحیح محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isInteger(NaN);
// false

isInteger(Infinity);
// false`,
    },
  ],
  sections: [
    {
      id: "behavior",
      title: {
        en: "Behavior",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "The function delegates directly to Number.isInteger. It returns true only when the value is a number whose value is an integer.",
        fa: "این تابع مستقیماً از Number.isInteger استفاده می‌کند و فقط زمانی true برمی‌گرداند که مقدار یک number با مقدار صحیح باشد.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type Guard",
      },
      content: {
        en: "The function is a TypeScript type guard. When it returns true, TypeScript narrows the value from unknown to number.",
        fa: "این تابع یک TypeScript Type Guard است. وقتی true برگرداند، TypeScript نوع value را از unknown به number محدود می‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
