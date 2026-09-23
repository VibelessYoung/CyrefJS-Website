import type { DocPage } from "../../types";

export const constantCaseDoc: DocPage = {
  slug: "utilities/string/constant-case",
  category: "string",
  title: {
    en: "constantCase",
    fa: "constantCase",
  },
  description: {
    en: "Converts a string into CONSTANT_CASE by tokenizing it, converting every word to uppercase, and joining the words with underscores.",
    fa: "یک رشته را با تبدیل کلمات آن به حروف بزرگ و اتصال آن‌ها با آندرلاین به CONSTANT_CASE تبدیل می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert to CONSTANT_CASE.",
        fa: "رشته‌ای که باید به CONSTANT_CASE تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The tokenized input converted to uppercase and joined with underscores.",
      fa: "توکن‌های رشته ورودی که به حروف بزرگ تبدیل شده و با آندرلاین به هم متصل شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Convert a space-separated phrase to CONSTANT_CASE.",
        fa: "تبدیل یک عبارت جداشده با فاصله به CONSTANT_CASE.",
      },
      language: "ts",
      code: `import { constantCase } from "@cyref/js";

constantCase("hello world");
// "HELLO_WORLD"`,
    },

    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },
      description: {
        en: "Each token is converted to uppercase and separated with an underscore.",
        fa: "هر توکن به حروف بزرگ تبدیل شده و با آندرلاین از توکن بعدی جدا می‌شود.",
      },
      language: "ts",
      code: `constantCase("hello beautiful world");
// "HELLO_BEAUTIFUL_WORLD"`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "The casing of every token is normalized to uppercase.",
        fa: "حروف تمام توکن‌ها به uppercase نرمال می‌شوند.",
      },
      language: "ts",
      code: `constantCase("hello WoRLD TeST");
// "HELLO_WORLD_TEST"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },
      description: {
        en: "A single token is simply converted to uppercase.",
        fa: "یک توکن به سادگی به حروف بزرگ تبدیل می‌شود.",
      },
      language: "ts",
      code: `constantCase("hello");
// "HELLO"`,
    },

    {
      title: {
        en: "Empty input",
        fa: "ورودی خالی",
      },
      description: {
        en: "If tokenization produces no words, an empty string is returned.",
        fa: "اگر tokenize هیچ کلمه‌ای تولید نکند، یک رشته خالی برگردانده می‌شود.",
      },
      language: "ts",
      code: `constantCase("");
// ""`,
    },

    {
      title: {
        en: "Existing separators",
        fa: "جداکننده‌های موجود",
      },
      description: {
        en: "The input is processed through tokenize before the resulting words are joined with underscores.",
        fa: "ورودی ابتدا توسط tokenize پردازش می‌شود و سپس کلمات حاصل با آندرلاین به هم متصل می‌شوند.",
      },
      language: "ts",
      code: `constantCase("hello-world");
// "HELLO_WORLD"`,
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
        en: "constantCase first tokenizes the input into words. Each word is converted entirely to uppercase, and the resulting words are joined using an underscore.",
        fa: "تابع constantCase ابتدا رشته ورودی را به کلمات تبدیل می‌کند. سپس هر کلمه کاملاً به حروف بزرگ تبدیل شده و کلمات حاصل با آندرلاین به یکدیگر متصل می‌شوند.",
      },
    },

    {
      id: "tokenization",
      title: {
        en: "Tokenization",
        fa: "توکن‌سازی",
      },
      content: {
        en: "Word extraction is delegated to the internal tokenize utility. Therefore, the exact word boundaries depend on tokenize.",
        fa: "استخراج کلمات توسط utility داخلی tokenize انجام می‌شود؛ بنابراین مرز دقیق کلمات به رفتار tokenize وابسته است.",
      },
    },

    {
      id: "uppercase",
      title: {
        en: "Uppercase conversion",
        fa: "تبدیل به حروف بزرگ",
      },
      content: {
        en: "Every token is converted to uppercase before the tokens are joined.",
        fa: "هر توکن قبل از اتصال به توکن‌های دیگر به حروف بزرگ تبدیل می‌شود.",
      },
    },

    {
      id: "separator",
      title: {
        en: "Separator",
        fa: "جداکننده",
      },
      content: {
        en: "The resulting tokens are joined with a single underscore character.",
        fa: "توکن‌های نهایی با یک کاراکتر آندرلاین (_) به هم متصل می‌شوند.",
      },
    },
  ],

  since: "1.38.0",
};
