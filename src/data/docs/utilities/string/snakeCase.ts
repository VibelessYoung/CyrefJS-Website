import type { DocPage } from "../../types";

export const snakeCaseDoc: DocPage = {
  slug: "utilities/string/snake-case",

  category: "string",

  title: {
    en: "snakeCase",
    fa: "snakeCase",
  },

  description: {
    en: "Converts a string into snake_case by tokenizing its words, converting them to lowercase, and joining them with underscores.",
    fa: "یک رشته را با تقسیم آن به کلمات، تبدیل کلمات به حروف کوچک و اتصال آن‌ها با آندرلاین به فرمت snake_case تبدیل می‌کند.",
  },

  icon: "CaseSensitive",

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert into snake_case.",
        fa: "رشته‌ای که باید به فرمت snake_case تبدیل شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "A snake_case string containing lowercase tokens joined with underscores.",
      fa: "یک رشته با فرمت snake_case که از توکن‌های حروف کوچک تشکیل شده و با آندرلاین به یکدیگر متصل شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Convert a phrase into snake_case.",
        fa: "تبدیل یک عبارت به فرمت snake_case.",
      },

      language: "ts",

      code: `snakeCase("Hello World");

// "hello_world"`,
    },

    {
      title: {
        en: "Lowercase conversion",
        fa: "تبدیل به حروف کوچک",
      },

      description: {
        en: "All tokens are converted to lowercase before being joined.",
        fa: "تمام توکن‌ها قبل از اتصال به حروف کوچک تبدیل می‌شوند.",
      },

      language: "ts",

      code: `snakeCase("Hello WORLD");

// "hello_world"`,
    },

    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },

      description: {
        en: "Multiple tokens are joined together using underscores.",
        fa: "چندین توکن با استفاده از آندرلاین به یکدیگر متصل می‌شوند.",
      },

      language: "ts",

      code: `snakeCase("User Profile Card");

// "user_profile_card"`,
    },

    {
      title: {
        en: "CamelCase input",
        fa: "ورودی CamelCase",
      },

      description: {
        en: "Tokenized input can be converted into snake_case when the tokenizer separates the individual words.",
        fa: "اگر tokenizer کلمات تشکیل‌دهنده را از یکدیگر جدا کند، ورودی CamelCase نیز می‌تواند به snake_case تبدیل شود.",
      },

      language: "ts",

      code: `snakeCase("userProfile");

// "user_profile"`,
    },

    {
      title: {
        en: "Single word",
        fa: "یک کلمه",
      },

      description: {
        en: "A single token is simply converted to lowercase without adding an underscore.",
        fa: "یک توکن تنها فقط به حروف کوچک تبدیل می‌شود و آندرلاین اضافی به آن اضافه نمی‌شود.",
      },

      language: "ts",

      code: `snakeCase("HELLO");

// "hello"`,
    },
  ],

  sections: [
    {
      id: "tokenization",

      title: {
        en: "Tokenization",
        fa: "توکن‌سازی",
      },

      content: {
        en: "The input is first passed to the internal tokenize function. This step is responsible for splitting the input into individual word tokens.",
        fa: "ابتدا ورودی به تابع داخلی tokenize ارسال می‌شود. این مرحله مسئول تقسیم ورودی به توکن‌های جداگانه کلمات است.",
      },
    },

    {
      id: "lowercase",

      title: {
        en: "Lowercase conversion",
        fa: "تبدیل به حروف کوچک",
      },

      content: {
        en: "Each token is converted to lowercase using JavaScript's toLowerCase method.",
        fa: "هر توکن با استفاده از متد toLowerCase جاوااسکریپت به حروف کوچک تبدیل می‌شود.",
      },
    },

    {
      id: "joining",

      title: {
        en: "Joining tokens",
        fa: "اتصال توکن‌ها",
      },

      content: {
        en: "The lowercase tokens are joined into a single string using an underscore as the separator.",
        fa: "توکن‌های حروف کوچک با استفاده از آندرلاین به عنوان جداکننده، به یک رشته واحد متصل می‌شوند.",
      },
    },

    {
      id: "pipeline",

      title: {
        en: "Transformation pipeline",
        fa: "فرآیند تبدیل",
      },

      content: {
        en: "The function follows a simple transformation pipeline: tokenize the input, convert each token to lowercase, and join the tokens with underscores.",
        fa: "این تابع یک فرآیند تبدیل ساده را دنبال می‌کند: ابتدا ورودی را tokenize می‌کند، سپس هر توکن را به حروف کوچک تبدیل می‌کند و در نهایت توکن‌ها را با آندرلاین به هم متصل می‌کند.",
      },
    },
  ],

  since: "1.38.0",
};
