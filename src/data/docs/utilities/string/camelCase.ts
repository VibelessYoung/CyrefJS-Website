import type { DocPage } from "../../types";

export const camelCaseDoc: DocPage = {
  slug: "utilities/string/camel-case",
  category: "string",
  title: {
    en: "camelCase",
    fa: "camelCase",
  },
  description: {
    en: "Converts a string into camelCase by tokenizing its words, lowercasing the first word, and capitalizing the first letter of each remaining word.",
    fa: "یک رشته را با تبدیل کلمات آن به camelCase تبدیل می‌کند؛ کلمه اول را کوچک و حرف اول کلمات بعدی را بزرگ می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert to camelCase.",
        fa: "رشته‌ای که باید به camelCase تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The input string converted to camelCase.",
      fa: "رشته ورودی که به فرمت camelCase تبدیل شده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Convert a space-separated phrase to camelCase.",
        fa: "تبدیل یک عبارت جداشده با فاصله به camelCase.",
      },
      language: "ts",
      code: `import { camelCase } from "@cyref/js";

camelCase("hello world");
// "helloWorld"`,
    },

    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },
      description: {
        en: "Each word after the first one starts with an uppercase letter.",
        fa: "هر کلمه بعد از کلمه اول با حرف بزرگ شروع می‌شود.",
      },
      language: "ts",
      code: `camelCase("hello beautiful world");
// "helloBeautifulWorld"`,
    },

    {
      title: {
        en: "Uppercase input",
        fa: "ورودی با حروف بزرگ",
      },
      description: {
        en: "Words are normalized so the first word is lowercase and subsequent words use an uppercase first letter.",
        fa: "کلمات نرمال می‌شوند؛ کلمه اول کوچک و کلمات بعدی با حرف اول بزرگ برگردانده می‌شوند.",
      },
      language: "ts",
      code: `camelCase("HELLO WORLD");
// "helloWorld"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },
      description: {
        en: "A single token is converted to lowercase.",
        fa: "یک توکن به حروف کوچک تبدیل می‌شود.",
      },
      language: "ts",
      code: `camelCase("HELLO");
// "hello"`,
    },

    {
      title: {
        en: "Empty input",
        fa: "ورودی خالی",
      },
      description: {
        en: "Returns an empty string when tokenization produces no words.",
        fa: "اگر هیچ کلمه‌ای از رشته استخراج نشود، یک رشته خالی برمی‌گرداند.",
      },
      language: "ts",
      code: `camelCase("");
// ""`,
    },

    {
      title: {
        en: "Mixed case",
        fa: "حروف ترکیبی",
      },
      description: {
        en: "The output normalizes the casing of every token.",
        fa: "حروف تمام توکن‌ها در خروجی نرمال می‌شوند.",
      },
      language: "ts",
      code: `camelCase("hello WoRLD TeST");
// "helloWorldTest"`,
    },

    {
      title: {
        en: "Already camelCase",
        fa: "رشته‌ای که از قبل camelCase است",
      },
      description: {
        en: "The string is tokenized and reconstructed using the utility's casing rules.",
        fa: "رشته ابتدا به توکن‌ها تبدیل و سپس طبق قوانین casing این utility بازسازی می‌شود.",
      },
      language: "ts",
      code: `camelCase("helloWorld");
// "helloWorld"`,
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
        en: "camelCase first tokenizes the input into words. The first word is converted entirely to lowercase. Every remaining word is converted to lowercase and then its first character is uppercased. The resulting words are joined without separators.",
        fa: "تابع camelCase ابتدا رشته ورودی را به کلمات تبدیل می‌کند. کلمه اول کاملاً به حروف کوچک تبدیل می‌شود. سپس هر کلمه بعدی به حروف کوچک تبدیل شده و حرف اول آن به حروف بزرگ تغییر می‌کند. در نهایت تمام کلمات بدون جداکننده به هم متصل می‌شوند.",
      },
    },

    {
      id: "tokenization",
      title: {
        en: "Tokenization",
        fa: "توکن‌سازی",
      },
      content: {
        en: "The function delegates word extraction to the internal tokenize utility. The exact boundaries of words therefore depend on tokenize.",
        fa: "استخراج کلمات توسط utility داخلی tokenize انجام می‌شود؛ بنابراین نحوه تشخیص مرز کلمات به رفتار tokenize وابسته است.",
      },
    },

    {
      id: "casing",
      title: {
        en: "Casing rules",
        fa: "قوانین حروف",
      },
      content: {
        en: "The first token is fully lowercased. For every following token, the entire token is first lowercased and then its first character is uppercased.",
        fa: "توکن اول کاملاً lowercase می‌شود. برای هر توکن بعدی نیز ابتدا کل توکن lowercase شده و سپس حرف اول آن uppercase می‌شود.",
      },
    },

    {
      id: "empty-input",
      title: {
        en: "Empty result",
        fa: "نتیجه خالی",
      },
      content: {
        en: "If tokenize returns no words, camelCase returns an empty string.",
        fa: "اگر tokenize هیچ کلمه‌ای برنگرداند، camelCase یک رشته خالی برمی‌گرداند.",
      },
    },
  ],

  since: "1.38.0",
};
