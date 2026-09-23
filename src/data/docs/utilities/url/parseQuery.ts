import type { DocPage } from "../../types";

export const parseQueryDoc: DocPage = {
  slug: "utilities/url/parse-query",
  category: "url",
  title: {
    en: "parseQuery",
    fa: "parseQuery",
  },
  description: {
    en: "Parses a URL query string into a record of string key-value pairs.",
    fa: "یک query string مربوط به URL را به یک Record شامل جفت‌های کلید و مقدار رشته‌ای تبدیل می‌کند.",
  },
  icon: "Brackets",
  parameters: [
    {
      name: "query",
      type: "string",
      required: true,
      description: {
        en: "The query string to parse. A leading question mark is optional.",
        fa: "query string موردنظر برای پردازش. وجود علامت سؤال در ابتدای آن اختیاری است.",
      },
    },
  ],
  returns: {
    type: "Record<string, string>",
    description: {
      en: "Returns an object containing the parsed query parameters as string key-value pairs.",
      fa: "یک شیء شامل پارامترهای پردازش‌شده query به‌صورت جفت‌های کلید و مقدار رشته‌ای برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Parse a query string into an object.",
        fa: "تبدیل یک query string به یک object.",
      },
      language: "ts",
      code: `import { parseQuery } from "@cyref/js";

parseQuery("page=2&limit=10");
// {
//   page: "2",
//   limit: "10"
// }`,
    },
    {
      title: {
        en: "With a question mark",
        fa: "همراه با علامت سؤال",
      },
      description: {
        en: "A leading question mark is automatically removed before parsing.",
        fa: "علامت سؤال ابتدایی قبل از پردازش به‌صورت خودکار حذف می‌شود.",
      },
      language: "ts",
      code: `parseQuery("?page=2&sort=latest");
// {
//   page: "2",
//   sort: "latest"
// }`,
    },
    {
      title: {
        en: "Encoded values",
        fa: "مقادیر Encode شده",
      },
      description: {
        en: "Values are decoded according to URLSearchParams behavior.",
        fa: "مقادیر مطابق رفتار URLSearchParams decode می‌شوند.",
      },
      language: "ts",
      code: `parseQuery("search=hello+world");
// {
//   search: "hello world"
// }`,
    },
    {
      title: {
        en: "Repeated keys",
        fa: "کلیدهای تکراری",
      },
      description: {
        en: "When a key appears multiple times, the last value assigned to that key remains in the returned object.",
        fa: "اگر یک کلید چند بار تکرار شود، آخرین مقداری که برای آن کلید قرار می‌گیرد در object نهایی باقی می‌ماند.",
      },
      language: "ts",
      code: `parseQuery("tag=javascript&tag=typescript");
// {
//   tag: "typescript"
// }`,
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
        en: "The function creates a URLSearchParams instance from the provided query. If the query starts with ?, that first character is removed before parsing.",
        fa: "تابع از query ارائه‌شده یک نمونه URLSearchParams ایجاد می‌کند. اگر query با ? شروع شود، این کاراکتر قبل از پردازش حذف می‌شود.",
      },
    },
    {
      id: "parsing",
      title: {
        en: "Parsing",
        fa: "پردازش Query",
      },
      content: {
        en: "Each entry from URLSearchParams is copied into a plain Record<string, string> object.",
        fa: "هر entry از URLSearchParams به یک object از نوع Record<string, string> منتقل می‌شود.",
      },
    },
    {
      id: "duplicate-keys",
      title: {
        en: "Duplicate Keys",
        fa: "کلیدهای تکراری",
      },
      content: {
        en: "If the same key appears multiple times, assigning each entry to the result object causes later values to overwrite earlier values.",
        fa: "اگر یک کلید چند بار وجود داشته باشد، اختصاص دادن هر entry به object باعث می‌شود مقادیر بعدی، مقادیر قبلی همان کلید را جایگزین کنند.",
      },
    },
    {
      id: "encoding",
      title: {
        en: "URL Encoding",
        fa: "کدگذاری URL",
      },
      content: {
        en: "Query parsing and decoding follow the native behavior of URLSearchParams.",
        fa: "پردازش و decode کردن query مطابق رفتار native URLSearchParams انجام می‌شود.",
      },
    },
    {
      id: "empty-query",
      title: {
        en: "Empty Query",
        fa: "Query خالی",
      },
      content: {
        en: "An empty query produces an empty object.",
        fa: "یک query خالی یک object خالی برمی‌گرداند.",
      },
    },
  ],
  since: "1.38.0",
};
