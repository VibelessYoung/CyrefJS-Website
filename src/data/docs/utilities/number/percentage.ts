import type { DocPage } from "../../types";

export const percentageDoc: DocPage = {
  slug: "utilities/number/percentage",
  category: "number",
  title: {
    en: "percentage",
    fa: "percentage",
  },
  description: {
    en: "Calculates a percentage of a numeric value.",
    fa: "درصدی از یک مقدار عددی را محاسبه می‌کند.",
  },
  parameters: [
    {
      name: "value",
      type: "number",
      required: true,
      description: {
        en: "The base value from which the percentage is calculated.",
        fa: "مقدار پایه‌ای که درصد آن محاسبه می‌شود.",
      },
    },
    {
      name: "percent",
      type: "number",
      required: true,
      description: {
        en: "The percentage to calculate from the value.",
        fa: "درصدی که باید از مقدار محاسبه شود.",
      },
    },
  ],
  returns: {
    type: "number",
    description: {
      en: "Returns the calculated percentage of the given value.",
      fa: "درصد محاسبه‌شده از مقدار داده‌شده را برمی‌گرداند.",
    },
  },
  throws: [
    {
      en: "Throws a RangeError if value is NaN.",
      fa: "اگر value برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
    {
      en: "Throws a RangeError if percent is NaN.",
      fa: "اگر percent برابر NaN باشد، یک RangeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Calculates 25% of 200.",
        fa: "25 درصد از 200 را محاسبه می‌کند.",
      },
      language: "ts",
      code: `const result = percentage(200, 25);

console.log(result);
// 50`,
    },
    {
      title: {
        en: "50 percent",
        fa: "50 درصد",
      },
      description: {
        en: "Calculates half of a value.",
        fa: "نصف یک مقدار را محاسبه می‌کند.",
      },
      language: "ts",
      code: `console.log(percentage(80, 50));
// 40`,
    },
    {
      title: {
        en: "100 percent",
        fa: "100 درصد",
      },
      description: {
        en: "100% of a value returns the original value.",
        fa: "100 درصد یک مقدار برابر با خود مقدار است.",
      },
      language: "ts",
      code: `console.log(percentage(150, 100));
// 150`,
    },
    {
      title: {
        en: "Zero percent",
        fa: "صفر درصد",
      },
      description: {
        en: "0% of a value returns 0.",
        fa: "صفر درصد یک مقدار برابر با 0 است.",
      },
      language: "ts",
      code: `console.log(percentage(500, 0));
// 0`,
    },
    {
      title: {
        en: "Decimal percentage",
        fa: "درصد اعشاری",
      },
      description: {
        en: "The percent argument can be a decimal value.",
        fa: "آرگومان percent می‌تواند مقدار اعشاری داشته باشد.",
      },
      language: "ts",
      code: `console.log(percentage(200, 12.5));
// 25`,
    },
    {
      title: {
        en: "Negative percentage",
        fa: "درصد منفی",
      },
      description: {
        en: "Negative percentages are calculated normally.",
        fa: "درصدهای منفی نیز به‌صورت معمول محاسبه می‌شوند.",
      },
      language: "ts",
      code: `console.log(percentage(200, -10));
// -20`,
    },
    {
      title: {
        en: "Percentage above 100",
        fa: "درصد بیشتر از 100",
      },
      description: {
        en: "Percentages greater than 100 are supported.",
        fa: "درصدهای بیشتر از 100 نیز پشتیبانی می‌شوند.",
      },
      language: "ts",
      code: `console.log(percentage(200, 150));
// 300`,
    },
    {
      title: {
        en: "Negative value",
        fa: "مقدار منفی",
      },
      description: {
        en: "The calculation also works with negative values.",
        fa: "محاسبه با مقادیر منفی نیز انجام می‌شود.",
      },
      language: "ts",
      code: `console.log(percentage(-200, 25));
// -50`,
    },
    {
      title: {
        en: "NaN value",
        fa: "value برابر NaN",
      },
      description: {
        en: "A NaN value is rejected.",
        fa: "مقدار NaN برای value پذیرفته نمی‌شود.",
      },
      language: "ts",
      code: `percentage(NaN, 25);
// RangeError: percentage: value must not be NaN`,
    },
    {
      title: {
        en: "NaN percentage",
        fa: "percent برابر NaN",
      },
      description: {
        en: "A NaN percentage is rejected.",
        fa: "مقدار NaN برای percent پذیرفته نمی‌شود.",
      },
      language: "ts",
      code: `percentage(200, NaN);
// RangeError: percentage: percent must not be NaN`,
    },
  ],
  since: "1.38.0",
};
