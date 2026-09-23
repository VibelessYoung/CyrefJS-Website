import type { DocPage } from "../../types";

export const lerpDoc: DocPage = {
  slug: "utilities/number/lerp",
  category: "number",
  title: {
    en: "lerp",
    fa: "lerp",
  },
  description: {
    en: "Linearly interpolates between a start and end number using a normalized interpolation factor.",
    fa: "بین یک مقدار شروع و پایان با استفاده از ضریب درون‌یابی، به‌صورت خطی درون‌یابی می‌کند.",
  },
  parameters: [
    {
      name: "start",
      type: "number",
      required: true,
      description: {
        en: "The starting value.",
        fa: "مقدار شروع.",
      },
    },
    {
      name: "end",
      type: "number",
      required: true,
      description: {
        en: "The ending value.",
        fa: "مقدار پایان.",
      },
    },
    {
      name: "t",
      type: "number",
      required: true,
      description: {
        en: "The interpolation factor. A value of 0 returns start, while a value of 1 returns end. Values outside this range extrapolate beyond the endpoints.",
        fa: "ضریب درون‌یابی. مقدار 0، start و مقدار 1، end را برمی‌گرداند. مقادیر خارج از این بازه نیز فراتر از نقاط ابتدا و انتها برون‌یابی می‌کنند.",
      },
    },
  ],
  returns: {
    type: "number",
    description: {
      en: "Returns the linearly interpolated value between start and end.",
      fa: "مقدار درون‌یابی‌شده به‌صورت خطی بین start و end را برمی‌گرداند.",
    },
  },
  throws: [
    {
      en: "Throws a RangeError if start is NaN.",
      fa: "اگر start برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if end is NaN.",
      fa: "اگر end برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if t is NaN.",
      fa: "اگر t برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Interpolates halfway between 0 and 100.",
        fa: "در نقطه میانی بین 0 و 100 درون‌یابی می‌کند.",
      },
      language: "ts",
      code: `const result = lerp(0, 100, 0.5);

console.log(result);
// 50`,
    },
    {
      title: {
        en: "Start value",
        fa: "مقدار شروع",
      },
      description: {
        en: "A factor of 0 returns the start value.",
        fa: "ضریب 0 مقدار شروع را برمی‌گرداند.",
      },
      language: "ts",
      code: `console.log(lerp(10, 20, 0));
// 10`,
    },
    {
      title: {
        en: "End value",
        fa: "مقدار پایان",
      },
      description: {
        en: "A factor of 1 returns the end value.",
        fa: "ضریب 1 مقدار پایان را برمی‌گرداند.",
      },
      language: "ts",
      code: `console.log(lerp(10, 20, 1));
// 20`,
    },
    {
      title: {
        en: "Quarter interpolation",
        fa: "درون‌یابی یک‌چهارم",
      },
      description: {
        en: "A factor of 0.25 moves one quarter of the way from start to end.",
        fa: "ضریب 0.25 مقدار را یک‌چهارم مسیر از start به سمت end حرکت می‌دهد.",
      },
      language: "ts",
      code: `console.log(lerp(0, 100, 0.25));
// 25`,
    },
    {
      title: {
        en: "Negative values",
        fa: "مقادیر منفی",
      },
      description: {
        en: "Interpolation also works with negative start and end values.",
        fa: "درون‌یابی با مقادیر شروع و پایان منفی نیز کار می‌کند.",
      },
      language: "ts",
      code: `console.log(lerp(-100, -20, 0.5));
// -60`,
    },
    {
      title: {
        en: "Reverse range",
        fa: "بازه معکوس",
      },
      description: {
        en: "The start value can be greater than the end value.",
        fa: "مقدار start می‌تواند از end بزرگ‌تر باشد.",
      },
      language: "ts",
      code: `console.log(lerp(100, 0, 0.25));
// 75`,
    },
    {
      title: {
        en: "Extrapolation",
        fa: "برون‌یابی",
      },
      description: {
        en: "Values of t outside the 0 to 1 range extrapolate beyond the start and end values.",
        fa: "مقادیر t خارج از بازه 0 تا 1، مقدار را فراتر از start و end برون‌یابی می‌کنند.",
      },
      language: "ts",
      code: `console.log(lerp(0, 100, 1.5));
// 150

console.log(lerp(0, 100, -0.5));
// -50`,
    },
    {
      title: {
        en: "NaN start",
        fa: "start برابر NaN",
      },
      description: {
        en: "A NaN start value is rejected.",
        fa: "مقدار NaN برای start پذیرفته نمی‌شود.",
      },
      language: "ts",
      code: `lerp(NaN, 100, 0.5);
// RangeError: lerp: start must not be NaN`,
    },
    {
      title: {
        en: "NaN end",
        fa: "end برابر NaN",
      },
      description: {
        en: "A NaN end value is rejected.",
        fa: "مقدار NaN برای end پذیرفته نمی‌شود.",
      },
      language: "ts",
      code: `lerp(0, NaN, 0.5);
// RangeError: lerp: end must not be NaN`,
    },
    {
      title: {
        en: "NaN interpolation factor",
        fa: "t برابر NaN",
      },
      description: {
        en: "A NaN interpolation factor is rejected.",
        fa: "مقدار NaN برای ضریب t پذیرفته نمی‌شود.",
      },
      language: "ts",
      code: `lerp(0, 100, NaN);
// RangeError: lerp: t must not be NaN`,
    },
  ],
  since: "1.38.0",
};
