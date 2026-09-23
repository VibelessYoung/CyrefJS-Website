import type { DocPage } from "../../types";

export const isNullDoc: DocPage = {
  slug: "utilities/type/is-null",
  category: "type",
  title: {
    en: "isNull",
    fa: "isNull",
  },
  description: {
    en: "Checks whether a value is exactly null.",
    fa: "بررسی می‌کند که آیا یک مقدار دقیقاً null است یا نه.",
  },
  icon: "CircleX",
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
    type: "value is null",
    description: {
      en: "Returns true when the value is exactly null; otherwise, returns false.",
      fa: "اگر مقدار دقیقاً null باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is null.",
        fa: "بررسی اینکه یک مقدار null است یا خیر.",
      },
      language: "ts",
      code: `import { isNull } from "@cyref/js";

isNull(null);
// true

isNull(undefined);
// false

isNull(0);
// false

isNull("");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isNull acts as a TypeScript type guard and narrows the value to null when it returns true.",
        fa: "isNull یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به null محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | null = null;

if (isNull(value)) {
  // value is null
}`,
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
        en: "The function uses strict equality (===) to check whether the provided value is exactly null. Unlike a loose null check, undefined is not considered null.",
        fa: "این تابع از مقایسه سخت‌گیرانه (===) استفاده می‌کند تا بررسی کند مقدار دقیقاً null است. برخلاف بررسی‌های غیرسخت‌گیرانه، undefined به‌عنوان null در نظر گرفته نمی‌شود.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is null, allowing TypeScript to narrow the value to null inside a conditional branch.",
        fa: "نوع خروجی value is null است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به null محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
