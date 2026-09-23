import type { DocPage } from "../../types";

export const truncateDoc: DocPage = {
  slug: "utilities/string/truncate",

  category: "string",

  title: {
    en: "truncate",
    fa: "truncate",
  },

  description: {
    en: "Truncates a string to a maximum character length and appends an omission string when the input exceeds that length.",
    fa: "یک رشته را تا حداکثر طول مشخص کوتاه می‌کند و در صورتی که رشته از آن طول بیشتر باشد، یک رشته حذف‌کننده به انتهای آن اضافه می‌کند.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to truncate.",
        fa: "رشته‌ای که باید کوتاه شود.",
      },
    },

    {
      name: "length",
      type: "number",
      required: true,
      description: {
        en: "The maximum number of characters allowed in the resulting string. Must be a non-negative integer.",
        fa: "حداکثر تعداد کاراکترهای مجاز در رشته نهایی. باید یک عدد صحیح نامنفی باشد.",
      },
    },

    {
      name: "omission",
      type: "string",
      required: false,
      description: {
        en: "The string appended to the truncated result. Defaults to three dots.",
        fa: "رشته‌ای که پس از کوتاه شدن به انتهای نتیجه اضافه می‌شود. مقدار پیش‌فرض آن سه نقطه است.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The original string when it fits within the specified length, otherwise a truncated string ending with the omission string or its allowed prefix.",
      fa: "اگر رشته در طول مشخص‌شده قرار بگیرد، همان رشته اصلی برگردانده می‌شود؛ در غیر این صورت، رشته کوتاه‌شده‌ای که با رشته حذف‌کننده یا بخش مجاز آن پایان می‌یابد.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "A string longer than the requested length is shortened and the default omission string is appended.",
        fa: "رشته‌ای که از طول تعیین‌شده بیشتر باشد کوتاه می‌شود و رشته حذف‌کننده پیش‌فرض به انتهای آن اضافه می‌شود.",
      },

      language: "ts",

      code: `truncate("Hello World", 8);

// "Hello..."`,
    },

    {
      title: {
        en: "Custom omission",
        fa: "حذف‌کننده سفارشی",
      },

      description: {
        en: "A custom omission string can be provided instead of the default three dots.",
        fa: "می‌توان به جای سه نقطه پیش‌فرض، یک رشته حذف‌کننده سفارشی مشخص کرد.",
      },

      language: "ts",

      code: `truncate("Hello World", 9, "…");

// "Hello Wo…"`,
    },

    {
      title: {
        en: "String already within the limit",
        fa: "رشته در محدوده مجاز",
      },

      description: {
        en: "When the string length does not exceed the requested length, the original string is returned unchanged.",
        fa: "اگر طول رشته از طول تعیین‌شده بیشتر نباشد، همان رشته اصلی بدون تغییر برگردانده می‌شود.",
      },

      language: "ts",

      code: `truncate("Hello", 10);

// "Hello"`,
    },

    {
      title: {
        en: "Empty string",
        fa: "رشته خالی",
      },

      description: {
        en: "An empty input string always produces an empty result.",
        fa: "ورودی خالی همیشه یک رشته خالی تولید می‌کند.",
      },

      language: "ts",

      code: `truncate("", 5);

// ""`,
    },

    {
      title: {
        en: "Omission longer than the limit",
        fa: "حذف‌کننده بزرگ‌تر از طول مجاز",
      },

      description: {
        en: "When the omission itself is at least as long as the requested length, only the allowed prefix of the omission is returned.",
        fa: "اگر طول رشته حذف‌کننده حداقل به اندازه طول تعیین‌شده باشد، فقط بخش ابتدایی حذف‌کننده تا طول مجاز برگردانده می‌شود.",
      },

      language: "ts",

      code: `truncate("Hello World", 2, "...");

// ".."`,
    },

    {
      title: {
        en: "Unicode characters",
        fa: "کاراکترهای یونیکد",
      },

      description: {
        en: "The input and omission strings are converted with Array.from before slicing, allowing truncation to operate on Unicode code points rather than UTF-16 code units.",
        fa: "رشته ورودی و رشته حذف‌کننده قبل از برش با Array.from به آرایه تبدیل می‌شوند؛ بنابراین عملیات کوتاه‌سازی بر اساس code pointهای یونیکد انجام می‌شود، نه code unitهای UTF-16.",
      },

      language: "ts",

      code: `truncate("سلام دنیا", 6);

// "سلام..."`,
    },
  ],

  sections: [
    {
      id: "validation",

      title: {
        en: "Length validation",
        fa: "اعتبارسنجی طول",
      },

      content: {
        en: "The length argument must be an integer greater than or equal to zero. Otherwise, the function throws a RangeError.",
        fa: "پارامتر length باید یک عدد صحیح بزرگ‌تر یا مساوی صفر باشد. در غیر این صورت تابع یک RangeError ایجاد می‌کند.",
      },
    },

    {
      id: "empty-input",

      title: {
        en: "Empty input",
        fa: "ورودی خالی",
      },

      content: {
        en: "If the input string is empty, the function immediately returns an empty string.",
        fa: "اگر رشته ورودی خالی باشد، تابع بلافاصله یک رشته خالی برمی‌گرداند.",
      },
    },

    {
      id: "length-check",

      title: {
        en: "Length check",
        fa: "بررسی طول",
      },

      content: {
        en: "The input is converted with Array.from and its character count is compared with the requested length. If it fits within the limit, the original value is returned unchanged.",
        fa: "رشته ورودی با Array.from به آرایه تبدیل می‌شود و تعداد کاراکترهای آن با length مقایسه می‌شود. اگر رشته در محدوده مجاز باشد، مقدار اصلی بدون تغییر برگردانده می‌شود.",
      },
    },

    {
      id: "omission",

      title: {
        en: "Omission handling",
        fa: "مدیریت رشته حذف‌کننده",
      },

      content: {
        en: "The omission string defaults to three dots. If its length is greater than or equal to the requested length, only its first length characters are returned.",
        fa: "رشته حذف‌کننده به‌صورت پیش‌فرض سه نقطه است. اگر طول آن بزرگ‌تر یا مساوی length باشد، فقط اولین length کاراکتر آن برگردانده می‌شود.",
      },
    },

    {
      id: "truncation",

      title: {
        en: "Truncation",
        fa: "کوتاه‌سازی",
      },

      content: {
        en: "When truncation is required and the omission fits within the requested length, the function reserves enough space for the omission, takes the remaining characters from the input, and appends the omission.",
        fa: "وقتی کوتاه‌سازی لازم باشد و رشته حذف‌کننده در طول تعیین‌شده جا شود، تابع به اندازه لازم برای آن فضا رزرو می‌کند، بخش باقی‌مانده را از ابتدای ورودی برمی‌دارد و در پایان رشته حذف‌کننده را اضافه می‌کند.",
      },
    },

    {
      id: "unicode",

      title: {
        en: "Unicode handling",
        fa: "مدیریت یونیکد",
      },

      content: {
        en: "Both the input and omission strings are converted with Array.from before slicing. This means slicing operates on the elements produced by Array.from rather than directly on UTF-16 string indices.",
        fa: "هم رشته ورودی و هم رشته حذف‌کننده قبل از slice با Array.from به آرایه تبدیل می‌شوند. بنابراین برش روی عناصری انجام می‌شود که Array.from تولید کرده است، نه مستقیماً روی اندیس‌های UTF-16 رشته.",
      },
    },
  ],
};
