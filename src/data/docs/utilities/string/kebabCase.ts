import type { DocPage } from "../../types";

export const kebabCaseDoc: DocPage = {
  slug: "utilities/string/kebab-case",
  category: "string",
  title: {
    en: "kebabCase",
    fa: "kebabCase",
  },
  description: {
    en: "Converts a string into kebab-case by tokenizing it, converting every word to lowercase, and joining the words with hyphens.",
    fa: "یک رشته را با تبدیل کلمات آن به حروف کوچک و اتصال آن‌ها با خط تیره به kebab-case تبدیل می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert to kebab-case.",
        fa: "رشته‌ای که باید به kebab-case تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The tokenized input converted to lowercase and joined with hyphens.",
      fa: "توکن‌های رشته ورودی که به حروف کوچک تبدیل شده و با خط تیره به هم متصل شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Convert a space-separated phrase to kebab-case.",
        fa: "تبدیل یک عبارت جداشده با فاصله به kebab-case.",
      },
      language: "ts",
      code: `import { kebabCase } from "@cyref/js";

kebabCase("hello world");
// "hello-world"`,
    },

    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },
      description: {
        en: "Each token is lowercased and separated with a hyphen.",
        fa: "هر توکن lowercase شده و با خط تیره از توکن بعدی جدا می‌شود.",
      },
      language: "ts",
      code: `kebabCase("Hello Beautiful World");
// "hello-beautiful-world"`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "The casing of every token is normalized to lowercase.",
        fa: "حروف تمام توکن‌ها به lowercase نرمال می‌شوند.",
      },
      language: "ts",
      code: `kebabCase("hello WoRLD TeST");
// "hello-world-test"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },
      description: {
        en: "A single token is simply converted to lowercase.",
        fa: "یک توکن به سادگی به حروف کوچک تبدیل می‌شود.",
      },
      language: "ts",
      code: `kebabCase("HELLO");
// "hello"`,
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
      code: `kebabCase("");
// ""`,
    },

    {
      title: {
        en: "Existing separators",
        fa: "جداکننده‌های موجود",
      },
      description: {
        en: "The input is tokenized first, then the resulting words are joined with hyphens.",
        fa: "ورودی ابتدا tokenize می‌شود و سپس کلمات حاصل با خط تیره به هم متصل می‌شوند.",
      },
      language: "ts",
      code: `kebabCase("hello-world");
// "hello-world"`,
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
        en: "kebabCase first tokenizes the input into words. Each word is converted to lowercase, and the resulting words are joined using a hyphen.",
        fa: "تابع kebabCase ابتدا رشته ورودی را به کلمات تبدیل می‌کند. سپس هر کلمه به حروف کوچک تبدیل شده و کلمات حاصل با خط تیره به یکدیگر متصل می‌شوند.",
      },
    },

    {
      id: "tokenization",
      title: {
        en: "Tokenization",
        fa: "توکن‌سازی",
      },
      content: {
        en: "Word extraction is delegated to the internal tokenize utility. The exact word boundaries therefore depend on tokenize.",
        fa: "استخراج کلمات توسط utility داخلی tokenize انجام می‌شود؛ بنابراین مرز دقیق کلمات به رفتار tokenize وابسته است.",
      },
    },

    {
      id: "lowercase",
      title: {
        en: "Lowercase conversion",
        fa: "تبدیل به حروف کوچک",
      },
      content: {
        en: "Every token is converted entirely to lowercase before the tokens are joined.",
        fa: "هر توکن قبل از اتصال به توکن‌های دیگر کاملاً به حروف کوچک تبدیل می‌شود.",
      },
    },

    {
      id: "separator",
      title: {
        en: "Separator",
        fa: "جداکننده",
      },
      content: {
        en: "The resulting tokens are joined with a single hyphen character.",
        fa: "توکن‌های نهایی با یک کاراکتر خط تیره (-) به هم متصل می‌شوند.",
      },
    },
  ],

  since: "1.38.0",
};
