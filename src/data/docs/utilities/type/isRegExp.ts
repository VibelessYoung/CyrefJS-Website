import type { DocPage } from "../../types";

export const isRegExpDoc: DocPage = {
  slug: "utilities/type/is-reg-exp",
  category: "type",
  title: {
    en: "isRegExp",
    fa: "isRegExp",
  },
  description: {
    en: "Checks whether a value is an instance of RegExp.",
    fa: "بررسی می‌کند که آیا یک مقدار نمونه‌ای از RegExp است یا خیر.",
  },
  icon: "Regex",
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
    type: "value is RegExp",
    description: {
      en: "Returns true when the value is an instance of RegExp; otherwise, returns false.",
      fa: "اگر مقدار نمونه‌ای از RegExp باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are regular expressions.",
        fa: "بررسی اینکه مقادیر مختلف نمونه‌ای از RegExp هستند یا خیر.",
      },
      language: "ts",
      code: `import { isRegExp } from "@cyref/js";

isRegExp(/hello/);
// true

isRegExp(new RegExp("hello"));
// true

isRegExp("hello");
// false

isRegExp({});
// false

isRegExp(null);
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isRegExp acts as a TypeScript type guard and narrows the value to RegExp when it returns true.",
        fa: "isRegExp یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به RegExp محدود می‌کند.",
      },
      language: "ts",
      code: `const value: unknown = /hello/i;

if (isRegExp(value)) {
  console.log(value.source);
  console.log(value.flags);
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
        en: "The function uses the instanceof operator to determine whether the value is a RegExp instance.",
        fa: "این تابع از عملگر instanceof استفاده می‌کند تا مشخص کند آیا مقدار یک نمونه از RegExp است یا خیر.",
      },
    },
    {
      id: "regexp",
      title: {
        en: "RegExp Instances",
        fa: "نمونه‌های RegExp",
      },
      content: {
        en: "Both regular expression literals and RegExp constructor instances are recognized as RegExp values.",
        fa: "هم Regular Expressionهای ساخته‌شده با syntax کوتاه و هم نمونه‌های ساخته‌شده با سازنده RegExp به‌عنوان RegExp شناسایی می‌شوند.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is RegExp, allowing TypeScript to narrow the value to RegExp inside a conditional branch.",
        fa: "نوع خروجی value is RegExp است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به RegExp محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
