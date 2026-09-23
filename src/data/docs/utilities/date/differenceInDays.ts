import type { DocPage } from "../../types";

export const differenceInDaysDoc: DocPage = {
  slug: "utilities/date/difference-in-days",

  category: "date",

  title: {
    en: "differenceInDays",
    fa: "differenceInDays",
  },

  description: {
    en: "Calculates the difference in calendar days between two dates by comparing them at the start of their respective days.",
    fa: "تفاوت تعداد روزهای تقویمی بین دو تاریخ را با مقایسه آن‌ها در ابتدای روز مربوط به خودشان محاسبه می‌کند.",
  },

  parameters: [
    {
      name: "dateLeft",
      type: "Date",
      required: true,
      description: {
        en: "The first date used as the left side of the difference calculation.",
        fa: "تاریخ اول که در سمت چپ محاسبه اختلاف قرار می‌گیرد.",
      },
    },
    {
      name: "dateRight",
      type: "Date",
      required: true,
      description: {
        en: "The second date used as the right side of the difference calculation.",
        fa: "تاریخ دوم که در سمت راست محاسبه اختلاف قرار می‌گیرد.",
      },
    },
  ],

  returns: {
    type: "number",
    description: {
      en: "The difference between the two dates in days. Positive values mean dateLeft is later than dateRight, while negative values mean dateLeft is earlier.",
      fa: "تفاوت دو تاریخ بر حسب روز. مقدار مثبت یعنی dateLeft بعد از dateRight است و مقدار منفی یعنی dateLeft قبل از dateRight است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Calculate the number of days between two dates.",
        fa: "تعداد روزهای بین دو تاریخ را محاسبه می‌کند.",
      },
      language: "ts",
      code: `import { differenceInDays } from "@cyref/js";

const dateLeft = new Date("2026-01-10");
const dateRight = new Date("2026-01-05");

const result = differenceInDays(dateLeft, dateRight);

console.log(result);
// 5`,
    },

    {
      title: {
        en: "Negative difference",
        fa: "تفاوت منفی",
      },
      description: {
        en: "If dateLeft is earlier than dateRight, the result is negative.",
        fa: "اگر dateLeft قبل از dateRight باشد، نتیجه منفی خواهد بود.",
      },
      language: "ts",
      code: `import { differenceInDays } from "@cyref/js";

const dateLeft = new Date("2026-01-05");
const dateRight = new Date("2026-01-10");

const result = differenceInDays(dateLeft, dateRight);

console.log(result);
// -5`,
    },

    {
      title: {
        en: "Same date",
        fa: "تاریخ یکسان",
      },
      description: {
        en: "Two dates representing the same calendar day return zero.",
        fa: "دو تاریخ که مربوط به یک روز تقویمی باشند، مقدار صفر برمی‌گردانند.",
      },
      language: "ts",
      code: `import { differenceInDays } from "@cyref/js";

const dateLeft = new Date("2026-03-15");
const dateRight = new Date("2026-03-15");

const result = differenceInDays(dateLeft, dateRight);

console.log(result);
// 0`,
    },

    {
      title: {
        en: "Time of day is ignored",
        fa: "زمان روز نادیده گرفته می‌شود",
      },
      description: {
        en: "The time components of both dates are reset to midnight before calculating the difference.",
        fa: "قبل از محاسبه اختلاف، بخش زمانی هر دو تاریخ روی نیمه‌شب تنظیم می‌شود.",
      },
      language: "ts",
      code: `import { differenceInDays } from "@cyref/js";

const dateLeft = new Date("2026-04-10T23:30:00");
const dateRight = new Date("2026-04-09T01:15:00");

const result = differenceInDays(dateLeft, dateRight);

console.log(result);
// 1`,
    },

    {
      title: {
        en: "Date objects are not modified",
        fa: "اشیای Date تغییر نمی‌کنند",
      },
      description: {
        en: "The function creates copies of both dates before resetting their time components, leaving the original Date objects unchanged.",
        fa: "تابع قبل از تغییر بخش زمانی، از هر دو تاریخ یک کپی ایجاد می‌کند و بنابراین اشیای Date اصلی تغییر نمی‌کنند.",
      },
      language: "ts",
      code: `import { differenceInDays } from "@cyref/js";

const dateLeft = new Date("2026-05-10T18:30:00");
const dateRight = new Date("2026-05-05T09:15:00");

differenceInDays(dateLeft, dateRight);

console.log(dateLeft);
// 2026-05-10T18:30:00

console.log(dateRight);
// 2026-05-05T09:15:00`,
    },
  ],

  since: "1.38.0",
};
