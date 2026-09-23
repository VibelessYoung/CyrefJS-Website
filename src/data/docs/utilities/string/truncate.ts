import type { DocPage } from "../../types";

export const truncateDoc: DocPage = {
  slug: "utilities/string/truncate",
  category: "string",
  title: {
    en: "truncate",
    fa: "truncate",
  },
  description: {
    en: "Shortens a string to a maximum length and appends an omission string when truncation is required.",
    fa: "یک رشته را به حداکثر طول مشخص کوتاه می‌کند و در صورت نیاز یک رشته حذف‌کننده به انتهای آن اضافه می‌کند.",
  },
  icon: "Text",
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
        en: "The maximum number of Unicode code points allowed in the result.",
        fa: "حداکثر تعداد code pointهای Unicode مجاز در نتیجه.",
      },
    },
    {
      name: "omission",
      type: "string",
      required: false,
      defaultValue: '"..."',
      description: {
        en: "The string appended when the value needs to be truncated.",
        fa: "رشته‌ای که هنگام کوتاه شدن مقدار به انتهای نتیجه اضافه می‌شود.",
      },
    },
  ],
  returns: {
    type: "string",
    description: {
      en: "The original string when it fits within the requested length, or a truncated string with the omission appended.",
      fa: "اگر رشته در طول تعیین‌شده جا شود، همان رشته اصلی را برمی‌گرداند؛ در غیر این صورت، رشته کوتاه‌شده به همراه omission برگردانده می‌شود.",
    },
  },
  throws: [
    {
      en: "Throws a RangeError if length is not a non-negative integer.",
      fa: "اگر length یک عدد صحیح نامنفی نباشد، یک RangeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Long text is shortened and the default omission is appended.",
        fa: "متن طولانی کوتاه می‌شود و omission پیش‌فرض به انتهای آن اضافه می‌شود.",
      },
      language: "ts",
      code: `truncate("Hello World", 8);
// "Hello..."`,
    },
    {
      title: {
        en: "Custom omission",
        fa: "omission سفارشی",
      },
      description: {
        en: "A custom omission string can be provided.",
        fa: "می‌توان یک رشته سفارشی برای omission مشخص کرد.",
      },
      language: "ts",
      code: `truncate("Hello World", 8, "…");
// "Hello W…"`,
    },
    {
      title: {
        en: "Value already fits",
        fa: "رشته در طول تعیین‌شده جا می‌شود",
      },
      description: {
        en: "If the string length is already within the requested limit, the original value is returned unchanged.",
        fa: "اگر طول رشته از حد تعیین‌شده بیشتر نباشد، مقدار اصلی بدون تغییر برگردانده می‌شود.",
      },
      language: "ts",
      code: `truncate("Hello", 10);
// "Hello"`,
    },
    {
      title: {
        en: "Length shorter than omission",
        fa: "طول کمتر از omission",
      },
      description: {
        en: "When the omission itself is at least as long as the requested length, only the beginning of the omission is returned.",
        fa: "وقتی طول omission برابر یا بیشتر از طول تعیین‌شده باشد، فقط ابتدای omission تا طول موردنظر برگردانده می‌شود.",
      },
      language: "ts",
      code: `truncate("Hello World", 2, "...");
// ".."`,
    },
    {
      title: {
        en: "Zero length",
        fa: "طول صفر",
      },
      description: {
        en: "A zero length returns an empty string when truncation is required.",
        fa: "اگر طول صفر باشد و رشته نیاز به کوتاه شدن داشته باشد، نتیجه یک رشته خالی خواهد بود.",
      },
      language: "ts",
      code: `truncate("Hello", 0);
// ""`,
    },
    {
      title: {
        en: "Unicode characters",
        fa: "کاراکترهای Unicode",
      },
      description: {
        en: "Truncation counts Unicode code points using Array.from.",
        fa: "کوتاه‌سازی با استفاده از Array.from، code pointهای Unicode را می‌شمارد.",
      },
      language: "ts",
      code: `truncate("Hello 😀 World", 8);
// "Hello 😀..."`,
    },
    {
      title: {
        en: "Empty value",
        fa: "مقدار خالی",
      },
      description: {
        en: "An empty input always returns an empty string.",
        fa: "ورودی خالی همیشه یک رشته خالی برمی‌گرداند.",
      },
      language: "ts",
      code: `truncate("", 5);
// ""`,
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
        en: 'The length parameter must be a non-negative integer. Otherwise, truncate throws a RangeError with the message: "truncate: length must be a non-negative integer".',
        fa: 'پارامتر length باید یک عدد صحیح نامنفی باشد. در غیر این صورت truncate یک RangeError با پیام "truncate: length must be a non-negative integer" ایجاد می‌کند.',
      },
    },
    {
      id: "unicode",
      title: {
        en: "Unicode-aware length",
        fa: "محاسبه طول با پشتیبانی از Unicode",
      },
      content: {
        en: "The input and omission are converted with Array.from before their lengths are evaluated or characters are sliced. This means Unicode code points such as surrogate-pair emoji are treated as single characters.",
        fa: "رشته ورودی و omission با Array.from به آرایه تبدیل می‌شوند و سپس طول یا بخش موردنیاز آن‌ها محاسبه می‌شود. بنابراین code pointهای Unicode مانند emojiهایی که از surrogate pair تشکیل شده‌اند به‌عنوان یک کاراکتر در نظر گرفته می‌شوند.",
      },
    },
    {
      id: "omission",
      title: {
        en: "Omission behavior",
        fa: "رفتار omission",
      },
      content: {
        en: 'The default omission is "...". If the omission length is greater than or equal to the requested length, only the first length code points of the omission are returned. Otherwise, the original string is shortened enough to leave room for the complete omission.',
        fa: 'مقدار پیش‌فرض omission برابر با "..." است. اگر طول omission برابر یا بیشتر از length باشد، فقط length code point اول omission برگردانده می‌شود. در غیر این صورت، متن اصلی به اندازه‌ای کوتاه می‌شود که فضای کافی برای کل omission باقی بماند.',
      },
    },
    {
      id: "return-value",
      title: {
        en: "Return behavior",
        fa: "رفتار مقدار بازگشتی",
      },
      content: {
        en: "If the input already fits within the requested length, the original value is returned. If truncation is required, the returned string consists of the retained portion followed by the omission.",
        fa: "اگر مقدار ورودی از length بیشتر نباشد، همان مقدار اصلی برگردانده می‌شود. در صورت نیاز به کوتاه‌سازی، بخش باقی‌مانده از متن به همراه omission برگردانده می‌شود.",
      },
    },
  ],
  since: "1.38.0",
};
