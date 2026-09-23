import type { DocPage } from "../../types";

export const memoizeDoc: DocPage = {
  slug: "utilities/function/memoize",
  category: "function",

  title: {
    en: "memoize",
    fa: "memoize",
  },

  description: {
    en: "Caches the result of a function and reuses it when the same cache key is requested again.",
    fa: "نتیجه تابع را ذخیره می‌کند و زمانی که همان کلید کش دوباره درخواست شود، نتیجه ذخیره‌شده را برمی‌گرداند.",
  },

  parameters: [
    {
      name: "fn",
      type: "(...args: TArgs) => TResult",
      required: true,
      description: {
        en: "The function whose results should be cached.",
        fa: "تابعی که نتایج آن باید ذخیره و کش شود.",
      },
    },
    {
      name: "resolver",
      type: "(...args: TArgs) => unknown",
      required: false,
      description: {
        en: "Optional function used to generate the cache key from the arguments.",
        fa: "تابع اختیاری که برای ساخت کلید کش از آرگومان‌های تابع استفاده می‌شود.",
      },
    },
  ],

  returns: {
    type: "(...args: TArgs) => TResult",
    description: {
      en: "Returns a function that caches and reuses the results of the original function.",
      fa: "تابعی را برمی‌گرداند که نتایج تابع اصلی را کش کرده و در فراخوانی‌های بعدی استفاده می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "The result for the same argument is calculated only once.",
        fa: "نتیجه برای یک آرگومان یکسان فقط یک بار محاسبه می‌شود.",
      },
      language: "ts",
      code: `const calculate = memoize((value: number) => {
  console.log("Calculating...");
  return value * 2;
});

console.log(calculate(5));
// Calculating...
// 10

console.log(calculate(5));
// 10`,
    },

    {
      title: {
        en: "Multiple arguments",
        fa: "چند آرگومان",
      },
      description: {
        en: "When no resolver is provided, multiple arguments are serialized with JSON.stringify to create the cache key.",
        fa: "وقتی resolver داده نشده باشد، چند آرگومان با JSON.stringify به یک کلید کش تبدیل می‌شوند.",
      },
      language: "ts",
      code: `const add = memoize((a: number, b: number) => {
  console.log("Calculating...");
  return a + b;
});

console.log(add(2, 3));
// Calculating...
// 5

console.log(add(2, 3));
// 5`,
    },

    {
      title: {
        en: "Using a resolver",
        fa: "استفاده از resolver",
      },
      description: {
        en: "A resolver can define a custom cache key from the function arguments.",
        fa: "با resolver می‌توانید کلید کش را به‌صورت سفارشی از روی آرگومان‌ها تعیین کنید.",
      },
      language: "ts",
      code: `const getUser = memoize(
  (id: number, name: string) => {
    console.log("Fetching user...");
    return { id, name };
  },
  (id) => id,
);

console.log(getUser(1, "Amir"));
// Fetching user...
// { id: 1, name: "Amir" }

console.log(getUser(1, "Ali"));
// { id: 1, name: "Amir" }`,
    },

    {
      title: {
        en: "Single argument",
        fa: "یک آرگومان",
      },
      description: {
        en: "With a single argument and no resolver, that argument itself is used as the cache key.",
        fa: "با یک آرگومان و بدون resolver، خود آرگومان به‌عنوان کلید کش استفاده می‌شود.",
      },
      language: "ts",
      code: `const square = memoize((value: number) => value * value);

console.log(square(4));
// 16

console.log(square(4));
// 16`,
    },

    {
      title: {
        en: "Different arguments",
        fa: "آرگومان‌های متفاوت",
      },
      description: {
        en: "Different cache keys cause the original function to execute separately.",
        fa: "کلیدهای کش متفاوت باعث می‌شوند تابع اصلی برای هر مقدار جداگانه اجرا شود.",
      },
      language: "ts",
      code: `const double = memoize((value: number) => {
  console.log("Calculating...");
  return value * 2;
});

console.log(double(5));
// Calculating...
// 10

console.log(double(10));
// Calculating...
// 20`,
    },

    {
      title: {
        en: "Caching object results",
        fa: "کش کردن نتیجه آبجکت",
      },
      description: {
        en: "The returned result is stored and the same cached result is returned for subsequent calls with the same key.",
        fa: "نتیجه برگردانده‌شده ذخیره می‌شود و در فراخوانی‌های بعدی با همان کلید، همان نتیجه کش‌شده برگردانده می‌شود.",
      },
      language: "ts",
      code: `const createUser = memoize((name: string) => ({
  name,
}));

const first = createUser("Amir");
const second = createUser("Amir");

console.log(first === second);
// true`,
    },
  ],

  since: "1.38.0",
};
