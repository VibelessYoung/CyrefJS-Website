import type { DocPage } from "../../types";

export const addDaysDoc: DocPage = {
  slug: "utilities/date/add-days",

  category: "date",

  title: {
    en: "addDays",
    fa: "addDays",
  },

  description: {
    en: "Returns a new Date with a specified number of days added to the given date without modifying the original Date object.",
    fa: "یک Date جدید ایجاد می‌کند و تعداد مشخصی روز به تاریخ داده‌شده اضافه می‌کند، بدون اینکه شیء Date اصلی را تغییر دهد.",
  },

  parameters: [
    {
      name: "date",
      type: "Date",
      required: true,
      description: {
        en: "The date to which the specified number of days will be added.",
        fa: "تاریخی که قرار است تعداد مشخصی روز به آن اضافه شود.",
      },
    },
    {
      name: "amount",
      type: "number",
      required: true,
      description: {
        en: "The number of days to add to the date. Negative values subtract days.",
        fa: "تعداد روزهایی که باید به تاریخ اضافه شوند. مقادیر منفی باعث کم شدن روزها می‌شوند.",
      },
    },
  ],

  returns: {
    type: "Date",
    description: {
      en: "A new Date object with the specified number of days added.",
      fa: "یک شیء Date جدید که تعداد مشخصی روز به آن اضافه شده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Add days to a Date object.",
        fa: "چند روز به یک شیء Date اضافه می‌کند.",
      },
      language: "ts",
      code: `import { addDays } from "@cyref/js";

const date = new Date("2026-01-10");

const result = addDays(date, 5);

console.log(result);
// 2026-01-15`,
    },

    {
      title: {
        en: "Subtract days",
        fa: "کم کردن روزها",
      },
      description: {
        en: "Negative values can be used to subtract days from the date.",
        fa: "با استفاده از مقادیر منفی می‌توان روزها را از تاریخ کم کرد.",
      },
      language: "ts",
      code: `import { addDays } from "@cyref/js";

const date = new Date("2026-01-10");

const result = addDays(date, -3);

console.log(result);
// 2026-01-07`,
    },

    {
      title: {
        en: "Crossing month boundaries",
        fa: "عبور از مرز ماه",
      },
      description: {
        en: "The function automatically handles dates that move into the next or previous month.",
        fa: "تابع به‌صورت خودکار تاریخ‌هایی را که وارد ماه قبل یا بعد می‌شوند مدیریت می‌کند.",
      },
      language: "ts",
      code: `import { addDays } from "@cyref/js";

const date = new Date("2026-01-30");

const result = addDays(date, 3);

console.log(result);
// 2026-02-02`,
    },

    {
      title: {
        en: "Original date remains unchanged",
        fa: "تاریخ اصلی بدون تغییر باقی می‌ماند",
      },
      description: {
        en: "addDays creates a new Date object, so the original date is not modified.",
        fa: "تابع addDays یک Date جدید ایجاد می‌کند، بنابراین تاریخ اصلی تغییر نمی‌کند.",
      },
      language: "ts",
      code: `import { addDays } from "@cyref/js";

const date = new Date("2026-05-10");

const result = addDays(date, 7);

console.log(date);
// 2026-05-10

console.log(result);
// 2026-05-17`,
    },

    {
      title: {
        en: "Adding zero days",
        fa: "اضافه کردن صفر روز",
      },
      description: {
        en: "Adding zero days returns a new Date with the same date value.",
        fa: "اضافه کردن صفر روز یک Date جدید با همان مقدار تاریخ ایجاد می‌کند.",
      },
      language: "ts",
      code: `import { addDays } from "@cyref/js";

const date = new Date("2026-06-15");

const result = addDays(date, 0);

console.log(result);
// 2026-06-15`,
    },
  ],

  since: "1.38.0",
};
