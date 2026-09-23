import type { DocPage } from "../../types";

export const clampDoc: DocPage = {
  slug: "utilities/number/clamp",
  category: "number",

  title: {
    en: "clamp",
    fa: "clamp",
  },

  description: {
    en: "Restricts a number to a specified inclusive range between a minimum and maximum value.",
    fa: "یک عدد را در یک بازه مشخص و شامل دو کران حداقل و حداکثر محدود می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "number",
      required: true,
      description: {
        en: "The number to restrict to the specified range.",
        fa: "عددی که باید در بازه مشخص‌شده محدود شود.",
      },
    },
    {
      name: "min",
      type: "number",
      required: true,
      description: {
        en: "The minimum allowed value.",
        fa: "کمترین مقدار مجاز.",
      },
    },
    {
      name: "max",
      type: "number",
      required: true,
      description: {
        en: "The maximum allowed value.",
        fa: "بیشترین مقدار مجاز.",
      },
    },
  ],

  returns: {
    type: "number",
    description: {
      en: "Returns the value constrained to the inclusive range from min to max.",
      fa: "مقدار را در بازه شامل min و max محدودشده برمی‌گرداند.",
    },
  },

  throws: [
    {
      en: "Throws a RangeError if value is NaN.",
      fa: "اگر value برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if min or max is NaN.",
      fa: "اگر min یا max برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if min is greater than max.",
      fa: "اگر min بزرگ‌تر از max باشد، یک RangeError ایجاد می‌کند.",
    },
  ],

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "A value inside the range is returned unchanged.",
        fa: "مقداری که داخل بازه باشد بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `console.log(clamp(5, 0, 10));
// 5`,
    },

    {
      title: {
        en: "Value below minimum",
        fa: "مقدار کمتر از حداقل",
      },
      description: {
        en: "Values below min are replaced with min.",
        fa: "مقادیر کمتر از min با خود min جایگزین می‌شوند.",
      },
      language: "ts",
      code: `console.log(clamp(-5, 0, 10));
// 0`,
    },

    {
      title: {
        en: "Value above maximum",
        fa: "مقدار بیشتر از حداکثر",
      },
      description: {
        en: "Values above max are replaced with max.",
        fa: "مقادیر بیشتر از max با خود max جایگزین می‌شوند.",
      },
      language: "ts",
      code: `console.log(clamp(15, 0, 10));
// 10`,
    },

    {
      title: {
        en: "Boundary values",
        fa: "مقادیر مرزی",
      },
      description: {
        en: "The minimum and maximum values themselves are allowed.",
        fa: "خود مقادیر حداقل و حداکثر نیز مجاز هستند.",
      },
      language: "ts",
      code: `console.log(clamp(0, 0, 10));
// 0

console.log(clamp(10, 0, 10));
// 10`,
    },

    {
      title: {
        en: "Negative range",
        fa: "بازه منفی",
      },
      description: {
        en: "clamp also works with ranges containing negative numbers.",
        fa: "clamp با بازه‌هایی که شامل اعداد منفی هستند نیز کار می‌کند.",
      },
      language: "ts",
      code: `console.log(clamp(-15, -10, -5));
// -10

console.log(clamp(-7, -10, -5));
// -7

console.log(clamp(-2, -10, -5));
// -5`,
    },

    {
      title: {
        en: "Equal minimum and maximum",
        fa: "برابر بودن حداقل و حداکثر",
      },
      description: {
        en: "When min and max are equal, the result is always that value.",
        fa: "وقتی min و max برابر باشند، نتیجه همیشه همان مقدار خواهد بود.",
      },
      language: "ts",
      code: `console.log(clamp(5, 10, 10));
// 10

console.log(clamp(20, 10, 10));
// 10`,
    },

    {
      title: {
        en: "NaN value",
        fa: "مقدار NaN",
      },
      description: {
        en: "A NaN value is rejected with a RangeError.",
        fa: "مقدار NaN با RangeError رد می‌شود.",
      },
      language: "ts",
      code: `clamp(NaN, 0, 10);
// RangeError: clamp: value must not be NaN`,
    },

    {
      title: {
        en: "Invalid range",
        fa: "بازه نامعتبر",
      },
      description: {
        en: "The function rejects a range where min is greater than max.",
        fa: "تابع بازه‌ای را که min آن بزرگ‌تر از max باشد رد می‌کند.",
      },
      language: "ts",
      code: `clamp(5, 10, 0);
// RangeError: clamp: min must be less than or equal to max`,
    },
  ],

  since: "1.38.0",
};
