import type { DocPage } from "../../types";

export const getQueryParamDoc: DocPage = {
  slug: "utilities/url/get-query-param",
  category: "url",
  title: {
    en: "getQueryParam",
    fa: "getQueryParam",
  },
  description: {
    en: "Retrieves a query parameter value from a URL or query string.",
    fa: "مقدار یک پارامتر query را از یک URL یا query string دریافت می‌کند.",
  },
  icon: "Search",
  parameters: [
    {
      name: "url",
      type: "string",
      required: true,
      description: {
        en: "The URL or query string containing the parameter.",
        fa: "URL یا query string شامل پارامتر موردنظر.",
      },
    },
    {
      name: "key",
      type: "string",
      required: true,
      description: {
        en: "The name of the query parameter to retrieve.",
        fa: "نام پارامتر query که باید دریافت شود.",
      },
    },
  ],
  returns: {
    type: "string | null",
    description: {
      en: "Returns the parameter value when the key exists; otherwise, returns null.",
      fa: "اگر کلید موردنظر وجود داشته باشد مقدار آن را برمی‌گرداند و در غیر این صورت null برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Retrieve a query parameter from a full URL.",
        fa: "دریافت یک پارامتر query از یک URL کامل.",
      },
      language: "ts",
      code: `import { getQueryParam } from "@cyref/js";

getQueryParam(
  "https://example.com/products?page=2&limit=10",
  "page",
);
// "2"

getQueryParam(
  "https://example.com/products?page=2&limit=10",
  "limit",
);
// "10"`,
    },
    {
      title: {
        en: "Missing parameter",
        fa: "پارامتر موجود نیست",
      },
      description: {
        en: "Returns null when the requested parameter does not exist.",
        fa: "اگر پارامتر موردنظر وجود نداشته باشد null برمی‌گرداند.",
      },
      language: "ts",
      code: `getQueryParam(
  "https://example.com/products?page=2",
  "sort",
);
// null`,
    },
    {
      title: {
        en: "Query string input",
        fa: "ورودی Query String",
      },
      description: {
        en: "The function can also receive a query string directly.",
        fa: "این تابع می‌تواند یک query string را نیز مستقیماً دریافت کند.",
      },
      language: "ts",
      code: `getQueryParam("page=2&sort=latest", "page");
// "2"

getQueryParam("page=2&sort=latest", "sort");
// "latest"`,
    },
    {
      title: {
        en: "Encoded values",
        fa: "مقادیر Encode شده",
      },
      description: {
        en: "Parameter values are decoded according to URLSearchParams behavior.",
        fa: "مقادیر پارامترها مطابق رفتار URLSearchParams decode می‌شوند.",
      },
      language: "ts",
      code: `getQueryParam(
  "https://example.com/search?q=hello+world",
  "q",
);
// "hello world"`,
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
        en: "The function searches for the first question mark in the input. If one exists, everything after it is treated as the query string. If no question mark exists, the entire input is treated as the query string.",
        fa: "تابع اولین علامت سؤال موجود در ورودی را پیدا می‌کند. اگر وجود داشته باشد، تمام متن بعد از آن به‌عنوان query string در نظر گرفته می‌شود. اگر علامت سؤال وجود نداشته باشد، کل ورودی به‌عنوان query string استفاده می‌شود.",
      },
    },
    {
      id: "empty-query",
      title: {
        en: "Empty Query",
        fa: "Query خالی",
      },
      content: {
        en: "If the extracted query string is empty, the function immediately returns null without creating a URLSearchParams instance.",
        fa: "اگر query string استخراج‌شده خالی باشد، تابع بلافاصله null برمی‌گرداند و نمونه‌ای از URLSearchParams ایجاد نمی‌کند.",
      },
    },
    {
      id: "search-params",
      title: {
        en: "URLSearchParams",
        fa: "URLSearchParams",
      },
      content: {
        en: "The query string is parsed using URLSearchParams, and the requested key is retrieved with get(). This means URL query decoding and parameter parsing follow the native URLSearchParams behavior.",
        fa: "query string با استفاده از URLSearchParams پردازش می‌شود و کلید موردنظر با get() دریافت می‌شود. بنابراین decode کردن و پردازش پارامترها مطابق رفتار native URLSearchParams انجام می‌شود.",
      },
    },
    {
      id: "return-value",
      title: {
        en: "Return Value",
        fa: "مقدار بازگشتی",
      },
      content: {
        en: "The function returns the parameter value as a string, or null when the requested key does not exist.",
        fa: "تابع مقدار پارامتر را به‌صورت string برمی‌گرداند و اگر کلید موردنظر وجود نداشته باشد null برمی‌گرداند.",
      },
    },
  ],
  since: "1.38.0",
};
