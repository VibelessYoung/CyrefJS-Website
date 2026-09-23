import type { DocPage } from "../../types";

export const padDoc: DocPage = {
  slug: "utilities/string/pad",
  category: "string",
  title: {
    en: "pad",
    fa: "pad",
  },
  description: {
    en: "Pads a string on both sides with repeating characters until it reaches the specified length.",
    fa: "یک رشته را از هر دو طرف با کاراکترهای تکرارشونده پر می‌کند تا به طول مشخص‌شده برسد.",
  },

  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to pad.",
        fa: "رشته‌ای که باید padding شود.",
      },
    },
    {
      name: "length",
      type: "number",
      required: true,
      description: {
        en: "The target length of the resulting string. Must be a non-negative integer.",
        fa: "طول هدف رشته نهایی. باید یک عدد صحیح غیرمنفی باشد.",
      },
    },
    {
      name: "chars",
      type: "string",
      required: false,
      defaultValue: `" "`,
      description: {
        en: "The characters used for padding. The characters are repeated cyclically.",
        fa: "کاراکترهایی که برای padding استفاده می‌شوند. کاراکترها به صورت چرخه‌ای تکرار می‌شوند.",
      },
    },
  ],

  returns: {
    type: "string",
    description: {
      en: "The original string padded on both sides until it reaches the target length, or the original string when padding is unnecessary.",
      fa: "رشته اصلی که از دو طرف تا رسیدن به طول هدف padding شده است؛ یا در صورت عدم نیاز به padding، همان رشته اصلی.",
    },
  },

  throws: [
    {
      en: "Throws a RangeError if length is not a non-negative integer.",
      fa: "اگر length یک عدد صحیح غیرمنفی نباشد، RangeError ایجاد می‌کند.",
    },
  ],

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Pad a string with spaces on both sides.",
        fa: "یک رشته را از هر دو طرف با فاصله پر می‌کند.",
      },
      language: "ts",
      code: `import { pad } from "@cyref/js";

pad("hello", 9);
// "  hello  "`,
    },

    {
      title: {
        en: "Custom characters",
        fa: "کاراکترهای سفارشی",
      },
      description: {
        en: "Use a custom character for padding.",
        fa: "استفاده از یک کاراکتر سفارشی برای padding.",
      },
      language: "ts",
      code: `pad("hello", 9, "*");
// "**hello**"`,
    },

    {
      title: {
        en: "Multiple padding characters",
        fa: "چند کاراکتر برای padding",
      },
      description: {
        en: "Padding characters are repeated cyclically when more than one character is provided.",
        fa: "اگر چند کاراکتر برای padding داده شود، آن‌ها به صورت چرخه‌ای تکرار می‌شوند.",
      },
      language: "ts",
      code: `pad("hello", 11, "ab");
// "abhelloabab"`,
    },

    {
      title: {
        en: "Odd padding length",
        fa: "طول padding فرد",
      },
      description: {
        en: "When the required padding is odd, the right side receives one more character than the left.",
        fa: "اگر مقدار padding فرد باشد، سمت راست یک کاراکتر بیشتر از سمت چپ دریافت می‌کند.",
      },
      language: "ts",
      code: `pad("hello", 10, "-");
// "--hello---"`,
    },

    {
      title: {
        en: "No padding needed",
        fa: "عدم نیاز به padding",
      },
      description: {
        en: "If the string is already at least the target length, it is returned unchanged.",
        fa: "اگر رشته از قبل به اندازه طول هدف یا بزرگ‌تر باشد، بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `pad("hello", 3);
// "hello"`,
    },

    {
      title: {
        en: "Empty padding characters",
        fa: "کاراکترهای padding خالی",
      },
      description: {
        en: "An empty chars string disables padding and returns the original value.",
        fa: "اگر chars خالی باشد، padding انجام نمی‌شود و مقدار اصلی برگردانده می‌شود.",
      },
      language: "ts",
      code: `pad("hello", 10, "");
// "hello"`,
    },

    {
      title: {
        en: "Unicode characters",
        fa: "کاراکترهای Unicode",
      },
      description: {
        en: "The target length is measured using Array.from, which counts Unicode code points rather than UTF-16 code units.",
        fa: "طول هدف با Array.from محاسبه می‌شود؛ بنابراین طول بر اساس code pointهای Unicode محاسبه می‌شود، نه code unitهای UTF-16.",
      },
      language: "ts",
      code: `pad("😀", 3, "-");
// "-😀-"
`,
    },

    {
      title: {
        en: "Invalid length",
        fa: "طول نامعتبر",
      },
      description: {
        en: "A negative or non-integer length throws a RangeError.",
        fa: "طول منفی یا غیرصحیح باعث ایجاد RangeError می‌شود.",
      },
      language: "ts",
      code: `pad("hello", -1);
// RangeError: pad: length must be a non-negative integer`,
    },
  ],

  sections: [
    {
      id: "validation",
      title: {
        en: "Length validation",
        fa: "اعتبارسنجی length",
      },
      content: {
        en: 'length must be an integer greater than or equal to zero. Otherwise, the function throws a RangeError with the message "pad: length must be a non-negative integer".',
        fa: 'مقدار length باید یک عدد صحیح بزرگ‌تر یا مساوی صفر باشد. در غیر این صورت تابع یک RangeError با پیام "pad: length must be a non-negative integer" ایجاد می‌کند.',
      },
    },

    {
      id: "unicode-length",
      title: {
        en: "Unicode-aware length",
        fa: "محاسبه طول با پشتیبانی Unicode",
      },
      content: {
        en: "Both the input value and padding characters are converted with Array.from. This means padding length calculations use Unicode code points.",
        fa: "هم رشته اصلی و هم کاراکترهای padding با Array.from به آرایه تبدیل می‌شوند؛ بنابراین محاسبه طول بر اساس Unicode code point انجام می‌شود.",
      },
    },

    {
      id: "distribution",
      title: {
        en: "Padding distribution",
        fa: "تقسیم padding",
      },
      content: {
        en: "The required padding is split between the left and right sides. The left side receives floor(paddingLength / 2), while the right side receives the remaining characters. Therefore, an odd padding length gives the right side one extra character.",
        fa: "padding موردنیاز بین سمت چپ و راست تقسیم می‌شود. سمت چپ floor(paddingLength / 2) کاراکتر دریافت می‌کند و باقی کاراکترها به سمت راست می‌روند. بنابراین در padding فرد، سمت راست یک کاراکتر بیشتر خواهد داشت.",
      },
    },

    {
      id: "repeating-characters",
      title: {
        en: "Repeating padding characters",
        fa: "تکرار کاراکترهای padding",
      },
      content: {
        en: "When chars contains multiple characters, they are selected cyclically using their index modulo the number of padding characters.",
        fa: "وقتی chars شامل چند کاراکتر باشد، کاراکترها به صورت چرخه‌ای و با استفاده از index modulo تعداد کاراکترهای padding انتخاب می‌شوند.",
      },
    },

    {
      id: "unchanged",
      title: {
        en: "When padding is unnecessary",
        fa: "وقتی padding لازم نیست",
      },
      content: {
        en: "If the value already has the target length or is longer, or if chars is empty, the original value is returned unchanged.",
        fa: "اگر value از قبل به طول هدف رسیده باشد یا طولانی‌تر باشد، یا chars خالی باشد، مقدار اصلی بدون تغییر برگردانده می‌شود.",
      },
    },
  ],

  since: "1.38.0",
};
