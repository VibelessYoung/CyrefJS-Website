import type { DocPage } from "../../types";

export const isEmailDoc: DocPage = {
  slug: "utilities/validation/is-email",
  category: "validation",
  title: {
    en: "isEmail",
    fa: "isEmail",
  },
  description: {
    en: "Checks whether a value is a string that matches the utility's email validation rules.",
    fa: "بررسی می‌کند که آیا یک مقدار رشته‌ای است که با قوانین اعتبارسنجی ایمیل این تابع مطابقت دارد یا نه.",
  },
  icon: "Mail",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to validate as an email address.",
        fa: "مقداری که باید به‌عنوان آدرس ایمیل اعتبارسنجی شود.",
      },
    },
  ],
  returns: {
    type: "boolean",
    description: {
      en: "Returns true when the value is a valid string according to the utility's email validation rules; otherwise returns false.",
      fa: "اگر مقدار یک رشته معتبر مطابق قوانین این تابع باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Valid email",
        fa: "ایمیل معتبر",
      },
      description: {
        en: "Returns true for a string that satisfies the validation rules.",
        fa: "برای رشته‌ای که قوانین اعتبارسنجی را رعایت کند true برمی‌گرداند.",
      },
      language: "ts",
      code: `isEmail("amir@example.com");
// true`,
    },
    {
      title: {
        en: "Invalid email",
        fa: "ایمیل نامعتبر",
      },
      description: {
        en: "Returns false when the email structure does not satisfy the validation rules.",
        fa: "وقتی ساختار ایمیل با قوانین اعتبارسنجی مطابقت نداشته باشد false برمی‌گرداند.",
      },
      language: "ts",
      code: `isEmail("amir@example");
// false`,
    },
    {
      title: {
        en: "Non-string value",
        fa: "مقدار غیررشته‌ای",
      },
      description: {
        en: "Non-string values are rejected immediately.",
        fa: "مقادیر غیررشته‌ای بلافاصله رد می‌شوند.",
      },
      language: "ts",
      code: `isEmail(123);
// false

isEmail(null);
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
      code: `isEmail("  amir@example.com  ");
// true`,
    },
    {
      title: {
        en: "Invalid local part",
        fa: "بخش محلی نامعتبر",
      },
      description: {
        en: "The local part cannot start or end with a dot or contain consecutive dots.",
        fa: "بخش محلی نمی‌تواند با نقطه شروع یا تمام شود و نباید شامل دو نقطه متوالی باشد.",
      },
      language: "ts",
      code: `isEmail(".amir@example.com");
// false

isEmail("amir..test@example.com");
// false`,
    },
    {
      title: {
        en: "Invalid domain",
        fa: "دامنه نامعتبر",
      },
      description: {
        en: "The domain must contain at least one dot, and its labels cannot start or end with a hyphen.",
        fa: "دامنه باید حداقل یک نقطه داشته باشد و بخش‌های آن نمی‌توانند با خط تیره شروع یا تمام شوند.",
      },
      language: "ts",
      code: `isEmail("amir@example");
// false

isEmail("amir@-example.com");
// false`,
    },
  ],
  sections: [
    {
      id: "validation-rules",
      title: {
        en: "Validation rules",
        fa: "قوانین اعتبارسنجی",
      },
      content: {
        en: "The value must be a string. The string is trimmed before validation and must contain exactly one @ character. The local part must be non-empty and cannot start or end with a dot or contain consecutive dots. The local part is restricted to ASCII letters, digits, and the characters .!#$%&'*+/=?^_`{|}~-.",
        fa: "مقدار باید از نوع string باشد. قبل از اعتبارسنجی، ابتدا و انتهای رشته trim می‌شود و رشته باید دقیقاً یک کاراکتر @ داشته باشد. بخش محلی باید خالی نباشد، نمی‌تواند با نقطه شروع یا تمام شود و نباید شامل نقطه‌های متوالی باشد. کاراکترهای مجاز بخش محلی شامل حروف و اعداد ASCII و کاراکترهای .!#$%&'*+/=?^_`{|}~- هستند.",
      },
    },
    {
      id: "domain-rules",
      title: {
        en: "Domain rules",
        fa: "قوانین دامنه",
      },
      content: {
        en: "The domain must be non-empty, contain at least one dot, and cannot start or end with a dot or contain consecutive dots. Each domain label must be non-empty, contain only ASCII letters, digits, and hyphens, and cannot start or end with a hyphen.",
        fa: "دامنه نباید خالی باشد، باید حداقل یک نقطه داشته باشد و نمی‌تواند با نقطه شروع یا تمام شود یا شامل نقطه‌های متوالی باشد. هر بخش دامنه باید غیرخالی باشد، فقط شامل حروف و اعداد ASCII و خط تیره باشد و نمی‌تواند با خط تیره شروع یا تمام شود.",
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
        fa: "این تابع یک TypeScript Type Guard است. وقتی مقدار true باشد، TypeScript نوع value را از unknown به string محدود می‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
