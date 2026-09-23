import type { DocPage } from "../../types";

export const ceilToDoc: DocPage = {
  slug: "utilities/number/ceil-to",
  category: "number",

  title: {
    en: "ceilTo",
    fa: "ceilTo",
  },

  description: {
    en: "Rounds a number upward to the specified number of decimal places.",
    fa: "یک عدد را به سمت بالا و تا تعداد مشخصی رقم اعشار گرد می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "number",
      required: true,
      description: {
        en: "The number to round upward.",
        fa: "عددی که باید به سمت بالا گرد شود.",
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
      en: "Returns the value rounded upward to the specified decimal precision.",
      fa: "مقدار را با دقت اعشاری مشخص‌شده و به سمت بالا گرد شده برمی‌گرداند.",
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
        en: "Rounds the value upward to two decimal places.",
        fa: "مقدار را به سمت بالا و تا دو رقم اعشار گرد می‌کند.",
      },
      language: "ts",
      code: `const result = ceilTo(4.123, 2);

console.log(result);
// 4.13`,
    },

    {
      title: {
        en: "Value already at the precision",
        fa: "مقدار با دقت موردنظر",
      },
      description: {
        en: "If the value does not require rounding at the requested precision, it remains unchanged.",
        fa: "اگر مقدار در دقت مشخص‌شده نیازی به گرد شدن نداشته باشد، بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `const result = ceilTo(4.12, 2);

console.log(result);
// 4.12`,
    },

    {
      title: {
        en: "Zero decimals",
        fa: "بدون رقم اعشار",
      },
      description: {
        en: "When decimals is 0, Math.ceil is used to round the value to the next integer.",
        fa: "وقتی decimals برابر 0 باشد، از Math.ceil برای گرد کردن مقدار به عدد صحیح استفاده می‌شود.",
      },
      language: "ts",
      code: `console.log(ceilTo(4.1, 0));
// 5

console.log(ceilTo(4.9, 0));
// 5`,
    },

    {
      title: {
        en: "Negative values",
        fa: "مقادیر منفی",
      },
      description: {
        en: "The value is rounded toward positive infinity.",
        fa: "مقدار به سمت مثبت بی‌نهایت گرد می‌شود.",
      },
      language: "ts",
      code: `console.log(ceilTo(-4.123, 2));
// -4.12

console.log(ceilTo(-4.9, 0));
// -4`,
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
      code: `console.log(ceilTo(3.14159, 3));
// 3.142

console.log(ceilTo(3.14159, 4));
// 3.1416`,
    },

    {
      title: {
        en: "Negative decimals",
        fa: "decimals منفی",
      },
      description: {
        en: "Negative decimal places round the value upward at positions to the left of the decimal point.",
        fa: "decimals منفی باعث می‌شود مقدار در جایگاه‌های سمت چپ ممیز و به سمت بالا گرد شود.",
      },
      language: "ts",
      code: `console.log(ceilTo(1234, -2));
// 1300

console.log(ceilTo(1250, -2));
// 1300`,
    },

    {
      title: {
        en: "Infinity",
        fa: "بی‌نهایت",
      },
      description: {
        en: "Finite values are rounded, while positive or negative Infinity is returned unchanged.",
        fa: "مقادیر متناهی گرد می‌شوند، اما مثبت یا منفی بی‌نهایت بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `console.log(ceilTo(Infinity, 2));
// Infinity

console.log(ceilTo(-Infinity, 2));
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
      code: `ceilTo(NaN, 2);
// RangeError: ceilTo: value must not be NaN`,
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
      code: `ceilTo(4.123, 2.5);
// RangeError: ceilTo: decimals must be an integer`,
    },
  ],

  since: "1.38.0",
};
