import type { DocPage } from "../../types";

export const isAfterDoc: DocPage = {
  slug: "utilities/date/is-after",

  category: "date",

  title: {
    en: "isAfter",
    fa: "isAfter",
  },

  description: {
    en: "Checks whether the first date occurs after the second date.",
    fa: "بررسی می‌کند که آیا تاریخ اول بعد از تاریخ دوم قرار دارد یا خیر.",
  },

  parameters: [
    {
      name: "dateLeft",
      type: "Date",
      required: true,
      description: {
        en: "The date to compare as the first value.",
        fa: "تاریخی که به‌عنوان مقدار اول برای مقایسه استفاده می‌شود.",
      },
    },
    {
      name: "dateRight",
      type: "Date",
      required: true,
      description: {
        en: "The date to compare against.",
        fa: "تاریخی که dateLeft با آن مقایسه می‌شود.",
      },
    },
  ],

  returns: {
    type: "boolean",
    description: {
      en: "true if dateLeft occurs after dateRight; otherwise, false.",
      fa: "اگر dateLeft بعد از dateRight باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether one date is after another date.",
        fa: "بررسی می‌کند که آیا یک تاریخ بعد از تاریخ دیگر است یا خیر.",
      },
      language: "ts",
      code: `import { isAfter } from "@cyref/js";

const dateLeft = new Date("2026-01-10");
const dateRight = new Date("2026-01-05");

const result = isAfter(dateLeft, dateRight);

console.log(result);
// true`,
    },

    {
      title: {
        en: "Date is not after",
        fa: "تاریخ بعد از تاریخ دیگر نیست",
      },
      description: {
        en: "Returns false when dateLeft occurs before dateRight.",
        fa: "اگر dateLeft قبل از dateRight باشد، مقدار false برمی‌گرداند.",
      },
      language: "ts",
      code: `import { isAfter } from "@cyref/js";

const dateLeft = new Date("2026-01-05");
const dateRight = new Date("2026-01-10");

const result = isAfter(dateLeft, dateRight);

console.log(result);
// false`,
    },

    {
      title: {
        en: "Equal dates",
        fa: "تاریخ‌های برابر",
      },
      description: {
        en: "Equal dates return false because the function checks for a strictly later date.",
        fa: "برای تاریخ‌های برابر مقدار false برمی‌گردد، زیرا تابع فقط بعدتر بودن را بررسی می‌کند.",
      },
      language: "ts",
      code: `import { isAfter } from "@cyref/js";

const dateLeft = new Date("2026-03-15T12:00:00");
const dateRight = new Date("2026-03-15T12:00:00");

const result = isAfter(dateLeft, dateRight);

console.log(result);
// false`,
    },

    {
      title: {
        en: "Time is included in the comparison",
        fa: "زمان نیز در مقایسه در نظر گرفته می‌شود",
      },
      description: {
        en: "The complete timestamp is compared, including hours, minutes, seconds, and milliseconds.",
        fa: "کل timestamp شامل ساعت، دقیقه، ثانیه و میلی‌ثانیه در مقایسه در نظر گرفته می‌شود.",
      },
      language: "ts",
      code: `import { isAfter } from "@cyref/js";

const dateLeft = new Date("2026-06-10T15:30:00");
const dateRight = new Date("2026-06-10T14:30:00");

const result = isAfter(dateLeft, dateRight);

console.log(result);
// true`,
    },

    {
      title: {
        en: "Same day, different time",
        fa: "یک روز، زمان متفاوت",
      },
      description: {
        en: "Two dates on the same calendar day can still produce different results based on their time.",
        fa: "دو تاریخ در یک روز تقویمی می‌توانند بر اساس زمان خود نتیجه متفاوتی داشته باشند.",
      },
      language: "ts",
      code: `import { isAfter } from "@cyref/js";

const morning = new Date("2026-08-20T09:00:00");
const evening = new Date("2026-08-20T18:00:00");

console.log(isAfter(evening, morning));
// true

console.log(isAfter(morning, evening));
// false`,
    },
  ],

  since: "1.38.0",
};
