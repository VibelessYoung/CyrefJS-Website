import type { DocPage } from "../../types";

export const throttleDoc: DocPage = {
  slug: "utilities/function/throttle",
  category: "function",

  title: {
    en: "throttle",
    fa: "throttle",
  },

  description: {
    en: "Creates a function that limits execution of the given function to at most once during each delay interval.",
    fa: "تابعی ایجاد می‌کند که اجرای تابع داده‌شده را به حداکثر یک بار در هر بازه زمانی مشخص‌شده محدود می‌کند.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => void",
      required: true,
      description: {
        en: "The function to execute at most once during each delay interval.",
        fa: "تابعی که در هر بازه زمانی مشخص‌شده حداکثر یک بار اجرا می‌شود.",
      },
    },
    {
      name: "delay",
      type: "number",
      required: true,
      description: {
        en: "The minimum time in milliseconds that must pass between executions.",
        fa: "حداقل زمان بر حسب میلی‌ثانیه که باید بین دو اجرای تابع سپری شود.",
      },
    },
  ],

  returns: {
    type: "(...args: TArgs) => void",
    description: {
      en: "Returns a function that controls how frequently the original function can execute.",
      fa: "تابعی را برمی‌گرداند که تعداد دفعات اجرای تابع اصلی را در طول زمان کنترل می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Repeated calls within the delay interval are ignored.",
        fa: "فراخوانی‌های تکراری در طول بازه delay نادیده گرفته می‌شوند.",
      },
      language: "ts",
      code: `const log = throttle(() => {
  console.log("Executed");
}, 1000);

log();
// Executed

log();
// Ignored

log();
// Ignored`,
    },

    {
      title: {
        en: "Execution after the delay",
        fa: "اجرا پس از پایان delay",
      },
      description: {
        en: "Once the delay has passed since the last execution, the next call is allowed to execute.",
        fa: "پس از گذشت delay از آخرین اجرا، فراخوانی بعدی می‌تواند اجرا شود.",
      },
      language: "ts",
      code: `const log = throttle(() => {
  console.log("Executed");
}, 1000);

log();
// Executed

// After 1000ms or more:
log();
// Executed`,
    },

    {
      title: {
        en: "Passing arguments",
        fa: "ارسال آرگومان",
      },
      description: {
        en: "Arguments from an allowed call are passed directly to the original function.",
        fa: "آرگومان‌های فراخوانی مجاز مستقیماً به تابع اصلی ارسال می‌شوند.",
      },
      language: "ts",
      code: `const logValue = throttle((value: string) => {
  console.log(value);
}, 1000);

logValue("first");
// first

logValue("second");
// Ignored if called before the delay expires`,
    },

    {
      title: {
        en: "Useful for frequent events",
        fa: "مناسب برای رویدادهای پرتکرار",
      },
      description: {
        en: "throttle can limit how frequently a function responds to frequently triggered events.",
        fa: "می‌توان از throttle برای محدود کردن تعداد دفعات پاسخ تابع به رویدادهای پرتکرار استفاده کرد.",
      },
      language: "ts",
      code: `const handleScroll = throttle(() => {
  console.log("Scroll handled");
}, 200);

window.addEventListener("scroll", handleScroll);`,
    },

    {
      title: {
        en: "Different arguments between executions",
        fa: "آرگومان‌های متفاوت بین اجراها",
      },
      description: {
        en: "Only arguments from calls that are actually executed are passed to the original function.",
        fa: "فقط آرگومان‌های فراخوانی‌هایی که واقعاً اجرا می‌شوند به تابع اصلی ارسال می‌شوند.",
      },
      language: "ts",
      code: `const logValue = throttle((value: number) => {
  console.log(value);
}, 1000);

logValue(1);
// 1

logValue(2);
// Ignored if called before the delay expires

// After the delay:
logValue(3);
// 3`,
    },

    {
      title: {
        en: "No delayed execution",
        fa: "بدون اجرای تأخیری",
      },
      description: {
        en: "Calls ignored during the delay are not queued or executed later.",
        fa: "فراخوانی‌هایی که در طول delay نادیده گرفته می‌شوند در صف قرار نمی‌گیرند و بعداً اجرا نمی‌شوند.",
      },
      language: "ts",
      code: `const log = throttle(() => {
  console.log("Executed");
}, 1000);

log();
// Executed

log();
// Ignored

// Waiting does not execute the ignored call automatically.`,
    },
  ],

  since: "1.38.0",
};
