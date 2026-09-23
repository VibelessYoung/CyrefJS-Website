import type { DocPage } from "../../types";

export const isURLDoc: DocPage = {
  slug: "utilities/validation/is-url",
  category: "validation",
  title: {
    en: "isURL",
    fa: "isURL",
  },
  description: {
    en: "Checks whether a value is a valid URL using the native URL constructor and allows only HTTP and HTTPS protocols.",
    fa: "بررسی می‌کند که آیا یک مقدار یک URL معتبر است و فقط پروتکل‌های HTTP و HTTPS را قبول می‌کند.",
  },
  icon: "Link",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to validate as a URL.",
        fa: "مقداری که باید به‌عنوان URL اعتبارسنجی شود.",
      },
    },
  ],
  returns: {
    type: "boolean",
    description: {
      en: "Returns true when the value can be parsed as a URL with an HTTP or HTTPS protocol; otherwise returns false.",
      fa: "اگر مقدار بتواند به‌عنوان یک URL با پروتکل HTTP یا HTTPS تجزیه شود true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Valid HTTP URL",
        fa: "URL معتبر HTTP",
      },
      description: {
        en: "HTTP URLs are accepted.",
        fa: "URLهای HTTP پذیرفته می‌شوند.",
      },
      language: "ts",
      code: `isURL("http://example.com");
// true`,
    },
    {
      title: {
        en: "Valid HTTPS URL",
        fa: "URL معتبر HTTPS",
      },
      description: {
        en: "HTTPS URLs are accepted.",
        fa: "URLهای HTTPS پذیرفته می‌شوند.",
      },
      language: "ts",
      code: `isURL("https://example.com/path?query=1");
// true`,
    },
    {
      title: {
        en: "Unsupported protocol",
        fa: "پروتکل پشتیبانی‌نشده",
      },
      description: {
        en: "URLs using protocols other than HTTP or HTTPS are rejected.",
        fa: "URLهایی با پروتکل‌هایی غیر از HTTP و HTTPS رد می‌شوند.",
      },
      language: "ts",
      code: `isURL("ftp://example.com");
// false

isURL("mailto:test@example.com");
// false`,
    },
    {
      title: {
        en: "Invalid URL",
        fa: "URL نامعتبر",
      },
      description: {
        en: "Values that cannot be parsed by the native URL constructor are rejected.",
        fa: "مقادیر که توسط URL constructor داخلی JavaScript قابل تجزیه نباشند رد می‌شوند.",
      },
      language: "ts",
      code: `isURL("not-a-url");
// false

isURL("example.com");
// false`,
    },
    {
      title: {
        en: "Whitespace",
        fa: "فاصله‌های ابتدا و انتها",
      },
      description: {
        en: "Leading and trailing whitespace is removed before validation.",
        fa: "فاصله‌های ابتدا و انتهای مقدار قبل از اعتبارسنجی حذف می‌شوند.",
      },
      language: "ts",
      code: `isURL("  https://example.com  ");
// true`,
    },
    {
      title: {
        en: "Non-string value",
        fa: "مقدار غیررشته‌ای",
      },
      description: {
        en: "Non-string values are rejected.",
        fa: "مقادیر غیررشته‌ای رد می‌شوند.",
      },
      language: "ts",
      code: `isURL(123);
// false

isURL(null);
// false`,
    },
  ],
  sections: [
    {
      id: "validation",
      title: {
        en: "Validation",
        fa: "اعتبارسنجی",
      },
      content: {
        en: "The function first checks that the value is a string, trims it, and rejects empty strings. It then passes the value to the native URL constructor.",
        fa: "تابع ابتدا بررسی می‌کند که مقدار از نوع string باشد، سپس آن را trim می‌کند و رشته‌های خالی را رد می‌کند. در ادامه مقدار را به URL constructor داخلی JavaScript می‌دهد.",
      },
    },
    {
      id: "protocols",
      title: {
        en: "Supported protocols",
        fa: "پروتکل‌های پشتیبانی‌شده",
      },
      content: {
        en: "After parsing the URL, the function accepts only http: and https: protocols. Other valid URL protocols are rejected.",
        fa: "پس از تجزیه URL، تابع فقط پروتکل‌های http: و https: را قبول می‌کند. سایر پروتکل‌های معتبر URL نیز رد می‌شوند.",
      },
    },
    {
      id: "errors",
      title: {
        en: "Invalid URLs",
        fa: "URLهای نامعتبر",
      },
      content: {
        en: "If the native URL constructor throws while parsing the value, the function catches the error and returns false.",
        fa: "اگر URL constructor هنگام تجزیه مقدار خطا ایجاد کند، تابع خطا را catch کرده و false برمی‌گرداند.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type Guard",
      },
      content: {
        en: "The function is a TypeScript type guard. When it returns true, TypeScript narrows the value from unknown to string.",
        fa: "این تابع یک TypeScript Type Guard است. وقتی true برگرداند، TypeScript نوع value را از unknown به string محدود می‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
