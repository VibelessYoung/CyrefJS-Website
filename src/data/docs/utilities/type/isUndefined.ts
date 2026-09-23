import type { DocPage } from "../../types";

export const isUndefinedDoc: DocPage = {
  slug: "utilities/type/is-undefined",
  category: "type",
  title: {
    en: "isUndefined",
    fa: "isUndefined",
  },
  description: {
    en: "Checks whether a value is exactly undefined.",
    fa: "بررسی می‌کند که آیا یک مقدار دقیقاً undefined است یا خیر.",
  },
  icon: "CircleHelp",
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
    type: "value is undefined",
    description: {
      en: "Returns true when the value is exactly undefined; otherwise, returns false.",
      fa: "اگر مقدار دقیقاً undefined باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are undefined.",
        fa: "بررسی اینکه مقادیر مختلف undefined هستند یا خیر.",
      },
      language: "ts",
      code: `import { isUndefined } from "@cyref/js";

isUndefined(undefined);
// true

isUndefined(null);
// false

isUndefined(0);
// false

isUndefined("");
// false

isUndefined(false);
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isUndefined acts as a TypeScript type guard and narrows the value to undefined when it returns true.",
        fa: "isUndefined یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به undefined محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | undefined = undefined;

if (isUndefined(value)) {
  // value is undefined
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
        en: "The function uses strict equality (===) to check whether the provided value is exactly undefined.",
        fa: "این تابع از مقایسه سخت‌گیرانه (===) استفاده می‌کند تا بررسی کند مقدار ارائه‌شده دقیقاً undefined است.",
      },
    },
    {
      id: "null",
      title: {
        en: "Undefined vs Null",
        fa: "تفاوت Undefined و Null",
      },
      content: {
        en: "Only undefined returns true. The value null is not considered undefined.",
        fa: "فقط مقدار undefined باعث بازگشت true می‌شود. مقدار null به‌عنوان undefined در نظر گرفته نمی‌شود.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is undefined, allowing TypeScript to narrow the value to undefined inside a conditional branch.",
        fa: "نوع خروجی value is undefined است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به undefined محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
