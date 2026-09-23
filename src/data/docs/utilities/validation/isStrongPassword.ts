import type { DocPage } from "../../types";

export const isStrongPasswordDoc: DocPage = {
  slug: "utilities/validation/is-strong-password",
  category: "validation",
  title: {
    en: "isStrongPassword",
    fa: "isStrongPassword",
  },
  description: {
    en: "Checks whether a value is a string that satisfies the utility's strong password requirements.",
    fa: "بررسی می‌کند که آیا یک مقدار رشته‌ای است که شرایط رمز عبور قوی این تابع را داشته باشد یا نه.",
  },
  icon: "ShieldCheck",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to validate as a strong password.",
        fa: "مقداری که باید به‌عنوان رمز عبور قوی اعتبارسنجی شود.",
      },
    },
  ],
  returns: {
    type: "boolean",
    description: {
      en: "Returns true when the value satisfies all password requirements; otherwise returns false.",
      fa: "اگر مقدار تمام شرایط رمز عبور را داشته باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Valid password",
        fa: "رمز عبور معتبر",
      },
      description: {
        en: "A password with at least eight characters, uppercase and lowercase letters, a number, and a special character.",
        fa: "رمز عبوری با حداقل هشت کاراکتر، حروف بزرگ و کوچک، عدد و یک کاراکتر خاص.",
      },
      language: "ts",
      code: `isStrongPassword("Hello123!");
// true`,
    },
    {
      title: {
        en: "Too short",
        fa: "طول کمتر از حد مجاز",
      },
      description: {
        en: "Passwords shorter than eight characters are rejected.",
        fa: "رمزهای عبور کوتاه‌تر از هشت کاراکتر رد می‌شوند.",
      },
      language: "ts",
      code: `isStrongPassword("Ab1!");
// false`,
    },
    {
      title: {
        en: "Missing character requirements",
        fa: "نبودن کاراکترهای مورد نیاز",
      },
      description: {
        en: "A password must contain an uppercase letter, lowercase letter, number, and special character.",
        fa: "رمز عبور باید شامل حرف بزرگ، حرف کوچک، عدد و کاراکتر خاص باشد.",
      },
      language: "ts",
      code: `isStrongPassword("password123!");
// false

isStrongPassword("PASSWORD123!");
// false

isStrongPassword("Password!");
// false

isStrongPassword("Password123");
// false`,
    },
    {
      title: {
        en: "Whitespace",
        fa: "فاصله",
      },
      description: {
        en: "Passwords containing whitespace are rejected.",
        fa: "رمزهای عبوری که شامل whitespace باشند رد می‌شوند.",
      },
      language: "ts",
      code: `isStrongPassword("Hello 123!");
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
      code: `isStrongPassword(12345678);
// false

isStrongPassword(null);
// false`,
    },
  ],
  sections: [
    {
      id: "requirements",
      title: {
        en: "Password requirements",
        fa: "شرایط رمز عبور",
      },
      content: {
        en: "The value must be a string with at least eight characters. It must not contain whitespace and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
        fa: "مقدار باید یک رشته با حداقل هشت کاراکتر باشد. نباید شامل whitespace باشد و باید حداقل یک حرف بزرگ، یک حرف کوچک، یک رقم و یک کاراکتر خاص داشته باشد.",
      },
    },
    {
      id: "whitespace",
      title: {
        en: "Whitespace",
        fa: "Whitespace",
      },
      content: {
        en: "The validator rejects any value containing whitespace characters. It does not trim the password before validation.",
        fa: "این validator هر مقداری که شامل کاراکترهای whitespace باشد رد می‌کند و قبل از اعتبارسنجی رمز عبور را trim نمی‌کند.",
      },
    },
    {
      id: "special-characters",
      title: {
        en: "Special characters",
        fa: "کاراکترهای خاص",
      },
      content: {
        en: "The password must contain at least one character matched by the utility's special-character pattern.",
        fa: "رمز عبور باید حداقل یک کاراکتر داشته باشد که با الگوی کاراکترهای خاص این تابع مطابقت داشته باشد.",
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
