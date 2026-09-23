import type { DocPage } from "../../types";

export const pascalCaseDoc: DocPage = {
  slug: "utilities/string/pascal-case",
  category: "string",
  title: {
    en: "pascalCase",
    fa: "pascalCase",
  },
  description: {
    en: "Converts a string into PascalCase by tokenizing it, capitalizing the first character of each word, lowercasing the remaining characters, and joining the words without separators.",
    fa: "یک رشته را با تبدیل کلمات آن به PascalCase تبدیل می‌کند؛ حرف اول هر کلمه را بزرگ، باقی حروف را کوچک کرده و کلمات را بدون جداکننده به هم متصل می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert to PascalCase.",
        fa: "رشته‌ای که باید به PascalCase تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The tokenized input converted to PascalCase.",
      fa: "توکن‌های رشته ورودی که به PascalCase تبدیل شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Convert a space-separated phrase to PascalCase.",
        fa: "تبدیل یک عبارت جداشده با فاصله به PascalCase.",
      },
      language: "ts",
      code: `import { pascalCase } from "@cyref/js";

pascalCase("hello world");
// "HelloWorld"`,
    },

    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },
      description: {
        en: "Each word starts with an uppercase character and the words are joined together.",
        fa: "هر کلمه با یک حرف بزرگ شروع شده و کلمات بدون جداکننده به هم متصل می‌شوند.",
      },
      language: "ts",
      code: `pascalCase("hello beautiful world");
// "HelloBeautifulWorld"`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "Each token is normalized to an uppercase first character followed by lowercase characters.",
        fa: "هر توکن به یک حرف اول بزرگ و حروف باقی‌مانده کوچک نرمال می‌شود.",
      },
      language: "ts",
      code: `pascalCase("hello WoRLD TeST");
// "HelloWorldTest"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },
      description: {
        en: "A single token is converted to PascalCase.",
        fa: "یک توکن به PascalCase تبدیل می‌شود.",
      },
      language: "ts",
      code: `pascalCase("hELLO");
// "Hello"`,
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
      code: `pascalCase("");
// ""`,
    },

    {
      title: {
        en: "Existing separators",
        fa: "جداکننده‌های موجود",
      },
      description: {
        en: "The input is tokenized first, so the resulting words are joined without separators.",
        fa: "ورودی ابتدا tokenize می‌شود و سپس کلمات حاصل بدون جداکننده به هم متصل می‌شوند.",
      },
      language: "ts",
      code: `pascalCase("hello-world");
// "HelloWorld"`,
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
        en: "pascalCase first tokenizes the input into words. For each word, the first character is converted to uppercase and the remaining characters are converted to lowercase. The resulting words are then joined without a separator.",
        fa: "تابع pascalCase ابتدا رشته ورودی را به کلمات تبدیل می‌کند. برای هر کلمه، اولین کاراکتر به حروف بزرگ و باقی کاراکترها به حروف کوچک تبدیل می‌شوند. سپس کلمات حاصل بدون جداکننده به هم متصل می‌شوند.",
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
      id: "casing",
      title: {
        en: "Casing rules",
        fa: "قوانین حروف",
      },
      content: {
        en: "Every word starts with an uppercase character. All characters after the first one are converted to lowercase.",
        fa: "هر کلمه با یک کاراکتر uppercase شروع می‌شود و تمام کاراکترهای بعد از آن به lowercase تبدیل می‌شوند.",
      },
    },

    {
      id: "separator",
      title: {
        en: "No separator",
        fa: "بدون جداکننده",
      },
      content: {
        en: "After each token is transformed, all tokens are joined directly with no separator.",
        fa: "پس از تبدیل هر توکن، تمام توکن‌ها مستقیماً و بدون هیچ جداکننده‌ای به هم متصل می‌شوند.",
      },
    },
  ],

  since: "1.38.0",
};
