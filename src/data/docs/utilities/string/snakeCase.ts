import type { DocPage } from "../../types";

export const snakeCaseDoc: DocPage = {
  slug: "utilities/string/snake-case",
  category: "string",
  title: {
    en: "snakeCase",
    fa: "snakeCase",
  },
  description: {
    en: "Converts a string into snake_case by tokenizing it, lowercasing each word, and joining the words with underscores.",
    fa: "یک رشته را با تبدیل کلمات آن به حروف کوچک و اتصال آن‌ها با آندرلاین به قالب snake_case تبدیل می‌کند.",
  },
  icon: "CaseSensitive",
  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert to snake_case.",
        fa: "رشته‌ای که باید به قالب snake_case تبدیل شود.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "A snake_case string created by lowercasing the tokenized words and joining them with underscores.",
      fa: "یک رشته با فرمت snake_case که از تبدیل کلمات tokenize‌شده به حروف کوچک و اتصال آن‌ها با آندرلاین ساخته می‌شود.",
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
        fa: "تبدیل یک عبارت به snake_case.",
      },
      language: "ts",
      code: `snakeCase("Hello World");
// "hello_world"`,
    },
    {
      title: {
        en: "Multiple words",
        fa: "چند کلمه",
      },
      description: {
        en: "Each token is lowercased and joined with an underscore.",
        fa: "هر token به حروف کوچک تبدیل شده و با آندرلاین به token بعدی متصل می‌شود.",
      },
      language: "ts",
      code: `snakeCase("User Profile Settings");
// "user_profile_settings"`,
    },
    {
      title: {
        en: "Mixed casing",
        fa: "ترکیب حروف بزرگ و کوچک",
      },
      description: {
        en: "All tokenized words are converted to lowercase.",
        fa: "تمام کلمات tokenize‌شده به حروف کوچک تبدیل می‌شوند.",
      },
      language: "ts",
      code: `snakeCase("HelloWorld");
// "hello_world"`,
    },
    {
      title: {
        en: "Empty input",
        fa: "ورودی خالی",
      },
      description: {
        en: "An input that produces no tokens returns an empty string.",
        fa: "اگر ورودی هیچ tokenای تولید نکند، یک رشته خالی برگردانده می‌شود.",
      },
      language: "ts",
      code: `snakeCase("");
// ""`,
    },
    {
      title: {
        en: "Underscore-separated output",
        fa: "خروجی با آندرلاین",
      },
      description: {
        en: "The resulting tokens are always joined using an underscore.",
        fa: "tokenهای نهایی همیشه با آندرلاین به یکدیگر متصل می‌شوند.",
      },
      language: "ts",
      code: `snakeCase("first second third");
// "first_second_third"`,
    },
  ],
  sections: [
    {
      id: "tokenization",
      title: {
        en: "Tokenization",
        fa: "Tokenization",
      },
      content: {
        en: "The input is first passed to the internal tokenize function. The exact token boundaries therefore depend on the behavior of tokenize.",
        fa: "ابتدا ورودی به تابع داخلی tokenize داده می‌شود. بنابراین مرز دقیق tokenها به رفتار تابع tokenize بستگی دارد.",
      },
    },
    {
      id: "lowercase",
      title: {
        en: "Lowercase conversion",
        fa: "تبدیل به حروف کوچک",
      },
      content: {
        en: "Each token returned by tokenize is converted to lowercase using toLowerCase().",
        fa: "هر token که توسط tokenize برگردانده می‌شود، با استفاده از toLowerCase() به حروف کوچک تبدیل می‌شود.",
      },
    },
    {
      id: "joining",
      title: {
        en: "Joining tokens",
        fa: "اتصال tokenها",
      },
      content: {
        en: "The lowercase tokens are joined together using an underscore (_) as the separator.",
        fa: "tokenهای تبدیل‌شده به حروف کوچک با استفاده از آندرلاین (_) به یکدیگر متصل می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
