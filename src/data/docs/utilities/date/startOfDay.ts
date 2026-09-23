import type { DocPage } from "../../types";

export const startOfDayDoc: DocPage = {
  slug: "utilities/date/start-of-day",

  category: "date",

  title: {
    en: "startOfDay",
    fa: "startOfDay",
  },

  description: {
    en: "Returns a new Date set to the first millisecond of the given day.",
    fa: "یک Date جدید ایجاد می‌کند که روی اولین میلی‌ثانیه از روز داده‌شده تنظیم شده است.",
  },

  parameters: [
    {
      name: "date",
      type: "Date",
      required: true,
      description: {
        en: "The date whose start of day should be returned.",
        fa: "تاریخی که ابتدای روز آن باید محاسبه شود.",
      },
    },
  ],

  returns: {
    type: "Date",
    description: {
      en: "A new Date set to 00:00:00.000 of the given day.",
      fa: "یک Date جدید که روی ساعت 00:00:00.000 همان روز تنظیم شده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Get the start of a specific day.",
        fa: "ابتدای یک روز مشخص را دریافت می‌کند.",
      },
      language: "ts",
      code: `import { startOfDay } from "@cyref/js";

const date = new Date("2026-01-15T10:30:00");

const result = startOfDay(date);

console.log(result);
// 2026-01-15T00:00:00.000`,
    },

    {
      title: {
        en: "Date without time",
        fa: "تاریخ بدون زمان",
      },
      description: {
        en: "The function sets the time to the first millisecond of that day.",
        fa: "تابع زمان را روی اولین میلی‌ثانیه همان روز تنظیم می‌کند.",
      },
      language: "ts",
      code: `import { startOfDay } from "@cyref/js";

const date = new Date("2026-03-20");

const result = startOfDay(date);

console.log(result);
// 2026-03-20T00:00:00.000`,
    },

    {
      title: {
        en: "Original date remains unchanged",
        fa: "تاریخ اصلی بدون تغییر می‌ماند",
      },
      description: {
        en: "startOfDay creates a new Date object, so the original date is not modified.",
        fa: "تابع startOfDay یک Date جدید ایجاد می‌کند، بنابراین تاریخ اصلی تغییر نمی‌کند.",
      },
      language: "ts",
      code: `import { startOfDay } from "@cyref/js";

const date = new Date("2026-05-10T14:30:00");

const result = startOfDay(date);

console.log(date);
// 2026-05-10T14:30:00

console.log(result);
// 2026-05-10T00:00:00.000`,
    },

    {
      title: {
        en: "Time components are reset",
        fa: "بخش‌های زمانی صفر می‌شوند",
      },
      description: {
        en: "Hours, minutes, seconds, and milliseconds are all reset to zero.",
        fa: "ساعت، دقیقه، ثانیه و میلی‌ثانیه همگی روی صفر تنظیم می‌شوند.",
      },
      language: "ts",
      code: `import { startOfDay } from "@cyref/js";

const date = new Date("2026-08-25T18:45:32.500");

const result = startOfDay(date);

console.log(result.getHours());
// 0

console.log(result.getMinutes());
// 0

console.log(result.getSeconds());
// 0

console.log(result.getMilliseconds());
// 0`,
    },

    {
      title: {
        en: "Date already at the start of the day",
        fa: "تاریخ از قبل در ابتدای روز",
      },
      description: {
        en: "If the date is already at the start of the day, the returned Date has the same date and time value.",
        fa: "اگر تاریخ از قبل در ابتدای روز باشد، Date برگشتی همان مقدار تاریخ و زمان را خواهد داشت.",
      },
      language: "ts",
      code: `import { startOfDay } from "@cyref/js";

const date = new Date("2026-09-10T00:00:00.000");

const result = startOfDay(date);

console.log(result);
// 2026-09-10T00:00:00.000`,
    },
  ],

  since: "1.38.0",
};
