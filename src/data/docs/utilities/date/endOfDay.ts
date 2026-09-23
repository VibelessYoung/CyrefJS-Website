import type { DocPage } from "../../types";

export const endOfDayDoc: DocPage = {
  slug: "utilities/date/end-of-day",

  category: "date",

  title: {
    en: "endOfDay",
    fa: "endOfDay",
  },

  description: {
    en: "Returns a new Date set to the last millisecond of the given date.",
    fa: "یک Date جدید ایجاد می‌کند که روی آخرین میلی‌ثانیه از روز داده‌شده تنظیم شده است.",
  },

  parameters: [
    {
      name: "date",
      type: "Date",
      required: true,
      description: {
        en: "The date whose end of day should be returned.",
        fa: "تاریخی که انتهای روز آن باید محاسبه شود.",
      },
    },
  ],

  returns: {
    type: "Date",
    description: {
      en: "A new Date set to 23:59:59.999 of the given date.",
      fa: "یک Date جدید که روی ساعت 23:59:59.999 همان روز تنظیم شده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Get the end of a specific day.",
        fa: "انتهای یک روز مشخص را دریافت می‌کند.",
      },
      language: "ts",
      code: `import { endOfDay } from "@cyref/js";

const date = new Date("2026-01-15T10:30:00");

const result = endOfDay(date);

console.log(result);
// 2026-01-15T23:59:59.999`,
    },

    {
      title: {
        en: "Date without time",
        fa: "تاریخ بدون زمان",
      },
      description: {
        en: "The function sets the time to the last millisecond of that day.",
        fa: "تابع زمان را روی آخرین میلی‌ثانیه همان روز تنظیم می‌کند.",
      },
      language: "ts",
      code: `import { endOfDay } from "@cyref/js";

const date = new Date("2026-03-20");

const result = endOfDay(date);

console.log(result);
// 2026-03-20T23:59:59.999`,
    },

    {
      title: {
        en: "Original date remains unchanged",
        fa: "تاریخ اصلی بدون تغییر می‌ماند",
      },
      description: {
        en: "endOfDay creates a new Date object, so the original date is not modified.",
        fa: "تابع endOfDay یک Date جدید ایجاد می‌کند، بنابراین تاریخ اصلی تغییر نمی‌کند.",
      },
      language: "ts",
      code: `import { endOfDay } from "@cyref/js";

const date = new Date("2026-05-10T14:30:00");

const result = endOfDay(date);

console.log(date);
// 2026-05-10T14:30:00

console.log(result);
// 2026-05-10T23:59:59.999`,
    },

    {
      title: {
        en: "Date at the end of the day",
        fa: "تاریخ در انتهای روز",
      },
      description: {
        en: "The returned Date always uses 23:59:59.999 as its time.",
        fa: "زمان Date برگشتی همیشه برابر با 23:59:59.999 است.",
      },
      language: "ts",
      code: `import { endOfDay } from "@cyref/js";

const date = new Date("2026-08-25T06:45:12");

const result = endOfDay(date);

console.log(result.getHours());
// 23

console.log(result.getMinutes());
// 59

console.log(result.getSeconds());
// 59

console.log(result.getMilliseconds());
// 999`,
    },

    {
      title: {
        en: "Date already at the end of the day",
        fa: "تاریخ از قبل در انتهای روز",
      },
      description: {
        en: "If the date is already at the end of the day, the returned Date has the same date and time value.",
        fa: "اگر تاریخ از قبل در انتهای روز باشد، Date برگشتی همان مقدار تاریخ و زمان را خواهد داشت.",
      },
      language: "ts",
      code: `import { endOfDay } from "@cyref/js";

const date = new Date("2026-09-10T23:59:59.999");

const result = endOfDay(date);

console.log(result);
// 2026-09-10T23:59:59.999`,
    },
  ],

  since: "1.38.0",
};
