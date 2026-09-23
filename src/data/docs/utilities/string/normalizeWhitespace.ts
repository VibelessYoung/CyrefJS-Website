import type { DocPage } from "../../types";

export const normalizeWhitespaceDoc: DocPage = {
  slug: "utilities/string/normalize-whitespace",
  category: "string",
  title: {
    en: "normalizeWhitespace",
    fa: "normalizeWhitespace",
  },
  description: {
    en: "Normalizes whitespace in a string by replacing consecutive whitespace characters with a single space and trimming leading and trailing whitespace.",
    fa: "فاصله‌های یک رشته را نرمال می‌کند؛ فاصله‌های متوالی را به یک فاصله تبدیل کرده و فاصله‌های ابتدا و انتهای رشته را حذف می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string whose whitespace should be normalized.",
        fa: "رشته‌ای که فاصله‌های آن باید نرمال شوند.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The string with consecutive whitespace collapsed into single spaces and leading and trailing whitespace removed.",
      fa: "رشته‌ای که فاصله‌های متوالی آن به یک فاصله تبدیل شده و فاصله‌های ابتدا و انتهای آن حذف شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Collapse multiple spaces into a single space.",
        fa: "چند فاصله متوالی را به یک فاصله تبدیل می‌کند.",
      },
      language: "ts",
      code: `import { normalizeWhitespace } from "@cyref/js";

normalizeWhitespace("hello    world");
// "hello world"`,
    },

    {
      title: {
        en: "Leading and trailing whitespace",
        fa: "فاصله‌های ابتدا و انتها",
      },
      description: {
        en: "Leading and trailing whitespace is removed.",
        fa: "فاصله‌های ابتدا و انتهای رشته حذف می‌شوند.",
      },
      language: "ts",
      code: `normalizeWhitespace("   hello world   ");
// "hello world"`,
    },

    {
      title: {
        en: "Tabs and newlines",
        fa: "تب و خط جدید",
      },
      description: {
        en: "Whitespace characters such as tabs and newlines are normalized to single spaces.",
        fa: "کاراکترهای whitespace مانند tab و newline به فاصله‌های تکی تبدیل می‌شوند.",
      },
      language: "ts",
      code: `normalizeWhitespace("hello\\t\\nworld");
// "hello world"`,
    },

    {
      title: {
        en: "Mixed whitespace",
        fa: "ترکیب انواع فاصله",
      },
      description: {
        en: "Different consecutive whitespace characters are collapsed into one space.",
        fa: "انواع مختلف whitespace متوالی به یک فاصله تبدیل می‌شوند.",
      },
      language: "ts",
      code: `normalizeWhitespace("hello \\t \\n world");
// "hello world"`,
    },

    {
      title: {
        en: "Empty string",
        fa: "رشته خالی",
      },
      description: {
        en: "An empty string remains empty.",
        fa: "رشته خالی همچنان خالی باقی می‌ماند.",
      },
      language: "ts",
      code: `normalizeWhitespace("");
// ""`,
    },

    {
      title: {
        en: "Whitespace-only string",
        fa: "رشته فقط شامل فاصله",
      },
      description: {
        en: "A string containing only whitespace becomes an empty string.",
        fa: "رشته‌ای که فقط شامل whitespace باشد به یک رشته خالی تبدیل می‌شود.",
      },
      language: "ts",
      code: `normalizeWhitespace(" \\t\\n ");
// ""`,
    },

    {
      title: {
        en: "Already normalized",
        fa: "رشته از قبل نرمال‌شده",
      },
      description: {
        en: "A string with normal spacing remains unchanged.",
        fa: "رشته‌ای که فاصله‌گذاری مناسبی داشته باشد بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `normalizeWhitespace("hello world");
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
        en: "normalizeWhitespace replaces every sequence of one or more whitespace characters with a single space, then removes whitespace from the beginning and end of the string.",
        fa: "تابع normalizeWhitespace هر دنباله شامل یک یا چند کاراکتر whitespace را با یک فاصله جایگزین می‌کند و سپس whitespace ابتدای و انتهای رشته را حذف می‌کند.",
      },
    },

    {
      id: "whitespace",
      title: {
        en: "Whitespace handling",
        fa: "مدیریت whitespace",
      },
      content: {
        en: "The regular expression uses the Unicode-aware whitespace character class, so whitespace matched by JavaScript's Unicode regular expression behavior is normalized.",
        fa: "عبارت باقاعده از کلاس whitespace با پشتیبانی Unicode استفاده می‌کند؛ بنابراین whitespaceهایی که رفتار regex یونی‌کد جاوااسکریپت آن‌ها را تشخیص می‌دهد نرمال می‌شوند.",
      },
    },

    {
      id: "collapse",
      title: {
        en: "Collapsing whitespace",
        fa: "فشرده‌سازی فاصله‌ها",
      },
      content: {
        en: "Consecutive whitespace characters are collapsed into exactly one regular space character.",
        fa: "کاراکترهای whitespace متوالی دقیقاً به یک کاراکتر فاصله معمولی تبدیل می‌شوند.",
      },
    },

    {
      id: "trim",
      title: {
        en: "Trimming",
        fa: "حذف فاصله‌های ابتدا و انتها",
      },
      content: {
        en: "After whitespace sequences are normalized, trim removes any remaining whitespace from the beginning and end of the result.",
        fa: "پس از نرمال‌سازی دنباله‌های whitespace، متد trim هرگونه whitespace باقی‌مانده در ابتدا و انتهای نتیجه را حذف می‌کند.",
      },
    },
  ],

  since: "1.38.0",
};
