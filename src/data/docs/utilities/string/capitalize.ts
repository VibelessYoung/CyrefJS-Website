import type { DocPage } from "../../types";

export const capitalizeDoc: DocPage = {
  slug: "utilities/string/capitalize",
  category: "string",
  title: {
    en: "capitalize",
    fa: "capitalize",
  },
  description: {
    en: "Converts the first character of a string to uppercase while leaving the rest of the string unchanged.",
    fa: "اولین کاراکتر یک رشته را به حروف بزرگ تبدیل می‌کند و بقیه رشته را بدون تغییر نگه می‌دارد.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string whose first character should be capitalized.",
        fa: "رشته‌ای که باید اولین کاراکتر آن به حروف بزرگ تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The string with its first character converted to uppercase.",
      fa: "رشته‌ای که اولین کاراکتر آن به حروف بزرگ تبدیل شده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Capitalize the first character of a lowercase string.",
        fa: "اولین کاراکتر یک رشته با حروف کوچک را بزرگ می‌کند.",
      },
      language: "ts",
      code: `import { capitalize } from "@cyref/js";

capitalize("hello");
// "Hello"`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "Only the first character is changed. The rest remains unchanged.",
        fa: "فقط اولین کاراکتر تغییر می‌کند و بقیه رشته بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `capitalize("hello WORLD");
// "Hello WORLD"`,
    },

    {
      title: {
        en: "Already capitalized",
        fa: "از قبل با حرف بزرگ",
      },
      description: {
        en: "A string that already starts with an uppercase character remains unchanged.",
        fa: "اگر رشته از قبل با یک حرف بزرگ شروع شود، همان مقدار حفظ می‌شود.",
      },
      language: "ts",
      code: `capitalize("Hello");
// "Hello"`,
    },

    {
      title: {
        en: "Empty string",
        fa: "رشته خالی",
      },
      description: {
        en: "An empty string is returned unchanged.",
        fa: "رشته خالی بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `capitalize("");
// ""`,
    },

    {
      title: {
        en: "Rest of the string",
        fa: "باقی رشته",
      },
      description: {
        en: "Characters after the first one are preserved exactly as they are.",
        fa: "تمام کاراکترهای بعد از کاراکتر اول دقیقاً بدون تغییر حفظ می‌شوند.",
      },
      language: "ts",
      code: `capitalize("hELLO wORLD");
// "HELLO wORLD"`,
    },

    {
      title: {
        en: "Single character",
        fa: "یک کاراکتر",
      },
      description: {
        en: "A single character is converted to uppercase.",
        fa: "یک کاراکتر به حروف بزرگ تبدیل می‌شود.",
      },
      language: "ts",
      code: `capitalize("a");
// "A"`,
    },
  ],

  sections: [
    {
      id: "behavior",
      title: {
        en: "Behavior",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "If the input string is empty, capitalize returns it unchanged. Otherwise, it converts the first character to uppercase and appends the rest of the original string unchanged.",
        fa: "اگر رشته ورودی خالی باشد، همان رشته بدون تغییر برگردانده می‌شود. در غیر این صورت، اولین کاراکتر به حروف بزرگ تبدیل شده و باقی رشته بدون تغییر به آن اضافه می‌شود.",
      },
    },

    {
      id: "preserves-rest",
      title: {
        en: "Preserves the rest",
        fa: "حفظ باقی رشته",
      },
      content: {
        en: "capitalize does not lowercase or otherwise normalize the remaining characters. Only the first character is transformed.",
        fa: "تابع capitalize حروف باقی رشته را lowercase یا به شکل دیگری نرمال نمی‌کند؛ فقط اولین کاراکتر تغییر می‌کند.",
      },
    },

    {
      id: "empty-string",
      title: {
        en: "Empty strings",
        fa: "رشته‌های خالی",
      },
      content: {
        en: "An empty string is returned directly without modification.",
        fa: "رشته خالی مستقیماً و بدون هیچ تغییری برگردانده می‌شود.",
      },
    },
  ],

  since: "1.38.0",
};
