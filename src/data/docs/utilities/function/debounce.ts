import type { DocPage } from "../../types";

export const debounceDoc: DocPage = {
  slug: "utilities/function/debounce",

  category: "function",

  title: {
    en: "debounce",
    fa: "debounce",
  },

  description: {
    en: "Delays function execution until a specified amount of time has passed since the last call.",
    fa: "اجرای تابع را تا زمانی که مدت مشخصی از آخرین فراخوانی گذشته باشد به تأخیر می‌اندازد.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => void",
      required: true,
      description: {
        en: "The function to execute after the delay has passed without another call.",
        fa: "تابعی که پس از گذشت زمان مشخص‌شده بدون فراخوانی جدید اجرا می‌شود.",
      },
    },
    {
      name: "delay",
      type: "number",
      required: true,
      description: {
        en: "The delay in milliseconds before the function is executed.",
        fa: "مدت تأخیر بر حسب میلی‌ثانیه قبل از اجرای تابع.",
      },
    },
  ],

  returns: {
    type: "(...args: TArgs) => void",
    description: {
      en: "A debounced function that resets its timer whenever it is called.",
      fa: "یک تابع debounce شده که هر بار فراخوانی شود تایمر قبلی خود را reset می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "The function executes after the specified delay.",
        fa: "تابع پس از مدت زمان مشخص‌شده اجرا می‌شود.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const logMessage = debounce(() => {
  console.log("Executed");
}, 500);

logMessage();`,
    },

    {
      title: {
        en: "Resetting the delay",
        fa: "ریست شدن زمان تأخیر",
      },
      description: {
        en: "Calling the debounced function again clears the previous timeout and starts the delay again.",
        fa: "فراخوانی دوباره تابع debounce شده، timeout قبلی را لغو کرده و زمان تأخیر را از ابتدا شروع می‌کند.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const search = debounce((query: string) => {
  console.log("Searching:", query);
}, 500);

search("c");
search("cy");
search("cyref");

// Only the last call is executed after 500ms.
// Searching: cyref`,
    },

    {
      title: {
        en: "Passing arguments",
        fa: "ارسال آرگومان",
      },
      description: {
        en: "Arguments passed to the debounced function are forwarded to the original function when it executes.",
        fa: "آرگومان‌هایی که به تابع debounce شده ارسال می‌شوند، هنگام اجرای تابع اصلی به آن منتقل می‌شوند.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const greet = debounce((name: string) => {
  console.log(\`Hello, \${name}!\`);
}, 300);

greet("Amir");

// After 300ms:
// Hello, Amir!`,
    },

    {
      title: {
        en: "Multiple arguments",
        fa: "چند آرگومان",
      },
      description: {
        en: "The debounced function supports multiple arguments with the same types as the original function.",
        fa: "تابع debounce شده می‌تواند چند آرگومان را با همان typeهای تابع اصلی دریافت کند.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const calculate = debounce(
  (a: number, b: number) => {
    console.log(a + b);
  },
  500,
);

calculate(10, 20);

// After 500ms:
// 30`,
    },

    {
      title: {
        en: "Repeated calls",
        fa: "فراخوانی‌های متوالی",
      },
      description: {
        en: "Only the most recent call is executed when multiple calls occur before the delay expires.",
        fa: "اگر چند فراخوانی قبل از تمام شدن زمان تأخیر انجام شوند، فقط آخرین فراخوانی اجرا می‌شود.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const save = debounce((value: string) => {
  console.log("Saved:", value);
}, 1000);

save("first");

setTimeout(() => {
  save("second");
}, 300);

setTimeout(() => {
  save("third");
}, 600);

// Only "third" is executed after the final 1000ms delay.
// Saved: third`,
    },

    {
      title: {
        en: "Useful for input events",
        fa: "مناسب برای رویدادهای ورودی",
      },
      description: {
        en: "debounce can delay frequently triggered callbacks such as input or search events.",
        fa: "می‌توان از debounce برای به‌تأخیر انداختن callbackهایی که مرتب اجرا می‌شوند، مانند رویدادهای input یا search، استفاده کرد.",
      },
      language: "ts",
      code: `import { debounce } from "@cyref/js";

const handleSearch = debounce((value: string) => {
  console.log("Search:", value);
}, 400);

handleSearch("Java");
handleSearch("JavaScript");

// Only the latest call is executed after 400ms.
// Search: JavaScript`,
    },
  ],

  since: "1.38.0",
};
