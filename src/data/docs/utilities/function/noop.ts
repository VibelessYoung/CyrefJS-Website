import type { DocPage } from "../../types";

export const noopDoc: DocPage = {
  slug: "utilities/function/noop",
  category: "function",

  title: {
    en: "noop",
    fa: "noop",
  },

  description: {
    en: "A function that performs no operation and returns undefined.",
    fa: "تابعی که هیچ عملی انجام نمی‌دهد و مقدار undefined برمی‌گرداند.",
  },

  returns: {
    type: "void",
    description: {
      en: "Returns undefined because the function has no return statement.",
      fa: "به دلیل نداشتن دستور return، مقدار undefined برگردانده می‌شود.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Calling noop performs no operation.",
        fa: "فراخوانی noop هیچ عملی انجام نمی‌دهد.",
      },
      language: "ts",
      code: `noop();

console.log("Done");
// Done`,
    },

    {
      title: {
        en: "As a default callback",
        fa: "به‌عنوان callback پیش‌فرض",
      },
      description: {
        en: "noop can be used when a callback is optional but a function is still required.",
        fa: "وقتی یک callback اختیاری است اما همچنان به یک تابع نیاز داریم، می‌توان از noop استفاده کرد.",
      },
      language: "ts",
      code: `const onComplete = noop;

onComplete();
// No operation`,
    },

    {
      title: {
        en: "Calling it with arguments",
        fa: "فراخوانی با آرگومان",
      },
      description: {
        en: "The function does not accept any parameters, so it should be called without arguments.",
        fa: "این تابع هیچ پارامتری ندارد، بنابراین باید بدون آرگومان فراخوانی شود.",
      },
      language: "ts",
      code: `noop();`,
    },

    {
      title: {
        en: "No return value",
        fa: "بدون مقدار بازگشتی",
      },
      description: {
        en: "The function has a void return type and contains no return statement.",
        fa: "تابع دارای نوع بازگشتی void است و هیچ دستور return ندارد.",
      },
      language: "ts",
      code: `const result = noop();

console.log(result);
// undefined`,
    },
  ],

  since: "1.38.0",
};
