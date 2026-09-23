import type { DocPage } from "../../types";

export const onceDoc: DocPage = {
  slug: "utilities/function/once",
  category: "function",

  title: {
    en: "once",
    fa: "once",
  },

  description: {
    en: "Creates a function that invokes the given function only once and returns the result from the first invocation for all subsequent calls.",
    fa: "تابعی ایجاد می‌کند که تابع داده‌شده را فقط یک بار اجرا می‌کند و در فراخوانی‌های بعدی همان نتیجه اولین اجرا را برمی‌گرداند.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => TResult",
      required: true,
      description: {
        en: "The function to invoke only once.",
        fa: "تابعی که باید فقط یک بار اجرا شود.",
      },
    },
  ],

  returns: {
    type: "(...args: TArgs) => TResult",
    description: {
      en: "Returns a function that executes the original function only on its first call and returns the stored result afterward.",
      fa: "تابعی را برمی‌گرداند که تابع اصلی را فقط در اولین فراخوانی اجرا می‌کند و پس از آن نتیجه ذخیره‌شده را برمی‌گرداند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "The original function is executed only on the first call.",
        fa: "تابع اصلی فقط در اولین فراخوانی اجرا می‌شود.",
      },
      language: "ts",
      code: `const initialize = once(() => {
  console.log("Initialized");
  return "ready";
});

console.log(initialize());
// Initialized
// ready

console.log(initialize());
// ready

console.log(initialize());
// ready`,
    },

    {
      title: {
        en: "First result is reused",
        fa: "استفاده مجدد از نتیجه اولین اجرا",
      },
      description: {
        en: "After the first invocation, the stored result is returned even when later calls use different arguments.",
        fa: "پس از اولین اجرا، نتیجه ذخیره‌شده حتی در صورت استفاده از آرگومان‌های متفاوت در فراخوانی‌های بعدی برگردانده می‌شود.",
      },
      language: "ts",
      code: `const getValue = once((value: number) => value * 2);

console.log(getValue(5));
// 10

console.log(getValue(10));
// 10

console.log(getValue(20));
// 10`,
    },

    {
      title: {
        en: "Passing multiple arguments",
        fa: "ارسال چند آرگومان",
      },
      description: {
        en: "All arguments from the first call are passed to the original function.",
        fa: "تمام آرگومان‌های اولین فراخوانی به تابع اصلی ارسال می‌شوند.",
      },
      language: "ts",
      code: `const createMessage = once(
  (name: string, age: number) => {
    return \`\${name} is \${age} years old\`;
  },
);

console.log(createMessage("Amir", 20));
// Amir is 20 years old

console.log(createMessage("Ali", 25));
// Amir is 20 years old`,
    },

    {
      title: {
        en: "Useful for initialization",
        fa: "مناسب برای مقداردهی اولیه",
      },
      description: {
        en: "once can be used when an operation should happen only during the first invocation.",
        fa: "وقتی یک عملیات فقط باید در اولین فراخوانی انجام شود، می‌توان از once استفاده کرد.",
      },
      language: "ts",
      code: `const setup = once(() => {
  console.log("Setup completed");
  return true;
});

setup();
// Setup completed

setup();
// No output`,
    },

    {
      title: {
        en: "Original function is not called again",
        fa: "تابع اصلی دوباره اجرا نمی‌شود",
      },
      description: {
        en: "Once the function has been called, subsequent calls return the stored result without invoking the original function.",
        fa: "پس از اجرای تابع، فراخوانی‌های بعدی بدون اجرای مجدد تابع اصلی، نتیجه ذخیره‌شده را برمی‌گردانند.",
      },
      language: "ts",
      code: `let count = 0;

const increment = once(() => {
  count += 1;
  return count;
});

console.log(increment());
// 1

console.log(increment());
// 1

console.log(count);
// 1`,
    },
  ],

  since: "1.38.0",
};
