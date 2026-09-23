import type { DocPage } from "../../types";

export const buildQueryDoc: DocPage = {
  slug: "utilities/url/build-query",
  category: "url",
  title: {
    en: "buildQuery",
    fa: "buildQuery",
  },
  description: {
    en: "Builds a URL query string from a record of string key-value pairs.",
    fa: "یک query string برای URL از یک Record شامل جفت‌های کلید و مقدار رشته‌ای می‌سازد.",
  },
  icon: "Link",
  parameters: [
    {
      name: "params",
      type: "Record<string, string>",
      required: true,
      description: {
        en: "An object containing string keys and string values to convert into URL query parameters.",
        fa: "شیئی شامل کلیدها و مقادیر رشته‌ای که باید به پارامترهای query در URL تبدیل شوند.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "Returns the encoded query string without a leading question mark.",
      fa: "رشته‌ی query کدگذاری‌شده را بدون علامت سؤال ابتدایی برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Build a query string from key-value pairs.",
        fa: "ساخت یک query string از جفت‌های کلید و مقدار.",
      },
      language: "ts",
      code: `import { buildQuery } from "@cyref/js";

buildQuery({
  page: "2",
  limit: "10",
});
// "page=2&limit=10"`,
    },
    {
      title: {
        en: "URL encoding",
        fa: "کدگذاری URL",
      },
      description: {
        en: "Special characters and spaces are encoded according to URLSearchParams.",
        fa: "کاراکترهای خاص و فاصله‌ها مطابق رفتار URLSearchParams کدگذاری می‌شوند.",
      },
      language: "ts",
      code: `buildQuery({
  search: "hello world",
  category: "web development",
});
// "search=hello+world&category=web+development"`,
    },
    {
      title: {
        en: "Using the result in a URL",
        fa: "استفاده از نتیجه در URL",
      },
      description: {
        en: "The returned query string can be appended to a URL using a question mark.",
        fa: "می‌توان query string برگشتی را با استفاده از علامت سؤال به URL اضافه کرد.",
      },
      language: "ts",
      code: `const query = buildQuery({
  page: "1",
  sort: "latest",
});

const url = \`https://example.com/posts?\${query}\`;

// "https://example.com/posts?page=1&sort=latest"`,
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
        en: "The function creates a URLSearchParams instance from the provided record and returns its serialized string representation using toString().",
        fa: "این تابع از Record ارائه‌شده یک نمونه URLSearchParams می‌سازد و سپس با استفاده از toString() نسخه‌ی رشته‌ای و serialize‌شده‌ی آن را برمی‌گرداند.",
      },
    },
    {
      id: "encoding",
      title: {
        en: "URL Encoding",
        fa: "کدگذاری URL",
      },
      content: {
        en: "Parameter names and values are serialized according to the behavior of URLSearchParams, including URL encoding of special characters.",
        fa: "نام پارامترها و مقادیر مطابق رفتار URLSearchParams serialize می‌شوند و کاراکترهای خاص نیز طبق قوانین آن URL encode می‌شوند.",
      },
    },
    {
      id: "format",
      title: {
        en: "Query String Format",
        fa: "فرمت Query String",
      },
      content: {
        en: "The returned string contains key-value pairs separated by ampersands and does not include a leading question mark.",
        fa: "رشته‌ی برگشتی شامل جفت‌های کلید و مقدار است که با & از هم جدا می‌شوند و علامت سؤال ابتدایی ندارد.",
      },
    },
  ],
  since: "1.38.0",
};
