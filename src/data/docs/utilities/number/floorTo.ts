import type { DocPage } from "../../types";

export const floorToDoc: DocPage = {
  slug: "utilities/number/floor-to",
  category: "number",

  title: {
    en: "floorTo",
    fa: "floorTo",
  },

  description: {
    en: "Rounds a number downward to the specified number of decimal places.",
    fa: "یک عدد را به سمت پایین و تا تعداد مشخصی رقم اعشار گرد می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "number",
      required: true,
      description: {
        en: "The number to round downward.",
        fa: "عددی که باید به سمت پایین گرد شود.",
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
      en: "Returns the value rounded downward to the specified decimal precision.",
      fa: "مقدار را با دقت اعشاری مشخص‌شده و به سمت پایین گرد شده برمی‌گرداند.",
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
        en: "Rounds the value downward to two decimal places.",
        fa: "مقدار را به سمت پایین و تا دو رقم اعشار گرد می‌کند.",
      },
      language: "ts",
      code: `const result = floorTo(4.129, 2);

console.log(result);
// 4.12`,
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
      code: `const result = floorTo(4.12, 2);

console.log(result);
// 4.12`,
    },

    {
      title: {
        en: "Zero decimals",
        fa: "بدون رقم اعشار",
      },
      description: {
        en: "When decimals is 0, Math.floor is used to round the value to an integer.",
        fa: "وقتی decimals برابر 0 باشد، از Math.floor برای گرد کردن مقدار به عدد صحیح استفاده می‌شود.",
      },
      language: "ts",
      code: `console.log(floorTo(4.1, 0));
// 4

console.log(floorTo(4.9, 0));
// 4`,
    },

    {
      title: {
        en: "Negative values",
        fa: "مقادیر منفی",
      },
      description: {
        en: "The value is rounded toward negative infinity.",
        fa: "مقدار به سمت منفی بی‌نهایت گرد می‌شود.",
      },
      language: "ts",
      code: `console.log(floorTo(-4.123, 2));
// -4.13

console.log(floorTo(-4.1, 0));
// -5`,
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
      code: `console.log(floorTo(3.14159, 3));
// 3.141

console.log(floorTo(3.14159, 4));
// 3.1415`,
    },

    {
      title: {
        en: "Negative decimals",
        fa: "decimals منفی",
      },
      description: {
        en: "Negative decimal places round the value downward at positions to the left of the decimal point.",
        fa: "decimals منفی باعث می‌شود مقدار در جایگاه‌های سمت چپ ممیز و به سمت پایین گرد شود.",
      },
      language: "ts",
      code: `console.log(floorTo(1234, -2));
// 1200

console.log(floorTo(1250, -2));
// 1200`,
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
      code: `console.log(floorTo(Infinity, 2));
// Infinity

console.log(floorTo(-Infinity, 2));
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
      code: `floorTo(NaN, 2);
// RangeError: floorTo: value must not be NaN`,
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
      code: `floorTo(4.123, 2.5);
// RangeError: floorTo: decimals must be an integer`,
    },
  ],

  since: "1.38.0",
};
