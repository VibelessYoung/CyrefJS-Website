import type { DocPage } from "../../types";

export const reverseDoc: DocPage = {
  slug: "utilities/string/reverse",
  category: "string",
  title: {
    en: "reverse",
    fa: "reverse",
  },
  description: {
    en: "Reverses a string by converting it into Unicode code points, reversing their order, and joining them back together.",
    fa: "یک رشته را با تبدیل آن به Unicode code pointها، معکوس کردن ترتیب آن‌ها و اتصال دوباره به یکدیگر برعکس می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to reverse.",
        fa: "رشته‌ای که باید معکوس شود.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The input string with its Unicode code points in reverse order.",
      fa: "رشته ورودی با ترتیب معکوس Unicode code pointهای آن.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Reverse the characters of a string.",
        fa: "کاراکترهای یک رشته را معکوس می‌کند.",
      },
      language: "ts",
      code: `import { reverse } from "@cyref/js";

reverse("hello");
// "olleh"`,
    },

    {
      title: {
        en: "Sentence",
        fa: "جمله",
      },
      description: {
        en: "The entire string is reversed, including spaces.",
        fa: "کل رشته، از جمله فاصله‌ها، معکوس می‌شود.",
      },
      language: "ts",
      code: `reverse("hello world");
// "dlrow olleh"`,
    },

    {
      title: {
        en: "Palindrome",
        fa: "پالیندروم",
      },
      description: {
        en: "A palindrome produces the same string when reversed.",
        fa: "یک پالیندروم پس از معکوس شدن همان رشته را تولید می‌کند.",
      },
      language: "ts",
      code: `reverse("level");
// "level"`,
    },

    {
      title: {
        en: "Unicode characters",
        fa: "کاراکترهای Unicode",
      },
      description: {
        en: "Array.from preserves Unicode code points such as common emoji as individual elements.",
        fa: "Array.from، Unicode code pointهایی مانند emojiهای معمولی را به عنوان عناصر مستقل حفظ می‌کند.",
      },
      language: "ts",
      code: `reverse("hello 😀");
// "😀 olleh"`,
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
      code: `reverse("");
// ""`,
    },

    {
      title: {
        en: "Single character",
        fa: "یک کاراکتر",
      },
      description: {
        en: "A single character remains unchanged.",
        fa: "یک کاراکتر بدون تغییر باقی می‌ماند.",
      },
      language: "ts",
      code: `reverse("A");
// "A"`,
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
        en: "reverse converts the string into an array using Array.from, reverses the array, and joins the elements back into a string.",
        fa: "تابع reverse رشته را با استفاده از Array.from به آرایه تبدیل می‌کند، ترتیب آرایه را معکوس کرده و عناصر را دوباره به یک رشته متصل می‌کند.",
      },
    },

    {
      id: "unicode",
      title: {
        en: "Unicode handling",
        fa: "مدیریت Unicode",
      },
      content: {
        en: "Because Array.from is used instead of splitting the string by UTF-16 code units, Unicode code points represented by surrogate pairs are kept together during reversal.",
        fa: "چون به جای تقسیم رشته بر اساس UTF-16 code unitها از Array.from استفاده می‌شود، Unicode code pointهایی که با surrogate pair نمایش داده می‌شوند هنگام reverse شدن کنار هم باقی می‌مانند.",
      },
    },

    {
      id: "spaces",
      title: {
        en: "Whitespace and punctuation",
        fa: "فاصله و علائم",
      },
      content: {
        en: "All characters represented as elements by Array.from participate in the reversal, including spaces and punctuation.",
        fa: "تمام کاراکترهایی که توسط Array.from به عنوان عنصر شناسایی می‌شوند، از جمله فاصله‌ها و علائم نگارشی، در عملیات reverse شرکت می‌کنند.",
      },
    },

    {
      id: "original",
      title: {
        en: "Original string",
        fa: "رشته اصلی",
      },
      content: {
        en: "The original string is not modified. A new string is produced from the reversed array.",
        fa: "رشته اصلی تغییر نمی‌کند و یک رشته جدید از آرایه معکوس‌شده ساخته می‌شود.",
      },
    },
  ],

  since: "1.38.0",
};
