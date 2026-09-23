import type { DocPage } from "../../types";

export const isPositiveDoc: DocPage = {
  slug: "utilities/validation/is-positive",
  category: "validation",
  title: {
    en: "isPositive",
    fa: "isPositive",
  },
  description: {
    en: "Checks whether a value is a positive number.",
    fa: "بررسی می‌کند که آیا یک مقدار یک عدد مثبت است یا نه.",
  },
  icon: "CirclePlus",
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
      en: "Returns true when the value is a number greater than zero; otherwise returns false.",
      fa: "اگر مقدار یک عدد بزرگ‌تر از صفر باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Positive numbers",
        fa: "اعداد مثبت",
      },
      description: {
        en: "Returns true for numbers greater than zero.",
        fa: "برای اعداد بزرگ‌تر از صفر true برمی‌گرداند.",
      },
      language: "ts",
      code: `isPositive(10);
// true

isPositive(0.5);
// true`,
    },
    {
      title: {
        en: "Zero and negative numbers",
        fa: "صفر و اعداد منفی",
      },
      description: {
        en: "Zero and negative numbers are not considered positive.",
        fa: "صفر و اعداد منفی مثبت محسوب نمی‌شوند.",
      },
      language: "ts",
      code: `isPositive(0);
// false

isPositive(-5);
// false`,
    },
    {
      title: {
        en: "Non-number values",
        fa: "مقادیر غیرعددی",
      },
      description: {
        en: "Non-number values return false.",
        fa: "مقادیر غیرعددی false برمی‌گردانند.",
      },
      language: "ts",
      code: `isPositive("10");
// false

isPositive(null);
// false

isPositive(true);
// false`,
    },
    {
      title: {
        en: "Special numbers",
        fa: "اعداد خاص",
      },
      description: {
        en: "NaN and Infinity behavior follows JavaScript number comparisons.",
        fa: "رفتار NaN و Infinity مطابق مقایسه‌های عددی JavaScript است.",
      },
      language: "ts",
      code: `isPositive(NaN);
// false

isPositive(Infinity);
// true`,
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
        en: "The function first checks that the value type is number, then verifies that it is greater than zero.",
        fa: "تابع ابتدا بررسی می‌کند که مقدار از نوع number باشد، سپس بررسی می‌کند که بزرگ‌تر از صفر است.",
      },
    },
    {
      id: "zero",
      title: {
        en: "Zero Handling",
        fa: "رفتار با صفر",
      },
      content: {
        en: "Zero is not considered positive because the comparison uses value > 0.",
        fa: "صفر مثبت در نظر گرفته نمی‌شود زیرا شرط استفاده‌شده value > 0 است.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type Guard",
      },
      content: {
        en: "The function narrows unknown values to number when it returns true.",
        fa: "وقتی مقدار true باشد، TypeScript نوع value را از unknown به number محدود می‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
