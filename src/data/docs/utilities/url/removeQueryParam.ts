import type { DocPage } from "../../types";

export const removeQueryParamDoc: DocPage = {
  slug: "utilities/url/remove-query-param",
  category: "url",
  title: {
    en: "removeQueryParam",
    fa: "removeQueryParam",
  },
  description: {
    en: "Removes a specific query parameter from a URL or query string while preserving the hash fragment.",
    fa: "یک پارامتر query مشخص را از URL یا query string حذف می‌کند و بخش hash را حفظ می‌کند.",
  },
  icon: "Link2Off",
  parameters: [
    {
      name: "url",
      type: "string",
      required: true,
      description: {
        en: "The URL, query string, or URL-like string from which the parameter should be removed.",
        fa: "URL، query string یا رشته‌ای شبیه URL که باید پارامتر موردنظر از آن حذف شود.",
      },
    },
    {
      name: "key",
      type: "string",
      required: true,
      description: {
        en: "The query parameter name to remove.",
        fa: "نام پارامتر query که باید حذف شود.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "Returns the URL or query string with the specified parameter removed and the hash fragment preserved.",
      fa: "URL یا query string را با حذف پارامتر مشخص‌شده و حفظ بخش hash برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Remove a parameter from a URL",
        fa: "حذف پارامتر از URL",
      },
      description: {
        en: "Remove a query parameter while keeping the rest of the URL unchanged.",
        fa: "یک پارامتر query را حذف می‌کند و باقی URL را حفظ می‌کند.",
      },
      language: "ts",
      code: `import { removeQueryParam } from "@cyref/js";

removeQueryParam(
  "https://example.com/products?page=2&sort=latest",
  "page",
);
// "https://example.com/products?sort=latest"`,
    },
    {
      title: {
        en: "Remove the only parameter",
        fa: "حذف تنها پارامتر",
      },
      description: {
        en: "When the removed parameter is the only query parameter, the question mark is removed as well.",
        fa: "اگر پارامتر حذف‌شده تنها پارامتر query باشد، علامت سؤال نیز حذف می‌شود.",
      },
      language: "ts",
      code: `removeQueryParam(
  "https://example.com/products?page=2",
  "page",
);
// "https://example.com/products"`,
    },
    {
      title: {
        en: "Preserve hash",
        fa: "حفظ Hash",
      },
      description: {
        en: "The hash fragment is preserved when removing a query parameter.",
        fa: "هنگام حذف پارامتر query، بخش hash حفظ می‌شود.",
      },
      language: "ts",
      code: `removeQueryParam(
  "https://example.com/products?page=2#details",
  "page",
);
// "https://example.com/products#details"`,
    },
    {
      title: {
        en: "Query string input",
        fa: "ورودی Query String",
      },
      description: {
        en: "A query string without a URL path can also be processed.",
        fa: "یک query string بدون مسیر URL نیز می‌تواند پردازش شود.",
      },
      language: "ts",
      code: `removeQueryParam("?page=2&sort=latest", "page");
// "?sort=latest"

removeQueryParam("?page=2", "page");
// ""`,
    },
    {
      title: {
        en: "Repeated parameters",
        fa: "پارامترهای تکراری",
      },
      description: {
        en: "All occurrences of the specified key are removed because URLSearchParams.delete() removes every value associated with that key.",
        fa: "تمام نمونه‌های کلید مشخص‌شده حذف می‌شوند، زیرا URLSearchParams.delete() تمام مقادیر مرتبط با آن کلید را حذف می‌کند.",
      },
      language: "ts",
      code: `removeQueryParam(
  "https://example.com?tag=js&tag=ts&sort=latest",
  "tag",
);
// "https://example.com?sort=latest"`,
    },
  ],
  sections: [
    {
      id: "hash",
      title: {
        en: "Hash Preservation",
        fa: "حفظ Hash",
      },
      content: {
        en: "The function separates the hash fragment before processing the query and appends it to the returned result unchanged.",
        fa: "تابع ابتدا بخش hash را از URL جدا می‌کند، query را پردازش می‌کند و سپس همان hash را به نتیجه اضافه می‌کند.",
      },
    },
    {
      id: "query",
      title: {
        en: "Query Processing",
        fa: "پردازش Query",
      },
      content: {
        en: "The query portion is parsed with URLSearchParams and the specified key is removed using delete().",
        fa: "بخش query با URLSearchParams پردازش می‌شود و کلید مشخص‌شده با استفاده از delete() حذف می‌شود.",
      },
    },
    {
      id: "url-and-query",
      title: {
        en: "URL and Query String Support",
        fa: "پشتیبانی از URL و Query String",
      },
      content: {
        en: "The function handles full URL-like strings as well as query strings. When there is no question mark and the input does not contain a slash, the input is treated directly as query data.",
        fa: "تابع هم رشته‌های شبیه URL و هم query stringها را پردازش می‌کند. اگر علامت سؤال وجود نداشته باشد و ورودی شامل slash نباشد، ورودی مستقیماً به‌عنوان query در نظر گرفته می‌شود.",
      },
    },
    {
      id: "empty-query",
      title: {
        en: "Empty Query",
        fa: "Query خالی",
      },
      content: {
        en: "When removing the final query parameter, the question mark is removed instead of leaving an empty query string. The hash, if present, remains.",
        fa: "هنگام حذف آخرین پارامتر query، علامت سؤال حذف می‌شود و query خالی باقی نمی‌ماند. در صورت وجود، hash همچنان حفظ می‌شود.",
      },
    },
    {
      id: "duplicate-keys",
      title: {
        en: "Duplicate Keys",
        fa: "کلیدهای تکراری",
      },
      content: {
        en: "All values associated with the specified key are removed by URLSearchParams.delete().",
        fa: "تمام مقادیر مرتبط با کلید مشخص‌شده توسط URLSearchParams.delete() حذف می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
