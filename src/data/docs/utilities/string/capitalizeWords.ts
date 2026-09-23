import type { DocPage } from "../../types";

export const capitalizeWordsDoc: DocPage = {
  slug: "utilities/string/capitalize-words",
  category: "string",
  title: {
    en: "capitalizeWords",
    fa: "capitalizeWords",
  },
  description: {
    en: "Capitalizes the first character of every space-separated word and converts the remaining characters of each word to lowercase.",
    fa: "اولین کاراکتر هر کلمه جداشده با فاصله را بزرگ می‌کند و باقی کاراکترهای هر کلمه را به حروف کوچک تبدیل می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string whose words should be capitalized.",
        fa: "رشته‌ای که کلمات آن باید capitalize شوند.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "A string with the first character of each space-separated word uppercase and the remaining characters lowercase.",
      fa: "رشته‌ای که اولین کاراکتر هر کلمه با حروف بزرگ و باقی کاراکترهای آن با حروف کوچک است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Capitalize every word in a sentence.",
        fa: "تمام کلمات یک جمله را capitalize می‌کند.",
      },
      language: "ts",
      code: `import { capitalizeWords } from "@cyref/js";

capitalizeWords("hello world");
// "Hello World"`,
    },

    {
      title: {
        en: "Uppercase input",
        fa: "ورودی با حروف بزرگ",
      },
      description: {
        en: "Each word is normalized with an uppercase first character and lowercase remaining characters.",
        fa: "هر کلمه با حرف اول بزرگ و باقی حروف کوچک نرمال می‌شود.",
      },
      language: "ts",
      code: `capitalizeWords("HELLO WORLD");
// "Hello World"`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "Mixed casing is normalized for every word.",
        fa: "حروف ترکیبی هر کلمه نرمال می‌شوند.",
      },
      language: "ts",
      code: `capitalizeWords("hELLo WoRLD");
// "Hello World"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },
      description: {
        en: "A single word is capitalized and its remaining characters are lowercased.",
        fa: "یک کلمه capitalize شده و باقی حروف آن lowercase می‌شوند.",
      },
      language: "ts",
      code: `capitalizeWords("hELLO");
// "Hello"`,
    },

    {
      title: {
        en: "Multiple spaces",
        fa: "چند فاصله",
      },
      description: {
        en: "Empty parts created by consecutive spaces are preserved.",
        fa: "بخش‌های خالی ایجادشده توسط فاصله‌های متوالی حفظ می‌شوند.",
      },
      language: "ts",
      code: `capitalizeWords("hello  world");
// "Hello  World"`,
    },

    {
      title: {
        en: "Leading and trailing spaces",
        fa: "فاصله در ابتدا و انتها",
      },
      description: {
        en: "Leading and trailing spaces are preserved.",
        fa: "فاصله‌های ابتدایی و انتهایی حفظ می‌شوند.",
      },
      language: "ts",
      code: `capitalizeWords("  hello world  ");
// "  Hello World  "`,
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
      code: `capitalizeWords("");
// ""`,
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
        en: "The string is split using a single space character. Each resulting part is processed independently. Non-empty words have their first character converted to uppercase and the rest converted to lowercase. The processed parts are then joined using a single space.",
        fa: "رشته با استفاده از یک کاراکتر فاصله جدا می‌شود. هر بخش به صورت مستقل پردازش می‌شود. برای کلمات غیرخالی، اولین کاراکتر uppercase و باقی کاراکترها lowercase می‌شوند. سپس بخش‌ها با یک فاصله به هم متصل می‌شوند.",
      },
    },

    {
      id: "spacing",
      title: {
        en: "Spacing",
        fa: "فاصله‌ها",
      },
      content: {
        en: "Because split and join both use a single space, leading, trailing, and consecutive spaces are preserved in the resulting string.",
        fa: "از آنجا که split و join هر دو از یک فاصله استفاده می‌کنند، فاصله‌های ابتدایی، انتهایی و متوالی در نتیجه حفظ می‌شوند.",
      },
    },

    {
      id: "casing",
      title: {
        en: "Casing rules",
        fa: "قوانین حروف",
      },
      content: {
        en: "Every non-empty word starts with an uppercase character, while all remaining characters in that word are converted to lowercase.",
        fa: "هر کلمه غیرخالی با یک کاراکتر uppercase شروع می‌شود و تمام کاراکترهای باقی‌مانده آن lowercase می‌شوند.",
      },
    },

    {
      id: "empty-parts",
      title: {
        en: "Empty parts",
        fa: "بخش‌های خالی",
      },
      content: {
        en: "When multiple spaces occur next to each other, split produces empty strings. These empty strings are returned unchanged, preserving the original spacing.",
        fa: "وقتی چند فاصله پشت سر هم قرار داشته باشند، split رشته‌های خالی ایجاد می‌کند. این رشته‌های خالی بدون تغییر برگردانده می‌شوند و فاصله‌های اصلی حفظ می‌شوند.",
      },
    },
  ],

  since: "1.38.0",
};
