import type { DocPage } from "../../types";

export const tokenizeDoc: DocPage = {
  slug: "utilities/string/tokenize",
  category: "string",
  title: {
    en: "tokenize",
    fa: "tokenize",
  },
  description: {
    en: "Splits a string into word-like tokens using Unicode-aware letter, number, mark, and casing boundaries.",
    fa: "یک رشته را با استفاده از مرزهای Unicode-aware برای حروف، اعداد، علائم ترکیبی و تغییرات حروف بزرگ و کوچک به tokenهای متنی تقسیم می‌کند.",
  },
  icon: "Split",
  parameters: [
    {
      name: "value",
      type: "string",
      required: true,
      description: {
        en: "The string to split into tokens.",
        fa: "رشته‌ای که باید به tokenهای متنی تقسیم شود.",
      },
    },
  ],
  returns: {
    type: "string[]",
    description: {
      en: "An array of tokens extracted from the input string.",
      fa: "آرایه‌ای از tokenهای استخراج‌شده از رشته ورودی.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Separators such as spaces are used to separate tokens.",
        fa: "جداکننده‌هایی مانند فاصله برای جدا کردن tokenها استفاده می‌شوند.",
      },
      language: "ts",
      code: `tokenize("hello world");
// ["hello", "world"]`,
    },
    {
      title: {
        en: "Punctuation",
        fa: "علائم نگارشی",
      },
      description: {
        en: "Non-word characters separate the surrounding word characters.",
        fa: "کاراکترهای غیرکلمه‌ای، کاراکترهای کلمه‌ای اطراف خود را از هم جدا می‌کنند.",
      },
      language: "ts",
      code: `tokenize("hello-world!");
// ["hello", "world"]`,
    },
    {
      title: {
        en: "CamelCase",
        fa: "CamelCase",
      },
      description: {
        en: "A lowercase-to-uppercase transition can create a word boundary.",
        fa: "تغییر از حروف کوچک به حروف بزرگ می‌تواند یک مرز بین tokenها ایجاد کند.",
      },
      language: "ts",
      code: `tokenize("helloWorld");
// ["hello", "World"]`,
    },
    {
      title: {
        en: "PascalCase",
        fa: "PascalCase",
      },
      description: {
        en: "PascalCase identifiers are split according to the casing boundary rules.",
        fa: "شناسه‌های PascalCase بر اساس قوانین مرزبندی حروف بزرگ و کوچک تقسیم می‌شوند.",
      },
      language: "ts",
      code: `tokenize("HelloWorld");
// ["Hello", "World"]`,
    },
    {
      title: {
        en: "Acronyms",
        fa: "مخفف‌ها",
      },
      description: {
        en: "Uppercase runs are handled specially to avoid splitting every uppercase character into a separate token.",
        fa: "دنباله‌های حروف بزرگ به‌صورت ویژه پردازش می‌شوند تا هر حرف بزرگ به یک token جداگانه تبدیل نشود.",
      },
      language: "ts",
      code: `tokenize("parseHTTPResponse");
// ["parse", "HTTP", "Response"]`,
    },
    {
      title: {
        en: "Numbers",
        fa: "اعداد",
      },
      description: {
        en: "Unicode number characters are treated as word characters.",
        fa: "کاراکترهای عددی Unicode به‌عنوان کاراکترهای کلمه در نظر گرفته می‌شوند.",
      },
      language: "ts",
      code: `tokenize("version2Update");
// ["version2", "Update"]`,
    },
    {
      title: {
        en: "Unicode text",
        fa: "متن Unicode",
      },
      description: {
        en: "Unicode letters are preserved as word characters.",
        fa: "حروف Unicode به‌عنوان کاراکترهای کلمه حفظ می‌شوند.",
      },
      language: "ts",
      code: `tokenize("سلام دنیا");
// ["سلام", "دنیا"]`,
    },
    {
      title: {
        en: "Empty input",
        fa: "ورودی خالی",
      },
      description: {
        en: "An empty string produces no tokens.",
        fa: "یک رشته خالی هیچ tokenای تولید نمی‌کند.",
      },
      language: "ts",
      code: `tokenize("");
// []`,
    },
  ],
  sections: [
    {
      id: "word-characters",
      title: {
        en: "Word characters",
        fa: "کاراکترهای کلمه",
      },
      content: {
        en: "A character is considered part of a token when it is a Unicode letter, Unicode number, or Unicode mark. Characters outside these categories terminate the current token.",
        fa: "یک کاراکتر زمانی بخشی از token محسوب می‌شود که یک حرف Unicode، عدد Unicode یا mark Unicode باشد. کاراکترهای خارج از این دسته‌ها token فعلی را پایان می‌دهند.",
      },
    },
    {
      id: "lowercase-uppercase",
      title: {
        en: "Lowercase to uppercase boundaries",
        fa: "مرز حروف کوچک و بزرگ",
      },
      content: {
        en: "A boundary is created when the current character is uppercase, the previous character is lowercase or a number, and the next character is lowercase.",
        fa: "وقتی کاراکتر فعلی uppercase باشد، کاراکتر قبلی lowercase یا عدد باشد و کاراکتر بعدی lowercase باشد، یک مرز token ایجاد می‌شود.",
      },
    },
    {
      id: "uppercase-runs",
      title: {
        en: "Uppercase runs",
        fa: "دنباله‌های حروف بزرگ",
      },
      content: {
        en: "Consecutive uppercase characters are analyzed as a run. Additional prefix and run-length checks determine whether an uppercase sequence should be separated, which allows acronym-like sequences to remain together in relevant cases.",
        fa: "کاراکترهای uppercase پشت سر هم به‌صورت یک دنباله بررسی می‌شوند. طول دنباله و طول prefix قبل از آن برای تعیین مرز استفاده می‌شوند تا در حالت‌های مرتبط، دنباله‌هایی شبیه acronym کنار هم باقی بمانند.",
      },
    },
    {
      id: "separators",
      title: {
        en: "Separators",
        fa: "جداکننده‌ها",
      },
      content: {
        en: "Characters that are not Unicode letters, numbers, or marks terminate the current token. Empty tokens are not added to the result.",
        fa: "کاراکترهایی که حرف، عدد یا mark Unicode نیستند، token فعلی را پایان می‌دهند. tokenهای خالی به نتیجه اضافه نمی‌شوند.",
      },
    },
    {
      id: "unicode",
      title: {
        en: "Unicode handling",
        fa: "پشتیبانی از Unicode",
      },
      content: {
        en: "The input is converted with Array.from before processing, so iteration operates on Unicode code points rather than UTF-16 code units. The character classification uses Unicode property escapes.",
        fa: "قبل از پردازش، ورودی با Array.from تبدیل می‌شود؛ بنابراین iteration بر اساس code pointهای Unicode انجام می‌شود، نه code unitهای UTF-16. تشخیص نوع کاراکترها نیز با Unicode property escapes انجام می‌شود.",
      },
    },
  ],
  since: "1.38.0",
};
