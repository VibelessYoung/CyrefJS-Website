import type { DocPage } from "../../types";

export const roundToDoc: DocPage = {
  slug: "utilities/number/round-to",
  category: "number",
  title: {
    en: "roundTo",
    fa: "roundTo",
  },
  description: {
    en: "Rounds a number to the specified number of decimal places.",
    fa: "یک عدد را تا تعداد مشخصی رقم اعشار گرد می‌کند.",
  },
  parameters: [
    {
      name: "value",
      type: "number",
      required: true,
      description: {
        en: "The number to round.",
        fa: "عددی که باید گرد شود.",
      },
    },
    {
      name: "decimals",
      type: "number",
      required: true,
      description: {
        en: "The number of decimal places to preserve. Must be an integer.",
        fa: "تعداد رقم‌های اعشاری که باید حفظ شوند. این مقدار باید یک عدد صحیح باشد.",
      },
    },
  ],
  returns: {
    type: "number",
    description: {
      en: "Returns the value rounded to the specified decimal precision.",
      fa: "مقدار را با دقت اعشاری مشخص‌شده گرد شده برمی‌گرداند.",
    },
  },
  throws: [
    {
      en: "Throws a RangeError if value is NaN.",
      fa: "اگر value برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if decimals is not an integer.",
      fa: "اگر decimals عدد صحیح نباشد، یک RangeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Rounds the value to two decimal places.",
        fa: "مقدار را تا دو رقم اعشار گرد می‌کند.",
      },
      language: "ts",
      code: `const result = roundTo(4.126, 2);

console.log(result);
// 4.13`,
    },
    {
      title: {
        en: "Value already at the precision",
        fa: "مقدار با دقت موردنظر",
      },
      description: {
        en: "A value that already has the requested precision remains unchanged.",
        fa: "مقداری که از قبل دقت موردنظر را دارد، بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `console.log(roundTo(4.12, 2));
// 4.12`,
    },
    {
      title: {
        en: "Zero decimals",
        fa: "بدون رقم اعشار",
      },
      description: {
        en: "When decimals is 0, the value is rounded to the nearest integer using Math.round.",
        fa: "وقتی decimals برابر 0 باشد، مقدار با استفاده از Math.round به نزدیک‌ترین عدد صحیح گرد می‌شود.",
      },
      language: "ts",
      code: `console.log(roundTo(4.4, 0));
// 4

console.log(roundTo(4.6, 0));
// 5`,
    },
    {
      title: {
        en: "Negative values",
        fa: "مقادیر منفی",
      },
      description: {
        en: "Negative values are rounded using the same calculation.",
        fa: "مقادیر منفی نیز با همان محاسبه گرد می‌شوند.",
      },
      language: "ts",
      code: `console.log(roundTo(-4.126, 2));
// -4.13

console.log(roundTo(-4.124, 2));
// -4.12`,
    },
    {
      title: {
        en: "More decimal places",
        fa: "رقم‌های اعشار بیشتر",
      },
      description: {
        en: "A larger decimals value preserves more decimal places.",
        fa: "مقدار بیشتر برای decimals باعث حفظ رقم‌های اعشاری بیشتری می‌شود.",
      },
      language: "ts",
      code: `console.log(roundTo(3.14159, 3));
// 3.142

console.log(roundTo(3.14159, 4));
// 3.1416`,
    },
    {
      title: {
        en: "Negative decimals",
        fa: "decimals منفی",
      },
      description: {
        en: "Negative decimal places round the value at positions to the left of the decimal point.",
        fa: "decimals منفی باعث می‌شود مقدار در جایگاه‌های سمت چپ ممیز گرد شود.",
      },
      language: "ts",
      code: `console.log(roundTo(1234, -2));
// 1200

console.log(roundTo(1250, -2));
// 1300`,
    },
    {
      title: {
        en: "Infinity",
        fa: "بی‌نهایت",
      },
      description: {
        en: "Positive and negative Infinity are returned unchanged.",
        fa: "مثبت و منفی بی‌نهایت بدون تغییر برگردانده می‌شوند.",
      },
      language: "ts",
      code: `console.log(roundTo(Infinity, 2));
// Infinity

console.log(roundTo(-Infinity, 2));
// -Infinity`,
    },
    {
      title: {
        en: "NaN",
        fa: "NaN",
      },
      description: {
        en: "NaN is rejected and causes a RangeError.",
        fa: "مقدار NaN پذیرفته نمی‌شود و باعث ایجاد RangeError می‌شود.",
      },
      language: "ts",
      code: `roundTo(NaN, 2);
// RangeError: roundTo: value must not be NaN`,
    },
    {
      title: {
        en: "Non-integer decimals",
        fa: "decimals غیرصحیح",
      },
      description: {
        en: "The decimals argument must be an integer.",
        fa: "آرگومان decimals باید یک عدد صحیح باشد.",
      },
      language: "ts",
      code: `roundTo(4.126, 2.5);
// RangeError: roundTo: decimals must be an integer`,
    },
  ],
  since: "1.38.0",
};
