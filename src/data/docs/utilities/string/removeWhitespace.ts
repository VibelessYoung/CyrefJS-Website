import type { DocPage } from "../../types";

export const removeWhitespaceDoc: DocPage = {
  slug: "utilities/string/remove-whitespace",
  category: "string",
  title: {
    en: "removeWhitespace",
    fa: "removeWhitespace",
  },
  description: {
    en: "Removes all whitespace characters from a string.",
    fa: "تمام کاراکترهای whitespace را از یک رشته حذف می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string whose whitespace characters should be removed.",
        fa: "رشته‌ای که باید تمام کاراکترهای whitespace آن حذف شوند.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The input string with all matched whitespace characters removed.",
      fa: "رشته ورودی که تمام کاراکترهای whitespace آن حذف شده‌اند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Remove spaces from a string.",
        fa: "فاصله‌ها را از یک رشته حذف می‌کند.",
      },
      language: "ts",
      code: `import { removeWhitespace } from "@cyref/js";

removeWhitespace("hello world");
// "helloworld"`,
    },

    {
      title: {
        en: "Multiple spaces",
        fa: "چند فاصله",
      },
      description: {
        en: "All spaces are removed, including consecutive spaces.",
        fa: "تمام فاصله‌ها، از جمله فاصله‌های متوالی، حذف می‌شوند.",
      },
      language: "ts",
      code: `removeWhitespace("hello   beautiful   world");
// "hellobeautifulworld"`,
    },

    {
      title: {
        en: "Tabs and newlines",
        fa: "تب و خط جدید",
      },
      description: {
        en: "Whitespace such as tabs and newlines is removed as well.",
        fa: "whitespaceهایی مانند tab و newline نیز حذف می‌شوند.",
      },
      language: "ts",
      code: `removeWhitespace("hello\\tworld\\nagain");
// "helloworldagain"`,
    },

    {
      title: {
        en: "Mixed whitespace",
        fa: "ترکیب انواع whitespace",
      },
      description: {
        en: "Different whitespace characters are removed wherever they occur.",
        fa: "انواع مختلف کاراکترهای whitespace در هر جای رشته حذف می‌شوند.",
      },
      language: "ts",
      code: `removeWhitespace(" hello \\t world \\n ");
// "helloworld"`,
    },

    {
      title: {
        en: "Whitespace-only string",
        fa: "رشته فقط شامل whitespace",
      },
      description: {
        en: "A string containing only whitespace becomes empty.",
        fa: "رشته‌ای که فقط شامل whitespace باشد به رشته خالی تبدیل می‌شود.",
      },
      language: "ts",
      code: `removeWhitespace(" \\t\\n ");
// ""`,
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
      code: `removeWhitespace("");
// ""`,
    },

    {
      title: {
        en: "Text without whitespace",
        fa: "متن بدون whitespace",
      },
      description: {
        en: "A string without whitespace is returned unchanged.",
        fa: "رشته‌ای که whitespace نداشته باشد بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `removeWhitespace("helloWorld");
// "helloWorld"`,
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
        en: "removeWhitespace removes every whitespace character matched by the regular expression from the input string. No replacement character is inserted.",
        fa: "تابع removeWhitespace تمام کاراکترهای whitespace که توسط عبارت باقاعده شناسایی می‌شوند را از رشته ورودی حذف می‌کند و هیچ کاراکتر جایگزینی قرار نمی‌دهد.",
      },
    },

    {
      id: "whitespace",
      title: {
        en: "Whitespace handling",
        fa: "مدیریت whitespace",
      },
      content: {
        en: "The regular expression uses the Unicode-aware whitespace character class, so whitespace recognized by JavaScript's Unicode regular expression behavior is removed.",
        fa: "عبارت باقاعده از کلاس whitespace با پشتیبانی Unicode استفاده می‌کند؛ بنابراین whitespaceهایی که رفتار regex یونی‌کد جاوااسکریپت آن‌ها را تشخیص می‌دهد حذف می‌شوند.",
      },
    },

    {
      id: "all-occurrences",
      title: {
        en: "All occurrences",
        fa: "تمام موارد",
      },
      content: {
        en: "The global flag causes every matching whitespace character in the string to be removed, not only the first occurrence.",
        fa: "به دلیل استفاده از فلگ global، تمام کاراکترهای whitespace موجود در رشته حذف می‌شوند، نه فقط اولین مورد.",
      },
    },

    {
      id: "no-replacement",
      title: {
        en: "No replacement",
        fa: "بدون جایگزینی",
      },
      content: {
        en: "Unlike normalizeWhitespace, this utility does not replace whitespace with a space. It removes matched whitespace characters completely.",
        fa: "برخلاف normalizeWhitespace، این utility whitespace را با فاصله جایگزین نمی‌کند؛ بلکه کاراکترهای شناسایی‌شده را کاملاً حذف می‌کند.",
      },
    },
  ],

  since: "1.38.0",
};
