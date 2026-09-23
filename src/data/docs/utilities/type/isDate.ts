import type { DocPage } from "../../types";

export const isDateDoc: DocPage = {
  slug: "utilities/type/is-date",
  category: "type",
  title: {
    en: "isDate",
    fa: "isDate",
  },
  description: {
    en: "Checks whether a value is an instance of Date and provides a TypeScript type guard for Date narrowing.",
    fa: "بررسی می‌کند که آیا یک مقدار نمونه‌ای از Date است و به‌عنوان type guard در TypeScript امکان محدود کردن نوع به Date را فراهم می‌کند.",
  },
  icon: "Calendar",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to check.",
        fa: "مقداری که باید بررسی شود.",
      },
    },
  ],
  returns: {
    type: "value is Date",
    description: {
      en: "Returns true when the value is an instance of Date; otherwise returns false. When true, TypeScript narrows the value to Date.",
      fa: "اگر مقدار نمونه‌ای از Date باشد true و در غیر این صورت false برمی‌گرداند. در صورت true بودن، TypeScript نوع مقدار را به Date محدود می‌کند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is a Date instance.",
        fa: "بررسی اینکه آیا یک مقدار نمونه‌ای از Date است یا خیر.",
      },
      language: "ts",
      code: `isDate(new Date());
// true

isDate("2026-09-24");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "The type guard narrows an unknown value to Date inside the conditional block.",
        fa: "این type guard مقدار unknown را داخل بلوک شرط به Date محدود می‌کند.",
      },
      language: "ts",
      code: `const value: unknown = new Date();

if (isDate(value)) {
  value.getTime();
  // value is narrowed to Date
}`,
    },
    {
      title: {
        en: "Invalid Date",
        fa: "Invalid Date",
      },
      description: {
        en: "An invalid Date object is still an instance of Date, so it returns true.",
        fa: "یک آبجکت Date نامعتبر همچنان نمونه‌ای از Date است، بنابراین true برمی‌گرداند.",
      },
      language: "ts",
      code: `const value = new Date("invalid");

isDate(value);
// true`,
    },
    {
      title: {
        en: "Other values",
        fa: "مقادیر دیگر",
      },
      description: {
        en: "Strings, numbers, null, undefined, and plain objects are not Date instances.",
        fa: "رشته‌ها، اعداد، null، undefined و آبجکت‌های معمولی نمونه‌ای از Date نیستند.",
      },
      language: "ts",
      code: `isDate("2026-09-24");
// false

isDate(0);
// false

isDate(null);
// false

isDate({});
// false`,
    },
  ],
  sections: [
    {
      id: "implementation",
      title: {
        en: "Implementation",
        fa: "نحوه پیاده‌سازی",
      },
      content: {
        en: "The function uses the JavaScript instanceof operator to check whether the value is an instance of Date.",
        fa: "این تابع با استفاده از عملگر instanceof در JavaScript بررسی می‌کند که آیا مقدار نمونه‌ای از Date است یا خیر.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type guard",
      },
      content: {
        en: "The return type `value is Date` makes the function a TypeScript type guard. When it returns true, TypeScript can treat the value as a Date within the narrowed scope.",
        fa: "نوع بازگشتی `value is Date` باعث می‌شود تابع یک TypeScript type guard باشد. زمانی که true برمی‌گرداند، TypeScript می‌تواند مقدار را در محدوده narrow شده به‌عنوان Date در نظر بگیرد.",
      },
    },
    {
      id: "invalid-date",
      title: {
        en: "Invalid Date objects",
        fa: "آبجکت‌های Invalid Date",
      },
      content: {
        en: "This function checks the object's type, not whether the Date contains a valid timestamp. Therefore, an invalid Date object still returns true.",
        fa: "این تابع نوع آبجکت را بررسی می‌کند، نه معتبر بودن timestamp داخل Date را. بنابراین یک Invalid Date همچنان true برمی‌گرداند.",
      },
    },
  ],
  since: "1.38.0",
};
