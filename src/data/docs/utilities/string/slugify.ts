import type { DocPage } from "../../types";

export const slugifyDoc: DocPage = {
  slug: "utilities/string/slugify",
  category: "string",
  title: {
    en: "slugify",
    fa: "slugify",
  },
  description: {
    en: "Converts a string into a normalized, lowercase, URL-friendly slug.",
    fa: "یک رشته را به یک slug نرمال‌شده، کوچک و مناسب برای URL تبدیل می‌کند.",
  },
  icon: "Link",
  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to convert into a slug.",
        fa: "رشته‌ای که باید به slug تبدیل شود.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "A lowercase slug with runs of non-letter and non-number characters replaced by a single hyphen.",
      fa: "یک slug با حروف کوچک که در آن دنباله‌های کاراکترهای غیرحرف و غیرعدد با یک خط تیره جایگزین شده‌اند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Convert a regular phrase into a URL-friendly slug.",
        fa: "تبدیل یک عبارت معمولی به slug مناسب برای URL.",
      },
      language: "ts",
      code: `slugify("Hello World");
// "hello-world"`,
    },
    {
      title: {
        en: "Multiple separators",
        fa: "چند جداکننده",
      },
      description: {
        en: "Consecutive spaces and punctuation are collapsed into a single hyphen.",
        fa: "فاصله‌ها و علائم نگارشی پشت سر هم به یک خط تیره تبدیل می‌شوند.",
      },
      language: "ts",
      code: `slugify("Hello,   World!!!");
// "hello-world"`,
    },
    {
      title: {
        en: "Leading and trailing separators",
        fa: "جداکننده‌های ابتدا و انتها",
      },
      description: {
        en: "Leading and trailing hyphens are removed from the result.",
        fa: "خط تیره‌های ابتدا و انتهای نتیجه حذف می‌شوند.",
      },
      language: "ts",
      code: `slugify("---Hello World---");
// "hello-world"`,
    },
    {
      title: {
        en: "Unicode text",
        fa: "متن یونیکد",
      },
      description: {
        en: "Unicode letters and numbers are preserved.",
        fa: "حروف و اعداد یونیکد حفظ می‌شوند.",
      },
      language: "ts",
      code: `slugify("سلام دنیا");
// "سلام-دنیا"`,
    },
    {
      title: {
        en: "Trimming whitespace",
        fa: "حذف فاصله‌های ابتدا و انتها",
      },
      description: {
        en: "Leading and trailing whitespace is removed before slug generation.",
        fa: "فاصله‌های ابتدا و انتهای رشته قبل از ساخت slug حذف می‌شوند.",
      },
      language: "ts",
      code: `slugify("  Hello World  ");
// "hello-world"`,
    },
    {
      title: {
        en: "Empty result",
        fa: "نتیجه خالی",
      },
      description: {
        en: "A string containing only characters outside the supported letter and number categories produces an empty string.",
        fa: "رشته‌ای که فقط شامل کاراکترهای خارج از دسته حروف و اعداد باشد، یک رشته خالی تولید می‌کند.",
      },
      language: "ts",
      code: `slugify("!!! @@@ ###");
// ""`,
    },
  ],
  sections: [
    {
      id: "normalization",
      title: {
        en: "Normalization",
        fa: "نرمال‌سازی",
      },
      content: {
        en: "The input is first normalized using Unicode NFKC normalization. This can normalize compatible Unicode representations before the slug is generated.",
        fa: "ابتدا ورودی با استفاده از نرمال‌سازی Unicode از نوع NFKC نرمال می‌شود. این کار می‌تواند نمایش‌های سازگار Unicode را قبل از ساخت slug یکسان‌سازی کند.",
      },
    },
    {
      id: "lowercase",
      title: {
        en: "Lowercase conversion",
        fa: "تبدیل به حروف کوچک",
      },
      content: {
        en: "After normalization and trimming, the entire string is converted to lowercase.",
        fa: "پس از نرمال‌سازی و حذف فاصله‌های ابتدا و انتها، کل رشته به حروف کوچک تبدیل می‌شود.",
      },
    },
    {
      id: "replacement",
      title: {
        en: "Character replacement",
        fa: "جایگزینی کاراکترها",
      },
      content: {
        en: "Every consecutive sequence of characters that is not a Unicode letter or number is replaced with a single hyphen. Unicode property escapes are used, so letters and numbers from supported Unicode scripts are preserved.",
        fa: "هر دنباله متوالی از کاراکترهایی که حرف یا عدد Unicode نیستند، با یک خط تیره جایگزین می‌شود. از Unicode property escapes استفاده شده است، بنابراین حروف و اعداد اسکریپت‌های پشتیبانی‌شده Unicode حفظ می‌شوند.",
      },
    },
    {
      id: "cleanup",
      title: {
        en: "Final cleanup",
        fa: "پاک‌سازی نهایی",
      },
      content: {
        en: "Any hyphens at the beginning or end of the generated slug are removed.",
        fa: "تمام خط تیره‌های موجود در ابتدا یا انتهای slug تولیدشده حذف می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
