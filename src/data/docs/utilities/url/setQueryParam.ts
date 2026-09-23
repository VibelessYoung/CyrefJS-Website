import type { DocPage } from "../../types";

export const setQueryParamDoc: DocPage = {
  slug: "utilities/url/set-query-param",
  category: "url",
  title: {
    en: "setQueryParam",
    fa: "setQueryParam",
  },
  description: {
    en: "Sets or replaces a query parameter in a URL or query string while preserving the hash fragment.",
    fa: "یک پارامتر query را در URL یا query string تنظیم یا جایگزین می‌کند و بخش hash را حفظ می‌کند.",
  },
  icon: "Link",
  parameters: [
    {
      name: "url",
      type: "string",
      required: true,
      description: {
        en: "The URL, query string, or URL-like string to modify.",
        fa: "URL، query string یا رشته‌ای شبیه URL که باید تغییر کند.",
      },
    },
    {
      name: "key",
      type: "string",
      required: true,
      description: {
        en: "The name of the query parameter to set.",
        fa: "نام پارامتر query که باید تنظیم شود.",
      },
    },
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string value to assign to the query parameter.",
        fa: "مقدار رشته‌ای که باید به پارامتر query اختصاص داده شود.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "Returns the modified URL or query string with the specified parameter set and the hash fragment preserved.",
      fa: "URL یا query string تغییر‌یافته را با تنظیم پارامتر مشخص‌شده و حفظ بخش hash برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Add a parameter",
        fa: "اضافه کردن پارامتر",
      },
      description: {
        en: "Add a new query parameter to a URL.",
        fa: "اضافه کردن یک پارامتر query جدید به URL.",
      },
      language: "ts",
      code: `import { setQueryParam } from "@cyref/js";

setQueryParam(
  "https://example.com/products",
  "page",
  "2",
);
// "https://example.com/products?page=2"`,
    },
    {
      title: {
        en: "Replace a parameter",
        fa: "جایگزین کردن پارامتر",
      },
      description: {
        en: "Replace the value of an existing query parameter.",
        fa: "جایگزین کردن مقدار یک پارامتر query موجود.",
      },
      language: "ts",
      code: `setQueryParam(
  "https://example.com/products?page=1&sort=latest",
  "page",
  "2",
);
// "https://example.com/products?page=2&sort=latest"`,
    },
    {
      title: {
        en: "Preserve hash",
        fa: "حفظ Hash",
      },
      description: {
        en: "The hash fragment remains unchanged when setting a query parameter.",
        fa: "هنگام تنظیم پارامتر query، بخش hash بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `setQueryParam(
  "https://example.com/products?page=1#details",
  "page",
  "2",
);
// "https://example.com/products?page=2#details"`,
    },
    {
      title: {
        en: "Query string input",
        fa: "ورودی Query String",
      },
      description: {
        en: "A query string can be passed directly without a URL path.",
        fa: "می‌توان query string را مستقیماً و بدون مسیر URL ارسال کرد.",
      },
      language: "ts",
      code: `setQueryParam(
  "?page=1&sort=latest",
  "page",
  "2",
);
// "?page=2&sort=latest"`,
    },
    {
      title: {
        en: "URL encoding",
        fa: "کدگذاری URL",
      },
      description: {
        en: "The parameter value is serialized according to URLSearchParams behavior.",
        fa: "مقدار پارامتر مطابق رفتار URLSearchParams serialize می‌شود.",
      },
      language: "ts",
      code: `setQueryParam(
  "https://example.com/search",
  "q",
  "hello world",
);
// "https://example.com/search?q=hello+world"`,
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
        en: "The function separates the hash fragment, parses the query with URLSearchParams, sets the specified key to the provided value, and then reconstructs the result.",
        fa: "تابع ابتدا بخش hash را جدا می‌کند، query را با URLSearchParams پردازش می‌کند، کلید مشخص‌شده را با مقدار ارائه‌شده تنظیم می‌کند و سپس نتیجه را دوباره می‌سازد.",
      },
    },
    {
      id: "set",
      title: {
        en: "Set or Replace",
        fa: "تنظیم یا جایگزینی",
      },
      content: {
        en: "If the specified key already exists, URLSearchParams.set() replaces its value. If the key does not exist, a new parameter is added.",
        fa: "اگر کلید مشخص‌شده از قبل وجود داشته باشد، URLSearchParams.set() مقدار آن را جایگزین می‌کند. اگر وجود نداشته باشد، یک پارامتر جدید اضافه می‌شود.",
      },
    },
    {
      id: "hash",
      title: {
        en: "Hash Preservation",
        fa: "حفظ Hash",
      },
      content: {
        en: "The hash fragment is extracted before query processing and appended to the final result unchanged.",
        fa: "بخش hash قبل از پردازش query جدا می‌شود و بدون تغییر به نتیجه نهایی اضافه می‌شود.",
      },
    },
    {
      id: "query-string",
      title: {
        en: "URL and Query String Support",
        fa: "پشتیبانی از URL و Query String",
      },
      content: {
        en: "The function supports full URL-like strings as well as query strings. When there is no question mark and the input does not contain a slash, the input is treated directly as query data.",
        fa: "تابع هم رشته‌های شبیه URL و هم query stringها را پشتیبانی می‌کند. اگر علامت سؤال وجود نداشته باشد و ورودی شامل slash نباشد، ورودی مستقیماً به‌عنوان query در نظر گرفته می‌شود.",
      },
    },
    {
      id: "encoding",
      title: {
        en: "URL Encoding",
        fa: "کدگذاری URL",
      },
      content: {
        en: "Query serialization follows the native behavior of URLSearchParams, including encoding special characters in keys and values.",
        fa: "serialize کردن query مطابق رفتار native URLSearchParams انجام می‌شود و شامل encode کردن کاراکترهای خاص در کلیدها و مقادیر است.",
      },
    },
  ],
  since: "1.38.0",
};
